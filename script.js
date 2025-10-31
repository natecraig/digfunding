const projects = [
  {
    id: 1,
    title: "Mapping the Hidden Chambers of Saqqara",
    archaeologist: "Dr. Layla Nassar",
    location: "Saqqara, Egypt",
    country: "Egypt",
    topic: "Ancient Egypt",
    summary:
      "Using ground-penetrating radar to map undiscovered tombs near the Pyramid of Djoser and document burial practices of the Old Kingdom.",
    goal: 78000,
    currentFunding: 45200,
    startDate: "2025-02-10",
    endDate: "2025-04-30",
    exclusiveContent: "Weekly hieroglyph translation workshops and drone footage of the plateau.",
    rewards: [
      "$25 Digital field notes and artifact sketches.",
      "$75 Limited-edition Saqqara stratigraphy poster.",
      "$200 Live Q&A session from the excavation tent."
    ]
  },
  {
    id: 2,
    title: "Reconstructing the Bronze Age Harbor of Ugarit",
    archaeologist: "Prof. Elias Haddad",
    location: "Ras Shamra, Syria",
    country: "Syria",
    topic: "Maritime Archaeology",
    summary:
      "A combined terrestrial and underwater survey to understand trade networks of the Late Bronze Age Levant.",
    goal: 64000,
    currentFunding: 31100,
    startDate: "2025-06-01",
    endDate: "2025-08-15",
    exclusiveContent: "Subscribers receive 3D shipwreck models and harbor reconstructions.",
    rewards: [
      "$20 Expedition postcards featuring harbor illustrations.",
      "$60 Access to interactive harbor GIS layers.",
      "$180 Virtual dive briefing with the maritime team."
    ]
  },
  {
    id: 3,
    title: "Preserving the Rock Art of the Kimberley",
    archaeologist: "Dr. Nyla Warrulung",
    location: "Kimberley Region, Australia",
    country: "Australia",
    topic: "Rock Art",
    summary:
      "A collaborative project with Traditional Owners to document Wandjina and Gwion Gwion rock art through photogrammetry.",
    goal: 52000,
    currentFunding: 38650,
    startDate: "2024-11-05",
    endDate: "2025-01-25",
    exclusiveContent: "Backers unlock cultural protocol briefings and artist interviews.",
    rewards: [
      "$30 Digital album of annotated rock art panels.",
      "$90 Limited-run print by a community artist.",
      "$250 Invitation to a livestream with Traditional Owner elders."
    ]
  },
  {
    id: 4,
    title: "Ice Patch Archaeology in the Yukon",
    archaeologist: "Dr. Marcus Hill",
    location: "Whitehorse, Canada",
    country: "Canada",
    topic: "Paleoenvironment",
    summary:
      "Recovering melting ice patch artifacts to understand hunting technologies of the Southern Tutchone people.",
    goal: 48000,
    currentFunding: 22900,
    startDate: "2025-07-12",
    endDate: "2025-09-02",
    exclusiveContent: "Behind-the-scenes cold storage tours and conservation demos.",
    rewards: [
      "$25 Climate impact brief and artifact catalog.",
      "$80 Signed map of ice patch survey areas.",
      "$220 Virtual workshop on organic artifact conservation."
    ]
  },
  {
    id: 5,
    title: "Digitizing the Terracotta Warriors' Color",
    archaeologist: "Dr. Chen Jiahao",
    location: "Xi'an, China",
    country: "China",
    topic: "Conservation",
    summary:
      "Capturing hyperspectral imagery to preserve the original pigments on Qin Dynasty terracotta warriors before they fade.",
    goal: 91000,
    currentFunding: 57750,
    startDate: "2025-03-08",
    endDate: "2025-05-19",
    exclusiveContent: "Exclusive color reconstructions and lab walkthroughs for backers.",
    rewards: [
      "$35 Pigment analysis brief with color swatches.",
      "$95 Desktop terracotta warrior 3D print.",
      "$260 Invitation to a live pigment conservation demonstration."
    ]
  },
  {
    id: 6,
    title: "Tracing Viking Longhouses in Reykjavik",
    archaeologist: "Ásta Jónsdóttir",
    location: "Reykjavík, Iceland",
    country: "Iceland",
    topic: "Early Medieval",
    summary:
      "Excavating a newly discovered Viking longhouse to understand the earliest settlement layers of Reykjavik.",
    goal: 53000,
    currentFunding: 27400,
    startDate: "2025-05-15",
    endDate: "2025-07-20",
    exclusiveContent: "Members receive 360° hearth reconstructions and saga reading sessions.",
    rewards: [
      "$20 Digital longhouse floor plan poster.",
      "$70 Recipe booklet of Viking-age meals cooked on-site.",
      "$210 Live-streamed experiment on turf wall construction."
    ]
  },
  {
    id: 7,
    title: "Unearthing the Maya Observatory of Xultun",
    archaeologist: "Dr. Isabel Romero",
    location: "Petén, Guatemala",
    country: "Guatemala",
    topic: "Maya Studies",
    summary:
      "Investigating a mural-rich complex believed to track astronomical events in the Late Classic Maya period.",
    goal: 76000,
    currentFunding: 53400,
    startDate: "2025-04-02",
    endDate: "2025-06-18",
    exclusiveContent: "Subscribers gain access to decoded calendar glyph lectures.",
    rewards: [
      "$28 Field diary updates in English and Spanish.",
      "$85 Screen-printed replica of a Maya codex page.",
      "$240 Private star-gazing session streamed from the jungle camp."
    ]
  },
  {
    id: 8,
    title: "Sannai-Maruyama Ancient Foodways",
    archaeologist: "Prof. Keiko Matsuda",
    location: "Aomori, Japan",
    country: "Japan",
    topic: "Jōmon Period",
    summary:
      "Analyzing charred residues from pottery to reconstruct seasonal diets of the Jōmon people.",
    goal: 46000,
    currentFunding: 19800,
    startDate: "2024-12-10",
    endDate: "2025-02-14",
    exclusiveContent: "Backers receive exclusive recipes recreated from residue findings.",
    rewards: [
      "$22 Illustrated residue report and photo set.",
      "$65 Virtual workshop on Jōmon clay techniques.",
      "$195 Invitation to a live tastings event with experimental chefs."
    ]
  },
  {
    id: 9,
    title: "Surveying the Stone Circles of Senegambia",
    archaeologist: "Dr. Awa Diouf",
    location: "Wanar, Senegal",
    country: "Senegal",
    topic: "Megalithic Landscapes",
    summary:
      "Creating 3D scans of stone circles to understand funerary rites and preserve threatened monuments.",
    goal: 42000,
    currentFunding: 25450,
    startDate: "2025-01-20",
    endDate: "2025-03-05",
    exclusiveContent: "Supporters unlock interactive 3D tours narrated in Wolof, French, and English.",
    rewards: [
      "$18 Thank-you postcard featuring a stone circle sunrise.",
      "$55 Downloadable 3D print files of select stones.",
      "$170 Live walkthrough of GIS mapping workflows."
    ]
  },
  {
    id: 10,
    title: "Revealing the Nazca Aqueduct Builders",
    archaeologist: "Dr. Camila Torres",
    location: "Nazca, Peru",
    country: "Peru",
    topic: "Andean Civilizations",
    summary:
      "Excavating puquios (spiral aqueducts) to understand water engineering and community labor organization.",
    goal: 58000,
    currentFunding: 40220,
    startDate: "2025-08-05",
    endDate: "2025-10-12",
    exclusiveContent: "Backers receive drone flythroughs and water flow experiments.",
    rewards: [
      "$26 Water management infographic download.",
      "$78 Handcrafted Nazca textile bookmark.",
      "$210 Live-streamed experiment showing puquio hydraulics."
    ]
  },
  {
    id: 11,
    title: "Documenting Nubian Fortress Networks",
    archaeologist: "Dr. Ahmed El-Masry",
    location: "Northern State, Sudan",
    country: "Sudan",
    topic: "Fortifications",
    summary:
      "Surveying Middle Kingdom fortresses along the Nile to trace Egyptian-Nubian diplomacy and trade.",
    goal: 63000,
    currentFunding: 31780,
    startDate: "2025-03-18",
    endDate: "2025-05-27",
    exclusiveContent: "Supporters receive bilingual (Arabic/English) fortification analysis videos.",
    rewards: [
      "$24 Illustrated fortress timeline.",
      "$70 Signed topographic map of surveyed forts.",
      "$205 Invitation to a private debrief with the survey team."
    ]
  },
  {
    id: 12,
    title: "Rediscovering the Indus Craft Quarter",
    archaeologist: "Dr. Meera Saini",
    location: "Rakhigarhi, India",
    country: "India",
    topic: "Urban Archaeology",
    summary:
      "Excavating an artisanal district to learn how Indus Valley craftspeople organized workshops and trade.",
    goal: 72000,
    currentFunding: 46850,
    startDate: "2025-02-22",
    endDate: "2025-05-01",
    exclusiveContent: "Exclusive bead-making tutorials and craft analysis live sessions.",
    rewards: [
      "$27 Weekly finds newsletter and stratigraphy sketches.",
      "$88 Replica Indus seal impression set.",
      "$230 Virtual craft workshop with experimental archaeologists."
    ]
  },
  {
    id: 13,
    title: "Archaeoacoustics of Chavín de Huántar",
    archaeologist: "Prof. Sofia Aguilar",
    location: "Ancash, Peru",
    country: "Peru",
    topic: "Archaeoacoustics",
    summary:
      "Studying soundscapes within Chavín's labyrinthine galleries to understand ritual experiences.",
    goal: 39000,
    currentFunding: 21200,
    startDate: "2024-12-01",
    endDate: "2025-01-20",
    exclusiveContent: "High-fidelity binaural recordings available only to backers.",
    rewards: [
      "$19 Digital soundscape album.",
      "$58 Illustrated booklet on Chavín musical instruments.",
      "$165 Invitation to a virtual sound experiment night."
    ]
  },
  {
    id: 14,
    title: "Resilience of the Taino Village of Tibes",
    archaeologist: "Dr. Carla Rodríguez",
    location: "Ponce, Puerto Rico",
    country: "Puerto Rico",
    topic: "Indigenous Caribbean",
    summary:
      "Investigating how the Tibes ceremonial center adapted to hurricanes and colonial pressures.",
    goal: 47000,
    currentFunding: 24300,
    startDate: "2025-06-15",
    endDate: "2025-08-25",
    exclusiveContent: "Backers unlock hurricane resilience workshops with local community leaders.",
    rewards: [
      "$23 Thank-you video from the student field crew.",
      "$72 Handmade ceramic pendant inspired by Tibes motifs.",
      "$190 Virtual panel on Indigenous knowledge and climate change."
    ]
  },
  {
    id: 15,
    title: "African Diaspora Archaeology in Charleston",
    archaeologist: "Dr. Monique Harris",
    location: "Charleston, United States",
    country: "United States",
    topic: "African Diaspora",
    summary:
      "Excavating urban backlots to recover the stories of free and enslaved Black artisans in the 19th century.",
    goal: 56000,
    currentFunding: 31250,
    startDate: "2025-04-10",
    endDate: "2025-06-30",
    exclusiveContent: "Subscribers receive oral history recordings and artifact photography masterclasses.",
    rewards: [
      "$25 Digital booklet on recovered artifacts.",
      "$82 Limited print of a historic Charleston streetscape.",
      "$210 Invitation to a behind-the-scenes lab tour livestream."
    ]
  },
  {
    id: 16,
    title: "Rewilding the Neolithic Orkney Landscape",
    archaeologist: "Eilidh MacRae",
    location: "Orkney Islands, Scotland",
    country: "United Kingdom",
    topic: "Neolithic Europe",
    summary:
      "Paleoenvironmental coring and excavation to reconstruct farming and rewilding strategies around Skara Brae.",
    goal: 51000,
    currentFunding: 26640,
    startDate: "2025-05-28",
    endDate: "2025-07-29",
    exclusiveContent: "Backers unlock virtual reality reconstructions of Neolithic houses.",
    rewards: [
      "$24 Illustrated pollen diagram poster.",
      "$76 Handwoven Orkney grass bracelet.",
      "$205 Live peat-coring demonstration and Q&A."
    ]
  },
  {
    id: 17,
    title: "Arctic Shipwrecks of Franklin's Lost Expedition",
    archaeologist: "Dr. Noah Baffin",
    location: "Nunavut, Canada",
    country: "Canada",
    topic: "Polar Archaeology",
    summary:
      "Underwater documentation of HMS Erebus artifacts in partnership with Inuit guardians and Parks Canada.",
    goal: 98000,
    currentFunding: 61200,
    startDate: "2025-08-18",
    endDate: "2025-09-30",
    exclusiveContent: "Members access ROV dive logs and Inuit oral histories.",
    rewards: [
      "$32 Expedition patch designed by Inuit youth.",
      "$110 3D printable model of the Erebus bell.",
      "$320 Private briefing with the dive operations lead."
    ]
  },
  {
    id: 18,
    title: "Decoding the Script of Rongorongo",
    archaeologist: "Dr. Hana Teva",
    location: "Rapa Nui (Easter Island), Chile",
    country: "Chile",
    topic: "Epigraphy",
    summary:
      "A community-led documentation of rongorongo tablets to explore language transmission and cultural revival.",
    goal: 36000,
    currentFunding: 17420,
    startDate: "2025-01-05",
    endDate: "2025-03-10",
    exclusiveContent: "Supporters receive exclusive language-learning mini-lessons in Rapa Nui.",
    rewards: [
      "$18 Digital booklet of glyph tracings.",
      "$60 Recording of community song circles.",
      "$175 Invitation to a live glyph decipherment workshop."
    ]
  },
  {
    id: 19,
    title: "Iron Age Saltworks of Hallstatt",
    archaeologist: "Prof. Lukas Steiner",
    location: "Hallstatt, Austria",
    country: "Austria",
    topic: "Industrial Archaeology",
    summary:
      "Investigating salt mining infrastructure and worker housing to understand Iron Age labor.",
    goal: 54000,
    currentFunding: 33780,
    startDate: "2025-06-08",
    endDate: "2025-08-05",
    exclusiveContent: "Backers unlock experimental salt brining demonstrations.",
    rewards: [
      "$21 Illustrated timeline of Hallstatt salt mining.",
      "$68 Packet of hand-harvested salt with artifact booklet.",
      "$195 Live-streamed walkthrough of the underground galleries."
    ]
  },
  {
    id: 20,
    title: "Heritage of the Great Zimbabwe Plateau",
    archaeologist: "Dr. Tariro Moyo",
    location: "Masvingo, Zimbabwe",
    country: "Zimbabwe",
    topic: "Urban Kingdoms",
    summary:
      "Conservation and excavation of elite enclosures to interpret trade, power, and architecture in Great Zimbabwe.",
    goal: 67000,
    currentFunding: 35840,
    startDate: "2025-05-04",
    endDate: "2025-07-16",
    exclusiveContent: "Supporters receive exclusive stone masonry tutorials and oral history sessions.",
    rewards: [
      "$29 Digital booklet on soapstone birds.",
      "$88 Hand-carved Shona soapstone pendant.",
      "$230 Invitation to a live conservation workshop from the site museum."
    ]
  },
  {
    id: 21,
    title: "Bioarchaeology of the Khmer Empire",
    archaeologist: "Dr. Sokha Phan",
    location: "Angkor Thom, Cambodia",
    country: "Cambodia",
    topic: "Bioarchaeology",
    summary:
      "Analyzing skeletal remains from Angkor hospitals to trace health, diet, and mobility during the Khmer Empire.",
    goal: 62000,
    currentFunding: 28890,
    startDate: "2025-01-18",
    endDate: "2025-03-28",
    exclusiveContent: "Backers get osteology masterclasses and isotopic data walkthroughs.",
    rewards: [
      "$24 Illustrated osteology quick reference.",
      "$82 Replica Khmer medical talisman.",
      "$215 Private Q&A with the bioarchaeology laboratory team."
    ]
  },
  {
    id: 22,
    title: "Tracing Silk Road Glass in Samarkand",
    archaeologist: "Dr. Dilshod Karimov",
    location: "Samarkand, Uzbekistan",
    country: "Uzbekistan",
    topic: "Silk Road",
    summary:
      "Excavating a glass workshop to map how artisans adapted techniques across the Silk Road.",
    goal: 55000,
    currentFunding: 30740,
    startDate: "2025-03-02",
    endDate: "2025-05-11",
    exclusiveContent: "Supporters receive exclusive furnace reconstructions and glassblowing lessons.",
    rewards: [
      "$23 Downloadable map of Silk Road glass trade routes.",
      "$72 Handcrafted glass bead set inspired by finds.",
      "$205 Invitation to a live-streamed glass casting session."
    ]
  },
  {
    id: 23,
    title: "Archaeoastronomy of Nabta Playa",
    archaeologist: "Dr. Leila Badawi",
    location: "Nabta Playa, Egypt",
    country: "Egypt",
    topic: "Archaeoastronomy",
    summary:
      "Recording alignments of megaliths and ceremonial features in the Sahara to model prehistoric sky observations.",
    goal: 41000,
    currentFunding: 20420,
    startDate: "2025-09-01",
    endDate: "2025-10-21",
    exclusiveContent: "Backers unlock star charting sessions under the desert sky.",
    rewards: [
      "$19 Celestial alignment infographics.",
      "$58 Desert night photography set.",
      "$180 Invitation to a live star-mapping workshop."
    ]
  },
  {
    id: 24,
    title: "Unearthing the City of Cahokia's Market",
    archaeologist: "Dr. Jeremy Whitecloud",
    location: "Collinsville, United States",
    country: "United States",
    topic: "Mississippian Culture",
    summary:
      "Geophysical survey and excavation of Cahokia's marketplace to reveal exchange networks across North America.",
    goal: 60000,
    currentFunding: 35560,
    startDate: "2025-04-22",
    endDate: "2025-07-01",
    exclusiveContent: "Supporters receive exclusive trading network visualizations.",
    rewards: [
      "$26 Market artifact field journal PDFs.",
      "$79 Limited edition screenprint of the city plan.",
      "$210 Invitation to a live mapping demonstration with the research team."
    ]
  },
  {
    id: 25,
    title: "Conserving the Palace of Merenid Fez",
    archaeologist: "Dr. Amina Idrissi",
    location: "Fez, Morocco",
    country: "Morocco",
    topic: "Islamic Architecture",
    summary:
      "Stabilizing intricate zellij tilework and carved plaster in a 14th-century palace complex.",
    goal: 69000,
    currentFunding: 44130,
    startDate: "2025-03-26",
    endDate: "2025-06-02",
    exclusiveContent: "Backers receive restoration time-lapse videos and artisan interviews.",
    rewards: [
      "$28 Photo essay of Fez craftsmanship.",
      "$86 Handmade ceramic tile inspired by palace motifs.",
      "$225 Private livestream with master artisans discussing restoration."
    ]
  },
  {
    id: 26,
    title: "Paleoindian Lifeways in Patagonia",
    archaeologist: "Dr. Valentina Ríos",
    location: "Santa Cruz Province, Argentina",
    country: "Argentina",
    topic: "Paleoindian",
    summary:
      "Surveying rock shelters and open-air camps to understand human adaptation after the last glacial maximum.",
    goal: 47000,
    currentFunding: 25590,
    startDate: "2025-11-02",
    endDate: "2026-01-18",
    exclusiveContent: "Supporters get exclusive paleoenvironment reconstructions and hunter-gatherer toolkit demos.",
    rewards: [
      "$22 Digital field guide to Patagonian paleoecology.",
      "$74 Replica obsidian blade necklace.",
      "$200 Invitation to a live experimental butchery session."
    ]
  },
  {
    id: 27,
    title: "Urban Archaeology of Roman Londinium",
    archaeologist: "Dr. Priya Chandrasekar",
    location: "London, United Kingdom",
    country: "United Kingdom",
    topic: "Roman Archaeology",
    summary:
      "Excavating a waterfront warehouse to explore trade goods flowing into Roman Britain.",
    goal: 58000,
    currentFunding: 30980,
    startDate: "2025-03-12",
    endDate: "2025-05-30",
    exclusiveContent: "Backers receive interactive imports database access and curator talks.",
    rewards: [
      "$25 Illustrated map of Roman Londinium.",
      "$82 Replica lead trading token.",
      "$215 Live-streamed artifact cleaning tutorial."
    ]
  },
  {
    id: 28,
    title: "Heritage Futures of the Bamiyan Valley",
    archaeologist: "Dr. Farah Sadat",
    location: "Bamiyan, Afghanistan",
    country: "Afghanistan",
    topic: "Heritage Preservation",
    summary:
      "3D documenting standing architecture and caves around the Bamiyan Buddhas to support community-based tourism.",
    goal: 52000,
    currentFunding: 24060,
    startDate: "2025-04-16",
    endDate: "2025-06-20",
    exclusiveContent: "Supporters unlock storytelling sessions with local guides and conservators.",
    rewards: [
      "$24 Virtual reality tour of the valley.",
      "$77 Handmade Hazara textile bookmark.",
      "$205 Private livestream about digital preservation workflows."
    ]
  },
  {
    id: 29,
    title: "Bronze Age Metallurgy of Lake Titicaca",
    archaeologist: "Dr. Julián Quispe",
    location: "Copacabana, Bolivia",
    country: "Bolivia",
    topic: "Metallurgy",
    summary:
      "Excavating lakeshore workshops to learn how metallurgists supplied ritual centers on the islands of the Sun and Moon.",
    goal: 50000,
    currentFunding: 26550,
    startDate: "2025-07-05",
    endDate: "2025-09-11",
    exclusiveContent: "Backers receive furnace reconstructions and alloy experiment videos.",
    rewards: [
      "$24 Metallurgy process infographic.",
      "$79 Handcrafted copper pendant inspired by finds.",
      "$208 Invitation to a live furnace firing experiment."
    ]
  },
  {
    id: 30,
    title: "Lamu Archipelago Swahili Households",
    archaeologist: "Dr. Fatima Mwinyi",
    location: "Lamu, Kenya",
    country: "Kenya",
    topic: "Indian Ocean Trade",
    summary:
      "Excavating household courtyards to explore Swahili domestic life and trade with Arabia and India.",
    goal: 54000,
    currentFunding: 27820,
    startDate: "2025-01-28",
    endDate: "2025-04-07",
    exclusiveContent: "Backers receive spice trade cooking classes and oral history recordings.",
    rewards: [
      "$23 Digital booklet on Swahili architectural elements.",
      "$74 Hand-carved wooden door keychain.",
      "$210 Live-streamed walking tour through Lamu Old Town."
    ]
  },
  {
    id: 31,
    title: "Protohistoric Hillforts of the Pyrenees",
    archaeologist: "Dr. Laia Serrat",
    location: "Catalonia, Spain",
    country: "Spain",
    topic: "Iron Age Europe",
    summary:
      "Excavating mountain hillforts to examine community defense strategies during Roman expansion.",
    goal: 47000,
    currentFunding: 21360,
    startDate: "2025-06-10",
    endDate: "2025-08-15",
    exclusiveContent: "Supporters get aerial surveys and tactical reconstructions.",
    rewards: [
      "$21 Illustrated hillfort cross-sections.",
      "$69 Locally woven Pyrenean scarf.",
      "$190 Invitation to a live roundtable with regional historians."
    ]
  },
  {
    id: 32,
    title: "Digital Atlas of the Hopewell Earthworks",
    archaeologist: "Dr. Nathaniel Fields",
    location: "Chillicothe, United States",
    country: "United States",
    topic: "Geospatial Archaeology",
    summary:
      "Combining LiDAR, drone, and archival data to create an open-access atlas of Hopewell ceremonial landscapes.",
    goal: 51000,
    currentFunding: 30210,
    startDate: "2025-02-15",
    endDate: "2025-04-26",
    exclusiveContent: "Backers receive GIS tutorials and downloadable data layers.",
    rewards: [
      "$24 Printable LiDAR poster.",
      "$78 Replica copper cutout ornament.",
      "$205 Invitation to a live geospatial analysis workshop."
    ]
  },
  {
    id: 33,
    title: "Ancestral Puebloan Water Management at Mesa Verde",
    archaeologist: "Dr. Elena Begay",
    location: "Mesa Verde, United States",
    country: "United States",
    topic: "Ancestral Puebloan",
    summary:
      "Studying check dams and reservoirs to understand resilience strategies during drought cycles.",
    goal: 52000,
    currentFunding: 28970,
    startDate: "2025-05-08",
    endDate: "2025-07-14",
    exclusiveContent: "Subscribers access exclusive drone surveys and water flow models.",
    rewards: [
      "$23 Water engineering infographic.",
      "$76 Handmade pottery shard pendant.",
      "$215 Invitation to a live panel with tribal advisors."
    ]
  },
  {
    id: 34,
    title: "The Roman Baths of Pautalia",
    archaeologist: "Dr. Ivana Kirova",
    location: "Kyustendil, Bulgaria",
    country: "Bulgaria",
    topic: "Classical Archaeology",
    summary:
      "Excavating thermal bath complexes to explore healing rituals and spa economies in Roman Thrace.",
    goal: 45000,
    currentFunding: 23840,
    startDate: "2025-04-04",
    endDate: "2025-06-09",
    exclusiveContent: "Backers receive hydrotherapy reconstructions and ancient recipe cards.",
    rewards: [
      "$20 Thermal bath architectural plans.",
      "$66 Herbal bath salt kit inspired by ancient blends.",
      "$185 Virtual visit to the bath complex with the excavation director."
    ]
  },
  {
    id: 35,
    title: "Timbuktu Manuscript Conservation Lab",
    archaeologist: "Dr. Seydou Traoré",
    location: "Timbuktu, Mali",
    country: "Mali",
    topic: "Manuscript Conservation",
    summary:
      "Preserving desert libraries through humidity-controlled storage and digitization training for local archivists.",
    goal: 61000,
    currentFunding: 39400,
    startDate: "2025-02-05",
    endDate: "2025-04-20",
    exclusiveContent: "Supporters unlock paleography lessons and digitized manuscripts.",
    rewards: [
      "$26 Calligraphy practice sheets inspired by Timbuktu scripts.",
      "$84 Handmade leather bookmark from local artisans.",
      "$220 Invitation to a private digitization demonstration."
    ]
  },
  {
    id: 36,
    title: "Ceramic Stories of the Khmer Rouge Era",
    archaeologist: "Dr. Dara Im",
    location: "Battambang, Cambodia",
    country: "Cambodia",
    topic: "Contemporary Archaeology",
    summary:
      "Documenting clandestine ceramic production during the 1970s to understand survival and resistance.",
    goal: 32000,
    currentFunding: 15480,
    startDate: "2025-03-25",
    endDate: "2025-05-15",
    exclusiveContent: "Backers receive oral histories and kiln site mapping walkthroughs.",
    rewards: [
      "$17 Survivor story zine.",
      "$55 Handmade ceramic cup inspired by recovered forms.",
      "$170 Invitation to a virtual dialogue with community partners."
    ]
  },
  {
    id: 37,
    title: "Digital Heritage of the Benin Bronzes",
    archaeologist: "Dr. Ifeoma Okoye",
    location: "Benin City, Nigeria",
    country: "Nigeria",
    topic: "Digital Repatriation",
    summary:
      "Creating high-resolution scans and VR experiences of repatriated Benin Bronzes for global access and local education.",
    goal: 68000,
    currentFunding: 42150,
    startDate: "2025-01-30",
    endDate: "2025-04-12",
    exclusiveContent: "Supporters gain early access to VR galleries and artist interviews.",
    rewards: [
      "$27 Bronze casting history booklet.",
      "$89 Handcrafted brass pendant from local guilds.",
      "$230 Invitation to a live sculpting demonstration."
    ]
  },
  {
    id: 38,
    title: "Seafaring Stories of Lapita Navigators",
    archaeologist: "Dr. Kainoa Ulu",
    location: "Vanuatu Archipelago, Vanuatu",
    country: "Vanuatu",
    topic: "Pacific Voyaging",
    summary:
      "Excavating Lapita sites and recording navigation knowledge with community voyaging societies.",
    goal: 53000,
    currentFunding: 24670,
    startDate: "2025-08-22",
    endDate: "2025-10-30",
    exclusiveContent: "Backers receive canoe carving tutorials and star navigation charts.",
    rewards: [
      "$23 Lapita pottery motif coloring book.",
      "$76 Handwoven pandanus bracelet.",
      "$205 Invitation to a live vaka (canoe) building session."
    ]
  },
  {
    id: 39,
    title: "Ice Age Art of the Ural Mountains",
    archaeologist: "Dr. Olga Kuznetsova",
    location: "Kapova Cave, Russia",
    country: "Russia",
    topic: "Paleolithic Art",
    summary:
      "Documenting endangered cave art with multispectral imaging to capture fading ochre figures.",
    goal: 49000,
    currentFunding: 27540,
    startDate: "2025-01-12",
    endDate: "2025-03-22",
    exclusiveContent: "Backers unlock virtual cave tours and pigment analysis breakdowns.",
    rewards: [
      "$21 Cave art poster set.",
      "$70 Ochre pigment sample kit with context booklet.",
      "$198 Invitation to a live imaging control room session."
    ]
  },
  {
    id: 40,
    title: "Harappan Coastal Harbors of Dholavira",
    archaeologist: "Dr. Arjun Patel",
    location: "Khadirbet, India",
    country: "India",
    topic: "Harappan Civilization",
    summary:
      "Exploring Dholavira's water reservoirs and harbor facilities to understand maritime trade links.",
    goal: 62000,
    currentFunding: 35880,
    startDate: "2025-02-27",
    endDate: "2025-05-09",
    exclusiveContent: "Backers receive hydro-engineering simulations and virtual reservoir tours.",
    rewards: [
      "$25 Reservoir engineering infographic.",
      "$82 Terracotta seal replica and certificate.",
      "$215 Invitation to a live drone mapping demonstration."
    ]
  },
  {
    id: 41,
    title: "Cultural Landscapes of the Sami Reindeer Routes",
    archaeologist: "Dr. Linnea Jokikangas",
    location: "Finnmark, Norway",
    country: "Norway",
    topic: "Ethnoarchaeology",
    summary:
      "Documenting traditional reindeer migration routes and associated archaeological features in the Arctic Circle.",
    goal: 44000,
    currentFunding: 20430,
    startDate: "2025-04-18",
    endDate: "2025-06-25",
    exclusiveContent: "Supporters receive seasonal migration diaries and joik music recordings.",
    rewards: [
      "$19 Illustrated migration route map.",
      "$62 Handcrafted reindeer leather key fob.",
      "$180 Invitation to a live campfire storytelling session."
    ]
  },
  {
    id: 42,
    title: "The Forgotten Synagogues of Salonica",
    archaeologist: "Dr. Rachel Ben-Tov",
    location: "Thessaloniki, Greece",
    country: "Greece",
    topic: "Jewish Diaspora",
    summary:
      "Archival and archaeological work to reconstruct pre-war Sephardic synagogues destroyed during WWII.",
    goal: 37000,
    currentFunding: 21980,
    startDate: "2025-01-26",
    endDate: "2025-04-04",
    exclusiveContent: "Backers receive storytelling podcasts and digital architectural reconstructions.",
    rewards: [
      "$18 Illustrated synagogue floor plan set.",
      "$58 Limited edition print of Ladino liturgical poetry.",
      "$170 Invitation to a live memorial lecture with descendants."
    ]
  },
  {
    id: 43,
    title: "Reconstructing the Aztec Chinampas",
    archaeologist: "Dr. Ximena Flores",
    location: "Xochimilco, Mexico",
    country: "Mexico",
    topic: "Agricultural Systems",
    summary:
      "Geoarchaeological coring and community farming experiments to revive chinampa agriculture.",
    goal: 48000,
    currentFunding: 30110,
    startDate: "2025-03-05",
    endDate: "2025-05-22",
    exclusiveContent: "Backers gain access to growing guides and chef-led cooking demos.",
    rewards: [
      "$22 Chinampa gardening starter guide.",
      "$68 Organic produce box voucher (local supporters).",
      "$195 Invitation to a live canal boat tour and Q&A."
    ]
  },
  {
    id: 44,
    title: "Desert Monasteries of the Judean Hills",
    archaeologist: "Dr. Yonatan Azulay",
    location: "Judean Desert, Israel",
    country: "Israel",
    topic: "Byzantine Monasticism",
    summary:
      "Excavating cliffside monasteries to understand monastic life and pilgrim networks in Late Antiquity.",
    goal: 55000,
    currentFunding: 28660,
    startDate: "2025-09-10",
    endDate: "2025-11-18",
    exclusiveContent: "Supporters receive exclusive choir chant recordings from reconstructed chapels.",
    rewards: [
      "$24 Illustrated monastery timeline.",
      "$80 Handcrafted olive wood cross.",
      "$215 Invitation to a live cliffside drone survey briefing."
    ]
  },
  {
    id: 45,
    title: "Lunar Landscapes of the Moche Moon Pyramid",
    archaeologist: "Dr. Renata Salazar",
    location: "Trujillo, Peru",
    country: "Peru",
    topic: "Moche Civilization",
    summary:
      "Excavating the Huaca de la Luna plazas to interpret ritual performance and lunar iconography.",
    goal: 66000,
    currentFunding: 37890,
    startDate: "2025-04-14",
    endDate: "2025-06-30",
    exclusiveContent: "Backers receive high-resolution mural studies and iconography seminars.",
    rewards: [
      "$27 Moche iconography coloring book.",
      "$86 Hand-painted ceramic shard replica.",
      "$230 Invitation to a live ritual re-enactment discussion."
    ]
  },
  {
    id: 46,
    title: "Submerged Neolithic Landscapes of the Solent",
    archaeologist: "Dr. Harriet Cole",
    location: "Solent, United Kingdom",
    country: "United Kingdom",
    topic: "Underwater Archaeology",
    summary:
      "Diving to map submerged forests and habitation sites drowned after the last glacial period.",
    goal: 73000,
    currentFunding: 39220,
    startDate: "2025-07-18",
    endDate: "2025-09-25",
    exclusiveContent: "Members access sonar mosaics and dive log commentaries.",
    rewards: [
      "$30 Underwater site poster.",
      "$92 Handcrafted silver wave pendant.",
      "$245 Live-streamed dive with commentary from the seabed."
    ]
  },
  {
    id: 47,
    title: "Nomadic Empires of the Mongolian Steppe",
    archaeologist: "Dr. Batbayar Enkh",
    location: "Orkhon Valley, Mongolia",
    country: "Mongolia",
    topic: "Steppe Archaeology",
    summary:
      "Excavating elite burial mounds and seasonal camps to trace mobility during the Xiongnu and Mongol empires.",
    goal: 65000,
    currentFunding: 31840,
    startDate: "2025-05-22",
    endDate: "2025-08-03",
    exclusiveContent: "Backers receive horseback archery demos and steppe storytelling nights.",
    rewards: [
      "$26 Mobility route illustrated map.",
      "$84 Handcrafted felt pouch.",
      "$225 Invitation to a live yurt-building workshop."
    ]
  },
  {
    id: 48,
    title: "Archaeology of the Maroon Trails",
    archaeologist: "Dr. Anika James",
    location: "Blue Mountains, Jamaica",
    country: "Jamaica",
    topic: "Resistance Landscapes",
    summary:
      "Documenting hideouts, provision grounds, and trails used by Maroon communities resisting enslavement.",
    goal: 43000,
    currentFunding: 20890,
    startDate: "2025-02-12",
    endDate: "2025-04-21",
    exclusiveContent: "Backers receive oral history recordings and Maroon music sessions.",
    rewards: [
      "$20 Trail system map download.",
      "$66 Handcrafted calabash pendant.",
      "$185 Invitation to a live storytelling hike broadcast."
    ]
  },
  {
    id: 49,
    title: "Stone Town of Kilwa Kisiwani Revitalization",
    archaeologist: "Dr. Hassan Ally",
    location: "Kilwa Kisiwani, Tanzania",
    country: "Tanzania",
    topic: "World Heritage Stewardship",
    summary:
      "Stabilizing coral rag architecture and training youth heritage stewards on the Swahili Coast.",
    goal: 58000,
    currentFunding: 33240,
    startDate: "2025-01-22",
    endDate: "2025-04-01",
    exclusiveContent: "Supporters access conservation masterclasses and oral history documentaries.",
    rewards: [
      "$24 Coral rag architecture illustrated guide.",
      "$80 Hand-carved dhow miniature.",
      "$215 Invitation to a live skills training session."
    ]
  },
  {
    id: 50,
    title: "Unearthing the Bronze Drums of Đông Sơn",
    archaeologist: "Dr. Lê Minh Anh",
    location: "Thanh Hóa, Vietnam",
    country: "Vietnam",
    topic: "Southeast Asian Archaeology",
    summary:
      "Excavating a burial mound complex to learn how bronze drums signified power and identity.",
    goal: 56000,
    currentFunding: 28760,
    startDate: "2025-03-30",
    endDate: "2025-06-08",
    exclusiveContent: "Backers receive bronze casting videos and drum music recordings.",
    rewards: [
      "$23 Bronze drum pattern poster.",
      "$78 Handcrafted lacquer bookmark.",
      "$205 Invitation to a live percussion performance from the field museum."
    ]
  },
  {
    id: 51,
    title: "Guardians of the Petra Siq",
    archaeologist: "Dr. Rana Haddadin",
    location: "Petra, Jordan",
    country: "Jordan",
    topic: "Site Management",
    summary:
      "Monitoring erosion in the Siq with 3D scanning and training local guides in conservation-first tourism.",
    goal: 48000,
    currentFunding: 24150,
    startDate: "2025-02-18",
    endDate: "2025-04-27",
    exclusiveContent: "Supporters unlock exclusive walkthroughs of scanning missions.",
    rewards: [
      "$21 Siq erosion monitoring report.",
      "$70 Hand-painted sandstone coaster.",
      "$190 Invitation to a live conservation roundtable with local guides."
    ]
  },
  {
    id: 52,
    title: "Saharan Caravanserai of Taghaza",
    archaeologist: "Dr. Mariam El-Ghazi",
    location: "Taghaza, Morocco",
    country: "Morocco",
    topic: "Trade Networks",
    summary:
      "Excavating salt caravan stations to understand logistics of medieval trans-Saharan trade.",
    goal: 45000,
    currentFunding: 21160,
    startDate: "2025-10-05",
    endDate: "2025-12-12",
    exclusiveContent: "Backers receive caravan diary dramatizations and route maps.",
    rewards: [
      "$19 Salt trade infographic.",
      "$66 Artisan-carved camel bone pendant.",
      "$185 Invitation to a live storytelling session from the desert camp."
    ]
  }
];

