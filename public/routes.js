// Sailing Routes Data — Athens April 18 – May 2, 2026
// Stop images — curated photo URLs for each destination
const STOP_IMAGES = {
  "Piraeus": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=500&fit=crop&auto=format",
  "Aegina": "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&h=500&fit=crop&auto=format",
  "Poros": "https://images.unsplash.com/photo-1608299809960-aa0c36bfb151?w=800&h=500&fit=crop&auto=format",
  "Hydra": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&h=500&fit=crop&auto=format",
  "Spetses": "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&h=500&fit=crop&auto=format",
  "Porto Heli": "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&h=500&fit=crop&auto=format",
  "Monemvasia": "https://images.unsplash.com/photo-1581184953963-d15972933db1?w=800&h=500&fit=crop&auto=format",
  "Elafonisos": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Kythira": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=500&fit=crop&auto=format",
  "Kea": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&auto=format",
  "Kythnos": "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=500&fit=crop&auto=format",
  "Serifos": "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&h=500&fit=crop&auto=format",
  "Sifnos": "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&h=500&fit=crop&auto=format",
  "Milos": "https://images.unsplash.com/photo-1601921004897-b7d582836c48?w=800&h=500&fit=crop&auto=format",
  "Santorini": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=500&fit=crop&auto=format",
  "Ios": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&auto=format",
  "Naxos": "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=500&fit=crop&auto=format",
  "Paros": "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&h=500&fit=crop&auto=format",
  "Mykonos": "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=500&fit=crop&auto=format",
  "Syros": "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&h=500&fit=crop&auto=format",
  "Koufonisia": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Schinoussa": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Iraklia": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Donoussa": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Amorgos": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=500&fit=crop&auto=format",
  "Lavrion": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=500&fit=crop&auto=format",
  "Andros": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&auto=format",
  "Tinos": "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&h=500&fit=crop&auto=format",
  "Delos": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=500&fit=crop&auto=format",
  "Rinia": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Cape Sounion": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=500&fit=crop&auto=format",
  "Patmos": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=500&fit=crop&auto=format",
  "Lipsi": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Leros": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&auto=format",
  "Kalymnos": "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&h=500&fit=crop&auto=format",
  "Kos": "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&h=500&fit=crop&auto=format",
  "Nisyros": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&auto=format",
  "Tilos": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Symi": "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&h=500&fit=crop&auto=format",
  "Rhodes": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=500&fit=crop&auto=format",
  "South Evia": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&auto=format",
  "Skyros": "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&h=500&fit=crop&auto=format",
  "Alonissos": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Marine Park": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Skopelos": "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&h=500&fit=crop&auto=format",
  "Skiathos": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Trikeri": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&auto=format",
  "North Evia": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&auto=format",
  "Kymi": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&auto=format",
  "Heraklion": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=500&fit=crop&auto=format",
  "Rethymno": "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&h=500&fit=crop&auto=format",
  "Chania": "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&h=500&fit=crop&auto=format",
  "Angistri": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Ermioni": "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&h=500&fit=crop&auto=format",
  "Navplion": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=500&fit=crop&auto=format",
  "Leonidio": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&auto=format",
  "Kyparissi": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
  "Dokos": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
};

