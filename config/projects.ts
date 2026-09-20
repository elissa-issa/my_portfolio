import {
  ValidCategory,
  ValidExpType,
  ValidPortfolioCategory,
  ValidSkills,
} from "./constants";

interface PagesInfoDocumentInterface {
  label: string;
  href: string;
}

interface PagesInfoInterface {
  title: string;
  imgArr?: string[];
  // Optional gameplay/demo clips for this page section (e.g. game projects).
  // Rendered as native <video> players alongside imgArr on the project page.
  videoArr?: string[];
  // Optional downloadable/viewable documents (PDFs) for this section —
  // rendered as clearly labeled buttons, since a PDF can't be embedded as
  // an image. Use this instead of (or alongside) the top-level websiteLink
  // when a project has more than one document to surface.
  documentArr?: PagesInfoDocumentInterface[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  // Top-level split used by the Projects page tabs: "development" for
  // web/mobile/game dev (code-based) work, "creative" for 3D, branding,
  // sound/audiovisual, UI/UX, and video/photo editing (design & multimedia) work.
  portfolioCategory: ValidPortfolioCategory;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "bitecheck",
    companyName: "BiteCheck",
    githubLink: "https://github.com/elissa-issa/food-product-analyzer",
    type: "Personal",
    portfolioCategory: "development",
    category: ["Mobile Dev", "Full Stack", "Backend"],
    shortDescription:
      "Built a Flutter and Node/Express food safety app that scans ingredient labels via OCR and flags allergens against each user's personal dietary profile.",
    techStack: [
      "Flutter",
      "Dart",
      "Node.js",
      "express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tesseract.js",
    ],
    startDate: new Date("2026-06-01"),
    endDate: new Date("2026-06-01"),
    companyLogoImg: "/projects/bitecheck/logo.png",
    pagesInfoArr: [
      {
        title: "Onboarding & Authentication",
        description:
          "Welcome flow and email/password auth screens backed by JWT and bcrypt-hashed credentials.",
        imgArr: [
          "/projects/bitecheck/onboarding_1.png",
          "/projects/bitecheck/onboarding_2.png",
          "/projects/bitecheck/onboarding_3.png",
        ],
      },
      {
        title: "Personalized Safety Profile Setup",
        description:
          "A 4-step onboarding flow that captures lifestyle preferences (vegan, gluten-free, halal, etc.) and allergies, including a searchable custom-allergy field, to configure the analysis engine per user.",
        imgArr: [
          "/projects/bitecheck/personalization_1.png",
          "/projects/bitecheck/personalization_2.png",
          "/projects/bitecheck/personalization_3.png",
          "/projects/bitecheck/personalization_5.png",
        ],
      },
      {
        title: "OCR Label Scanning & Ingredient Analysis",
        description:
          "Camera/upload capture sent to a Tesseract.js OCR endpoint, with extracted ingredients reviewed, saved, and run through a rule-based engine that returns a quality score, risk flags, and per-ingredient warnings.",
        imgArr: [
          "/projects/bitecheck/scan_1.png",
          "/projects/bitecheck/scan_2.png",
          "/projects/bitecheck/scan_3.png",
          "/projects/bitecheck/scan_4.png",
          "/projects/bitecheck/scan_5.png",
        ],
      },
      {
        title: "Home & Discover",
        description:
          "A dashboard of recent scans and personalized recommendations, plus store and product search/discovery with live safety scores for each result.",
        imgArr: [
          "/projects/bitecheck/discover_1.png",
          "/projects/bitecheck/discover_2.png",
          "/projects/bitecheck/discover_3.png",
          "/projects/bitecheck/discover_4.png",
        ],
      },
      {
        title: "Profile & Product Detail",
        description:
          "Account and health-profile management alongside a detailed product view showing quality score, matched restrictions, and a personalized safety verdict.",
        imgArr: [
          "/projects/bitecheck/profile_1.png",
          "/projects/bitecheck/profile_2.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "BiteCheck is a food safety app I built to solve a problem a lot of people with allergies and dietary restrictions run into every day: reading a crowded ingredient label and trying to figure out, on the spot, whether a product is actually safe to eat. The app pairs a Flutter mobile front end with a Node.js/Express API and a MongoDB database to turn that guesswork into a clear, personalized verdict.",
        "At the core of the app is a scan flow: users photograph or upload an ingredient label, the backend runs it through Tesseract.js OCR, and the extracted text is cleaned up into a structured ingredient list the user can review and correct before analysis. From there, a rule-based engine I designed cross-references the ingredients against a library of ingredient rules and each user's selected allergies and lifestyle preferences (vegan, gluten-free, halal, lactose-free, and more), returning a quality score, a safe/caution/unsafe verdict, and explainable, per-ingredient warnings.",
        "Beyond scanning, BiteCheck lets users save scan history, favorite products, and discover other products and nearby stores, with every result personalized to their own restrictions. I modeled the data in MongoDB with Mongoose across users, products, stores, restrictions, ingredient rules, favorites, and scan history, and secured the API with JWT authentication and bcrypt password hashing. User-submitted products start in a pending state and go through an admin moderation step before appearing in the public catalog, which keeps the crowdsourced data trustworthy as it grows.",
      ],
      bullets: [
        "Built a Flutter mobile app covering onboarding, authentication, scanning, discovery, favorites, history, and profile management.",
        "Designed REST APIs in Express with JWT authentication, bcrypt password hashing, and role-based admin authorization.",
        "Integrated Tesseract.js OCR to extract ingredient text directly from photographed or uploaded product labels.",
        "Built a deterministic, rule-based ingredient-analysis engine with aliases, severity levels, and personalized scoring.",
        "Modeled MongoDB collections with Mongoose for users, products, stores, restrictions, ingredient rules, favorites, and scan history.",
        "Added an admin moderation workflow so user-scanned products are reviewed before joining the public catalog.",
        "Wrote backend unit tests covering the ingredient-analysis and warning-deduplication logic.",
      ],
    },
  },
  {
    id: "smart-inventory",
    companyName: "Smart Inventory",
    type: "Personal",
    portfolioCategory: "development",
    category: ["Full Stack", "Web Dev", "AI/ML"],
    shortDescription:
      "A full-stack plant inventory app that classifies plant photos with a fine-tuned PyTorch model and predicts prices with a scikit-learn pipeline, built with React, FastAPI, and MongoDB/GridFS.",
    techStack: [
      "React",
      "Typescript",
      "Vite",
      "React Router",
      "Material UI",
      "FastAPI",
      "Python",
      "MongoDB",
      "GridFS",
      "PyTorch",
      "scikit-learn",
    ],
    startDate: new Date("2025-12-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/smart-inventory/analyzer_1.png",
    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "A landing dashboard summarizing total inventory as a donut chart broken down by plant category, alongside quick access to the plant identifier.",
        imgArr: [
          "/projects/smart-inventory/dashboard_1.png",
        ],
      },
      {
        title: "Inventory Management",
        description:
          "A product table grouped by category with inline quantity and price editing, predicted-vs-modified price columns, and contextual fields like month and occasion carried over from each product's analysis.",
        imgArr: [
          "/projects/smart-inventory/inventory_3.png",
        ],
      },
      {
        title: "Plant Analyzer & AI Classification",
        description:
          "Upload or capture a plant photo to run it through a fine-tuned EfficientNet-B0 classifier and a scikit-learn price model, review the predicted species, confidence score, and price, get flagged on matching products already in stock, and handle unrecognized images gracefully.",
        imgArr: [
          "/projects/smart-inventory/analyzer_1.png",
          "/projects/smart-inventory/analyzer_2.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Smart Inventory is a full-stack plant inventory system I built to explore combining a real CRUD application with computer vision and machine learning, using a React/TypeScript frontend and a FastAPI/MongoDB backend. It's aimed at a nursery- or plant-shop-style workflow, where someone needs to add stock quickly, keep visual records of products, and get a fair price estimate without looking everything up by hand.",
        "The centerpiece is the plant analyzer: a user photographs or uploads a plant image, and the backend runs it through a fine-tuned EfficientNet-B0 model (PyTorch/Torchvision) to classify the species and map it to a product category. That result, along with contextual inputs like size, season, and occasion, is fed into a scikit-learn pipeline (one-hot encoding plus a RandomForestRegressor) that predicts a price. Both models were trained separately in notebooks and loaded directly into the API for local inference, so the whole classify-and-price flow runs without any external AI service calls.",
        "On the product side, inventory data lives in MongoDB, while uploaded plant images are stored and streamed through GridFS rather than the filesystem. The backend follows a controller/service/repository structure with Pydantic-validated DTOs, and the API also handles duplicate detection, flagging when a newly analyzed plant matches a product that's already in stock so the user can update quantity instead of creating a duplicate entry. The React dashboard ties it together with a category breakdown chart, an editable inventory table, and the analyzer flow itself.",
      ],
      bullets: [
        "Built a React, TypeScript, and MUI frontend with a dashboard, editable inventory table, and plant analyzer flow.",
        "Built FastAPI REST endpoints for product listing, creation, updates, deletion, duplicate detection, and image streaming.",
        "Integrated a fine-tuned EfficientNet-B0 PyTorch model for plant image classification.",
        "Integrated a scikit-learn RandomForest pipeline for context-aware price prediction.",
        "Modeled inventory data in MongoDB and stored/streamed product images through GridFS.",
        "Structured the backend with a controller/service/repository pattern and Pydantic DTO validation.",
        "Implemented duplicate-product detection so re-scanned plants update existing stock instead of creating new entries.",
      ],
    },
  },
  {
    id: "castle-escape",
    companyName: "Castle Escape",
    type: "Personal",
    portfolioCategory: "development",
    category: ["Game Dev"],
    shortDescription:
      "A four-level 3D escape/adventure game built in Unity and C#, where players find a hidden key, solve a potion-brewing puzzle, survive waves of enemies, and fight a guard to escape the castle.",
    techStack: ["Unity", "C#"],
    startDate: new Date("2026-07-01"),
    endDate: new Date("2026-07-01"),
    companyLogoImg: "/projects/castle-escape/logo.png",
    pagesInfoArr: [
      {
        title: "Main Menu",
        description:
          "A level-select menu that loads any of the four levels directly or quits the game, built with Unity UI over a hand-painted title screen.",
        imgArr: ["/projects/castle-escape/menu.png"],
      },
      {
        title: "Level 1 — The Locked Room",
        description:
          "The player wakes up trapped in a room, searches for a randomly spawned key, and picks the lock on the door to move on — driven by a KeySpawner, KeyPickup, and a singleton Level1WinManager handling UI, effects, and the scene transition.",
        imgArr: ["/projects/castle-escape/level1.png"],
      },
      {
        title: "Level 2 & 3 — Potion Puzzle & Combat",
        description:
          "Level 2 has the player collect ingredients and brew a potion in the correct order against hints and limited trials; Level 3 then throws Rock, Bottle, and Magic Orb projectiles at waves of bats, slimes, and ghosts, each with their own weaknesses, while a heart-based health system tracks survival.",
        imgArr: ["/projects/castle-escape/level2.png"],
      },
      {
        title: "Level 4 — Final Guard Fight",
        description:
          "A one-on-one fight against the castle guard with step movement, punches, ducking, and a counter window against the guard's combo attacks and stamina-driven behavior, ending in a win/lose panel with retry and menu options.",
        imgArr: ["/projects/castle-escape/level4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Castle Escape is a 3D Unity game I built in C# as a level-based escape/adventure game: a peasant girl wakes up trapped in a castle and has to make it out through four sequential rooms, each built around a different mechanic. It's structured as a straightforward main-menu-to-level flow, but every level required its own systems: a key hunt, an inventory-and-recipe puzzle, a wave-based combat encounter, and a final one-on-one boss fight.",
        "Level 1 is a search-and-unlock room built around a KeySpawner and KeyPickup, reported to a singleton Level1WinManager that handles the win UI, particle effects, and the scene transition to Level 2. Level 2 turns into an inventory puzzle: the player collects ingredients scattered around the room and feeds them into a PotionPotManager that validates the brew order against a recipe, tracks hearts/trials, and surfaces hints when the player gets stuck. Level 3 shifts into combat — the player picks a weapon (Rock, Bottle, or Magic Orb), throws projectiles at bats, slimes, and ghosts spawned by a Level3EnemySpawner with an increasing spawn rate, and each enemy type has its own weaknesses and stun behavior against the different weapons.",
        "The final level is a scripted one-on-one guard fight: Level4GuardController runs a coroutine-based attack loop that alternates punches and combo attacks, opens a short counter window, and slows down as the guard's stamina depletes, while Level4PlayerController handles step movement, punching, ducking, and hit reactions. Across all four levels I leaned on Unity's Animator for character and combat animation, Rigidbody and trigger colliders for movement and pickups, UGUI/TextMesh Pro for menus and HUD, and AudioSource/ParticleSystem for feedback on key moments like collection, wins, and losses, and shipped it as a Windows standalone build.",
      ],
      bullets: [
        "Built a four-level Unity game with a main menu, level-select flow, and per-level intro panels.",
        "Implemented a key-hunt puzzle with randomized spawn points and a singleton win-state manager.",
        "Built an ingredient-collection and potion-brewing puzzle with recipe validation, hints, and limited trials.",
        "Designed a projectile combat system with three weapon types, enemy weaknesses, stun states, and a scaling enemy spawner.",
        "Scripted a final boss fight with coroutine-driven attack patterns, a counter-window mechanic, and stamina-based pacing.",
        "Integrated Unity's Animator, Rigidbody physics, UGUI/TextMesh Pro, AudioSource, and ParticleSystem across all four levels.",
        "Shipped a Windows standalone build of the finished game.",
      ],
    },
  },
  {
    id: "eventful",
    companyName: "Eventful",
    githubLink: "https://github.com/elissa-issa/Eventful",
    type: "Personal",
    portfolioCategory: "development",
    category: ["Full Stack", "Web Dev", "AI/ML"],
    shortDescription:
      "A full-stack event-planning marketplace for browsing venues, menus, decorations, and entertainment, saving collections, checking out orders, and generating catalog-grounded AI event plans with Google Gemini.",
    techStack: [
      "React",
      "Vite",
      "React Router",
      "Material UI",
      "express.js",
      "MongoDB",
      "Mongoose",
      "Google Gemini",
    ],
    startDate: new Date("2026-08-01"),
    endDate: new Date("2026-08-01"),
    // TODO: no screenshots were provided yet — replace with a real cover
    // image once you have one (see the note in pagesInfoArr below).
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Screenshots & Demo — Coming Soon",
        description:
          "No screenshots were provided for this project yet, so this section uses a placeholder image — swap it for real screenshots of the marketplace, cart/checkout, and AI planner whenever you have them. Two local screen recordings exist (~130MB and ~92MB) but were intentionally left out of the repo: a single file that large exceeds GitHub's 100MB push limit. Host them externally (YouTube, Drive, etc.) and this project can link out to them, or compress them and add as videoArr like Castle Escape.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Eventful is a full-stack event-planning marketplace where users can browse and book real event services — venues, catering menus, decorations, entertainment, and prebuilt bundles — then save favorites, build collections or fully customized plans, check delivery locations, check out orders, and leave reviews. I built the frontend as a React and Vite single-page app with Material UI and React Router, and the backend as an Express REST API on MongoDB via Mongoose, with custom Bearer-token authentication (HMAC-signed tokens, PBKDF2 password hashing) instead of pulling in a full auth framework.",
        "The part I'm most proud of is the premium AI planner. Rather than letting an LLM freely invent event suggestions, the backend loads the real venues, menus, decorations, entertainment, and bundles currently in MongoDB, sends that catalog together with the user's prompt to Google Gemini (gemini-2.5-flash), and requires a structured JSON response. Every recommended item is then validated against the actual service catalog before it's returned, so the plan the user sees is grounded in bookable services rather than hallucinated ones — and premium-gated on both the frontend and backend.",
        "Beyond the AI feature, the backend handles a fair amount of real marketplace logic: checkout with quantity and payment-method validation, promotion/price calculation, venue and entertainment availability checks against existing orders to prevent double-booking, and review eligibility tied to whether a user actually has a paid/delivered order for that service. Carts, collections, and customized plans store service IDs alongside lightweight snapshots so saved items stay meaningful even if the underlying catalog changes.",
      ],
      bullets: [
        "Built a React/Vite SPA with protected routes, a reusable service catalog UI, search, favorites, collections, cart, checkout, and profile flows.",
        "Designed an Express REST API with controllers, middleware, and centralized error handling over Mongoose models.",
        "Modeled a full marketplace schema in MongoDB: users, services, bundles, carts, collections, customized plans, orders, reviews, and saved locations.",
        "Implemented custom Bearer-token authentication with PBKDF2 password hashing and per-user resource ownership checks.",
        "Integrated Google Gemini for a premium AI event planner, grounding every recommendation in real catalog services and validating the model's output before returning it.",
        "Added checkout logic with availability conflict detection, order creation, and review eligibility tied to completed orders.",
      ],
    },
  },
  {
    id: "3d-projects",
    companyName: "3D Projects",
    type: "Personal",
    portfolioCategory: "creative",
    category: ["3D Modeling"],
    shortDescription:
      "A collection of three 3D interior/exterior modeling projects — a retro 1950s diner, a home bar & lounge with prop studies, and a modern pool villa — modeled and rendered from empty shell to fully furnished scenes.",
    techStack: ["3ds Max"],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-01"),
    companyLogoImg: "/projects/3d-modern-villa/render_3.jpg",
    pagesInfoArr: [
      {
        title: "Retro Diner — 3D Interior",
        description:
          "A stylized 1950s-style diner interior — red vinyl booths, a curved counter, and pendant lighting, modeled and furnished from an empty shell.",
      },
      {
        title: "Interior Renders",
        description:
          "A stylized 1950s-style diner interior: red vinyl booths, round bistro tables, a curved counter with bar stools and stocked glassware, and pendant lighting throughout.",
        imgArr: [
          "/projects/3d-diner/render_1.jpg",
          "/projects/3d-diner/render_2.jpg",
          "/projects/3d-diner/render_3.jpg",
          "/projects/3d-diner/render_4.jpg",
        ],
      },
      {
        title: "Home Bar & Lounge — 3D Interior",
        description:
          "A home bar and lounge concept — a curved bar counter beneath a spiral staircase, a bedroom nook, and standalone furniture/prop studies.",
      },
      {
        title: "Home Bar",
        description:
          "A curved home bar counter with a spiral staircase behind it, stocked with bottles, glassware, and a fruit bowl.",
        imgArr: [
          "/projects/3d-house-lounge/render_1.jpg",
          "/projects/3d-house-lounge/render_2.jpg",
          "/projects/3d-house-lounge/render_3.jpg",
        ],
      },
      {
        title: "Bedroom & Living Details",
        description:
          "A bedroom desk and seating nook, plus close-up prop studies — a low-poly armchair, a ceramic vase, and a modeled smoking pipe.",
        imgArr: [
          "/projects/3d-house-lounge/render_4.jpg",
          "/projects/3d-house-lounge/render_5.jpg",
          "/projects/3d-house-lounge/render_6.jpg",
          "/projects/3d-house-lounge/render_7.jpg",
        ],
      },
      {
        title: "Modern Pool Villa — 3D Exterior",
        description:
          "A modern villa exterior and rooftop concept — a pool wrapping a glass-walled pavilion, timber screening, and an open-plan interior living space.",
      },
      {
        title: "Exterior & Rooftop",
        description:
          "A modern two-story villa with a rooftop terrace surrounded by an infinity-style pool, slatted timber screens, dining and lounge seating under umbrellas, and floor-to-ceiling glass.",
        imgArr: [
          "/projects/3d-modern-villa/render_1.jpg",
          "/projects/3d-modern-villa/render_3.jpg",
          "/projects/3d-modern-villa/render_5.jpg",
          "/projects/3d-modern-villa/render_6.jpg",
        ],
      },
      {
        title: "Interior Living Space",
        description:
          "The open-plan living area under the villa's pitched glass roof, with modular sofas, a pendant light, and side tables.",
        imgArr: [
          "/projects/3d-modern-villa/render_2.jpg",
          "/projects/3d-modern-villa/render_4.jpg",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "3D Projects brings together three standalone 3D modeling pieces — a retro diner, a home bar & lounge, and a modern pool villa — each one an exercise in taking a space from an empty shell to a fully furnished, rendered scene.",
        "A 3D interior modeling piece imagining a retro diner: red booth seating, round tables and chairs, a curved service counter stocked with glassware and condiments, and pendant lamps hung over each booth. The brief was to design a cohesive, inviting food-service space from empty shell to fully furnished room.",
        "A set of interior scenes and prop studies built around a home bar and lounge concept: a curved bar counter beneath a spiral staircase, a bedroom desk nook, a low-poly armchair, and individual object studies like a ceramic vase and a smoking pipe. The project mixes full-room composition with focused single-object modeling.",
        "A modern villa exterior and rooftop concept: a pool wrapping around a glass-walled living pavilion, slatted timber privacy screens, a shaded outdoor dining set, and lounge seating under umbrellas. Paired with an interior pass at the open-plan living space beneath the pitched glass roof.",
      ],
      bullets: [
        "Modeled and arranged a full diner interior: booths, tables, chairs, counter, and lighting.",
        "Composed multiple camera angles to showcase the space from overview and detail perspectives.",
        "Modeled a curved home bar counter, spiral staircase, and stocked bar props (bottles, glassware, fruit bowl).",
        "Composed a bedroom desk and seating nook with furniture and decor.",
        "Modeled standalone props — an armchair and a smoking pipe — as individual studies.",
        "Modeled a two-story villa exterior with a wraparound infinity-style pool and timber screening.",
        "Furnished rooftop dining and lounge areas with tables, chairs, sun loungers, and umbrellas.",
        "Modeled the open-plan interior living space with modular sofas and lighting under the glass roof.",
      ],
    },
  },
  {
    id: "sundae-in-beirut",
    companyName: "Sundae in Beirut — Brand Identity",
    type: "Personal",
    portfolioCategory: "creative",
    category: ["Branding"],
    shortDescription:
      "A full brand identity for Sundae in Beirut, a fictional sweets shop — logo suite, color and typography system, business stationery, and product mockups.",
    techStack: ["Adobe Illustrator", "InDesign", "Photoshop"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-11-01"),
    companyLogoImg: "/projects/sundaeinbeirut/logo.png",
    websiteLink: "/projects/sundae-in-beirut/brand-guidelines.pdf",
    pagesInfoArr: [
      {
        title: "Logo & Stationery - Brand Guidelines - Product Mockups",
        description:
          "A full brand guideline document for 'Sundae in Beirut': classic and text-based logo lockups with minimum sizes and clear-space rules, a primary/secondary/neutral color palette (RGB, HEX, and CMYK breakdowns), and a three-font typography system (Domine, Cambria, and a custom display face) with usage rules for each. No image export exists yet — the documents below are the real deliverables.",
        // imgArr: ["/projects/sundaeinbeirut/logo.png"],
        documentArr: [
          {
            label: "Brand Guidelines (PDF)",
            href: "/projects/sundae-in-beirut/brand-guidelines.pdf",
          },
          {
            label: "Logo & Stationery (PDF)",
            href: "/projects/sundae-in-beirut/logo-and-stationery.pdf",
          },
          {
            label: "Product Mockups (PDF)",
            href: "/projects/sundae-in-beirut/mockups.pdf",
          },
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Sundae in Beirut is a full brand identity project for a fictional Beirut sweets shop, built around a warm, playful palette of blush pink, deep magenta, and royal blue. The deliverable is a complete guideline document defining the logo system, color usage, and typography rules needed to keep the brand consistent across print, digital, and social.",
        "The logo system includes a classic full mark for most printed and digital use, and a simplified text-based variant for situations where the full logo doesn't fit, each with defined minimum sizes and clear-space rules. The color system separates primary brand colors (blush pink, deep magenta, royal blue, cherry red, warm brown) from secondary and neutral colors, each documented in RGB, HEX, and CMYK. Typography pairs a display headline font with a body serif and a decorative logo-only face, with explicit rules for casing, weight, and which colors each font is allowed to appear in.",
        "Beyond the guidelines themselves, the project extends the identity into real business collateral — a letterhead, envelope, and business card design featuring a sample partnership letter — and a set of product mockups applying the branding to real-world items.",
      ],
      bullets: [
        "Designed a two-variant logo system (classic and text-based) with documented minimum sizes and clear-space rules.",
        "Built a primary/secondary/neutral color system with RGB, HEX, and CMYK values for every color.",
        "Defined a three-font typography system with per-font usage, casing, weight, and color rules.",
        "Extended the identity into business stationery: letterhead, envelope, and business card layouts.",
        "Produced product mockups applying the brand to real-world packaging and collateral.",
      ],
    },
  },
  {
    id: "national-magazine-spread",
    companyName: "National Magazine — Editorial Spread",
    type: "Personal",
    portfolioCategory: "creative",
    category: ["Print Design"],
    shortDescription:
      "A multi-page editorial magazine spread design for a travel feature on Cape Town, laid out with a photo-driven grid, pull quotes, and a fact sidebar.",
    techStack: ["InDesign", "Photoshop"],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-10-01"),
    companyLogoImg: "/projects/national-magazine-spread/logo.png",
    websiteLink: "/projects/national-magazine-spread/magazine-spread.pdf",
    pagesInfoArr: [
      {
        title: "Editorial Spread — Coming Soon as Images",
        description:
          "A travel feature, '72 Hours in Cape Town,' laid out across multiple pages with a title spread, a photo-and-text grid for the day-by-day narrative, pull quotes, and a 'Cape Town Facts' sidebar. No image export exists yet — the document below is the real deliverable.",
        documentArr: [
          {
            label: "Magazine Spread (PDF)",
            href: "/projects/national-magazine-spread/magazine-spread.pdf",
          },
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "An editorial layout project for a fictional 'National Magazine' travel feature on Cape Town, following a writer's three-day trip through the Cape Peninsula, Table Mountain, and the Cape Floral Kingdom. The brief was to take a long-form travel article and lay it out as a real magazine spread rather than a plain document.",
        "The layout uses a multi-column grid to balance dense body copy against full-bleed photography, with pulled statistics and a dedicated facts sidebar to break up the reading rhythm. Running heads, folios, and a consistent type system carry the piece across multiple pages the way a printed feature would.",
      ],
      bullets: [
        "Laid out a multi-page magazine feature with a title spread and running day-by-day sections.",
        "Balanced photography and body copy across a multi-column editorial grid.",
        "Designed supporting elements: pull quotes, a facts sidebar, and consistent running heads/folios.",
      ],
    },
  },
  {
    id: "eventful-uiux",
    companyName: "Eventful — UI/UX Design",
    type: "Personal",
    portfolioCategory: "creative",
    category: ["UI/UX"],
    shortDescription:
      "The end-to-end UI/UX design of Eventful, an event-planning marketplace — desktop and mobile flows spanning discovery, service booking, reviews, cart/checkout, and account management.",
    techStack: ["Material UI"],
    startDate: new Date("2026-04-01"),
    endDate: new Date("2026-04-01"),
    companyLogoImg: "/projects/eventful-uiux/logo.png",
    pagesInfoArr: [
      {
        title: "Desktop Experience",
        description:
          "The full desktop flow: landing/hero and signup, browsing popular plans and categories, service detail pages with reviews and an add-review flow, filtering and search (including empty states), building a customized plan, cart and checkout (delivery address, payment method, confirmation), saved delivery locations, and a saved-plans/collections view.",
        imgArr: [
          "/projects/eventful-uiux/desktop_01.png",
          "/projects/eventful-uiux/desktop_02.png",
          "/projects/eventful-uiux/desktop_03.png",
          "/projects/eventful-uiux/desktop_04.png",
          "/projects/eventful-uiux/desktop_05.png",
          "/projects/eventful-uiux/desktop_06.png",
          "/projects/eventful-uiux/desktop_07.png",
          "/projects/eventful-uiux/desktop_08.png",
          "/projects/eventful-uiux/desktop_09.png",
          "/projects/eventful-uiux/desktop_10.png",
          "/projects/eventful-uiux/desktop_11.png",
          "/projects/eventful-uiux/desktop_12.png",
          "/projects/eventful-uiux/desktop_13.png",
          "/projects/eventful-uiux/desktop_14.png",
          "/projects/eventful-uiux/desktop_15.png",
          "/projects/eventful-uiux/desktop_16.png",
          "/projects/eventful-uiux/desktop_17.png",
          "/projects/eventful-uiux/desktop_18.png",
          "/projects/eventful-uiux/desktop_19.png",
        ],
      },
      {
        title: "Mobile Experience",
        description:
          "The same core flows adapted to mobile breakpoints across iOS and Android: search and empty states, a sign-in prompt gating cart/favorites, the account/profile screen with delete-account confirmation, service detail cards with date/time pickers, and the mobile filter panel.",
        imgArr: [
          "/projects/eventful-uiux/mobile_01.png",
          "/projects/eventful-uiux/mobile_02.png",
          "/projects/eventful-uiux/mobile_03.png",
          "/projects/eventful-uiux/mobile_04.png",
          "/projects/eventful-uiux/mobile_05.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This is the UI/UX side of Eventful, the event-planning marketplace I also built full-stack (see the Development Projects tab): the interface design across every core flow, on both desktop and mobile. Rather than a set of static mockups, these are the interfaces as actually implemented — the design system was built directly in code with Material UI rather than handed off from a separate design file.",
        "The design covers the full user journey: a search-first landing page and signup, browsing popular plans and service categories, a detailed service page with photo carousels, reviews, and an add-review flow, filtering and search with a handled empty state, assembling a customized event plan from multiple services, and a three-step cart-to-checkout flow covering delivery address and payment method through to a confirmation state. Account management includes saved delivery locations and a destructive delete-account confirmation pattern.",
        "The mobile adaptation isn't just a scaled-down layout — service detail cards restructure their date/time pickers for touch, the filter panel becomes a dedicated screen, and a sign-in prompt gates cart and favorites for guests, all while keeping the same visual language as the desktop experience.",
      ],
      bullets: [
        "Designed the full desktop flow: landing, signup, browsing, service detail, reviews, cart, checkout, and saved locations.",
        "Designed a matching responsive mobile experience across iOS and Android breakpoints.",
        "Handled edge cases in the UI: empty search results, guest sign-in gating, and destructive-action confirmation.",
        "Built the design system directly in Material UI rather than as a separate static mockup file.",
      ],
    },
  },
  {
    id: "sound-and-audiovisuals",
    companyName: "Sound & Audiovisuals",
    type: "Personal",
    portfolioCategory: "creative",
    category: ["Audiovisual"],
    shortDescription:
      "A short film I created entirely on my own — handling both the audio production/mixing in Studio One and the video editing/assembly in Vegas Pro from start to finish.",
    techStack: ["Studio One", "Vegas Pro"],
    startDate: new Date("2026-05-01"),
    endDate: new Date("2026-05-01"),
    companyLogoImg: "/projects/sound-and-audiovisuals/logo.png",
    pagesInfoArr: [
      {
        title: "Short Film",
        description:
          "A short film I wrote, shot, and finished entirely by myself. I handled the sound design and full audio mix in Studio One, then assembled and edited the picture in Vegas Pro, taking the project from raw footage and audio to a finished cut without outside help on either the sound or the edit.",
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Sound & Audiovisuals covers a short film I made entirely on my own, from concept through final export. On the audio side, I used Studio One to record, edit, and mix the film's sound — dialogue, sound design, and any music — into a finished soundtrack.",
        "On the picture side, I used Vegas Pro to edit and assemble the footage: cutting the shots together, syncing them to the audio mix, and handling color and pacing to bring the whole film together as a single, polished piece. Doing both the audio and video work myself meant owning the entire post-production pipeline for the film, end to end.",
      ],
      bullets: [
        "Recorded, edited, and mixed the film's full audio (sound design and dialogue/music) in Studio One.",
        "Edited and assembled the film's picture, from raw footage to a finished cut, in Vegas Pro.",
        "Handled the entire audiovisual post-production process independently, from sound to picture.",
      ],
    },
  },
  {
    id: "editing",
    companyName: "Editing",
    type: "Personal",
    portfolioCategory: "creative",
    category: ["Video/Photo Editing"],
    shortDescription:
      "A birthday invitation and matching thank-you card designed in Canva, with final touch-ups and export polish done in CapCut.",
    techStack: ["Canva", "CapCut"],
    startDate: new Date("2026-07-01"),
    endDate: new Date("2026-07-01"),
    companyLogoImg: "/projects/editing/invitation_1.png",
    pagesInfoArr: [
      {
        title: "Birthday Invitation Design",
        description:
          "A beige-and-gold minimalist birthday invitation set, including a matching thank-you card, laid out in Canva with hand-drawn party illustrations and custom event details, then finished and exported with CapCut.",
        imgArr: [
          "/projects/editing/invitation_1.png",
          "/projects/editing/invitation_2.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Editing covers the design and video work I create using Canva, CapCut, and other editing tools — spanning presentations, invitations and cards, book layouts, and short-form marketing content. In Canva, I design a wide range of materials, from event pieces like a beige-and-gold minimalist birthday invitation and matching thank-you card, to presentation decks and book/document layouts, always paying close attention to consistent typography, color, and visual identity across each set.",
        "On the video side, I use CapCut alongside other editing tools to produce short-form content, including marketing videos for platforms like TikTok and other social channels. This covers the full editing process — sound syncing, transitions, stickers and text overlays, pacing, and export — to turn raw footage into polished, ready-to-post content.",
      ],
      bullets: [
        "Designed a range of Canva projects including presentations, invitations and cards, and book/document layouts.",
        "Created a matching birthday invitation and thank-you card set as one example, using a consistent beige-and-gold minimalist style.",
        "Edited short-form marketing videos for TikTok and other social platforms using CapCut.",
        "Handled full video editing workflows including sound syncing, stickers, transitions, and text overlays.",
      ],
    },
  },
];

export const featuredProjects = Projects.filter(
  (project) => !project.id.startsWith("placeholder-")
).slice(0, 3);