const searchInput = document.getElementById("search-input");
const topicSelect = document.getElementById("topic-select");
const locationSelect = document.getElementById("location-select");
const yearInput = document.getElementById("year-input");
const projectsGrid = document.getElementById("projects-grid");
const projectCount = document.getElementById("project-count");
const filterForm = document.getElementById("filter-form");
const resetButton = document.getElementById("reset-button");
const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(amount);
}

function populateFilters() {
  const topics = Array.from(new Set(projects.map((project) => project.topic))).sort();
  const countries = Array.from(new Set(projects.map((project) => project.country))).sort();

  topics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    topicSelect.append(option);
  });

  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    locationSelect.append(option);
  });
}

const profileImageCache = new Map();

const profilePalettes = [
  { background: "#f8e7d0", accent: "#c3732b", secondary: "#f1c480", detail: "#2f2618", sky: "#ecd2a8" },
  { background: "#f2efe4", accent: "#946327", secondary: "#d9b56d", detail: "#35281b", sky: "#d5c6a3" },
  { background: "#f5dcbf", accent: "#b16622", secondary: "#f0b988", detail: "#3b2a1e", sky: "#d9a86c" },
  { background: "#efe3cf", accent: "#8d5a2b", secondary: "#d4b074", detail: "#2d2318", sky: "#cdbb91" },
  { background: "#f3e7d3", accent: "#b76f30", secondary: "#e6c58e", detail: "#3a2c1d", sky: "#d7b68c" }
];