// Stop metadata — descriptions and coordinates for the destinations view
const STOPS_DATA = {
  "Piraeus": { lat: 37.9364, lng: 23.6466, region: "Attica", desc: "Greece's main port — gateway to the islands, vibrant waterfront, excellent seafood." },
  "Aegina": { lat: 37.7467, lng: 23.4289, region: "Saronic", desc: "Temple of Aphaia, world-famous pistachios, charming harbor town just 40 minutes from Athens." },
  "Poros": { lat: 37.5014, lng: 23.4514, region: "Saronic", desc: "Pine-covered island with an iconic clock tower and a 200-meter strait separating it from the Peloponnese." },
  "Hydra": { lat: 37.3475, lng: 23.4617, region: "Saronic", desc: "No cars, no bikes — only donkeys and water taxis. A living museum beloved by artists and architects." },
  "Spetses": { lat: 37.2628, lng: 23.1533, region: "Saronic", desc: "Elegant Venetian mansions, horse-drawn carriages, and the Bouboulina naval heroine museum." },
  "Porto Heli": { lat: 37.3200, lng: 23.1500, region: "Argolic", desc: "Sheltered bay with luxury resorts, perfect provisioning stop before heading south." },
  "Monemvasia": { lat: 36.6883, lng: 23.0367, region: "Peloponnese", desc: "Medieval fortress town hidden behind a massive rock — the 'Gibraltar of the East.' Spectacular from sea." },
  "Elafonisos": { lat: 36.4833, lng: 22.9667, region: "Peloponnese", desc: "Simos Beach is often called the Caribbean of Greece — turquoise water, pink-white sand." },
  "Kythira": { lat: 36.2250, lng: 22.9833, region: "Peloponnese", desc: "Remote island between the Peloponnese and Crete. Mythical birthplace of Aphrodite, waterfall of Fonissa." },
  "Kea": { lat: 37.6308, lng: 24.3200, region: "Western Cyclades", desc: "Closest Cycladic island to Athens. The ancient Lion of Kea, hiking trails, and a quiet local atmosphere." },
  "Kythnos": { lat: 37.3833, lng: 24.4167, region: "Western Cyclades", desc: "Natural hot springs at Loutra, empty beaches, and traditional village life untouched by mass tourism." },
  "Serifos": { lat: 37.1500, lng: 24.5000, region: "Western Cyclades", desc: "Dramatic hilltop Chora with white cube houses tumbling down the cliff. Wild, rugged, beautiful." },
  "Sifnos": { lat: 36.9667, lng: 24.7167, region: "Western Cyclades", desc: "The food capital of the Cyclades — cooking classes, pottery workshops, and 365 churches." },
  "Milos": { lat: 36.7167, lng: 24.4333, region: "Western Cyclades", desc: "Sarakiniko moonscape beach, Kleftiko sea caves, ancient catacombs. Where the Venus de Milo was found." },
  "Santorini": { lat: 36.3933, lng: 25.4614, region: "Cyclades", desc: "The iconic caldera — Oia sunset, Akrotiri Bronze Age ruins, volcanic wine tasting. Unmissable." },
  "Ios": { lat: 36.7217, lng: 25.2800, region: "Cyclades", desc: "Mylopotas beach, Homer's tomb, and a hilltop Chora that transforms at night." },
  "Naxos": { lat: 37.1017, lng: 25.3767, region: "Cyclades", desc: "Largest Cycladic island — the ancient Portara gate, incredible food, mountain villages, and long beaches." },
  "Paros": { lat: 37.0853, lng: 25.1486, region: "Cyclades", desc: "Naoussa fishing village, Parian marble quarries, and the windsurfing mecca of Golden Beach." },
  "Mykonos": { lat: 37.4467, lng: 25.3267, region: "Cyclades", desc: "Windmills, Little Venice, Pelican Petros, and legendary nightlife. The cosmopolitan heart of the Cyclades." },
  "Syros": { lat: 37.4431, lng: 24.9411, region: "Cyclades", desc: "Ermoupoli — the neoclassical capital of the Cyclades with a grand town hall, live rebetiko music, and loukoumi." },
  "Koufonisia": { lat: 36.9333, lng: 25.6000, region: "Small Cyclades", desc: "Tiny paradise — just 400 residents, crystal-clear water, dramatic cliff walks, and Pori Beach." },
  "Schinoussa": { lat: 36.8667, lng: 25.5167, region: "Small Cyclades", desc: "200 permanent residents and total tranquility. One of the quietest islands in all of Greece." },
  "Iraklia": { lat: 36.8417, lng: 25.4417, region: "Small Cyclades", desc: "Cave of Agios Ioannis, hiking trails through unspoiled nature, and a genuine fishing village." },
  "Donoussa": { lat: 37.0833, lng: 25.8167, region: "Small Cyclades", desc: "The most remote of the Small Cyclades. Kedros Beach, zero crowds, ultimate escape." },
  "Amorgos": { lat: 36.8333, lng: 25.8833, region: "Cyclades", desc: "Hozoviotissa Monastery clinging to a 300m cliff — filming location of The Big Blue. Dramatic and spiritual." },
  "Lavrion": { lat: 37.7269, lng: 24.0542, region: "Attica", desc: "Ancient silver mining port, now a major charter base. Close to Cape Sounion's Temple of Poseidon." },
  "Andros": { lat: 37.8333, lng: 24.8167, region: "Northern Cyclades", desc: "Museums, waterfalls, and hiking trails. The greenest Cycladic island with a world-class contemporary art museum." },
  "Tinos": { lat: 37.5333, lng: 25.1667, region: "Northern Cyclades", desc: "Marble villages, artisan food, giant boulders at Volax — plus Greece's most important pilgrimage church." },
  "Delos": { lat: 37.3967, lng: 25.2683, region: "Cyclades", desc: "UNESCO World Heritage Site — sacred birthplace of Apollo and Artemis. An entire ancient city to explore." },
  "Rinia": { lat: 37.4050, lng: 25.2200, region: "Cyclades", desc: "Uninhabited island next to Delos — wild anchorages, swimming in crystal water, no buildings in sight." },
  "Cape Sounion": { lat: 37.6500, lng: 24.0300, region: "Attica", desc: "Temple of Poseidon on the cliff edge — one of the most dramatic ancient sites in Greece. Epic sunset anchorage." },
  "Patmos": { lat: 37.3167, lng: 26.5500, region: "Dodecanese", desc: "UNESCO Monastery of St. John, Cave of the Apocalypse where Revelations was written. Sacred and serene." },
  "Lipsi": { lat: 37.3000, lng: 26.7500, region: "Dodecanese", desc: "Tiny island with church wine, quiet beaches, and a deeply traditional Greek atmosphere." },
  "Leros": { lat: 37.1500, lng: 26.8500, region: "Dodecanese", desc: "Italian Art Deco architecture from the 1930s, WWII tunnels, and a striking deep bay." },
  "Kalymnos": { lat: 36.9500, lng: 26.9833, region: "Dodecanese", desc: "Sponge diving capital of the Mediterranean and one of the world's top rock climbing destinations." },
  "Kos": { lat: 36.8933, lng: 26.9817, region: "Dodecanese", desc: "Birthplace of Hippocrates — ancient Asklepion, cycling paradise, long sandy beaches, Turkish influence." },
  "Nisyros": { lat: 36.5833, lng: 27.1667, region: "Dodecanese", desc: "Walk into an active volcanic crater — the island IS the volcano. Mandraki village has a medieval castle." },
  "Tilos": { lat: 36.4500, lng: 27.1167, region: "Dodecanese", desc: "Europe's first green energy island. Rare birds, dwarf elephant fossils, and almost no tourists." },
  "Symi": { lat: 36.6167, lng: 27.8333, region: "Dodecanese", desc: "The most photogenic harbor in Greece — neoclassical houses in ochre, pink, and terracotta climbing the hill." },
  "Rhodes": { lat: 36.4500, lng: 28.2267, region: "Dodecanese", desc: "Medieval Old Town (UNESCO) — cobblestone streets, Palace of the Grand Master, one of the best-preserved medieval cities." },
  "South Evia": { lat: 38.0500, lng: 24.2000, region: "Evia", desc: "Southern tip of Greece's second-largest island. Wild coastline, traditional villages, fewer tourists." },
  "Skyros": { lat: 38.9000, lng: 24.5667, region: "Sporades", desc: "Wild horses, cliff-top Chora, Rupert Brooke's grave. Unique island with its own distinct culture." },
  "Alonissos": { lat: 39.1500, lng: 23.8667, region: "Sporades", desc: "Gateway to the National Marine Park — endangered monk seals, pristine waters, pine-covered island." },
  "Marine Park": { lat: 39.2500, lng: 23.9000, region: "Sporades", desc: "The largest marine protected area in Europe — monk seals, dolphins, rare seabirds, deserted islets." },
  "Skopelos": { lat: 39.1167, lng: 23.7167, region: "Sporades", desc: "Mamma Mia filming location — the clifftop Agios Ioannis church, plum orchards, lush green hillsides." },
  "Skiathos": { lat: 39.1600, lng: 23.4900, region: "Sporades", desc: "60+ beaches including boat-only Lalaria with white pebbles and turquoise water. Pine forests meet the sea." },
  "Trikeri": { lat: 39.1667, lng: 23.0833, region: "Sporades", desc: "Traditional Pelion Peninsula village at the entrance to the Pagasetic Gulf. Time stands still here." },
  "North Evia": { lat: 38.9333, lng: 23.0833, region: "Evia", desc: "Hot springs, dense forests, traditional mountain villages on Greece's second-largest island." },
  "Kymi": { lat: 38.6000, lng: 24.1000, region: "Evia", desc: "East coast port of Evia with views across the Aegean to the Sporades. Gateway between island groups." },
  "Heraklion": { lat: 35.3387, lng: 25.1442, region: "Crete", desc: "Crete's capital — the Minoan Palace of Knossos, world-class Archaeological Museum, vibrant food scene." },
  "Rethymno": { lat: 35.3667, lng: 24.4833, region: "Crete", desc: "Venetian and Ottoman old town, imposing Fortezza fortress, and a long sandy beach backed by palm trees." },
  "Chania": { lat: 35.5167, lng: 24.0167, region: "Crete", desc: "The jewel of Crete — Venetian harbor with lighthouse, covered food market, gateway to Samaria Gorge." },
  "Angistri": { lat: 37.6833, lng: 23.3333, region: "Saronic", desc: "Tiny pine-covered island between Aegina and the Peloponnese. Crystal water, no cars, total peace." },
  "Ermioni": { lat: 37.3833, lng: 23.2500, region: "Argolic", desc: "Quiet harbor town surrounded by fragrant pine forests on the Argolic coast. A well-kept local secret." },
  "Navplion": { lat: 37.5667, lng: 22.7833, region: "Argolic", desc: "First capital of modern Greece — Palamidi fortress (999 steps), Bourtzi island castle, neoclassical old town." },
  "Leonidio": { lat: 37.1667, lng: 22.8500, region: "Peloponnese", desc: "Dramatic cliff town with red rocks, organic farms, and a cliff-hanging monastery. Major climbing destination." },
  "Kyparissi": { lat: 36.9500, lng: 22.9833, region: "Peloponnese", desc: "Hidden fishing village with no road access — three tiny hamlets accessible only by sea or mountain path." },
  "Dokos": { lat: 37.3133, lng: 23.3200, region: "Saronic", desc: "Uninhabited island between Hydra and the Peloponnese. Ancient shipwreck site, wild anchorage, total solitude." },
};

