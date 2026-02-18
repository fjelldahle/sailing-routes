/* =========================================================
   SAILING ROUTES — Main Application
   ========================================================= */

(function () {
  'use strict';

  // ---- State ----
  let userName = '';
  let activeRouteId = null;
  let currentView = 'explorer'; // 'explorer' | 'detail' | 'voting'
  let map = null;
  let detailMap = null;
  let routeLayers = {};
  let activePolylines = [];
  let activeMarkers = [];
  let userVote = null;
  let allVotes = [];

  // ---- DOM Refs ----
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const entryScreen = $('#entry-screen');
  const app = $('#app');
  const nameInput = $('#name-input');
  const enterBtn = $('#enter-btn');
  const headerUser = $('#header-user');
  const headerRouteName = $('#header-route-name');
  const headerBack = $('#header-back');
  const routeCardsContainer = $('#route-cards');
  const mapLegend = $('#map-legend');
  const routeDetail = $('#route-detail');
  const votingSection = $('#voting-section');
  const voteTabBtn = $('#vote-tab-btn');
  const explorer = $('#explorer');


  /* =========================================================
     ENTRY SCREEN
     ========================================================= */

  nameInput.addEventListener('input', () => {
    enterBtn.disabled = nameInput.value.trim().length === 0;
  });

  nameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && nameInput.value.trim()) enterApp();
  });

  enterBtn.addEventListener('click', enterApp);

  function enterApp() {
    userName = nameInput.value.trim();
    if (!userName) return;

    entryScreen.style.opacity = '0';
    entryScreen.style.transform = 'translateY(-20px)';
    entryScreen.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

    setTimeout(() => {
      entryScreen.classList.add('hidden');
      app.classList.remove('hidden');
      app.style.opacity = '0';
      requestAnimationFrame(() => {
        app.style.transition = 'opacity 0.5s ease';
        app.style.opacity = '1';
      });
      headerUser.textContent = userName;
      initApp();
    }, 400);
  }


  /* =========================================================
     APP INIT
     ========================================================= */

  function initApp() {
    initMap();
    renderRouteCards();
    renderMapLegend();
    renderAllRoutesOnMap();
    loadVotes();
    setupHeaderScroll();

    // Select first route
    selectRoute(1);
  }


  /* =========================================================
     MAP (Leaflet)
     ========================================================= */

  function initMap() {
    map = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: true,
      attributionControl: true
    }).setView([37.5, 25.0], 7);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Move zoom control to bottom right
    map.zoomControl.setPosition('topright');
  }

  function renderAllRoutesOnMap() {
    ROUTES.forEach((route) => {
      const uniqueStops = getUniqueStops(route);
      const polyline = L.polyline(
        uniqueStops.map(s => [s.lat, s.lng]),
        {
          color: route.color,
          weight: 2.5,
          opacity: 0.25,
          smoothFactor: 1.5,
          dashArray: '6 4'
        }
      ).addTo(map);

      routeLayers[route.id] = { polyline };
    });
  }

  function highlightRouteOnMap(routeId) {
    // Reset all route polylines
    Object.keys(routeLayers).forEach(id => {
      const layer = routeLayers[id];
      if (layer.polyline) {
        layer.polyline.setStyle({
          weight: 2.5,
          opacity: id == routeId ? 0 : 0.15,
          dashArray: '6 4'
        });
      }
    });

    // Remove old active elements
    activePolylines.forEach(p => map.removeLayer(p));
    activeMarkers.forEach(m => map.removeLayer(m));
    activePolylines = [];
    activeMarkers = [];

    const route = ROUTES.find(r => r.id === routeId);
    if (!route) return;

    const uniqueStops = getUniqueStops(route);

    // Highlighted polyline
    const activeLine = L.polyline(
      uniqueStops.map(s => [s.lat, s.lng]),
      {
        color: route.color,
        weight: 3.5,
        opacity: 0.85,
        smoothFactor: 1.5
      }
    ).addTo(map);
    activePolylines.push(activeLine);

    // Stop markers
    let dayCounter = 1;
    route.itinerary.forEach((stop, idx) => {
      const coords = route.stops[idx];
      if (!coords) return;

      const isRest = stop.nm === 0 && stop.hours === 0;

      // Skip duplicate rest-day markers at same position
      if (isRest && idx > 0) {
        const prevCoords = route.stops[idx - 1];
        if (prevCoords && prevCoords.lat === coords.lat && prevCoords.lng === coords.lng) {
          return;
        }
      }

      const dayLabel = String(stop.day);
      const icon = L.divIcon({
        className: 'stop-marker-wrapper',
        html: isRest
          ? `<div class="stop-marker-rest" style="background:${route.color}"></div>`
          : `<div class="stop-marker" style="background:${route.color}">${dayLabel}</div>`,
        iconSize: isRest ? [14, 14] : [28, 28],
        iconAnchor: isRest ? [7, 7] : [14, 14]
      });

      const marker = L.marker([coords.lat, coords.lng], { icon }).addTo(map);

      const placeName = isRest ? stop.from : stop.to;
      const popupHtml = `
        <div class="popup-content">
          <div class="popup-day" style="color:${route.color}">Day ${dayLabel}</div>
          <div class="popup-place">${placeName}</div>
          <div class="popup-info">${stop.nm > 0 ? stop.nm + 'nm · ~' + stop.hours + 'h sailing' : 'Rest day'}</div>
          <div class="popup-info" style="margin-top:4px">${stop.highlight}</div>
        </div>
      `;
      marker.bindPopup(popupHtml, { maxWidth: 260, closeButton: false });
      activeMarkers.push(marker);
    });

    // Fit bounds
    const bounds = L.latLngBounds(uniqueStops.map(s => [s.lat, s.lng]));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10, animate: true, duration: 0.6 });
  }

  function getUniqueStops(route) {
    const seen = new Set();
    const unique = [];
    route.stops.forEach(s => {
      const key = `${s.lat},${s.lng}`;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(s);
      }
    });
    return unique;
  }


  /* =========================================================
     ROUTE CARDS
     ========================================================= */

  function renderRouteCards() {
    routeCardsContainer.innerHTML = '';
    routeCardsContainer.classList.add('stagger');

    ROUTES.forEach((route) => {
      const card = document.createElement('div');
      card.className = 'route-card';
      card.style.setProperty('--card-accent', route.color);
      card.dataset.routeId = route.id;

      const diffClass = getDifficultyClass(route.difficulty);

      const oneWayBadge = route.oneWay
        ? `<span class="route-card-stat" style="color:${route.color};font-weight:500">
            <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            One-way
          </span>`
        : '';

      card.innerHTML = `
        <div class="route-card-header">
          <div class="route-card-name">${route.name}</div>
          <div class="route-card-number">${route.id}</div>
        </div>
        <div class="route-card-tagline">${route.tagline}</div>
        <div class="route-card-stats">
          <span class="route-card-stat">
            <svg viewBox="0 0 16 16" fill="none"><path d="M8 2C5.5 2 2 5 2 9s3.5 5 6 5 6-1.5 6-5S10.5 2 8 2z" stroke="currentColor" stroke-width="1.2"/><path d="M8 2v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
            ~${route.totalNm}nm
          </span>
          <span class="route-card-stat">
            <svg viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M2 6.5h12" stroke="currentColor" stroke-width="1.2"/><path d="M5.5 1v3M10.5 1v3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
            ${route.days} days
          </span>
          ${oneWayBadge}
          <span class="difficulty-badge ${diffClass}">${route.difficulty}</span>
        </div>
        <div class="route-card-highlight">${route.highlight}</div>
        <div class="route-card-actions">
          <button class="btn-explore" data-route-id="${route.id}">Explore itinerary</button>
        </div>
      `;

      // Click card => select route on map
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-explore')) {
          openDetail(route.id);
          return;
        }
        selectRoute(route.id);
      });

      routeCardsContainer.appendChild(card);
    });
  }

  function selectRoute(id) {
    activeRouteId = id;
    const route = ROUTES.find(r => r.id === id);

    // Update card states
    $$('.route-card').forEach(c => {
      c.classList.toggle('active', Number(c.dataset.routeId) === id);
    });

    // Update header
    headerRouteName.textContent = route ? route.name : '';

    // Update map
    highlightRouteOnMap(id);
  }

  function getDifficultyClass(diff) {
    const d = diff.toLowerCase();
    if (d.includes('very challenging')) return 'challenging';
    if (d.includes('challenging') && !d.includes('moderate')) return 'challenging';
    if (d.includes('moderate')) return 'moderate';
    return 'easy';
  }


  /* =========================================================
     MAP LEGEND
     ========================================================= */

  function renderMapLegend() {
    mapLegend.innerHTML = '';
    ROUTES.forEach(route => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.innerHTML = `
        <div class="legend-dot" style="background:${route.color}"></div>
        <span class="legend-label">${route.name}</span>
      `;
      item.addEventListener('click', () => selectRoute(route.id));
      mapLegend.appendChild(item);
    });
  }


  /* =========================================================
     ROUTE DETAIL VIEW
     ========================================================= */

  function openDetail(routeId) {
    const route = ROUTES.find(r => r.id === routeId);
    if (!route) return;

    activeRouteId = routeId;
    currentView = 'detail';

    // Populate hero
    $('#detail-badge').textContent = route.oneWay ? 'One-Way' : 'Round Trip';
    $('#detail-badge').style.background = route.color;
    $('#detail-title').textContent = route.name;
    $('#detail-tagline').textContent = route.tagline;

    // Stats
    $('#detail-stats').innerHTML = `
      <div class="detail-stat">
        <div class="detail-stat-value">~${route.totalNm}</div>
        <div class="detail-stat-label">Nautical Miles</div>
      </div>
      <div class="detail-stat">
        <div class="detail-stat-value">${route.days}</div>
        <div class="detail-stat-label">Days</div>
      </div>
      <div class="detail-stat">
        <div class="detail-stat-value">${route.startPort}</div>
        <div class="detail-stat-label">Start</div>
      </div>
      <div class="detail-stat">
        <div class="detail-stat-value">${route.endPort}</div>
        <div class="detail-stat-label">End</div>
      </div>
    `;

    // Description
    $('#detail-description').textContent = route.description;

    // Weather
    $('#detail-weather').innerHTML = `
      <div class="weather-card">
        <div class="weather-card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="${route.color}" stroke-width="1.5"/><path d="M12 2v2M12 20v2M22 12h-2M4 12H2M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M19.07 19.07l-1.41-1.41M6.34 6.34L4.93 4.93" stroke="${route.color}" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <div class="weather-card-value">${WEATHER.air.min}-${WEATHER.air.max}${WEATHER.air.unit}</div>
        <div class="weather-card-label">Air (day)</div>
      </div>
      <div class="weather-card">
        <div class="weather-card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="${route.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="weather-card-value">${WEATHER.airNight.min}-${WEATHER.airNight.max}${WEATHER.airNight.unit}</div>
        <div class="weather-card-label">Air (night)</div>
      </div>
      <div class="weather-card">
        <div class="weather-card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 12h2M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="${route.color}" stroke-width="1.5" stroke-linecap="round"/><path d="M2 16h20M4 20h16" stroke="${route.color}" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/></svg>
        </div>
        <div class="weather-card-value">${WEATHER.sea.min}-${WEATHER.sea.max}${WEATHER.sea.unit}</div>
        <div class="weather-card-label">Sea temp</div>
      </div>
      <div class="weather-card">
        <div class="weather-card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9.59 4.59A2 2 0 1111 8H2M12.59 19.41A2 2 0 1014 16H2M17.73 7.73A2.5 2.5 0 1119.5 12H2" stroke="${route.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="weather-card-value">${WEATHER.wind.min}-${WEATHER.wind.max}kn</div>
        <div class="weather-card-label">Wind (${WEATHER.windDirection})</div>
      </div>
    `;

    $('#detail-weather-note').textContent = route.weatherNote;

    // Difficulty
    const pct = (route.difficultyLevel / 5) * 100;
    const diffColor = route.difficultyLevel <= 2 ? '#059669' : route.difficultyLevel <= 3 ? '#d97706' : '#dc2626';
    $('#detail-difficulty').innerHTML = `
      <div class="difficulty-bar">
        <div class="difficulty-fill" style="width:${pct}%;background:${diffColor}"></div>
      </div>
      <span class="difficulty-label" style="color:${diffColor}">${route.difficulty}</span>
    `;

    // Itinerary table
    const tbody = $('#detail-itinerary-body');
    tbody.innerHTML = '';
    route.itinerary.forEach(stop => {
      const isRest = stop.nm === 0 && stop.hours === 0;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span class="itinerary-day">Day ${stop.day}</span></td>
        <td class="itinerary-from">${stop.from}</td>
        <td class="itinerary-to">${isRest ? '<span class="itinerary-rest">Rest day</span>' : stop.to}</td>
        <td>${isRest ? '—' : stop.nm + 'nm'}</td>
        <td>${isRest ? '—' : '~' + stop.hours + 'h'}</td>
        <td><span class="itinerary-highlight">${stop.highlight}</span></td>
      `;
      tbody.appendChild(tr);
    });

    // Vote button
    const voteBtn = $('#detail-vote-btn');
    voteBtn.onclick = () => castVote(route.id);
    voteBtn.style.background = route.color;
    voteBtn.classList.add('btn-accent');
    if (userVote) {
      voteBtn.textContent = userVote === route.id ? 'You voted for this!' : 'You already voted';
      voteBtn.disabled = true;
      voteBtn.style.opacity = userVote === route.id ? '1' : '0.5';
    } else {
      voteBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1l2.47 5.01L17 6.76l-4 3.9.94 5.5L9 13.77l-4.94 2.39.94-5.5-4-3.9 5.53-.75L9 1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
        Vote for this route
      `;
      voteBtn.disabled = false;
      voteBtn.style.opacity = '1';
    }

    // Show detail
    routeDetail.classList.remove('hidden');
    explorer.classList.add('hidden');
    votingSection.classList.add('hidden');
    headerBack.classList.remove('hidden');

    // Scroll to top
    const detailScroll = routeDetail.querySelector('.detail-scroll');
    if (detailScroll) detailScroll.scrollTop = 0;

    // Detail map
    setTimeout(() => {
      initDetailMap(route);
    }, 100);
  }

  function initDetailMap(route) {
    if (detailMap) {
      detailMap.remove();
      detailMap = null;
    }

    detailMap = L.map('detail-map', {
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(detailMap);

    const uniqueStops = getUniqueStops(route);

    // Route line
    L.polyline(
      uniqueStops.map(s => [s.lat, s.lng]),
      { color: route.color, weight: 3, opacity: 0.8, smoothFactor: 1.5 }
    ).addTo(detailMap);

    // Markers
    route.itinerary.forEach((stop, idx) => {
      const coords = route.stops[idx];
      if (!coords) return;

      const isRest = stop.nm === 0 && stop.hours === 0;
      if (isRest && idx > 0) {
        const prev = route.stops[idx - 1];
        if (prev && prev.lat === coords.lat && prev.lng === coords.lng) return;
      }

      const icon = L.divIcon({
        className: 'stop-marker-wrapper',
        html: isRest
          ? `<div class="stop-marker-rest" style="background:${route.color}"></div>`
          : `<div class="stop-marker" style="background:${route.color}">${stop.day}</div>`,
        iconSize: isRest ? [14, 14] : [28, 28],
        iconAnchor: isRest ? [7, 7] : [14, 14]
      });

      L.marker([coords.lat, coords.lng], { icon }).addTo(detailMap);
    });

    // Fit bounds
    const bounds = L.latLngBounds(uniqueStops.map(s => [s.lat, s.lng]));
    detailMap.fitBounds(bounds, { padding: [40, 40], maxZoom: 10 });
  }

  function closeDetail() {
    currentView = 'explorer';
    routeDetail.classList.add('hidden');
    votingSection.classList.add('hidden');
    explorer.classList.remove('hidden');
    headerBack.classList.add('hidden');
    headerRouteName.textContent = activeRouteId ? ROUTES.find(r => r.id === activeRouteId)?.name || '' : '';

    // Refresh main map
    setTimeout(() => {
      if (map) map.invalidateSize();
      if (activeRouteId) highlightRouteOnMap(activeRouteId);
    }, 100);
  }


  /* =========================================================
     VOTING
     ========================================================= */

  function openVoting() {
    currentView = 'voting';
    votingSection.classList.remove('hidden');
    routeDetail.classList.add('hidden');
    explorer.classList.add('hidden');
    headerBack.classList.remove('hidden');
    headerRouteName.textContent = 'Vote';

    renderVotingGrid();
    renderVotingResults();
  }

  function renderVotingGrid() {
    const grid = $('#voting-grid');
    grid.innerHTML = '';

    ROUTES.forEach(route => {
      const card = document.createElement('div');
      card.className = 'vote-card';
      card.style.setProperty('--card-accent', route.color);

      if (userVote === route.id) card.classList.add('voted');
      else if (userVote) card.classList.add('disabled');

      card.innerHTML = `
        <div class="vote-card-name">${route.name}</div>
        <div class="vote-card-tagline">${route.tagline}</div>
        <div class="vote-card-stat">~${route.totalNm}nm · ${route.days} days · ${route.difficulty}</div>
      `;

      if (!userVote) {
        card.addEventListener('click', () => castVote(route.id));
      }

      grid.appendChild(card);
    });
  }

  function renderVotingResults() {
    const resultsContainer = $('#voting-results');
    const votersContainer = $('#voting-voters');
    const resultsArea = $('#voting-results-area');

    if (allVotes.length === 0) {
      resultsArea.style.display = 'none';
      return;
    }

    resultsArea.style.display = 'block';

    // Count votes
    const counts = {};
    ROUTES.forEach(r => counts[r.id] = 0);
    allVotes.forEach(v => {
      if (counts[v.routeId] !== undefined) counts[v.routeId]++;
    });

    const maxCount = Math.max(...Object.values(counts), 1);

    // Sort routes by vote count
    const sorted = ROUTES.slice().sort((a, b) => counts[b.id] - counts[a.id]);

    resultsContainer.innerHTML = '';
    sorted.forEach((route, i) => {
      const count = counts[route.id];
      const pct = (count / maxCount) * 100;

      const row = document.createElement('div');
      row.className = 'result-row';
      row.style.animationDelay = `${i * 0.06}s`;

      row.innerHTML = `
        <span class="result-name">${route.name}</span>
        <div class="result-bar-wrap">
          <div class="result-bar" style="width:${pct}%;background:${route.color}"></div>
        </div>
        <span class="result-count">${count}</span>
      `;
      resultsContainer.appendChild(row);
    });

    // Voters
    votersContainer.innerHTML = '';
    if (allVotes.length > 0) {
      const title = document.createElement('div');
      title.className = 'voters-title';
      title.textContent = 'Who voted';
      votersContainer.appendChild(title);

      const list = document.createElement('div');
      list.className = 'voters-list';

      allVotes.forEach(vote => {
        const route = ROUTES.find(r => r.id === vote.routeId);
        const chip = document.createElement('span');
        chip.className = 'voter-chip';
        chip.innerHTML = `
          <span class="voter-dot" style="background:${route ? route.color : '#ccc'}"></span>
          <span class="voter-name">${vote.name}</span>
        `;
        list.appendChild(chip);
      });

      votersContainer.appendChild(list);
    }
  }

  async function castVote(routeId) {
    if (userVote) return;

    userVote = routeId;

    // Optimistic update
    allVotes.push({ name: userName, routeId: routeId });

    // Update UI
    if (currentView === 'voting') {
      renderVotingGrid();
      renderVotingResults();
    }

    if (currentView === 'detail') {
      const voteBtn = $('#detail-vote-btn');
      const route = ROUTES.find(r => r.id === routeId);
      voteBtn.textContent = 'Vote recorded!';
      voteBtn.disabled = true;
    }

    // Send to API
    try {
      const res = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName, routeId: routeId })
      });

      if (res.ok) {
        await loadVotes();
      }
    } catch (e) {
      console.log('Vote saved locally (API unavailable)');
    }
  }

  async function loadVotes() {
    try {
      const res = await fetch('/api/results');
      if (res.ok) {
        const data = await res.json();
        allVotes = data.votes || [];

        // Check if current user already voted
        const existing = allVotes.find(v => v.name.toLowerCase() === userName.toLowerCase());
        if (existing) {
          userVote = existing.routeId;
        }
      }
    } catch (e) {
      console.log('Could not load votes from API — using local state');
    }

    if (currentView === 'voting') {
      renderVotingGrid();
      renderVotingResults();
    }
  }


  /* =========================================================
     HEADER
     ========================================================= */

  function setupHeaderScroll() {
    const header = $('#site-header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  headerBack.addEventListener('click', () => {
    if (currentView === 'detail' || currentView === 'voting') {
      closeDetail();
    }
  });

  voteTabBtn.addEventListener('click', () => {
    if (currentView === 'voting') {
      closeDetail();
    } else {
      openVoting();
    }
  });


  /* =========================================================
     KEYBOARD SHORTCUTS
     ========================================================= */

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (currentView === 'detail' || currentView === 'voting') {
        closeDetail();
      }
    }
  });

})();