const profileVariants = ["portrait", "action"];

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function createPortraitSvg(name, palette) {
  const initials = name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${palette.sky}" />
          <stop offset="100%" stop-color="${palette.background}" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" fill="url(#bg)" />
      <circle cx="60" cy="60" r="46" fill="${palette.background}" opacity="0.85" />
      <path d="M40 82c6-8 12-12 20-12s14 4 20 12l-12 22H52z" fill="${palette.secondary}" />
      <path d="M44 60c0-16 8-26 16-26s16 10 16 26-8 24-16 24-16-8-16-24z" fill="${palette.detail}" opacity="0.82" />
      <path d="M38 54l10-22h24l10 22-8-6H46z" fill="${palette.accent}" />
      <text x="60" y="110" font-family="'Cinzel', serif" font-size="20" fill="${palette.detail}" text-anchor="middle" opacity="0.55">${initials}</text>
    </svg>
  `;
}

function createActionSvg(palette) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-hidden="true">
      <rect width="120" height="120" fill="${palette.sky}" />
      <path d="M0 90h120v30H0z" fill="${palette.background}" />
      <path d="M12 94c18-12 36-18 58-10s32 2 38-6v42H12z" fill="${palette.secondary}" opacity="0.7" />
      <path d="M56 70l12-12 12 14-8 6z" fill="${palette.accent}" opacity="0.85" />
      <circle cx="70" cy="44" r="10" fill="${palette.detail}" opacity="0.82" />
      <path d="M62 54l-16 12 10 28 12-8 6 18 10-4-8-24 18-14-6-8-14 10z" fill="${palette.detail}" />
      <path d="M24 102l26-14 6 12-18 10H24z" fill="${palette.accent}" opacity="0.75" />
      <path d="M92 38l12-6" stroke="${palette.accent}" stroke-width="4" stroke-linecap="round" />
      <path d="M18 38l18 6" stroke="${palette.accent}" stroke-width="4" stroke-linecap="round" opacity="0.6" />
    </svg>
  `;
}

function generateProfileImageData(name) {
  const hash = hashString(name);
  const palette = profilePalettes[hash % profilePalettes.length];
  const variant = profileVariants[hash % profileVariants.length];
  const svg = variant === "portrait" ? createPortraitSvg(name, palette) : createActionSvg(palette);
  const encoded = btoa(svg);
  const descriptions = {
    portrait: "Professional portrait photograph",
    action: "Action photograph of the researcher on site"
  };

  return {
    src: `data:image/svg+xml;base64,${encoded}`,
    description: descriptions[variant]
  };
}

function getProfileImage(name) {
  if (profileImageCache.has(name)) {
    return profileImageCache.get(name);
  }
  const imageData = generateProfileImageData(name);
  profileImageCache.set(name, imageData);
  return imageData;
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";
  article.tabIndex = 0;

  const { src, description } = getProfileImage(project.archaeologist);

  const researcher = document.createElement("div");
  researcher.className = "researcher";

  const avatar = document.createElement("img");
  avatar.src = src;
  avatar.alt = `${description} of ${project.archaeologist}`;
  avatar.loading = "lazy";

  const researcherDetails = document.createElement("div");
  const nameEl = document.createElement("p");
  nameEl.className = "researcher-name";
  nameEl.textContent = project.archaeologist;

  const roleEl = document.createElement("p");
  roleEl.className = "researcher-role";
  roleEl.textContent = "Lead archaeologist";

  researcherDetails.append(nameEl, roleEl);
  researcher.append(avatar, researcherDetails);

  const title = document.createElement("h3");
  title.textContent = project.title;

  const summary = document.createElement("p");
  summary.textContent = project.summary;

  const meta = document.createElement("div");
  meta.className = "project-meta";
  meta.innerHTML = `
    <span>${project.location}</span>
    <span>${project.topic}</span>
    <span>${new Date(project.startDate).getFullYear()} field season</span>
  `;

  const funding = document.createElement("div");
  funding.innerHTML = `
    <strong>${formatCurrency(project.currentFunding)}</strong> raised of ${formatCurrency(
      project.goal
    )} goal
  `;

  const progress = Math.min(Math.round((project.currentFunding / project.goal) * 100), 100);
  const progressBar = document.createElement("div");
  progressBar.className = "funding-bar";
  progressBar.innerHTML = `<span style="width: ${progress}%"></span>`;

  const exclusive = document.createElement("div");
  exclusive.className = "exclusive-tag";
  exclusive.innerHTML = `<span aria-hidden="true">✨</span> Exclusive: ${project.exclusiveContent}`;

  const rewardsList = document.createElement("ul");
  rewardsList.className = "rewards";
  rewardsList.setAttribute("aria-label", "Reward tiers");
  project.rewards.forEach((reward) => {
    const item = document.createElement("li");
    item.textContent = reward;
    rewardsList.append(item);
  });

  article.append(researcher, title, meta, summary, funding, progressBar, exclusive, rewardsList);
  return article;
}

function renderProjects(list) {
  projectsGrid.innerHTML = "";

  if (!list.length) {
    const empty = document.createElement("p");
    empty.textContent = "No projects match your filters yet. Try adjusting your search.";
    projectsGrid.append(empty);
    projectCount.textContent = "0 projects found";
    return;
  }

  const fragment = document.createDocumentFragment();
  list.forEach((project) => {
    fragment.append(createProjectCard(project));
  });
  projectsGrid.append(fragment);

  projectCount.textContent = `${list.length} project${list.length === 1 ? "" : "s"} available`;
}

function applyFilters(event) {
  if (event) {
    event.preventDefault();
  }

  const searchTerm = searchInput.value.trim().toLowerCase();
  const topic = topicSelect.value;
  const country = locationSelect.value;
  const year = yearInput.value.trim();

  const filtered = projects.filter((project) => {
    const matchesSearch = !searchTerm
      ? true
      : [
          project.title,
          project.archaeologist,
          project.summary,
          project.topic,
          project.location,
          project.exclusiveContent,
          project.rewards.join(" ")
        ]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm);

    const matchesTopic = topic ? project.topic === topic : true;
    const matchesCountry = country ? project.country === country : true;
    const matchesYear = year
      ? new Date(project.startDate).getFullYear() === Number.parseInt(year, 10)
      : true;

    return matchesSearch && matchesTopic && matchesCountry && matchesYear;
  });

  renderProjects(filtered);
}

filterForm.addEventListener("submit", applyFilters);
resetButton.addEventListener("click", () => {
  searchInput.value = "";
  topicSelect.value = "";
  locationSelect.value = "";
  yearInput.value = "";
  renderProjects(projects);
});

populateFilters();
renderProjects(projects);