const ROUTES = [
  {
    id: 1,
    name: "Saronic Gulf & Peloponnese",
    tagline: "The sheltered classic",
    color: "#34d399",
    colorName: "emerald",
    totalNm: 280,
    difficulty: "Easy-Moderate",
    difficultyLevel: 2,
    days: 14,
    startPort: "Piraeus",
    endPort: "Piraeus",
    oneWay: false,
    highlight: "Calm waters, medieval Monemvasia, car-free Hydra",
    description: "The gentlest introduction to Greek sailing. The Saronic Gulf offers sheltered waters and short hops between islands dripping with history — from car-free Hydra to the medieval fortress of Monemvasia. Push south to find pink-sand Elafonisos and remote Kythira before looping back through the islands.",
    weatherNote: "The Saronic Gulf is the calmest sailing area in Greece. Late April brings light winds (8-12 knots), warm days, and very manageable seas. Perfect for less experienced crews.",
    stops: [
      { lat: 37.9364, lng: 23.6466 }, // Piraeus
      { lat: 37.7467, lng: 23.4289 }, // Aegina
      { lat: 37.5014, lng: 23.4514 }, // Poros
      { lat: 37.3475, lng: 23.4617 }, // Hydra
      { lat: 37.3475, lng: 23.4617 }, // Hydra (rest)
      { lat: 37.2628, lng: 23.1533 }, // Spetses
      { lat: 37.3200, lng: 23.1500 }, // Porto Heli
      { lat: 36.6883, lng: 23.0367 }, // Monemvasia
      { lat: 36.6883, lng: 23.0367 }, // Monemvasia (rest)
      { lat: 36.4833, lng: 22.9667 }, // Elafonisos
      { lat: 36.2250, lng: 22.9833 }, // Kythira
      { lat: 36.6883, lng: 23.0367 }, // Monemvasia
      { lat: 37.2628, lng: 23.1533 }, // Spetses
      { lat: 37.5014, lng: 23.4514 }, // Hydra → Poros
      { lat: 37.9364, lng: 23.6466 }  // Piraeus
    ],
    itinerary: [
      { day: 1, from: "Piraeus", to: "Aegina", nm: 17, hours: 3.5, highlight: "Temple of Aphaia, pistachio capital of Greece" },
      { day: 2, from: "Aegina", to: "Poros", nm: 22, hours: 4.5, highlight: "Pine-covered island, iconic clock tower" },
      { day: 3, from: "Poros", to: "Hydra", nm: 12, hours: 2.5, highlight: "No cars allowed — donkey transport, artists' haven" },
      { day: 4, from: "Hydra", to: "Hydra", nm: 0, hours: 0, highlight: "Rest day: galleries, swim at Vlychos beach" },
      { day: 5, from: "Hydra", to: "Spetses", nm: 11, hours: 2, highlight: "Elegant mansions, Bouboulina museum" },
      { day: 6, from: "Spetses", to: "Porto Heli", nm: 8, hours: 1.5, highlight: "Sheltered bay, provisioning stop" },
      { day: 7, from: "Porto Heli", to: "Monemvasia", nm: 35, hours: 7, highlight: "Medieval fortress town — spectacular approach from sea" },
      { day: 8, from: "Monemvasia", to: "Monemvasia", nm: 0, hours: 0, highlight: "Rest day: explore the hidden old town" },
      { day: 9, from: "Monemvasia", to: "Elafonisos", nm: 25, hours: 5, highlight: "Simos beach — pink sand, Caribbean-like waters" },
      { day: 10, from: "Elafonisos", to: "Kythira", nm: 20, hours: 4, highlight: "Remote island, waterfall of Fonissa" },
      { day: 11, from: "Kythira", to: "Monemvasia", nm: 40, hours: 8, highlight: "Return leg — longest sailing day" },
      { day: 12, from: "Monemvasia", to: "Spetses", nm: 35, hours: 7, highlight: "Heading back north" },
      { day: 13, from: "Spetses", to: "Poros", nm: 23, hours: 5, highlight: "Quick stops at Hydra and Poros" },
      { day: 14, from: "Poros", to: "Piraeus", nm: 30, hours: 6, highlight: "Return to base" }
    ]
  },
  {
    id: 2,
    name: "Classic Cyclades",
    tagline: "The iconic Greek islands",
    color: "#60a5fa",
    colorName: "blue",
    totalNm: 330,
    difficulty: "Moderate-Challenging",
    difficultyLevel: 3,
    days: 14,
    startPort: "Piraeus",
    endPort: "Piraeus",
    oneWay: false,
    highlight: "Santorini caldera, Mykonos, volcanic Milos",
    description: "The greatest hits of Greece — from the moonscape beaches of Milos to the sunset caldera of Santorini and the windmills of Mykonos. This route threads through the western and central Cyclades, hitting every iconic island. Longer passages demand respect, but the rewards are unmatched.",
    weatherNote: "Late April Cyclades: 10-15 knot northerlies typical. The Meltemi hasn't started yet, but spring northerlies are possible. The Milos-Santorini crossing (50nm) needs a good weather window. Sea state generally moderate.",
    stops: [
      { lat: 37.9364, lng: 23.6466 }, // Piraeus
      { lat: 37.6308, lng: 24.3200 }, // Kea
      { lat: 37.3833, lng: 24.4167 }, // Kythnos
      { lat: 37.1500, lng: 24.5000 }, // Serifos
      { lat: 36.9667, lng: 24.7167 }, // Sifnos
      { lat: 36.7167, lng: 24.4333 }, // Milos
      { lat: 36.7167, lng: 24.4333 }, // Milos (rest)
      { lat: 36.3933, lng: 25.4614 }, // Santorini
      { lat: 36.3933, lng: 25.4614 }, // Santorini (rest)
      { lat: 36.7217, lng: 25.2800 }, // Ios
      { lat: 37.1017, lng: 25.3767 }, // Naxos
      { lat: 37.0853, lng: 25.1486 }, // Paros
      { lat: 37.4467, lng: 25.3267 }, // Mykonos
      { lat: 37.4431, lng: 24.9411 }, // Syros
      { lat: 37.9364, lng: 23.6466 }  // Piraeus
    ],
    itinerary: [
      { day: 1, from: "Piraeus", to: "Kea", nm: 36, hours: 7, highlight: "Closest Cycladic island — quiet gem, Lion of Kea" },
      { day: 2, from: "Kea", to: "Kythnos", nm: 12, hours: 2.5, highlight: "Hot springs at Loutra village" },
      { day: 3, from: "Kythnos", to: "Serifos", nm: 18, hours: 3.5, highlight: "Dramatic hilltop Chora, white cube houses" },
      { day: 4, from: "Serifos", to: "Sifnos", nm: 10, hours: 2, highlight: "Food capital of the Cyclades" },
      { day: 5, from: "Sifnos", to: "Milos", nm: 22, hours: 4.5, highlight: "Sarakiniko moonscape beach, ancient catacombs" },
      { day: 6, from: "Milos", to: "Milos", nm: 0, hours: 0, highlight: "Rest day: explore Kleftiko caves by dinghy" },
      { day: 7, from: "Milos", to: "Santorini", nm: 50, hours: 10, highlight: "Long passage — caldera approach, Oia sunset" },
      { day: 8, from: "Santorini", to: "Santorini", nm: 0, hours: 0, highlight: "Rest day: wine tasting, Akrotiri ruins" },
      { day: 9, from: "Santorini", to: "Ios", nm: 18, hours: 3.5, highlight: "Mylopotas beach, Homer's tomb" },
      { day: 10, from: "Ios", to: "Naxos", nm: 20, hours: 4, highlight: "Largest Cycladic island, Portara gate, incredible food" },
      { day: 11, from: "Naxos", to: "Paros", nm: 10, hours: 2, highlight: "Naoussa fishing village, marble quarries" },
      { day: 12, from: "Paros", to: "Mykonos", nm: 20, hours: 4, highlight: "Windmills, Little Venice, legendary nightlife" },
      { day: 13, from: "Mykonos", to: "Syros", nm: 12, hours: 2.5, highlight: "Ermoupoli — neoclassical capital of the Cyclades" },
      { day: 14, from: "Syros", to: "Piraeus", nm: 75, hours: 15, highlight: "Long return passage (or overnight sail)" }
    ]
  },
  {
    id: 3,
    name: "Small Cyclades & Hidden Gems",
    tagline: "The real Greece",
    color: "#f472b6",
    colorName: "pink",
    totalNm: 280,
    difficulty: "Moderate",
    difficultyLevel: 2.5,
    days: 14,
    startPort: "Piraeus",
    endPort: "Piraeus",
    oneWay: false,
    highlight: "Tiny authentic islands, Koufonisia paradise, Amorgos monastery",
    description: "Escape the crowds entirely. The Small Cyclades — Koufonisia, Schinoussa, Iraklia, Donoussa — are tiny islands with populations measured in dozens, not thousands. Add in the dramatic monastery of Amorgos (from The Big Blue) and the foodie haven of Naxos for an unforgettable authentic experience.",
    weatherNote: "The Small Cyclades are somewhat sheltered by Naxos and Amorgos, but the open passages from Piraeus and back to Mykonos require attention. Winds 10-15 knots, generally manageable in late April.",
    stops: [
      { lat: 37.9364, lng: 23.6466 }, // Piraeus
      { lat: 37.6308, lng: 24.3200 }, // Kea
      { lat: 37.4431, lng: 24.9411 }, // Syros
      { lat: 37.0853, lng: 25.1486 }, // Paros
      { lat: 36.9333, lng: 25.6000 }, // Koufonisia
      { lat: 36.9333, lng: 25.6000 }, // Koufonisia (rest)
      { lat: 36.8667, lng: 25.5167 }, // Schinoussa
      { lat: 36.8417, lng: 25.4417 }, // Iraklia
      { lat: 37.0833, lng: 25.8167 }, // Donoussa
      { lat: 36.8333, lng: 25.8833 }, // Amorgos
      { lat: 36.8333, lng: 25.8833 }, // Amorgos (rest)
      { lat: 37.1017, lng: 25.3767 }, // Naxos
      { lat: 37.1017, lng: 25.3767 }, // Naxos (rest)
      { lat: 37.4467, lng: 25.3267 }, // Mykonos
      { lat: 37.9364, lng: 23.6466 }  // Piraeus
    ],
    itinerary: [
      { day: 1, from: "Piraeus", to: "Kea", nm: 36, hours: 7, highlight: "Closest Cycladic island, easy first stop" },
      { day: 2, from: "Kea", to: "Syros", nm: 30, hours: 6, highlight: "Ermoupoli capital, stock up on supplies" },
      { day: 3, from: "Syros", to: "Paros", nm: 22, hours: 4.5, highlight: "Naoussa village, last major provisioning hub" },
      { day: 4, from: "Paros", to: "Koufonisia", nm: 18, hours: 3.5, highlight: "Stunning beaches, tiny paradise island" },
      { day: 5, from: "Koufonisia", to: "Koufonisia", nm: 0, hours: 0, highlight: "Rest day: Pori beach, dramatic cliff walk" },
      { day: 6, from: "Koufonisia", to: "Schinoussa", nm: 5, hours: 1, highlight: "200 residents, total tranquility" },
      { day: 7, from: "Schinoussa", to: "Iraklia", nm: 5, hours: 1, highlight: "Cave of Agios Ioannis, hiking trails" },
      { day: 8, from: "Iraklia", to: "Donoussa", nm: 15, hours: 3, highlight: "Most remote Small Cycladic island, Kedros beach" },
      { day: 9, from: "Donoussa", to: "Amorgos", nm: 12, hours: 2.5, highlight: "Hozoviotissa Monastery — cliffside marvel (The Big Blue)" },
      { day: 10, from: "Amorgos", to: "Amorgos", nm: 0, hours: 0, highlight: "Rest day: Agia Anna beach, mountain hiking" },
      { day: 11, from: "Amorgos", to: "Naxos", nm: 18, hours: 3.5, highlight: "Portara gate, explore old town" },
      { day: 12, from: "Naxos", to: "Naxos", nm: 0, hours: 0, highlight: "Rest day: inland villages (Apiranthos), incredible food" },
      { day: 13, from: "Naxos", to: "Mykonos", nm: 22, hours: 4.5, highlight: "Optional nightlife stop" },
      { day: 14, from: "Mykonos", to: "Piraeus", nm: 85, hours: 17, highlight: "Long return (overnight sail recommended)" }
    ]
  },
  {
    id: 4,
    name: "Northern Cyclades & Culture",
    tagline: "History and culture",
    color: "#fbbf24",
    colorName: "amber",
    totalNm: 190,
    difficulty: "Easy-Moderate",
    difficultyLevel: 2,
    days: 14,
    startPort: "Lavrion",
    endPort: "Lavrion",
    highlight: "UNESCO Delos, foodie Tinos, museum island Andros",
    oneWay: false,
    description: "The thinking sailor's Cyclades. Andros has world-class museums and waterfalls. Tinos is a food and craft paradise with marble villages. Delos is the sacred UNESCO birthplace of Apollo. And with the shortest total distance of any route, there's plenty of time to actually absorb these places instead of rushing through.",
    weatherNote: "The northern Cyclades can catch the funnel effect between Andros and Tinos (Kafireas strait). Avoid the strait in strong north winds. Otherwise very manageable — short passages, good shelter options.",
    stops: [
      { lat: 37.7269, lng: 24.0542 }, // Lavrion
      { lat: 37.6308, lng: 24.3200 }, // Kea
      { lat: 37.8333, lng: 24.8167 }, // Andros
      { lat: 37.8333, lng: 24.8167 }, // Andros (rest)
      { lat: 37.5333, lng: 25.1667 }, // Tinos
      { lat: 37.5333, lng: 25.1667 }, // Tinos (rest)
      { lat: 37.4467, lng: 25.3267 }, // Mykonos
      { lat: 37.3967, lng: 25.2683 }, // Delos
      { lat: 37.4050, lng: 25.2200 }, // Rinia
      { lat: 37.4431, lng: 24.9411 }, // Syros
      { lat: 37.4431, lng: 24.9411 }, // Syros (rest)
      { lat: 37.1500, lng: 24.5000 }, // Serifos
      { lat: 36.9667, lng: 24.7167 }, // Sifnos
      { lat: 37.3833, lng: 24.4167 }, // Kythnos
      { lat: 37.6500, lng: 24.0300 }, // Cape Sounion
      { lat: 37.7269, lng: 24.0542 }  // Lavrion
    ],
    itinerary: [
      { day: 1, from: "Lavrion", to: "Kea", nm: 13, hours: 2.5, highlight: "Easy first day, gentle introduction" },
      { day: 2, from: "Kea", to: "Andros", nm: 28, hours: 5.5, highlight: "Museums, hiking trails, waterfalls" },
      { day: 3, from: "Andros", to: "Andros", nm: 0, hours: 0, highlight: "Rest day: Museum of Contemporary Art, Menites village" },
      { day: 4, from: "Andros", to: "Tinos", nm: 8, hours: 1.5, highlight: "Panagia shrine, foodie paradise, marble villages" },
      { day: 5, from: "Tinos", to: "Tinos", nm: 0, hours: 0, highlight: "Rest day: Volax village (giant boulders), artisanal food" },
      { day: 6, from: "Tinos", to: "Mykonos", nm: 8, hours: 1.5, highlight: "Windmills, Little Venice" },
      { day: 7, from: "Mykonos", to: "Delos / Rinia", nm: 7, hours: 2.5, highlight: "UNESCO sacred island + wild anchorage at Rinia" },
      { day: 8, from: "Rinia", to: "Syros", nm: 12, hours: 2.5, highlight: "Ermoupoli, Ano Syros medieval town" },
      { day: 9, from: "Syros", to: "Syros", nm: 0, hours: 0, highlight: "Rest day: explore both towns, live music scene" },
      { day: 10, from: "Syros", to: "Serifos", nm: 25, hours: 5, highlight: "Dramatic hilltop Chora" },
      { day: 11, from: "Serifos", to: "Sifnos", nm: 10, hours: 2, highlight: "Cooking classes, pottery workshops" },
      { day: 12, from: "Sifnos", to: "Kythnos", nm: 20, hours: 4, highlight: "Hot springs, quiet island life" },
      { day: 13, from: "Kythnos", to: "Cape Sounion", nm: 25, hours: 5, highlight: "Temple of Poseidon at sunset" },
      { day: 14, from: "Cape Sounion", to: "Lavrion", nm: 5, hours: 1, highlight: "Short hop to return base" }
    ]
  },
  {
    id: 5,
    name: "Dodecanese Adventure",
    tagline: "The exotic one-way",
    color: "#a78bfa",
    colorName: "purple",
    totalNm: 250,
    difficulty: "Challenging",
    difficultyLevel: 4,
    days: 14,
    startPort: "Piraeus",
    endPort: "Rhodes",
    oneWay: true,
    highlight: "Patmos monastery, volcanic Nisyros, medieval Rhodes",
    description: "The most diverse route — from the sacred island of Patmos to the volcanic crater of Nisyros and the medieval citadel of Rhodes. Italian-influenced architecture, sponge divers, rock climbers, and one of the most photogenic harbors in the Mediterranean (Symi). Requires an overnight passage and one-way charter logistics.",
    weatherNote: "The Dodecanese are more sheltered than the open Cyclades, with land masses providing wind shadows. The overnight passage from Piraeus to Patmos (120nm) needs careful planning. One-way charter fees: typically 500-1500 extra.",
    stops: [
      { lat: 37.9364, lng: 23.6466 }, // Piraeus
      { lat: 37.3167, lng: 26.5500 }, // Patmos
      { lat: 37.3167, lng: 26.5500 }, // Patmos (rest)
      { lat: 37.3000, lng: 26.7500 }, // Lipsi
      { lat: 37.1500, lng: 26.8500 }, // Leros
      { lat: 36.9500, lng: 26.9833 }, // Kalymnos
      { lat: 36.8933, lng: 26.9817 }, // Kos
      { lat: 36.8933, lng: 26.9817 }, // Kos (rest)
      { lat: 36.5833, lng: 27.1667 }, // Nisyros
      { lat: 36.4500, lng: 27.1167 }, // Tilos
      { lat: 36.6167, lng: 27.8333 }, // Symi
      { lat: 36.6167, lng: 27.8333 }, // Symi (rest)
      { lat: 36.4500, lng: 28.2267 }, // Rhodes
      { lat: 36.4500, lng: 28.2267 }  // Rhodes (end)
    ],
    itinerary: [
      { day: "1-2", from: "Piraeus", to: "Patmos", nm: 120, hours: 24, highlight: "Overnight sail to the sacred island" },
      { day: 3, from: "Patmos", to: "Patmos", nm: 0, hours: 0, highlight: "Rest day: UNESCO Monastery, Cave of the Apocalypse" },
      { day: 4, from: "Patmos", to: "Lipsi", nm: 8, hours: 1.5, highlight: "Tiny island, church wine, quiet beaches" },
      { day: 5, from: "Lipsi", to: "Leros", nm: 10, hours: 2, highlight: "Art Deco architecture, WWII tunnels" },
      { day: 6, from: "Leros", to: "Kalymnos", nm: 12, hours: 2.5, highlight: "Sponge diving capital, world-class rock climbing" },
      { day: 7, from: "Kalymnos", to: "Kos", nm: 12, hours: 2.5, highlight: "Hippocrates' plane tree, cycling paradise" },
      { day: 8, from: "Kos", to: "Kos", nm: 0, hours: 0, highlight: "Rest day: Asklepion ruins, town beaches" },
      { day: 9, from: "Kos", to: "Nisyros", nm: 12, hours: 2.5, highlight: "Walk into an active volcanic crater!" },
      { day: 10, from: "Nisyros", to: "Tilos", nm: 15, hours: 3, highlight: "Eco-island, rare bird species, tranquil" },
      { day: 11, from: "Tilos", to: "Symi", nm: 18, hours: 3.5, highlight: "Most photogenic harbor in all of Greece" },
      { day: 12, from: "Symi", to: "Symi", nm: 0, hours: 0, highlight: "Rest day: neoclassical houses, Panormitis monastery" },
      { day: 13, from: "Symi", to: "Rhodes", nm: 22, hours: 4.5, highlight: "Medieval Old Town — UNESCO World Heritage" },
      { day: 14, from: "Rhodes", to: "Rhodes", nm: 0, hours: 0, highlight: "Return day (one-way charter end)" }
    ]
  },
  {
    id: 6,
    name: "Sporades & Marine Park",
    tagline: "Mamma Mia islands",
    color: "#10b981",
    colorName: "teal",
    totalNm: 310,
    difficulty: "Moderate-Challenging",
    difficultyLevel: 3,
    days: 14,
    startPort: "Lavrion",
    endPort: "Lavrion",
    oneWay: false,
    highlight: "National Marine Park, monk seals, Mamma Mia filming locations",
    description: "Lush, green, and totally different from the arid Cyclades. The Sporades are forested islands with National Marine Park waters where endangered monk seals swim. Visit the Mamma Mia church in Skopelos, the 60+ beaches of Skiathos, and the wild horses of Skyros — all with a backdrop of dense pine forests meeting turquoise sea.",
    weatherNote: "The Sporades are generally well-protected, but the passages through the Evia channel and around Skyros can be challenging. Late April is mild — expect 10-15 knot winds and calm to moderate seas.",
    stops: [
      { lat: 37.7269, lng: 24.0542 }, // Lavrion
      { lat: 38.0500, lng: 24.2000 }, // South Evia
      { lat: 38.9000, lng: 24.5667 }, // Skyros
      { lat: 38.9000, lng: 24.5667 }, // Skyros (rest)
      { lat: 39.1500, lng: 23.8667 }, // Alonissos
      { lat: 39.2500, lng: 23.9000 }, // Marine Park
      { lat: 39.1167, lng: 23.7167 }, // Skopelos
      { lat: 39.1167, lng: 23.7167 }, // Skopelos (rest)
      { lat: 39.1600, lng: 23.4900 }, // Skiathos
      { lat: 39.1600, lng: 23.4900 }, // Skiathos (rest)
      { lat: 39.1667, lng: 23.0833 }, // Trikeri
      { lat: 38.9333, lng: 23.0833 }, // North Evia
      { lat: 38.6000, lng: 24.1000 }, // Kymi
      { lat: 37.8333, lng: 24.8167 }, // Andros
      { lat: 37.7269, lng: 24.0542 }  // Lavrion
    ],
    itinerary: [
      { day: 1, from: "Lavrion", to: "South Evia", nm: 30, hours: 6, highlight: "Cape Sounion passage, Evia coast" },
      { day: 2, from: "South Evia", to: "Skyros", nm: 40, hours: 8, highlight: "Unique island, wild horses, isolated charm" },
      { day: 3, from: "Skyros", to: "Skyros", nm: 0, hours: 0, highlight: "Rest day: Chora on cliff, Rupert Brooke's grave" },
      { day: 4, from: "Skyros", to: "Alonissos", nm: 35, hours: 7, highlight: "Gateway to the National Marine Park" },
      { day: 5, from: "Alonissos", to: "Marine Park", nm: 15, hours: 3, highlight: "Day sail: monk seals, Kyra Panagia monastery" },
      { day: 6, from: "Alonissos", to: "Skopelos", nm: 8, hours: 1.5, highlight: "Mamma Mia church, plum orchards" },
      { day: 7, from: "Skopelos", to: "Skopelos", nm: 0, hours: 0, highlight: "Rest day: Kastani beach, traditional town" },
      { day: 8, from: "Skopelos", to: "Skiathos", nm: 10, hours: 2, highlight: "60+ beaches, boat-access-only Lalaria beach" },
      { day: 9, from: "Skiathos", to: "Skiathos", nm: 0, hours: 0, highlight: "Rest day: Koukounaries beach, nightlife" },
      { day: 10, from: "Skiathos", to: "Trikeri", nm: 15, hours: 3, highlight: "Pelion peninsula, traditional village" },
      { day: 11, from: "Trikeri", to: "North Evia", nm: 25, hours: 5, highlight: "Through Trikeri strait" },
      { day: 12, from: "North Evia", to: "Kymi", nm: 35, hours: 7, highlight: "East coast Evia" },
      { day: 13, from: "Kymi", to: "Andros", nm: 40, hours: 8, highlight: "Back to the Cyclades" },
      { day: 14, from: "Andros", to: "Lavrion", nm: 28, hours: 5.5, highlight: "Return to base" }
    ]
  },
  {
    id: 7,
    name: "Crete Explorer",
    tagline: "The Minoan adventure",
    color: "#ef4444",
    colorName: "red",
    totalNm: 500,
    difficulty: "Very Challenging",
    difficultyLevel: 5,
    days: 14,
    startPort: "Piraeus",
    endPort: "Piraeus",
    oneWay: false,
    highlight: "Knossos palace, Chania old town, Santorini caldera",
    description: "The ultimate sailing challenge — cross the Aegean to reach Crete's legendary north coast. Visit the Minoan palace at Knossos, the Venetian harbor of Chania, and the wine-soaked slopes of Santorini. Multiple overnight passages and 500nm total distance make this a route for experienced sailors with stamina and flexibility.",
    weatherNote: "This route involves serious open-water crossings. The Milos-Santorini and Santorini-Crete passages can have significant swell in northerlies. Multiple overnight sails required. Only attempt with experienced crew and good weather windows. Very challenging for late April.",
    stops: [
      { lat: 37.9364, lng: 23.6466 }, // Piraeus
      { lat: 37.6308, lng: 24.3200 }, // Kea
      { lat: 36.7167, lng: 24.4333 }, // Milos
      { lat: 36.7167, lng: 24.4333 }, // Milos (rest)
      { lat: 36.3933, lng: 25.4614 }, // Santorini
      { lat: 35.3387, lng: 25.1442 }, // Heraklion
      { lat: 35.3387, lng: 25.1442 }, // Heraklion (rest)
      { lat: 35.3667, lng: 24.4833 }, // Rethymno
      { lat: 35.3667, lng: 24.4833 }, // Rethymno (rest)
      { lat: 35.5167, lng: 24.0167 }, // Chania
      { lat: 35.5167, lng: 24.0167 }, // Chania (rest)
      { lat: 36.3933, lng: 25.4614 }, // Santorini
      { lat: 37.1017, lng: 25.3767 }, // Naxos (via Ios)
      { lat: 37.9364, lng: 23.6466 }  // Piraeus
    ],
    itinerary: [
      { day: 1, from: "Piraeus", to: "Kea", nm: 36, hours: 7, highlight: "First stop in the Cyclades" },
      { day: 2, from: "Kea", to: "Milos", nm: 60, hours: 12, highlight: "Long passage or overnight — volcanic beaches" },
      { day: 3, from: "Milos", to: "Milos", nm: 0, hours: 0, highlight: "Rest day: Kleftiko caves, Sarakiniko moonscape" },
      { day: 4, from: "Milos", to: "Santorini", nm: 50, hours: 10, highlight: "Dramatic caldera approach from the sea" },
      { day: 5, from: "Santorini", to: "Heraklion", nm: 65, hours: 13, highlight: "Major crossing to Crete (or overnight)" },
      { day: 6, from: "Heraklion", to: "Heraklion", nm: 0, hours: 0, highlight: "Knossos palace, Archaeological Museum" },
      { day: 7, from: "Heraklion", to: "Rethymno", nm: 35, hours: 7, highlight: "Venetian old town, fortress" },
      { day: 8, from: "Rethymno", to: "Rethymno", nm: 0, hours: 0, highlight: "Rest day: explore the old town" },
      { day: 9, from: "Rethymno", to: "Chania", nm: 20, hours: 4, highlight: "Most beautiful city in Crete" },
      { day: 10, from: "Chania", to: "Chania", nm: 0, hours: 0, highlight: "Rest day: Venetian harbor, lighthouse, food market" },
      { day: 11, from: "Chania", to: "Santorini", nm: 100, hours: 20, highlight: "Major return crossing (overnight sail)" },
      { day: 12, from: "Santorini", to: "Santorini", nm: 0, hours: 0, highlight: "Wine tasting, Akrotiri Bronze Age ruins" },
      { day: 13, from: "Santorini", to: "Naxos", nm: 38, hours: 7.5, highlight: "Quick stops at Ios and Naxos" },
      { day: 14, from: "Naxos", to: "Piraeus", nm: 90, hours: 18, highlight: "Long return passage (overnight)" }
    ]
  },
  {
    id: 8,
    name: "Argolic Gulf & Peloponnese Coast",
    tagline: "Ancient Greece by sea",
    color: "#f59e0b",
    colorName: "orange",
    totalNm: 240,
    difficulty: "Easy-Moderate",
    difficultyLevel: 2,
    days: 14,
    startPort: "Piraeus",
    endPort: "Piraeus",
    oneWay: false,
    highlight: "Epidaurus theater, Navplion fortress, hidden Kyparissi",
    description: "Sail the coastline that shaped Western civilization. This route hugs the eastern Peloponnese, combining island gems (Hydra, Spetses) with mainland treasures — the ancient theater of Epidaurus, the fortress town of Navplion, and the Lion Gate at Mycenae. Hidden fishing villages with no road access make this feel like a genuine voyage of discovery.",
    weatherNote: "The Argolic Gulf is well-sheltered and calm. The stretch south of Leonidio can be more exposed, but generally manageable. This is one of the calmest routes available in late April — ideal for less experienced crews.",
    stops: [
      { lat: 37.9364, lng: 23.6466 }, // Piraeus
      { lat: 37.7467, lng: 23.4289 }, // Aegina
      { lat: 37.6833, lng: 23.3333 }, // Angistri → Poros
      { lat: 37.5014, lng: 23.4514 }, // Poros
      { lat: 37.3475, lng: 23.4617 }, // Hydra
      { lat: 37.3833, lng: 23.2500 }, // Ermioni
      { lat: 37.3200, lng: 23.1500 }, // Porto Heli
      { lat: 37.5667, lng: 22.7833 }, // Navplion
      { lat: 37.5667, lng: 22.7833 }, // Navplion (rest - Epidaurus)
      { lat: 37.5667, lng: 22.7833 }, // Navplion (rest - Mycenae)
      { lat: 37.1667, lng: 22.8500 }, // Leonidio
      { lat: 37.1667, lng: 22.8500 }, // Leonidio (rest)
      { lat: 36.9500, lng: 22.9833 }, // Kyparissi
      { lat: 36.6883, lng: 23.0367 }, // Monemvasia
      { lat: 37.2628, lng: 23.1533 }, // Spetses
      { lat: 37.9364, lng: 23.6466 }  // Piraeus
    ],
    itinerary: [
      { day: 1, from: "Piraeus", to: "Aegina", nm: 17, hours: 3.5, highlight: "Temple of Aphaia, pistachio heaven" },
      { day: 2, from: "Aegina", to: "Poros", nm: 17, hours: 3.5, highlight: "Via Angistri island, arrive at pine-clad Poros" },
      { day: 3, from: "Poros", to: "Hydra", nm: 12, hours: 2.5, highlight: "Car-free gem, artists' island" },
      { day: 4, from: "Hydra", to: "Ermioni", nm: 10, hours: 2, highlight: "Quiet harbor, fragrant pine forests" },
      { day: 5, from: "Ermioni", to: "Porto Heli", nm: 5, hours: 1, highlight: "Aman resort area, sheltered anchorage" },
      { day: 6, from: "Porto Heli", to: "Navplion", nm: 18, hours: 3.5, highlight: "First capital of Greece, Palamidi fortress" },
      { day: 7, from: "Navplion", to: "Navplion", nm: 0, hours: 0, highlight: "Day trip to Epidaurus — ancient theater, incredible acoustics" },
      { day: 8, from: "Navplion", to: "Navplion", nm: 0, hours: 0, highlight: "Day trip to Mycenae — Lion Gate, Agamemnon's tomb" },
      { day: 9, from: "Navplion", to: "Leonidio", nm: 30, hours: 6, highlight: "Dramatic cliff town, organic farms" },
      { day: 10, from: "Leonidio", to: "Leonidio", nm: 0, hours: 0, highlight: "Rest day: cliff monastery, gorge hiking" },
      { day: 11, from: "Leonidio", to: "Kyparissi", nm: 12, hours: 2.5, highlight: "Hidden fishing village — no road access" },
      { day: 12, from: "Kyparissi", to: "Monemvasia", nm: 18, hours: 3.5, highlight: "Medieval rock fortress, spectacular approach" },
      { day: 13, from: "Monemvasia", to: "Spetses", nm: 35, hours: 7, highlight: "Heading back north" },
      { day: 14, from: "Spetses", to: "Piraeus", nm: 48, hours: 10, highlight: "Final return passage" }
    ]
  }
  {
    id: 9,
    name: "Saronic & Cyclades Crossover",
    tagline: "Best of both worlds",
    color: "#06b6d4",
    colorName: "cyan",
    totalNm: 285,
    difficulty: "Moderate",
    difficultyLevel: 2.5,
    days: 14,
    startPort: "Piraeus",
    endPort: "Piraeus",
    oneWay: false,
    highlight: "Car-free Hydra, Saronic charm, then cross to the Cyclades — Sifnos food, Milos moonscapes, Paros villages",
    description: "The route that refuses to choose. Start with the sheltered beauty of the Saronic Gulf — car-free Hydra, pine-covered Poros — then make the exciting open-water crossing to the western Cyclades. Explore the volcanic landscapes of Milos, the food paradise of Sifnos, and the villages of Paros before threading back through Kea and Cape Sounion. Two worlds in one trip.",
    weatherNote: "The Saronic Gulf offers calm conditions for the first days. The Hydra-to-Kythnos crossing (~44nm) is the key passage — plan for an early departure and check the forecast. Late April typically has light northerlies (10-15 knots), making this crossing very manageable. The western Cyclades are relatively sheltered.",
    stops: [
      { lat: 37.9364, lng: 23.6466 }, // Piraeus
      { lat: 37.7467, lng: 23.4289 }, // Aegina
      { lat: 37.5014, lng: 23.4514 }, // Poros
      { lat: 37.3475, lng: 23.4617 }, // Hydra
      { lat: 37.3475, lng: 23.4617 }, // Hydra (rest)
      { lat: 37.3833, lng: 24.4167 }, // Kythnos (the crossing!)
      { lat: 37.1500, lng: 24.5000 }, // Serifos
      { lat: 36.9667, lng: 24.7167 }, // Sifnos
      { lat: 36.7167, lng: 24.4333 }, // Milos
      { lat: 36.7167, lng: 24.4333 }, // Milos (rest)
      { lat: 37.0853, lng: 25.1486 }, // Paros
      { lat: 37.0853, lng: 25.1486 }, // Paros (rest)
      { lat: 37.6308, lng: 24.3200 }, // Kea
      { lat: 37.6500, lng: 24.0300 }, // Cape Sounion
      { lat: 37.9364, lng: 23.6466 }  // Piraeus
    ],
    itinerary: [
      { day: 1, from: "Piraeus", to: "Aegina", nm: 17, hours: 3.5, highlight: "Temple of Aphaia, pistachio capital of Greece" },
      { day: 2, from: "Aegina", to: "Poros", nm: 22, hours: 4.5, highlight: "Pine-covered island, iconic clock tower, narrow strait" },
      { day: 3, from: "Poros", to: "Hydra", nm: 12, hours: 2.5, highlight: "No cars, no bikes — donkeys, galleries, artists' haven" },
      { day: 4, from: "Hydra", to: "Hydra", nm: 0, hours: 0, highlight: "Rest day: Vlychos beach, cliff walk to Kamini, sunset drinks" },
      { day: 5, from: "Hydra", to: "Kythnos", nm: 44, hours: 8, highlight: "THE crossing — open water to the Cyclades! Hot springs at Loutra" },
      { day: 6, from: "Kythnos", to: "Serifos", nm: 23, hours: 4.5, highlight: "Dramatic hilltop Chora, white cube houses, Livadi beach" },
      { day: 7, from: "Serifos", to: "Sifnos", nm: 12, hours: 2.5, highlight: "Food capital of the Cyclades — cooking classes, 365 churches" },
      { day: 8, from: "Sifnos", to: "Milos", nm: 22, hours: 4.5, highlight: "Sarakiniko moonscape, Kleftiko caves, Adamas harbor" },
      { day: 9, from: "Milos", to: "Milos", nm: 0, hours: 0, highlight: "Rest day: explore Kleftiko by dinghy, catacombs, Plaka sunset" },
      { day: 10, from: "Milos", to: "Paros", nm: 48, hours: 9, highlight: "Longer sail east — Naoussa fishing village, marble quarries" },
      { day: 11, from: "Paros", to: "Paros", nm: 0, hours: 0, highlight: "Rest day: Lefkes mountain village, Golden Beach, Antiparos day trip" },
      { day: 12, from: "Paros", to: "Kea", nm: 55, hours: 10, highlight: "Long return west — Lion of Kea, quiet bays, Ioulida hilltop town" },
      { day: 13, from: "Kea", to: "Cape Sounion", nm: 14, hours: 3, highlight: "Temple of Poseidon at sunset — anchor below the ancient columns" },
      { day: 14, from: "Cape Sounion", to: "Piraeus", nm: 23, hours: 4.5, highlight: "Final sail along the Attic coast back to port" }
    ]
  }
];

// Weather data for late April
const WEATHER = {
  air: { min: 18, max: 23, unit: "°C" },
  airNight: { min: 12, max: 15, unit: "°C" },
  sea: { min: 17, max: 19, unit: "°C" },
  wind: { min: 10, max: 15, unit: "knots" },
  windDirection: "NW to N",
  meltemi: false,
  season: "Shoulder season — fewer tourists, mild conditions, great prices"
};
