/**
 * ==============================================================================
 * ⚡ FRAMER CMS DATA ENGINEERING & AUTOMATION SCRIPT
 * System Identity: ARTIFICIAL CRAFT // CRAFT//CODE
 * Lead Architect: Senior Data Engineer & Framer CMS Specialist
 * Purpose: Schema Validation, Newline Sanitization (<br>), and Lossless Framer Sync
 * ==============================================================================
 */

// EXACT HEADERS: WORK SINGLE (66 COLUMNS)
var FRAMER_WORK_HEADERS = [
  "Slug",
  "Title",
  "Tag",
  "Name",
  "Card Number",
  "Number",
  "About",
  "short description with number",
  "Subtitle 1",
  "Number 1",
  "Title 2",
  "Description 1",
  "Type",
  "Type Text",
  "Date",
  "Date Text",
  "Image 1",
  "Image 1:alt",
  "Subtitle 2",
  "Number 2",
  "Title 3",
  "Description 2",
  "Description 3",
  "Image 2",
  "Image 2:alt",
  "Image 3",
  "Image 3:alt",
  "Image 4",
  "Image 4:alt",
  "Subtitle 3",
  "Number 3",
  "Title 4",
  "Description 4",
  "Image",
  "Image:alt",
  "Link Video",
  "Slide Image 1",
  "Slide Image 1:alt",
  "Slide Image 2",
  "Slide Image 2:alt",
  "Slide Image 3",
  "Slide Image 3:alt",
  "Slide Image 4",
  "Slide Image 4:alt",
  "Slide Image 5",
  "Slide Image 5:alt",
  "Slide Image 6",
  "Slide Image 6:alt",
  "Slide Image 7",
  "Slide Image 7:alt",
  "Slide Image 8",
  "Slide Image 8:alt",
  "Slide Image 9",
  "Slide Image 9:alt",
  "Core",
  "Core small image",
  "Core small image:alt",
  "Logo",
  "Logo:alt",
  "A long short story about",
  "Story title 1",
  "Story title 2",
  "Story title 3",
  "Story 1",
  "Story 2",
  "Story 3"
];

// EXACT HEADERS: SERVICE SINGLE (48 COLUMNS)
var FRAMER_SERVICE_HEADERS = [
  "Slug",
  "Title",
  "Cover Title",
  "Cover Number",
  "Subtitle 1",
  "Number 1",
  "Description 1",
  "Duration",
  "Duration Text",
  "Range",
  "Amount",
  "Image 1",
  "Image 1:alt",
  "Subtitle 2",
  "Number 2",
  "Title 2",
  "Description 2",
  "Description 3",
  "Image 2",
  "Image 2:alt",
  "Image 3",
  "Image 3:alt",
  "Image 4",
  "Image 4:alt",
  "Subtitle 3",
  "Number 3",
  "Title 3",
  "Description 4",
  "Description 5",
  "youtube_id",
  "URL 1",
  "why choose me (WCM) title 1",
  "why choose me (WCM) title 2",
  "why choose me (WCM) title 3",
  "why choose me (WCM) title 4",
  "WCM reason 1",
  "WCM reason 2",
  "WCM reason 3",
  "WCM reason 4",
  "WCM image",
  "WCM image:alt",
  "WCM image 2",
  "WCM image 2:alt",
  "WCM image 3",
  "WCM image 3:alt",
  "WCM image 4",
  "WCM image 4:alt",
  "Link to video 1"
];

// CASE STUDIES HEADERS (36 COLUMNS)
var CASE_STUDIES_HEADERS = [
  "project_id",
  "slug",
  "title",
  "tag",
  "name",
  "card_number",
  "number_bracket",
  "about",
  "short_desc",
  "role",
  "project_type",
  "date_text",
  "intro_subtitle",
  "intro_number",
  "intro_title",
  "intro_desc",
  "challenge_subtitle",
  "challenge_number",
  "challenge_title",
  "challenge_desc_1",
  "challenge_desc_2",
  "solution_subtitle",
  "solution_number",
  "solution_title",
  "solution_desc",
  "core_statement",
  "story_headline",
  "story_title_1",
  "story_1",
  "story_title_2",
  "story_2",
  "story_title_3",
  "story_3",
  "tools",
  "cover_image_url",
  "video_url"
];

// PROJECTS MASTER HEADERS (6 COLUMNS)
var PROJECTS_MASTER_HEADERS = [
  "project_id",
  "title",
  "slug",
  "category",
  "status",
  "updated_at"
];

// INITIAL RAW DATA FOR 9 FLAGSHIP PROJECTS
var INITIAL_PROJECTS_MASTER = [
  {
    "project_id": "proj-ac-01",
    "title": "E2E AI-Image PIM Automation Pipeline",
    "slug": "e2e-ai-image-pim-automation",
    "category": "Autonomous AI Infrastructure",
    "status": "Production Live",
    "updated_at": "2025-10-15"
  },
  {
    "project_id": "proj-ac-02",
    "title": "Video-as-Code Automated Production Pipeline",
    "slug": "video-as-code-remotion-pipeline",
    "category": "Programmatic Media Infrastructure",
    "status": "Production Live",
    "updated_at": "2025-11-20"
  },
  {
    "project_id": "proj-ac-03",
    "title": "FFmpeg Cloud Media Engine & Scene QA",
    "slug": "ffmpeg-cloud-media-engine",
    "category": "Cloud Media Infrastructure",
    "status": "Production Live",
    "updated_at": "2025-12-10"
  },
  {
    "project_id": "proj-ac-04",
    "title": "Studio Configurator Node (B2B Web3D)",
    "slug": "studio-configurator-node",
    "category": "Interactive Web3D Systems",
    "status": "Production Live",
    "updated_at": "2026-01-18"
  },
  {
    "project_id": "proj-ac-05",
    "title": "3D Data Metropolis & Profit Visualization",
    "slug": "3d-data-metropolis-voxel-city",
    "category": "FinTech & Spatial Data",
    "status": "Production Live",
    "updated_at": "2026-02-05"
  },
  {
    "project_id": "proj-ac-06",
    "title": "3D Robotics Factory & Physical AI Cloud",
    "slug": "3d-robotics-factory-spatial-ai",
    "category": "Physical AI & Robotics",
    "status": "Production Live",
    "updated_at": "2026-03-12"
  },
  {
    "project_id": "proj-ac-07",
    "title": "Multi-Zone Spatial 3D Compound Engine",
    "slug": "multi-zone-spatial-3d-compound",
    "category": "Spatial Brand Architecture",
    "status": "Production Live",
    "updated_at": "2026-04-02"
  },
  {
    "project_id": "proj-ac-08",
    "title": "VibePath GPS Telemetry to 3D Map Video",
    "slug": "vibepath-gps-3d-map-pipeline",
    "category": "Geospatial & Video Automation",
    "status": "Production Live",
    "updated_at": "2026-05-14"
  },
  {
    "project_id": "proj-ac-09",
    "title": "0-Code Digital Flipbook Engine",
    "slug": "0-code-digital-flipbook-engine",
    "category": "0-Code Document Systems",
    "status": "Production Live",
    "updated_at": "2026-06-01"
  },
  {
    "project_id": "proj-ac-10",
    "title": "3D Spatial WebApp Presentation Engine",
    "slug": "webapp-presentation-engine",
    "category": "Interactive Web3D Systems",
    "status": "Production Live",
    "updated_at": "2026-11-01"
  },
  {
    "project_id": "proj-legacy-01",
    "title": "Hubbis",
    "slug": "hubbis",
    "category": "Editorial & Data Visualization",
    "status": "Archived / Production",
    "updated_at": "2025-07-01"
  },
  {
    "project_id": "proj-legacy-02",
    "title": "Australia Experiences",
    "slug": "australia-experiences",
    "category": "Brand Identity & Motion Graphics",
    "status": "Archived / Production",
    "updated_at": "2025-08-01"
  },
  {
    "project_id": "proj-legacy-03",
    "title": "Project 98",
    "slug": "project-98",
    "category": "Product Redirection & Packaging",
    "status": "Archived / Production",
    "updated_at": "2026-09-01"
  },
  {
    "project_id": "proj-legacy-04",
    "title": "The Deer Project",
    "slug": "the-deer-project",
    "category": "Industrial & Form Design",
    "status": "Archived / Production",
    "updated_at": "2020-10-01"
  },
  {
    "project_id": "proj-legacy-05",
    "title": "The Growth Agency",
    "slug": "the-growth-agency",
    "category": "Creative Direction & UI/UX",
    "status": "Archived / Production",
    "updated_at": "2018-10-01"
  },
  {
    "project_id": "proj-legacy-06",
    "title": "VGS Shop",
    "slug": "vgs-shop",
    "category": "E-Commerce & Digital Media",
    "status": "Archived / Production",
    "updated_at": "2016-10-01"
  }
];
var INITIAL_CASE_STUDIES = [
  {
    "project_id": "proj-ac-01",
    "slug": "e2e-ai-image-pim-automation",
    "title": "E2E AI-Image PIM Automation Pipeline",
    "tag": "ai-automation,cloud-architecture,fastapi",
    "name": "Projects",
    "card_number": "01",
    "number_bracket": "[01]",
    "about": "Autonomous multi-model PIM pipeline coupling FLUX rendering, Gemini Flash physical triage, Claude Sonnet aesthetic validation, and zero-Base64 R2 storage.",
    "short_desc": "Autonomous PIM image generation and two-stage AI Vision QA pipeline slashing processing latency from 5 minutes to 2 seconds with 70% token savings.",
    "role": "Automation Architect & Lead Systems Engineer",
    "project_type": "AI Pipeline Architecture - Automated PIM - Vision QA Engine",
    "date_text": "October 2025",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Decoupling cognitive LLM reasoning from event-driven execution to eliminate context bloat.",
    "intro_desc": "Enterprise product information management (PIM) pipelines frequently collapse under high-concurrency demands due to payload memory leaks and spiraling Vision LLM costs.<br>We engineered a decoupled dual-engine architecture separating cognitive reasoning (Dify.ai) from deterministic execution (n8n).<br>The infrastructure processes high-volume visual assets through an automated, self-healing pipeline backed by Cloudflare R2 and Pinecone vector storage.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Overcoming 5-minute manual workflows, Base64 memory exhaustion, and runaway API token costs.",
    "challenge_desc_1": "Manual PIM operations required 3 to 5 minutes per SKU for prompt curation, rendering, physical defect inspection, and CDN asset registration.<br>Passing uncompressed Base64 image payloads crashed self-hosted orchestration instances on low-memory VPS environments.<br>Directly querying premium multimodal models for unvetted renders caused unsustainable token billing.",
    "challenge_desc_2": "Vector database connections frequently dropped during idle intervals, triggering silent payload serialization failures and broken cron automation sequences.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Two-stage multimodal Vision QA with zero-Base64 offloading and deterministic state orchestration.",
    "solution_desc": "Implemented a two-stage QA triage: Google Vertex AI (Gemini Flash) eliminates 80% of physical defects at $0.0002/image before routing top-tier renders to Claude 3.5 Sonnet for aesthetic evaluation.<br>A Python FastAPI microservice streams images directly to Cloudflare R2, passing signed URLs to keep n8n RAM under 4GB.<br>Automated cron keep-alive pings maintain active Pinecone vector indexing with zero drift.",
    "core_statement": "Deterministic autonomous PIM architecture cutting asset generation latency by 98% and AI Vision token expenditure by 70%.",
    "story_headline": "ENGINEERING AN AUTONOMOUS MULTI-MODEL ASSET PIPELINE WITH ZERO SILENT DRIFT",
    "story_title_1": "Dual-Engine Separation of Concerns:",
    "story_1": "Decoupled prompt intelligence to Dify while isolating state execution, batch chunking, and circuit breakers inside n8n on Hetzner VPS.",
    "story_title_2": "Two-Stage Vision Triage Gate:",
    "story_2": "Engineered a cost-optimized inspection gate using Gemini Flash for rapid structural filtering followed by Claude Sonnet for typography and aesthetic scoring.",
    "story_title_3": "Memory-Safe Binary Streaming:",
    "story_3": "Bypassed Node.js buffer limitations via external FastAPI microservice uploading 1024px assets directly to Cloudflare R2.",
    "tools": "Dify.ai, n8n, Vertex AI (Gemini Flash), Claude 3.5 Sonnet, FLUX.1, FastAPI, Cloudflare R2, Pinecone, Docker",
    "cover_image_url": "",
    "video_url": "https://artificialcraft.space/"
  },
  {
    "project_id": "proj-ac-02",
    "slug": "video-as-code-remotion-pipeline",
    "title": "Video-as-Code Automated Production Pipeline",
    "tag": "video-as-code,remotion,react,cloud-run",
    "name": "Projects",
    "card_number": "02",
    "number_bracket": "[02]",
    "about": "Headless React-based Video-as-Code infrastructure rendering frame-deterministic dynamic videos at 60 FPS via Google Cloud Run concurrency.",
    "short_desc": "Serverless Video-as-Code pipeline enforcing strict Zod schema contracts and frame-calculated animation tokens for 99.99% deterministic rendering.",
    "role": "Lead Architect & Video-as-Code Systems Engineer",
    "project_type": "Programmatic Video Systems - Remotion React Engine - GCP Cloud Run Rendering",
    "date_text": "November 2025",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Eliminating NLE timeline manual dragging through code-driven, typed video synthesis.",
    "intro_desc": "Traditional video production relies on manual timeline manipulation within GUI video suites, rendering scalable personalization impossible.<br>This project implements an end-to-end Video-as-Code pipeline using Remotion 4.0 and TypeScript.<br>By enforcing strict schema validation and headless cloud rendering, the platform manufactures customized, brand-compliant video assets entirely from JSON payloads.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Resolving multi-instance visual drift and out-of-sync audio-kinetic rendering artifacts.",
    "challenge_desc_1": "Standard web animation libraries rely on CPU wall-clock timestamps (performance.now()), causing severe frame skipping and visual desynchronization across distributed cloud rendering instances.<br>Dynamic text overlays and asset length variations caused frequent layout collisions and typography overflow.",
    "challenge_desc_2": "Unvalidated video composition configurations frequently crashed serverless render nodes, causing cascading pipeline timeouts and wasted cloud compute budgets.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Three-tier context-isolation pipeline with frame-calculated motion tokens and headless validation.",
    "solution_desc": "Architected an immutable data contract between Gemini Architect (motion-rules.json) and Google Jules Builder (.tsx components).<br>Calculated all kinetic typography, 3D tilts, and velocity curves strictly from frame numbers via Remotion useCurrentFrame() hook.<br>Integrated pre-render headless Zod validation gates (npm validate:configs) on GCP Cloud Run.",
    "core_statement": "Architected a 99.99% deterministic Video-as-Code rendering pipeline with 0% silent visual drift across distributed cloud clusters.",
    "story_headline": "TRANSFORMING PROGRAMMATIC VIDEO PRODUCTION INTO A PURE TYPESCRIPT FUNCTION",
    "story_title_1": "Architect vs Builder Protocol:",
    "story_1": "Defined strict schema boundaries where architectural rules govern motion constraints while modular React components render isolated graphic layers.",
    "story_title_2": "Frame-Deterministic Math Engine:",
    "story_2": "Replaced wall-clock intervals with discrete frame-count algorithms to guarantee identical pixel-perfect output regardless of cloud CPU loads.",
    "story_title_3": "Headless CI/CD Cloud Run Cluster:",
    "story_3": "Orchestrated serverless rendering workers on GCP Cloud Run capable of outputting hundreds of personalized 60 FPS video variations concurrently.",
    "tools": "Remotion 4.0, React 19, TypeScript, Zod, GCP Cloud Run, Docker, Tailwind CSS, Google Jules",
    "cover_image_url": "",
    "video_url": "https://artificialcraft.space/"
  },
  {
    "project_id": "proj-ac-03",
    "slug": "ffmpeg-cloud-media-engine",
    "title": "FFmpeg Cloud Media Engine & Scene QA",
    "tag": "ffmpeg,media-engine,computer-vision,fastapi",
    "name": "Projects",
    "card_number": "03",
    "number_bracket": "[03]",
    "about": "High-throughput cloud media processing engine combining headless Chromium frame streaming, FFmpeg filtergraphs, and AI keyframe scene auditing.",
    "short_desc": "FFmpeg cloud processing microservice utilizing direct stdout memory pipes and scene-change detection to cut visual QA token costs by 95%.",
    "role": "Media Infrastructure Engineer",
    "project_type": "Headless Media Processing - Scene Boundary Detection - Structural QA",
    "date_text": "December 2025",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Overcoming video LLM inspection cost barriers via intelligent keyframe extraction.",
    "intro_desc": "Auditing high-frame-rate commercial video outputs via traditional multimodal LLMs requires processing thousands of frames, creating extreme API costs and latency bottlenecks.<br>We engineered a cloud media infrastructure built on FFmpeg and headless Chromium.<br>The engine streams uncompressed pixel buffers directly through memory pipes, applying scene-boundary algorithms to extract keyframes for precise aesthetic verification.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Eliminating intermediate disk I/O bottlenecks and astronomical multimodal token expenses.",
    "challenge_desc_1": "Writing intermediate uncompressed video frames to disk on cloud virtual servers created high I/O wait times and disk saturation.<br>Passing continuous 60 FPS video streams into vision models incurred massive token billing with diminishing returns on static scene evaluation.",
    "challenge_desc_2": "Stitching disparate media clips with varying audio loudness and color profiles introduced audible clicks and jarring visual inconsistencies.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Direct stdout memory pipes, dynamic scene-cut extraction, and zero-re-encode concat demuxers.",
    "solution_desc": "Engineered direct stdout piping from headless Chromium to FFmpeg stdin, bypassing disk I/O entirely.<br>Deployed scene-change detection (select='gt(scene,0.4)') to isolate key transition frames for Claude 3.5 Sonnet SSIM and layout inspection.<br>Standardized audio across streams to EBU R128 (-23 LUFS) and joined segments using FFmpeg Concat Demuxer with zero re-encode latency.",
    "core_statement": "Reduced video visual QA token consumption by 95% while achieving instant, zero-re-encode media assembly.",
    "story_headline": "BUILDING A ZERO-DISK-IO CLOUD MEDIA STREAMING AND AUDITING SUBSTRATE",
    "story_title_1": "Memory-Piped Frame Ingestion:",
    "story_1": "Streamed uncompressed RGBA pixel buffers directly from Chromium DOM snapshots into FFmpeg stdin via POSIX memory pipes.",
    "story_title_2": "Algorithmic Scene Filtering:",
    "story_2": "Leveraged algorithmic scene-cut detection to sample only critical inflection frames, reducing vision inspection payloads by 95%.",
    "story_title_3": "Broadcast Audio & Concat Demuxing:",
    "story_3": "Automated EBU R128 audio normalization and concatenated pre-rendered video modules at stream speed with zero transcoding overhead.",
    "tools": "FFmpeg (libavcodec/libavformat), Headless Chromium, Python FastAPI, Claude 3.5 Sonnet, GPT-4o Vision, Docker",
    "cover_image_url": "",
    "video_url": "https://artificialcraft.space/"
  },
  {
    "project_id": "proj-ac-04",
    "slug": "studio-configurator-node",
    "title": "Studio Configurator Node (B2B Web3D)",
    "tag": "threejs,webgl,gsap,nextjs",
    "name": "Projects",
    "card_number": "04",
    "number_bracket": "[04]",
    "about": "Zero-server-cost interactive 3D product configurator engine compiling user specifications into typed AST payloads rendered client-side at 60 FPS.",
    "short_desc": "High-performance client-side Web3D product customizer built on Three.js and GSAP, achieving $0.00 cloud rendering fees via client GPU execution.",
    "role": "Lead Web3D & Systems Architect",
    "project_type": "Client-Side WebGL Configurator - Zod AST Parsing - In-Memory Sandboxing",
    "date_text": "January 2026",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Modernizing enterprise B2B sales through real-time, interactive 3D browser customization.",
    "intro_desc": "Enterprise buyers consistently disengage with static 2D product brochures, while server-side pixel-streaming solutions incur prohibitive cloud GPU expenses.<br>The Studio Configurator Node delivers instant, interactive WebGL 3D customization directly inside the user's browser.<br>By validating all state changes through a strict Zod AST gate, the system renders dynamic materials, exploded layers, and lighting presets at fluid 60 FPS.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Preventing DOM memory leakage and securing backend workflow triggers against zero-trust exposure.",
    "challenge_desc_1": "Injecting dynamic 3D scenes and complex WebGL shaders into single-page application environments led to memory leaks, stylesheet collisions, and frame drops.<br>Direct client-to-workflow webhooks exposed sensitive orchestration endpoints and created cross-origin security vulnerabilities.",
    "challenge_desc_2": "Non-technical operators struggled to configure complex 3D lighting, camera trajectories, and mesh hierarchy switches.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Next.js API proxying, in-memory sandboxed iframes, and typed Swiss design schemas.",
    "solution_desc": "Constructed a Next.js App Router API proxy (/api/craft/generate) shielding n8n/Dify endpoints and enforcing zero-trust authorization.<br>Injected compiled Three.js and GSAP runtime code into memory-isolated iframe sandboxes with shell-stripping to eliminate memory pollution.<br>Implemented a 5-step intuitive configuration wizard parsing inputs into a validated SwissDesignConfigSchema payload.",
    "core_statement": "Engineered a client-GPU-powered 60 FPS Web3D configurator delivering zero server rendering costs and instant tactile interaction.",
    "story_headline": "BRINGING DETERMINISTIC 3D PRODUCT CONFIGURATION TO THE BROWSER EDGE",
    "story_title_1": "Client-Side GPU Offloading:",
    "story_1": "Eliminated cloud streaming infrastructure costs by rendering all 3D geometry, shaders, and animations locally on the user's graphics processor.",
    "story_title_2": "Zod AST State Gate:",
    "story_2": "Guaranteed configuration validity through rigid schema parsing that prevents invalid geometry parameters from executing.",
    "story_title_3": "Isolated Sandboxed Shell:",
    "story_3": "Contained WebGL execution contexts in lightweight memory-isolated iframes, ensuring zero style contamination and instantaneous teardown.",
    "tools": "Three.js, WebGL, GSAP, Next.js App Router, TypeScript, Zod, Tailwind CSS, n8n",
    "cover_image_url": "",
    "video_url": "https://artificialcraft.space/"
  },
  {
    "project_id": "proj-ac-05",
    "slug": "3d-data-metropolis-voxel-city",
    "title": "3D Data Metropolis & Profit Visualization",
    "tag": "threejs,data-visualization,fintech,webgl",
    "name": "Projects",
    "card_number": "05",
    "number_bracket": "[05]",
    "about": "Interactive 3D voxel city visualizing corporate financial performance, utilizing logarithmic height mapping and Three.js InstancedMesh optimization.",
    "short_desc": "Interactive 3D financial visualization transforming complex corporate balance sheets into a dynamic voxel metropolis with 60 FPS GPU instancing.",
    "role": "Lead FinTech & WebGL Developer",
    "project_type": "Institutional Data Visualization - WebGL InstancedMesh - Financial Analytics",
    "date_text": "February 2026",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Transforming opaque corporate spreadsheets into an intuitive 3D spatial data landscape.",
    "intro_desc": "Analyzing quarterly financial reports across hundreds of multi-sector corporate entities within static tabular spreadsheets obscures critical loss signals and sector correlations.<br>The 3D Data Metropolis transforms balance sheet metrics into an interactive voxel cityscape.<br>Corporate profit figures dictate skyscraper altitudes across sector districts, turning abstract financial intelligence into immediate spatial insight.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Rendering hundreds of dynamic structures at 60 FPS while handling negative profit edge cases.",
    "challenge_desc_1": "Standard WebGL object creation choked browser performance when generating thousands of individual building meshes with unique geometry and materials.<br>Representing negative margins or year-over-year revenue collapses within standard upward-scaling bar charts created visual distortion and ambiguity.",
    "challenge_desc_2": "Synchronizing live spreadsheet data from cloud APIs without introducing parsing latency or malformed data crashes.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "GPU InstancedMesh rendering, 'Sink of Shame' negative mapping, and Google Sheets API sync.",
    "solution_desc": "Utilized THREE.InstancedMesh to render hundreds of dynamic architectural assets in a single GPU draw call at steady 60 FPS.<br>Engineered the 'Sink of Shame' mechanic: profitable companies rise above the obsidian floor, while loss-making entities submerge into an illuminated red cavern.<br>Built two-way synchronization with Google Sheets API paired with local CSV/XLSX fallback parsers and Zod schema guards.",
    "core_statement": "Replaced spreadsheet cognitive overload with 3-second executive visual comprehension via 60 FPS WebGL cityscapes.",
    "story_headline": "CODING AN OBSIDIAN VOXEL METROPOLIS FOR REAL-TIME ENTERPRISE INTELLIGENCE",
    "story_title_1": "Instanced GPU Rendering Pipeline:",
    "story_1": "Aggregated thousands of geometric building nodes into single-pass instanced buffers, maintaining locked 60 FPS performance on consumer laptops.",
    "story_title_2": "Spatial Risk Architecture:",
    "story_2": "Designed an intuitive subsurface subterranean coordinate system where negative balances drop below ground level in alert-red lighting.",
    "story_title_3": "Live Enterprise Data Sync:",
    "story_3": "Integrated real-time Google Sheets API webhooks with client-side Zod validation for instant, zero-latency metric updates.",
    "tools": "Three.js, WebGL, TypeScript, Google Sheets API, Zod, GSAP, Tailwind CSS, Vite",
    "cover_image_url": "",
    "video_url": "https://artificialcraft.space/"
  },
  {
    "project_id": "proj-ac-06",
    "slug": "3d-robotics-factory-spatial-ai",
    "title": "3D Robotics Factory & Physical AI Cloud",
    "tag": "webgl,robotics,point-cloud,spatial-ai",
    "name": "Projects",
    "card_number": "06",
    "number_bracket": "[06]",
    "about": "Interactive 3D digital twin and spatial AI point cloud simulation showcasing robotic kinematics, tactile force nodes, and sensor telemetry.",
    "short_desc": "Immersive WebGL industrial robotics twin featuring 4-stage exploded inspection, 11-DOF kinematics, and interactive LiDAR point clouds.",
    "role": "Industrial WebGL & Physical AI Lead",
    "project_type": "Industrial Digital Twin - 11-DOF Kinematics - Spatial Point Cloud Simulation",
    "date_text": "March 2026",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Overcoming industrial hardware communication hurdles through real-time spatial digital twins.",
    "intro_desc": "Traditional robotics sales and technical marketing rely on static CAD renderings that fail to convey mechanical joint articulation, sensor perception, and multi-axis kinematics.<br>This project implements an interactive 3D digital twin of an advanced industrial robotic cell.<br>Engineers and buyers inspect articulated components down to tactile sensor arrays and simulate real-time LiDAR point cloud interaction in the browser.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Simulating heavy multi-joint mechanical kinematics and real-time sensory point clouds without lag.",
    "challenge_desc_1": "High-polygon CAD models extracted from industrial engineering suites caused extreme browser memory overhead and unusable frame rates.<br>Simulating dense LiDAR point clouds and tactile feedback sensors in real time overwhelmed standard JavaScript animation loops.",
    "challenge_desc_2": "Delivering technical schematics and ROS2 API documentation without taking the user out of the 3D immersion.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "4-stage exploded Bezier paths, magnetic point cloud attractor shaders, and CAD HUD overlay.",
    "solution_desc": "Engineered a 4-stage exploded inspection slider (0% Assembled to 100% 11-DOF Kinematics) along calculated Bezier disassembly paths.<br>Developed a custom WebGL particle shader where the mouse pointer acts as a magnetic field attractor simulating active spatial scanning.<br>Integrated interactive raycasting blueprint HUDs that reveal technical specs, joint torque data, and ROS2/Python code snippets upon mesh hover.",
    "core_statement": "Bridged industrial hardware engineering with browser-based software interaction via high-fidelity 60 FPS digital twins.",
    "story_headline": "INTERACTIVE PHYSICAL AI AND ROBOTIC KINEMATICS ON THE BROWSER CANVAS",
    "story_title_1": "4-Tier Exploded Disassembly:",
    "story_1": "Programmed smooth multi-axis disassembly sequences revealing internal harmonic drive motors, logic boards, and tactile arrays.",
    "story_title_2": "Sensor Point Cloud Shader:",
    "story_2": "Wrote custom GLSL particle shaders simulating 50,000 spatial LiDAR points reacting dynamically to user cursor velocity.",
    "story_title_3": "Developer-First ROS2 Sandbox:",
    "story_3": "Embedded live Python and ROS2 trajectory execution examples directly alongside real-time 3D telemetry readouts.",
    "tools": "Three.js, WebGL, GLSL Shaders, ROS2 Protocols, TypeScript, GSAP, Tailwind CSS",
    "cover_image_url": "",
    "video_url": "https://artificialcraft.space/"
  },
  {
    "project_id": "proj-ac-07",
    "slug": "multi-zone-spatial-3d-compound",
    "title": "Multi-Zone Spatial 3D Compound Engine",
    "tag": "spatial-3d,threejs,webgl,branding",
    "name": "Projects",
    "card_number": "07",
    "number_bracket": "[07]",
    "about": "Seamless 5-zone 3D spatial showroom navigated via scroll-driven camera curves, embodying the ARTIFICIAL CRAFT digital plumbing philosophy.",
    "short_desc": "Five-zone 3D spatial compound navigated by scroll-driven Bezier camera paths, transforming corporate storytelling into an interactive physical terminal.",
    "role": "Lead Spatial Architect & Founder",
    "project_type": "Spatial Brand Experience - Scroll-Driven Camera Bezier - Cybernetic Brutalism",
    "date_text": "April 2026",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Rejecting generic corporate web templates in favor of an interactive spatial compound.",
    "intro_desc": "Modern agency websites rely on repetitive, decorative templates that fail to communicate deep systems engineering capability.<br>The Multi-Zone Spatial Compound replaces flat scrolling pages with a contiguous 3D architectural journey.<br>Visitors traverse 5 distinct industrial zones showcasing autonomous agents, memory-leak prevention valves, and deterministic rendering engines.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Maintaining steady 60 FPS transitions across multi-room spatial environments with complex lighting.",
    "challenge_desc_1": "Traditional multi-room 3D scenes cause severe GPU thermal throttling and stutter during high-speed camera viewpoint transitions.<br>Triggering dynamic interactive events\u2014such as pulling mechanical levers or generating fluid ripples\u2014often disrupted scroll synchronization.",
    "challenge_desc_2": "Balancing aggressive Swiss Brutalist aesthetics with responsive, accessible web navigation across diverse viewports.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Scroll-driven 3D Bezier camera rigs, hydraulic bento plumbing, and reactive GLSL water ripples.",
    "solution_desc": "Constructed a single continuous Bezier camera trajectory linked to scroll velocity using GSAP ScrollTrigger and Three.js.<br>Engineered Zone 01's mechanical 'PURGE BLOAT' lever, Zone 02's quartz hydraulic plumbing, and Zone 03's 5 Headless Agent pylon towers with interactive Zod valves.<br>Implemented an outdoor Obsidian Water Mirror featuring 60 FPS hexagonal ripple shockwaves and hydraulic steam CTA buttons.",
    "core_statement": "Pioneered an architectural 3D spatial compound delivering uncompromised 60 FPS interactive branding and zero aesthetic drift.",
    "story_headline": "ARCHITECTING A 5-ZONE 3D DIGITAL PLUMBING TERMINAL FOR AUTONOMOUS SYSTEMS",
    "story_title_1": "Continuous Bezier Camera Rig:",
    "story_1": "Engineered a unified camera spline synchronizing smooth viewpoint translation, rotation, and focal depth across all 5 spatial zones.",
    "story_title_2": "Interactive System Metaphors:",
    "story_2": "Modeled real-world mechanical valves and hydraulic pipes to tangibly represent memory-safe data routing, RAG caches, and Zod gates.",
    "story_title_3": "Obsidian Ripple GLSL Shaders:",
    "story_3": "Authored high-performance fragment shaders simulating water shockwaves and steam dispersal on user engagement.",
    "tools": "Three.js, WebGL, GSAP ScrollTrigger, GLSL Shaders, React, Next.js, Cloudflare Workers",
    "cover_image_url": "",
    "video_url": "https://digital-plumbing-terminal-headless-swarm.mizu2711.workers.dev/"
  },
  {
    "project_id": "proj-ac-08",
    "slug": "vibepath-gps-3d-map-pipeline",
    "title": "VibePath GPS Telemetry to 3D Map Video",
    "tag": "fastapi,gis,b-spline,n8n,dify",
    "name": "Projects",
    "card_number": "08",
    "number_bracket": "[08]",
    "about": "Automated pipeline converting raw mobile GPS telemetry into smooth 3D map trajectory videos and bilingual social media metadata.",
    "short_desc": "Automated telemetry processing engine turning mobile GPS traces into cinematic 3D map flyovers and bilingual scripts in under 45 seconds.",
    "role": "Lead Systems Architect & Developer",
    "project_type": "Geospatial Telemetry Processing - Cubic B-Spline Smoothing - AI Content Co-Pilot",
    "date_text": "May 2026",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Eliminating hours of manual GIS mapping and video editing for field content creators.",
    "intro_desc": "Travel creators, field researchers, and vloggers spend 4 to 8 hours per episode manually extracting GPS logs, smoothing map paths, and scripting bilingual voiceovers.<br>VibePath automates this pipeline from end to end.<br>A single tap on mobile uploads field telemetry, generating smoothed 3D trajectory videos, chapter timestamps, and multilingual captions in seconds.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Correcting errant GPS jitter and computing natural camera orientation from noisy mobile sensor logs.",
    "challenge_desc_1": "Raw mobile GPS coordinate logs suffer from multipath signal bouncing and altitude noise, resulting in violent camera shake in 3D renders.<br>Processing 45-second multi-stage AI reasoning workflows caused standard synchronous webhooks to drop connection timeouts.",
    "challenge_desc_2": "Generating culturally accurate, tone-adapted bilingual (English/Vietnamese) captions and voiceover scripts without human editorial delay.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "FastAPI B-Spline microservice, asynchronous polling webhooks, and Vertex AI bilingual synthesis.",
    "solution_desc": "Built a Python FastAPI service applying Ramer-Douglas-Peucker (RDP) decimation and 3rd-order Cubic B-Spline smoothing to calculate continuous camera heading and pitch vectors.<br>Architected an asynchronous polling architecture over Cloudflare Tunnels into Dockerized n8n on a Hetzner VPS.<br>Leveraged Dify with Google Vertex AI (Gemini Flash) to generate timed bilingual voiceover scripts and YouTube chapters automatically.",
    "core_statement": "Reduced multi-hour manual GIS video production to an autonomous 45-second pipeline with zero human intervention.",
    "story_headline": "AUTOMATING SATELLITE TELEMETRY TO CINEMATIC 3D MAP MOTION AT SCALE",
    "story_title_1": "Mathematical Path Smoothing:",
    "story_1": "Implemented RDP point reduction and 3rd-order B-Spline interpolation to eliminate mobile GPS jitter and derive smooth camera vectors.",
    "story_title_2": "Resilient Async Webhook Architecture:",
    "story_2": "Engineered non-blocking async job queues with status polling over Cloudflare Tunnels, preventing timeout errors during heavy AI generation.",
    "story_title_3": "Automated Multilingual Localization:",
    "story_3": "Programmed Dify reasoning workflows to instantly produce synchronized bilingual narration and metadata for immediate publishing.",
    "tools": "Python, FastAPI, SciPy (B-Splines), n8n, Dify.ai, Vertex AI (Gemini Flash), Cloudflare Tunnels, Docker",
    "cover_image_url": "",
    "video_url": "https://vibepath.mizu2711.workers.dev/"
  },
  {
    "project_id": "proj-ac-09",
    "slug": "0-code-digital-flipbook-engine",
    "title": "0-Code Digital Flipbook Engine",
    "tag": "react,canvas-3d,json-substrate,typescript",
    "name": "Projects",
    "card_number": "09",
    "number_bracket": "[09]",
    "about": "Zero-code interactive 3D digital flipbook engine rendering technical architecture manuals from typed JSON files with algorithmic Canvas illustrations.",
    "short_desc": "Interactive 3D technical manual reader with auto-pagination and algorithmic seed-generated illustrations, operated purely via JSON commits.",
    "role": "Lead Architect & Content Systems Engineer",
    "project_type": "0-Code Publishing Substrate - Algorithmic 3D Flipbook - JSON Auto-Pagination",
    "date_text": "June 2026",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Liberating technical architecture documentation from static PDFs and dry Markdown files.",
    "intro_desc": "Complex engineering documentation is routinely trapped in boring PDFs or flat repositories that fail to engage visual learners and technical stakeholders.<br>The 0-Code Digital Flipbook Engine turns architecture manuals into interactive 3D reading experiences.<br>Content operators simply push lightweight JSON payloads; the engine handles typography scaling, page pagination, and algorithmic graphic synthesis automatically.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Preventing page layout overflow and generating unique, responsive technical diagrams without image bloat.",
    "challenge_desc_1": "Varying character counts across technical descriptions caused text to overflow rigid page containers, breaking aesthetic hierarchy.<br>Bundling hundreds of static high-res illustrations created massive repository bloat and slow asset delivery on mobile connections.",
    "challenge_desc_2": "Ensuring zero frontend code modifications when non-technical writers add new volumes or update existing engineering specifications.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "JSON auto-pagination contracts, centralized graphic registries, and seed-generated Canvas line-art.",
    "solution_desc": "Established automated page-splitting logic: text blocks exceeding 120 words dynamically fork into indexed subpages (p02a, p02b) preserving layout balance.<br>Created a centralized illustration registry (src/core/registry.ts) mapping graphic presets (swiss-hud, bento-3d, dual-engine).<br>Programmed zero-dependency Canvas line-art shaders that generate unique 60 FPS diagrams based on page seed strings.",
    "core_statement": "Enabled instant publication of interactive 3D engineering flipbooks with 0 frontend code edits and zero asset weight.",
    "story_headline": "ENGINEERING AN AUTONOMOUS 3D DOCUMENTATION ENGINE DRIVEN BY JSON",
    "story_title_1": "Automated Pagination Rules:",
    "story_1": "Constructed strict layout boundary rules that calculate typography volume and split overflowing sections without human intervention.",
    "story_title_2": "Algorithmic Seed Line-Art:",
    "story_2": "Developed lightweight HTML5 Canvas drawing routines producing deterministic, mathematical diagrams directly from text hashes.",
    "story_title_3": "0-Code GitOps Publishing:",
    "story_3": "Empowered writers to deploy full architectural manuals by committing a single JSON payload to GitHub, triggering instant CI/CD deployment.",
    "tools": "React, HTML5 Canvas 2D/3D, TypeScript, Zod, Tailwind CSS, Vite, Cloudflare Pages",
    "cover_image_url": "",
    "video_url": "https://artificialcraft.space/library"
  },
  {
    "project_id": "proj-ac-10",
    "slug": "webapp-presentation-engine",
    "title": "3D Spatial WebApp Presentation Engine",
    "tag": "graphic,automation",
    "name": "Projects",
    "card_number": "10",
    "number_bracket": "[10]",
    "about": "First-Person Tunnel Fly-Through + 3D Directory Tree & Live Configurator Dock with $0.00 Server Render Cost.",
    "short_desc": "First-Person Tunnel Fly-Through + 3D Directory Tree & Live Configurator Dock with $0.00 Server Render Cost.",
    "role": "Lead 3D Web & Systems Architect",
    "project_type": "Interactive 3D WebApp - WebGL Spatial Architecture & Live Configurator",
    "date_text": "Nov 2026",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Engineered a 3D Cybernetic Swiss Brutalist spatial presentation engine for artificialcraft.space.",
    "intro_desc": "Constructed a First-Person Tunnel Fly-Through web app combining 3D spatial stratification, radial dispersion mechanics, and an interactive line-branching directory tree.<br>Integrated a glassmorphic Live Customization Dock ([SYS//CONFIG DOCK]) enabling real-time UI texture swapping, JSON AST directory synchronization, and client-side 60 FPS WebM motion video recording.<br>Built using Three.js, React Three Fiber, GSAP, and Zod validation gates with zero server-side rendering overhead.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Transforming static presentation pages into dynamic, interactive 3D WebApps without expensive cloud GPU rendering costs.",
    "challenge_desc_1": "Traditional web presentation engines rely on heavy prerendered videos or server-side GPU instances, resulting in high latency, static user interaction, and expensive infrastructure overhead.",
    "challenge_desc_2": "Rendering complex 3D scenes with scattered directory nodes and deep UI component matrices on the client side often leads to visual occlusion, camera collision, and frame drops below 60 FPS.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Client-side WebGL spatial tunnel architecture with dual-state camera flight controls and in-memory JSON AST stream.",
    "solution_desc": "Engineered a 4-zone Z-axis perspective tunnel with radial dispersion mechanics that automatically clears the central flight path as the camera advances.<br>Implemented a dual-state camera machine (TUNNEL_FLIGHT_MODE and NODE_INSPECT_MODE) with GSAP smooth transitions and anchor memory.<br>Built a client-side WebM video recorder leveraging canvas.captureStream(60) and VP9 encoding for zero-cost, instant 60 FPS motion clip generation.",
    "core_statement": "Transformed web presentation into a 60 FPS interactive 3D spatial web application with zero server render costs.",
    "story_headline": "A LONG SHORT STORY ABOUT SPATIAL 3D WEBAPP ARCHITECTURE",
    "story_title_1": "1. 4-Zone Perspective Tunnel & Radial Dispersion:",
    "story_1": "Divided the spatial environment into 4 distinct depth zones along the Z-axis (UI Glass Viewport, Exploded Component Matrix, Interactive 3D Directory Tree, and Deep AI Reasoning Core). Implemented mathematical radial dispersion to push off-axis components to screen margins as the camera flies through.",
    "story_title_2": "2. Dual-State Camera & 3D Line-Branching Tree:",
    "story_2": "Designed a GSAP-driven camera state machine allowing seamless switching between continuous tunnel flight and close-up node inspection. Built an interactive 3D directory tree where clicking nodes triggers vector line growth, pollen particle bursts, and floating glassmorphic HUD cards (xb.UICard).",
    "story_title_3": "3. Collapsible Control Dock & Client-Side WebM Exporter:",
    "story_3": "Created a 5-tab glassmorphic dock enabling live UI texture replacement, Zod-validated JSON directory tree syncing, camera flight tuning, and client-side 60 FPS WebM video recording via canvas.captureStream for instant $0.00-cost motion asset exports.",
    "tools": "Three.js, React Three Fiber, GSAP, WebGL, WebM Canvas Recorder, Zod, Tailwind CSS, TypeScript",
    "cover_image_url": "",
    "video_url": "https://artificialcraft.space/"
  },
  {
    "project_id": "proj-legacy-01",
    "slug": "hubbis",
    "title": "Hubbis",
    "tag": "branding,graphic",
    "name": "Clients",
    "card_number": "11",
    "number_bracket": "[11]",
    "about": "400+ Journals of data-heavy financial reports and charts handled with pure patience.",
    "short_desc": "400+ Journals of data-heavy financial reports and charts handled with pure patience.",
    "role": "Lead Editorial & Publishing Designer",
    "project_type": "Editorial & Publishing Design - Data Visualization & Infographics",
    "date_text": "July 2025",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Designed institutional financial journals, wealth management surveys, and whitepapers for global corporate audiences over a five-year engagement.",
    "intro_desc": "Led editorial and publishing design across digital and print communications, including market reports, data-led features, and campaign assets.<br><br>Translated complex financial analysis and stakeholder requirements into clear, engaging infographics that improved the accessibility of key insights.<br><br>Partnered with department leads to streamline design workflows, maintain consistent layouts, and uphold asset standards across publishing channels.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Transforming dense financial content and complex datasets into credible, readable publications.",
    "challenge_desc_1": "Financial research often arrived as lengthy source material and large, unstructured spreadsheets. The challenge was to create clarity without losing analytical accuracy.",
    "challenge_desc_2": "Each publication required rigorous data checks, precise calculations, and disciplined use of a structured grid system. Small inconsistencies in figures or typography could undermine the credibility of the final report.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Built a meticulous editorial production process.",
    "solution_desc": "Established an end-to-end workflow that combined data validation with refined editorial design, resulting in clear, consistent, and publication-ready financial communications.",
    "core_statement": "Architect high-end, institutional financial journals, extensive wealth management surveys, and whitepapers for elite global corporate audiences over a dedicated 5+ year tenure.",
    "story_headline": "A LONG SHORT STORY FOR 5 YEAR",
    "story_title_1": "Editorial & Publishing Design:",
    "story_1": "Developed and executed top-tier layout designs for both digital and print media, encompassing informational data pages, market surveys, and media assets across various platforms.",
    "story_title_2": "Data Visualization & Infographics:",
    "story_2": "Converted intricate financial analyses and client requirements into captivating and clear infographic charts, enhancing visual communication for audiences worldwide.",
    "story_title_3": "Cross-Functional Collaboration:",
    "story_3": "Worked closely with department leaders to optimize design workflows, maintaining strict consistency in layouts and adherence to asset standards across all digital and print publishing platforms.",
    "tools": "Adobe InDesign, Illustrator, Photoshop, Pre-press, Financial Data Visualization",
    "cover_image_url": "https://framerusercontent.com/images/cHyvEpu6Z9BHr5aM6hn1HbxeZA.png",
    "video_url": "https://youtu.be/xzwvjO8DgwU"
  },
  {
    "project_id": "proj-legacy-02",
    "slug": "australia-experiences",
    "title": "Australia Experiences",
    "tag": "motion-design,branding,graphic",
    "name": "Projects",
    "card_number": "12",
    "number_bracket": "[12]",
    "about": "100GB+Raw Footage + 400Hour Deadline + 100% Bespoke Soundtracks",
    "short_desc": "100GB+Raw Footage + 400Hour Deadline + 100% Bespoke Soundtracks",
    "role": "Creative Director & Motion Producer",
    "project_type": "Brand Identity & Social Media Design - Motion Graphics & Video Production",
    "date_text": "Aug 2025",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Repositioned traditional hospitality businesses in Sydney through cohesive brand systems, social content, and short-form motion design.",
    "intro_desc": "Developed brand identities and social media systems that expressed each business\u2019s character and connected with its audience.<br><br>Created cohesive content frameworks for Instagram, YouTube, and TikTok, using contemporary color, typography, and imagery to build a consistent visual narrative.<br><br>Produced short-form video, motion graphics, and dynamic reels designed to strengthen attention, awareness, and engagement.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Building complete content systems under tight timelines and with limited source material.",
    "challenge_desc_1": "Projects often began without established brand guidelines, design systems, or usable visual assets, yet required polished promotional content within short production windows.",
    "challenge_desc_2": "The process required rapid concept development, efficient asset creation, and focused editing to turn large volumes of raw footage into clear, engaging social content.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Created flexible brand and content frameworks from the ground up.",
    "solution_desc": "Implemented a streamlined multimedia workflow that enabled the team to develop visual identities, social grid systems, and promotional videos quickly while maintaining consistency across channels.",
    "core_statement": "Rebrand and scale the digital awareness of traditional, un-digitized hospitality businesses in Sydney through high-engagement, short-form motion graphics and cinematic social media storytelling.",
    "story_headline": "A LONG SHORT STORY ABOUT 10GB RAW VIDEO FOOTAGE",
    "story_title_1": "Rapid Brand Identity Creation:",
    "story_1": "Built comprehensive visual identities, logos, and high-engagement Instagram grid layouts from scratch for multiple hospitality brands, ensuring cohesive digital storytelling under tight market launch timelines.",
    "story_title_2": "High-Efficiency Video Production:",
    "story_2": "Processed 2GB to 10GB of raw footage per project to conceptualize, edit, and deliver dynamic short-form videos and motion graphics within a strict 4-hour turnaround time per video.",
    "story_title_3": "Multi-Tool Software Mastery:",
    "story_3": "Orchestrated a hybrid editing workflow combining DaVinci Resolve (color/grading), Adobe After Effects (motion graphics), and CapCut (fast-paced pacing) to maximize audience retention and elevate brand awareness.",
    "tools": "DaVinci Resolve, Adobe After Effects, Lightroom, Canva/Affinity, Social Frameworks",
    "cover_image_url": "https://framerusercontent.com/images/m1HClvOk0DuUGA4qnooq9kNU.png",
    "video_url": "https://www.youtube.com/watch?v=OyrikXrAJw4&list=PLa0lgj6kRqgg"
  },
  {
    "project_id": "proj-legacy-03",
    "slug": "project-98",
    "title": "Project 98",
    "tag": "motion-design,branding,graphic",
    "name": "Projects",
    "card_number": "13",
    "number_bracket": "[13]",
    "about": "Successfully reduced team operational turnaround time by 20%, slashed client modification rates to below 15%.",
    "short_desc": "Successfully reduced team operational turnaround time by 20%, slashed client modification rates to below 15%.",
    "role": "Lead Product Designer & Creative Strategist",
    "project_type": "Strategic Product Redirection - Creative Direction & Design Delivery - Cross-Border Leadership & Automation",
    "date_text": "Sep 2026",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Repositioned Lam Dong durian from a low-value commodity into a premium, export-ready consumer product for China\u2019s retail market.",
    "intro_desc": "Used packaging and brand design to elevate the product\u2019s market position and turn a seasonal agricultural surplus into a standardized, higher-value consumer offering.<br><br>Directed end-to-end design delivery, including production-ready packaging, trade materials, and a web showcase, with close attention to export labeling and print requirements.<br><br>Coordinated cross-border stakeholders and a local design team while introducing automation to improve file handling, task tracking, and feedback cycles.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Balancing premium positioning with strict cross-border compliance.",
    "challenge_desc_1": "The product needed to meet detailed import, labeling, ingredient disclosure, and material requirements while entering a highly competitive market.",
    "challenge_desc_2": "Prepress accuracy was essential: even minor errors in the packaging artwork could delay approval, affect logistics, or jeopardize shipment release.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Developed an authentic, export-ready packaging system.",
    "solution_desc": "Created bespoke hand-drawn produce illustrations and a premium visual system that highlighted the product\u2019s origin, while ensuring every asset was prepared for compliant production.",
    "core_statement": "Elevate Lam Dong\u2019s native raw durian from a low-value agricultural commodity into a premium, high-value processed consumer good ready to penetrate mainland China's competitive retail market.",
    "story_headline": "A LONG SHORT STORY ABOUT \"GOOD HARVEST, BAD PRICES\"",
    "story_title_1": "Strategic Market Repositioning:",
    "story_1": "Spearheaded brand identity and packaging for Lam Dong's durian export to China, solving the \"good harvest, bad prices\" dilemma by transforming raw agricultural goods into premium consumer products.",
    "story_title_2": "End-to-End Creative Execution:",
    "story_2": "Delivered production-ready packaging, trade materials (Publishing Design), and responsive Web UI/UX, ensuring 100% compliance with strict international printing and custom-labeling standards.",
    "story_title_3": "Cross-Border Leadership & Automation:",
    "story_3": "Managed a remote, agile design team between Vietnam and China; built custom Python automation scripts to streamline file delivery, reducing operational turnaround time by 20%.",
    "tools": "Packaging Dieline Design, Adobe Illustrator, Branding Strategy, Cross-Border Workflow",
    "cover_image_url": "https://framerusercontent.com/images/alOwjhppv1v5N2oXoOmKTjiBS3o.png",
    "video_url": "https://youtu.be/s62GdiJMzgw"
  },
  {
    "project_id": "proj-legacy-04",
    "slug": "the-deer-project",
    "title": "The Deer Project",
    "tag": "branding,graphic",
    "name": "Projects",
    "card_number": "14",
    "number_bracket": "[14]",
    "about": "Ensuring the structural integrity of curved corners remained flawless during high-volume transport while elevating the restaurant's unboxing experience",
    "short_desc": "Ensuring the structural integrity of curved corners remained flawless during high-volume transport while elevating the restaurant's unboxing experience",
    "role": "Senior Industrial & Packaging Designer",
    "project_type": "Ideation & Conceptual Strategy - Technical Sketching & Form Generation  - Prototyping & Factory Collaboration",
    "date_text": "Oct 2020",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Designed an eco-conscious packaging system that replaced conventional takeaway boxes with expressive, functional custom forms.",
    "intro_desc": "The brief was to move beyond low-value plastic and styrofoam packaging and create a modern, environmentally considered alternative. Complex curves and organic forms introduced substantial challenges during prototyping, die-cut testing, and factory assembly.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Making sculptural packaging forms practical to manufacture.",
    "challenge_desc_1": "Developed five tailored packaging formats for pastry and bakery items, fries, burgers, salads and fruit, and premium barbecue\u2014each designed to support presentation, ventilation, heat retention, or leak resistance as needed.",
    "challenge_desc_2": "Production readiness depended on precise dielines, logical locking mechanisms, stress-distribution tabs, and the selection of food-grade paperboard with a certified waterproof bio-membrane.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Engineered expressive curves for repeatable production.",
    "solution_desc": "Created technically accurate dielines and structural details that preserved the distinctive curved forms while meeting the tolerances required for reliable factory production.",
    "core_statement": "Partnered with a premium hospitality brand to transition traditional, single-use take-away boxes into an eco-friendly, modern packaging ecosystem. The core technical hurdle was abandoning standard square shapes in favor of complex curved geometries and organic contours, which created massive assembly and structural cracking friction during initial factory die-cut testing.",
    "story_headline": "A LONG SHORT STORY THROUGH 5 DISTINCT CUSTOM FORM-FACTORS",
    "story_title_1": "The 5-Form Factor System (Ideation):",
    "story_1": "Designed and engineered a cohesive visual and structural system across 5 distinct custom form-factors, each precisely tailored to specific culinary categories to optimize fresh presentation: 1. Pastry & Bakery (moisture-controlled), 2. French Fries (ventilated cone-hybrid), 3. Gourmet Burgers (heat-retaining), 4. Salads & Fruits (leak-proof), and 5. Premium BBQ (compartmentalized structural geometry).",
    "story_title_2": "Technical Dieline Engineering (Execution):",
    "story_2": "To ensure the fluid, modern curved contours were production-ready, I personally engineered pixel-perfect technical dielines (structural r\u1eadp) with precise mathematical tolerances, folding logical locks, and stress-distribution tabs. Selected heavy-duty, food-grade paperboard lined with a certified waterproof bio-membrane.",
    "story_title_3": "Supply Chain & Factory Collaboration (Impact):",
    "story_3": "Bridged the gap between high-level creative design and factory floor constraints by working directly with manufacturing engineers on-site. Conducted multiple physical mock-up stress tests to calibrate machine scoring depth, successfully achieving a seamless, glue-free assembly workflow that elevated the brand's premium unboxing experience.",
    "tools": "Industrial Dielines, Form Factor Ideation, Factory Prototyping, Technical Sketching",
    "cover_image_url": "https://framerusercontent.com/images/wHfV12wh3MVnnAqSg4tCvYMgOU.png",
    "video_url": "https://youtu.be/ZwAEfdxzuMk"
  },
  {
    "project_id": "proj-legacy-05",
    "slug": "the-growth-agency",
    "title": "The Growth Agency",
    "tag": "motion-design,branding,graphic",
    "name": "Clients",
    "card_number": "15",
    "number_bracket": "[15]",
    "about": "30+ logos successfully designed and put into practical use for individuals and organizations.",
    "short_desc": "30+ logos successfully designed and put into practical use for individuals and organizations.",
    "role": "Creative Director & UI/UX Lead",
    "project_type": "Creative Direction & Branding - UI/UX & Digital Design",
    "date_text": "Oct 2018",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Supported an Australian digital marketing agency by coordinating high-volume creative production for global, cross-channel campaigns.",
    "intro_desc": "Directed concepts for international branding, digital advertising, and marketing campaigns.<br><br>Designed high-fidelity websites, application interfaces, and paid-media assets using modern design and user-experience practices.<br><br>Worked with the production manager to plan workloads, coordinate the Ho Chi Minh City team, and introduce relevant design and marketing practices into daily workflows.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Maintaining momentum across distributed teams, time zones, and high-volume campaign work.",
    "challenge_desc_1": "The team managed large volumes of campaign data and creative requests across markets with different working rhythms and expectations.",
    "challenge_desc_2": "Success depended on clear communication, disciplined prioritization, and reliable systems for tracking assets, feedback, and approvals across time zones.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Established a centralised creative operations workflow.",
    "solution_desc": "Standardised asset management and production processes with tailored automation for file preparation and batching, improving visibility, coordination, and delivery speed.",
    "core_statement": "Act as the central production engine for an Australian digital marketing agency, leading an agile creative team in Ho Chi Minh City to execute high-volume cross-channel campaigns for global accounts.",
    "story_headline": "A LONG SHORT STORY ABOUT \"10 AM TO 3 PM PUB-LIFESTYLE\"",
    "story_title_1": "Offshore Creative Leadership:",
    "story_1": "Managed and coordinated an agile production team in Ho Chi Minh City to execute high-volume creative assets for an Australian agency, successfully bridge-managing communication and workflow bottlenecks.",
    "story_title_2": "Hybrid Full-Service Delivery:",
    "story_2": "Owned the end-to-end execution of diverse multi-disciplinary projects, spanning from structural print and corporate branding to promotional video production and responsive Frontend/WordPress UI-UX layouts.",
    "story_title_3": "High-Volume Asset Governance:",
    "story_3": "Acted as the central custodian for massive raw client data and creative assets, independently structuring the production pipeline and working under extended hours to ensure 100% on-time delivery across international time zones.",
    "tools": "Figma, Creative Direction, UI/UX Design, International Advertising, Workflow Systems",
    "cover_image_url": "https://framerusercontent.com/images/K23whkmX4C82evxqozLSt3oA9o.png",
    "video_url": "https://www.youtube.com/@TheGrowthAgencyUK"
  },
  {
    "project_id": "proj-legacy-06",
    "slug": "vgs-shop",
    "title": "VGS Shop",
    "tag": "branding,graphic",
    "name": "Clients",
    "card_number": "16",
    "number_bracket": "[16]",
    "about": "100 + landing pages designed and deployed on an online sales website drove a sales increase of up to 30%",
    "short_desc": "100 + landing pages designed and deployed on an online sales website drove a sales increase of up to 30%",
    "role": "Senior Multi-Platform Digital Designer",
    "project_type": "Multi-Platform Digital Design - Web UI/UX & Interactive Design",
    "date_text": "Oct 2016",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": "Delivered conversion-focused digital experiences and campaign assets for a leading TV homeshopping and e-commerce platform.",
    "intro_desc": "Collaborated with the Creative Director to produce promotional visuals for TV homeshopping, email marketing, and corporate branding across digital and offline touchpoints.<br><br>Improved the e-commerce experience for vgsshop.vn through interactive landing pages, interface design, and early augmented-reality concepts developed within practical time and budget constraints.<br><br>Created motion graphics and video advertising assets for broadcast and digital marketing campaigns.",
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": "Balancing brand quality with immediate commercial performance.",
    "challenge_desc_1": "Campaign assets were evaluated against real-time sales and traffic outcomes, requiring design decisions that were clear, compelling, and conversion-oriented.",
    "challenge_desc_2": "The work demanded fast iteration, close alignment with commercial goals, and the ability to adapt creative output quickly in response to campaign performance.",
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": "Applied conversion-led interface and campaign design.",
    "solution_desc": "Continuously optimised the vgsshop.vn experience and built focused landing pages that balanced concise messaging, strong visual appeal, and measurable sales objectives.",
    "core_statement": "Drive immediate sales conversions and digital engagement for a premier TV Homeshopping and E-commerce platform during the foundational golden era of online retail.",
    "story_headline": "A LONG SHORT STORY ABOUT E-COMMERCE PLATFORMS IN THEIR EARLY DAYS",
    "story_title_1": "Conversion-Driven E-Commerce Design:",
    "story_1": "Designed high-impact visual assets for TV Homeshopping and web platforms under a strict Korean management style, directly aligning creative execution with aggressive sales targets and conversion metrics.",
    "story_title_2": "Data-Backed UI/UX Optimization:",
    "story_2": "Managed and optimized the e-commerce interface (vgsshop.vn), developing high-converting landing pages and promotional layouts that successfully turned traffic into measurable sales volume.",
    "story_title_3": "Multi-Platform Broadcast Graphics:",
    "story_3": "Produced engaging motion graphics, broadcast video ads, and digital assets that synchronized the brand experience seamlessly across TV screens and initial online retail storefronts.",
    "tools": "WordPress Frontend, Figma, Adobe Photoshop, TV Homeshopping Broadcast Graphics",
    "cover_image_url": "https://framerusercontent.com/images/2rfRvSPYYZbkGAvfYPpGJhJv6k.png",
    "video_url": "https://www.youtube.com/@VGSSHOP106"
  }
];
var INITIAL_SERVICES = [
  {
    "Slug": "automation",
    "Title": "AI AUTOMATION & PIM PIPELINES",
    "Cover Title": "AUTOMATION",
    "Cover Number": "01",
    "Subtitle 1": "Theoretically speaking:",
    "Number 1": "01",
    "Description 1": "I architect autonomous multi-agent pipelines and PIM automation that decouple LLM cognitive reasoning from deterministic workflow execution, eliminating context bloat and cutting token costs by 70%.",
    "Duration": "Duration",
    "Duration Text": "7 - 14 Business Days",
    "Range": "Starts From",
    "Amount": "$2500",
    "Image 1": "",
    "Image 1:alt": "automation cover",
    "Subtitle 2": "My Process",
    "Number 2": "02",
    "Title 2": "Dual-Engine Decoupling & Vector Sanitization",
    "Description 2": "We begin by isolating cognitive reasoning (Dify) from event-driven execution (n8n), establishing immutable Zod data schemas, circuit breakers, and RAG vector search boundaries.",
    "Description 3": "Deploy multi-stage vision triage models, zero-Base64 cloud storage streaming (R2/S3), and automated health checks to deliver 99.99% deterministic execution reliability.",
    "Image 2": "",
    "Image 2:alt": "",
    "Image 3": "",
    "Image 3:alt": "",
    "Image 4": "",
    "Image 4:alt": "",
    "Subtitle 3": "What You Get",
    "Number 3": "03",
    "Title 3": "Production-Grade Autonomous Infrastructure",
    "Description 4": "A turnkey self-hosted AI automation ecosystem with full observability, error dead-letter queues, and real-time Slack audit notifications.",
    "Description 5": "Built to eliminate manual product operations, reduce API spend, and handle high concurrency without human intervention.",
    "youtube_id": "",
    "URL 1": "https://artificialcraft.space/",
    "why choose me (WCM) title 1": "99.99% Deterministic SLA",
    "why choose me (WCM) title 2": "70% Token Spend Reduction",
    "why choose me (WCM) title 3": "Battle-Tested Tech Stack",
    "why choose me (WCM) title 4": "Zero-Base64 Memory Safety",
    "WCM reason 1": "Rigid separation of cognitive reasoning and execution muscle guarantees continuous zero-downtime automated workflows.",
    "WCM reason 2": "Two-stage multimodal triage (Gemini Flash into Claude Sonnet) catches 80% of defects at fractions of standard API costs.",
    "WCM reason 3": "n8n, Dify.ai, FastAPI, Docker, Cloudflare R2/Tunnels, Pinecone, and Google Vertex AI.",
    "WCM reason 4": "Direct binary memory offloading keeps orchestrator RAM footprint strictly under 4GB even under peak data loads.",
    "WCM image": "",
    "WCM image:alt": "",
    "WCM image 2": "",
    "WCM image 2:alt": "",
    "WCM image 3": "",
    "WCM image 3:alt": "",
    "WCM image 4": "",
    "WCM image 4:alt": "",
    "Link to video 1": "https://artificialcraft.space/"
  },
  {
    "Slug": "motion-design",
    "Title": "VIDEO-AS-CODE & REMOTION PIPELINES",
    "Cover Title": "REMOTION",
    "Cover Number": "02",
    "Subtitle 1": "Theoretically speaking:",
    "Number 1": "01",
    "Description 1": "I develop programmatic Video-as-Code engines using Remotion, React, and FFmpeg that render high-volume, dynamic 60 FPS marketing and personalized videos with 0% silent visual drift.",
    "Duration": "Duration",
    "Duration Text": "5 - 10 Business Days",
    "Range": "Starts From",
    "Amount": "$1800",
    "Image 1": "",
    "Image 1:alt": "video-as-code cover",
    "Subtitle 2": "My Process",
    "Number 2": "02",
    "Title 2": "Frame-Deterministic Motion Architecture",
    "Description 2": "We define immutable motion tokens and Zod contracts, decoupling creative storyboard choreography from modular React video components.",
    "Description 3": "All animation curves, typography velocity, and 3D tilts are computed strictly from discrete frame indices via useCurrentFrame(), guaranteeing cross-cluster consistency.",
    "Image 2": "",
    "Image 2:alt": "",
    "Image 3": "",
    "Image 3:alt": "",
    "Image 4": "",
    "Image 4:alt": "",
    "Subtitle 3": "What You Get",
    "Number 3": "03",
    "Title 3": "Scalable Cloud Media Synthesis",
    "Description 4": "Serverless rendering clusters deployed on GCP Cloud Run capable of outputting thousands of tailored video variants per hour via simple API triggers.",
    "Description 5": "FFmpeg post-processing integration for automated audio normalization (EBU R128), chromatic effects, and instant concat demuxing.",
    "youtube_id": "",
    "URL 1": "https://artificialcraft.space/",
    "why choose me (WCM) title 1": "0% Silent Visual Drift",
    "why choose me (WCM) title 2": "Serverless Cloud Run Speed",
    "why choose me (WCM) title 3": "Typed React & Remotion 4.0",
    "why choose me (WCM) title 4": "Automated Media Concat",
    "WCM reason 1": "Eliminates frame jitter and desync by using frame-calculated motion tokens rather than brittle wall-clock intervals.",
    "WCM reason 2": "Scales horizontally to hundreds of parallel rendering instances for on-demand high-volume commercial campaigns.",
    "WCM reason 3": "React 19, TypeScript, Remotion, Zod, and Tailwind CSS engineered with Swiss graphic design discipline.",
    "WCM reason 4": "Direct stdout memory pipes to FFmpeg allow instant clip concatenation with zero re-encode penalty.",
    "WCM image": "",
    "WCM image:alt": "",
    "WCM image 2": "",
    "WCM image 2:alt": "",
    "WCM image 3": "",
    "WCM image 3:alt": "",
    "WCM image 4": "",
    "WCM image 4:alt": "",
    "Link to video 1": "https://artificialcraft.space/"
  },
  {
    "Slug": "web3d-spatial",
    "Title": "SPATIAL 3D WEB & INTERACTIVE CONFIGURATORS",
    "Cover Title": "SPATIAL 3D",
    "Cover Number": "03",
    "Subtitle 1": "Theoretically speaking:",
    "Number 1": "01",
    "Description 1": "I engineer client-side WebGL, Three.js, and GSAP 3D interactive experiences and B2B product configurators that run fluidly at 60 FPS with $0.00 cloud rendering fees.",
    "Duration": "Duration",
    "Duration Text": "7 - 14 Business Days",
    "Range": "Starts From",
    "Amount": "$2200",
    "Image 1": "",
    "Image 1:alt": "spatial 3d cover",
    "Subtitle 2": "My Process",
    "Number 2": "02",
    "Title 2": "Client-Side GPU Offloading & Sandboxing",
    "Description 2": "We package complex geometry, custom GLSL shaders, and exploded assemblies into lightweight JSON AST payloads, verified by strict Zod schema gates.",
    "Description 3": "Render directly in the user's browser inside memory-isolated sandboxes with shell-stripping to prevent DOM leakage and style conflicts.",
    "Image 2": "",
    "Image 2:alt": "",
    "Image 3": "",
    "Image 3:alt": "",
    "Image 4": "",
    "Image 4:alt": "",
    "Subtitle 3": "What You Get",
    "Number 3": "03",
    "Title 3": "High-Fidelity 60 FPS Digital Showrooms",
    "Description 4": "Interactive spatial environments featuring exploded mechanical views, raycasting blueprint HUDs, and dynamic data visualization.",
    "Description 5": "Zero server GPU streaming cost, blazing fast edge delivery, and full mobile touch responsiveness.",
    "youtube_id": "",
    "URL 1": "https://artificialcraft.space/",
    "why choose me (WCM) title 1": "$0.00 Cloud Render Fees",
    "why choose me (WCM) title 2": "Rock-Solid 60 FPS Target",
    "why choose me (WCM) title 3": "Zod AST State Security",
    "why choose me (WCM) title 4": "Cybernetic Brutalist UX",
    "WCM reason 1": "Offloading rendering to client GPUs eliminates costly WebRTC/server pixel-streaming bills completely.",
    "WCM reason 2": "Optimized with Three.InstancedMesh and custom GLSL fragment shaders to guarantee fluid frame rates.",
    "WCM reason 3": "Next.js App Router API proxies and schema validation protect internal webhooks and prevent invalid execution.",
    "WCM reason 4": "Precision Swiss typography, dark obsidian concrete palettes, and tactile HUD interactions that captivate technical buyers.",
    "WCM image": "",
    "WCM image:alt": "",
    "WCM image 2": "",
    "WCM image 2:alt": "",
    "WCM image 3": "",
    "WCM image 3:alt": "",
    "WCM image 4": "",
    "WCM image 4:alt": "",
    "Link to video 1": "https://artificialcraft.space/"
  },
  {
    "Slug": "motion-design",
    "Title": "MOTION DESIGN",
    "Cover Title": "MOTION",
    "Cover Number": "04",
    "Subtitle 1": "Theoretically speaking:",
    "Number 1": "1",
    "Description 1": "I create visually stunning motion graphics that bring your brand to life. Whether it\u2019s an animated logo, an explainer video, or social media content, every project is crafted to engage your audience and leave a lasting impression. My creativity with technical expertise to ensure each animation reflects your brand identity perfectly.",
    "Duration": "Duration",
    "Duration Text": "5 - 7 Business Days",
    "Range": "Starts From",
    "Amount": "$1200",
    "Image 1": "https://framerusercontent.com/images/baSPa5tEsmii7iM5WxBKDj0rs.png",
    "Image 1:alt": "image",
    "Subtitle 2": "My Process",
    "Number 2": "2",
    "Title 2": "Concept & Storyboarding",
    "Description 2": "I start by understanding your goals and target audience, which allows me to design animations that truly resonate. Every step is transparent, so you\u2019re involved in shaping the final output. Our workflow guarantees efficiency without compromising on creativity A clear, structured process ensures your project flows smoothly from start to finish.",
    "Description 3": "Bring your ideas to life with captivating motion graphics that tell your story. From logo animations and social media visuals to most explainer videos and promotional clips, our motion design service combine creativity with precision to make your brand stand out Collaborating with you for revisions and delivering the final files in multiple formats.",
    "Image 2": "https://framerusercontent.com/images/RTnPGxJ0BZJkLJs9bO6s555s7Wc.png",
    "Image 2:alt": "image",
    "Image 3": "https://framerusercontent.com/images/RUgl3zHupfHH8xgFz7YABG8C9I.png",
    "Image 3:alt": "image",
    "Image 4": "https://framerusercontent.com/images/nS2sRItX8n8KOFigDOuBjpyfBs.png",
    "Image 4:alt": "image",
    "Subtitle 3": "What You Get",
    "Number 3": "3",
    "Title 3": "Multi-format Delivery",
    "Description 4": "I combine creativity, efficiency, and attention to detail to deliver motion design that exceeds expectations. My focus is not only on visual appeal but also on creating content that communicates your message effectively. I believe in building lasting with our clients by providing consistent quality, reliable timelines, and solutions that drive results. Choosing me means choosing a partner committed to your brand\u2019s growth and success.",
    "Description 5": "Motion design is not just about movement; it\u2019s about storytelling. Each animation I create is designed to communicate your message clearly and effectively, making complex ideas simple and memorable for your audience.",
    "youtube_id": "IT2IsdSLTOM",
    "URL 1": "",
    "why choose me (WCM) title 1": "Guaranteed timeline",
    "why choose me (WCM) title 2": "Business Impact",
    "why choose me (WCM) title 3": "Technical Stack",
    "why choose me (WCM) title 4": "Human-centered design",
    "WCM reason 1": "Continuous multimedia integration, specialized in high-pressure rapid deployments from 2018 to 2025.",
    "WCM reason 2": "Produced 100+ commercial video ads under a strict 4-hour blitz window, utilizing 7+ years of commercial logo animation and 70% bespoke background audio scoring.",
    "WCM reason 3": "DaVinci Resolve, Adobe After Effects, Lightroom, Canva/Affinity Suite, Calvary, Blender, Hand-drawn Illustration.",
    "WCM reason 4": "Boosted organic viewer dwell time by 50% by composing bespoke acoustic-beat matching and visual pacing tailored to reduce viewer doom-scrolling anxiety.",
    "WCM image": "https://framerusercontent.com/images/MCWSzyLvKGxVpo8QMh6W6634wg.png",
    "WCM image:alt": "",
    "WCM image 2": "https://framerusercontent.com/images/FAMXPkxEnb2DdssT2Xt4SOUMtHE.png",
    "WCM image 2:alt": "",
    "WCM image 3": "https://framerusercontent.com/images/HvCSVNoKDEneHgTqQqUNfaxgAIU.png",
    "WCM image 3:alt": "",
    "WCM image 4": "https://framerusercontent.com/images/9jVhmiUSGdWOfNixO9BoYUpF8I.png",
    "WCM image 4:alt": "",
    "Link to video 1": "https://www.youtube.com/watch?v=IT2IsdSLTOM"
  },
  {
    "Slug": "branding",
    "Title": "BRANDING",
    "Cover Title": "BRANDING",
    "Cover Number": "05",
    "Subtitle 1": "Theoretically speaking:",
    "Number 1": "1",
    "Description 1": "Branding is more than a logo\u2014it is the strategic expression of your business through a distinctive voice, personality, and story. I help businesses define their core essence and translate it into a cohesive visual and verbal identity designed for long-term relevance. From tone of voice and messaging to color, typography, and supporting assets, every detail is thoughtfully aligned with your goals. Deliverables include production-ready brand identity systems, packaging, and print layouts, prepared to professional commercial printing and export standards.",
    "Duration": "Duration",
    "Duration Text": "5 - 10 Business Days",
    "Range": "Starts From",
    "Amount": "$1000",
    "Image 1": "https://framerusercontent.com/images/SnZpLBPrkSxPwghmEq9r69pYYow.png",
    "Image 1:alt": "image",
    "Subtitle 2": "My Process",
    "Number 2": "2",
    "Title 2": "Strategic Branding, Print Compliance",
    "Description 2": "Great branding goes beyond visuals-it\u2019s about creating a system that works everywhere. I build comprehensive design that ensure consistency across print, digital, and physical spaces. This includes logo variations, color guidelines, typography, and brand patterns that adapt seamlessly. Every project bridges structural engineering with brand aesthetics, delivered with meticulous attention to 3D dimensions, material feasibility, and international export compliance to solve real market challenges.",
    "Description 3": "Each element is designed to be flexible, scalable, and timeless. Our branding process also integrates storytelling frameworks ensuring that your message is clear and impactful. From pitch decks to social media posts, your brand remains recognizable. I focus on building guidelines that your team can easily use and apply without creative limitations.",
    "Image 2": "https://framerusercontent.com/images/m1HClvOk0DuUGA4qnooq9kNU.png",
    "Image 2:alt": "image",
    "Image 3": "https://framerusercontent.com/images/ippwmEPs3nFXNKy2MFYGqVWJT0c.png",
    "Image 3:alt": "image",
    "Image 4": "https://framerusercontent.com/images/kNmm6kTFdPRRh7kll906XuXCFYg.png",
    "Image 4:alt": "image",
    "Subtitle 3": "Why Choose Me",
    "Number 3": "3",
    "Title 3": "Making Brands Human",
    "Description 4": "People don\u2019t connect with businesses - they connect with stories, emotions, and experiences. That\u2019s why I approach branding from a human-first perspective. I design brands that feel approachable, relatable, and authentic. This involves shaping not only visuals but also tone of voice, messaging, and brand culture. Every touchpoint is crafted to make your audience feel something whether it\u2019s trust, excitement, or inspiration.",
    "Description 5": "I focus on creating experiences that go beyond recognition and build loyalty. By balancing strategy with creativity, we ensure your brand communicates clearly while standing out in crowded markets.",
    "youtube_id": "s62GdiJMzgw",
    "URL 1": "",
    "why choose me (WCM) title 1": "Guaranteed timeline",
    "why choose me (WCM) title 2": "Business Impact",
    "why choose me (WCM) title 3": "Technical Stack",
    "why choose me (WCM) title 4": "Human-centered design",
    "WCM reason 1": "Active over 10 years, peaking during a 5.5-year institutional tenure at Hubbis HK and export campaigns in 2026.",
    "WCM reason 2": "Delivered 500+ data-heavy financial journals and engineered a 5-form factor curved eco-packaging system with pixel-perfect structural dielines.",
    "WCM reason 3": "Adobe InDesign (Master), Illustrator, Photoshop, Pre-press Color Management & Structural Dielines (R\u1eadp).",
    "WCM reason 4": "Slashed user cart abandonment rates by 35% by redesigning thumb-zone accessibility, low-stress error fields, and intuitive visual feedback loops for stress-free shopping.",
    "WCM image": "https://framerusercontent.com/images/MCWSzyLvKGxVpo8QMh6W6634wg.png",
    "WCM image:alt": "",
    "WCM image 2": "https://framerusercontent.com/images/FAMXPkxEnb2DdssT2Xt4SOUMtHE.png",
    "WCM image 2:alt": "",
    "WCM image 3": "https://framerusercontent.com/images/HvCSVNoKDEneHgTqQqUNfaxgAIU.png",
    "WCM image 3:alt": "",
    "WCM image 4": "https://framerusercontent.com/images/9jVhmiUSGdWOfNixO9BoYUpF8I.png",
    "WCM image 4:alt": "",
    "Link to video 1": "https://www.youtube.com/watch?v=s62GdiJMzgw"
  },
  {
    "Slug": "graphic",
    "Title": "GRAPHIC",
    "Cover Title": "GRAPHIC",
    "Cover Number": "06",
    "Subtitle 1": "Theoretically speaking:",
    "Number 1": "1",
    "Description 1": "Graphic design is about more than decoration - it\u2019s about communication. I create visuals that capture attention and deliver messages instantly. Every design choice, from typography to color, is made with purpose. My goal is to translate ideas powerful visuals that resonate with your audience.",
    "Duration": "Duration",
    "Duration Text": "7 - 12 Business Days",
    "Range": "Starts From",
    "Amount": "$700",
    "Image 1": "https://framerusercontent.com/images/xRcNTZBo5k0lccedRb1KqVZqAY4.png",
    "Image 1:alt": "image",
    "Subtitle 2": "My Process",
    "Number 2": "2",
    "Title 2": "Design Across Platform",
    "Description 2": "Your brand deserves to look sharp everywhere it appears. That\u2019s why I design for multi-platform impact- from print materials to digital screens. Business cards, brochures, and packaging are crafted to feel premium and professional. On the digital side, we create content for websites, apps, and social media that grabs attention and drives engagement",
    "Description 3": "I also design custom illustrations and icon sets that make your brand unique. Our approach ensures scalability so designs look flawless on a mobile feed as well as a billboard. Consistency is key - I build design systems that keep your brand unified across every medium. Each project is approached with adaptability in mind, so your visual identity grows with you.",
    "Image 2": "https://framerusercontent.com/images/cxJbQRM24GVdzP9p8rf8btULLP0.png",
    "Image 2:alt": "image",
    "Image 3": "https://framerusercontent.com/images/GJEEePsAxzcPOuRDqTH0cyvPemc.png",
    "Image 3:alt": "image",
    "Image 4": "https://framerusercontent.com/images/HA51JHCEmju7Hx1HCNCg2EkFaw.png",
    "Image 4:alt": "image",
    "Subtitle 3": "Why Choose Me",
    "Number 3": "3",
    "Title 3": "Turning Ideas Into Impact",
    "Description 4": "Behind every great graphic design is a story waiting to be told. We transform abstract concepts into visual that spark emotion and inspire action. Our team thrives on collaboration\u2014working closely with you to understand your vision and goals. From sketches to polished final designs, every step is driven by strategy. We experiment with bold layouts, modern aesthetics, and timeless to create designs that feel fresh yet reliable",
    "Description 5": "Our focus is always on impact\u2014designs that make people stop, think, and remember. Whether it\u2019s launching a campaign or we create graphics that elevate your message.",
    "youtube_id": "xzwvjO8DgwU",
    "URL 1": "",
    "why choose me (WCM) title 1": "Guaranteed timeline",
    "why choose me (WCM) title 2": "Business Impact",
    "why choose me (WCM) title 3": "Technical Stack",
    "why choose me (WCM) title 4": "Human-centered design",
    "WCM reason 1": "Active since 2016, bridging early TV Homeshopping web frameworks to 2026 AI-integrated Web UI/UX.",
    "WCM reason 2": "Optimized e-commerce platforms (vgsshop.vn) for direct conversion and built Python automation scripts that reclaimed 60%+ of team design operational time.",
    "WCM reason 3": "Figma, Adobe Photoshop, Adobe Illustrator, WordPress Frontend CMS, Python Programming (Processing, AI Agents & LLM APIs), Advanced Prompts.",
    "WCM reason 4": "Increased information retention by 45% through empathetic grid systems, high-contrast typography, and glare-free material selection tailored for visually fatigued users.",
    "WCM image": "https://framerusercontent.com/images/MCWSzyLvKGxVpo8QMh6W6634wg.png",
    "WCM image:alt": "",
    "WCM image 2": "https://framerusercontent.com/images/FAMXPkxEnb2DdssT2Xt4SOUMtHE.png",
    "WCM image 2:alt": "",
    "WCM image 3": "https://framerusercontent.com/images/HvCSVNoKDEneHgTqQqUNfaxgAIU.png",
    "WCM image 3:alt": "",
    "WCM image 4": "https://framerusercontent.com/images/9jVhmiUSGdWOfNixO9BoYUpF8I.png",
    "WCM image 4:alt": "",
    "Link to video 1": "https://www.youtube.com/watch?v=xzwvjO8DgwU"
  }
];

/**
 * Custom UI Menu installed on Google Sheets opening
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('⚡ Framer Automation')
    .addItem('1. Clean & Format Data (Sanitize <br>)', 'sanitizeDataForFramer')
    .addItem('2. Sync to Export Tabs (Append / Safe Update)', 'syncToFramerExport')
    .addSeparator()
    .addItem('⚡ Initialize All 4 Tabs & 9 Flagship Projects', 'initAllTabsAndData')
    .addToUi();
}

/**
 * 1. SANITIZE DATA FOR FRAMER
 * - Replaces all raw newline characters (\n, \r\n) in text cells with <br> tags.
 * - Trims unnecessary leading/trailing whitespace.
 * - Escapes double quotes safely.
 * - Prevents broken multi-line CSV imports into Framer CMS.
 */
function sanitizeDataForFramer() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Case_Studies');
  
  if (!sheet) {
    SpreadsheetApp.getUi().alert('❌ Error', 'Tab "Case_Studies" not found. Please run "Initialize All 4 Tabs" first.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  var range = sheet.getDataRange();
  var values = range.getValues();
  var modifiedCount = 0;

  for (var r = 1; r < values.length; r++) { // skip header row
    for (var c = 0; c < values[r].length; c++) {
      var cellVal = values[r][c];
      if (typeof cellVal === 'string' && cellVal.length > 0) {
        var originalVal = cellVal;
        
        // 1. Replace Windows & Unix newlines with <br>
        var sanitized = cellVal.replace(/\r\n/g, '<br>').replace(/[\r\n]/g, '<br>');
        
        // 2. Collapse duplicate consecutive <br><br><br> to maximum 2 breaks
        sanitized = sanitized.replace(/(<br>\s*){3,}/gi, '<br><br>');
        
        // 3. Trim outer spaces
        sanitized = sanitized.trim();

        if (sanitized !== originalVal) {
          values[r][c] = sanitized;
          modifiedCount++;
        }
      }
    }
  }

  if (modifiedCount > 0) {
    range.setValues(values);
    SpreadsheetApp.getActiveSpreadsheet().toast('✅ Sanitized ' + modifiedCount + ' multi-line cells with <br> tags.', 'Framer Automation', 5);
    SpreadsheetApp.getUi().alert('✅ Data Sanitization Complete', 'Successfully processed and converted ' + modifiedCount + ' text cells into Framer-safe single-line format using <br> tags.', SpreadsheetApp.getUi().ButtonSet.OK);
  } else {
    SpreadsheetApp.getActiveSpreadsheet().toast('All cells in Case_Studies are already clean!', 'Framer Automation', 4);
    SpreadsheetApp.getUi().alert('ℹ️ Clean State', 'No unescaped newlines were found. Tab "Case_Studies" is 100% Framer-ready.', SpreadsheetApp.getUi().ButtonSet.OK);
  }
}

/**
 * 2. SYNC TO FRAMER EXPORT TABS
 * - Maps normalized data from "Case_Studies" into "Framer_Export_Work" (66 columns).
 * - Enforces lowercase, comma-separated tags without spaces.
 * - Supports APPEND MODE:
 *   Prompts user to either Update existing records (by matching Slug) or Append new records only.
 * - Does not destructively erase existing data without confirmation.
 */
function syncToFramerExport() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ui = SpreadsheetApp.getUi();
  
  var caseSheet = ss.getSheetByName('Case_Studies');
  var workSheet = ss.getSheetByName('Framer_Export_Work');
  var serviceSheet = ss.getSheetByName('Framer_Export_Service');
  
  if (!caseSheet || !workSheet) {
    ui.alert('❌ Error', 'Required tabs ("Case_Studies" or "Framer_Export_Work") not found. Please run "Initialize All 4 Tabs" first.', ui.ButtonSet.OK);
    return;
  }

  // Ask User for Sync Mode
  var response = ui.alert(
    '⚡ Framer Sync Mode Selection',
    'Do you want to UPDATE existing projects matching by "Slug" AND Append new ones?\n\n' +
    '• Click YES to Update matching Slugs & Append new projects.\n' +
    '• Click NO to APPEND ONLY (preserve existing rows untouched).\n' +
    '• Click CANCEL to abort.',
    ui.ButtonSet.YES_NO_CANCEL
  );

  if (response === ui.Button.CANCEL) {
    return;
  }

  var allowUpdate = (response === ui.Button.YES);

  // Read Case Studies Data
  var caseData = caseSheet.getDataRange().getValues();
  if (caseData.length <= 1) {
    ui.alert('ℹ️ Empty Source', 'No data rows found in "Case_Studies".', ui.ButtonSet.OK);
    return;
  }

  var caseHeaders = caseData[0];
  var colMap = {};
  for (var i = 0; i < caseHeaders.length; i++) {
    colMap[caseHeaders[i].toString().trim()] = i;
  }

  // Read existing Framer_Export_Work
  var workData = workSheet.getDataRange().getValues();
  var existingWorkHeaders = workData[0];
  var slugColIdx = existingWorkHeaders.indexOf('Slug');
  
  if (slugColIdx === -1) {
    // Re-initialize headers if corrupted
    workSheet.clear();
    workSheet.appendRow(FRAMER_WORK_HEADERS);
    workData = [FRAMER_WORK_HEADERS];
    slugColIdx = 0;
  }

  // Build index of existing slugs in Framer_Export_Work
  var existingSlugs = {};
  for (var w = 1; w < workData.length; w++) {
    var s = workData[w][slugColIdx];
    if (s) {
      existingSlugs[s.toString().trim()] = w + 1; // 1-based row index in sheet
    }
  }

  var appendedCount = 0;
  var updatedCount = 0;
  var skippedCount = 0;

  for (var r = 1; r < caseData.length; r++) {
    var row = caseData[r];
    
    function getVal(key) {
      var idx = colMap[key];
      if (idx !== undefined && row[idx] !== undefined) {
        return row[idx].toString().trim();
      }
      return '';
    }

    var slug = getVal('slug');
    if (!slug) continue;

    // Normalize tag: lowercase, trimmed, comma-separated without extra spaces
    var rawTag = getVal('tag');
    var normalizedTag = rawTag.split(',')
      .map(function(t) { return t.trim().toLowerCase(); })
      .filter(function(t) { return t.length > 0; })
      .join(',');

    // Clean multiline texts with <br>
    function cleanBr(val) {
      return val.replace(/\r\n/g, '<br>').replace(/[\r\n]/g, '<br>').trim();
    }

    var title = getVal('title');
    var cardNum = getVal('card_number');
    var numBracket = getVal('number_bracket') || ('[' + cardNum + ']');

    // Construct mapped row for Framer_Export_Work (66 columns)
    var mappedRow = new Array(FRAMER_WORK_HEADERS.length);
    for (var h = 0; h < FRAMER_WORK_HEADERS.length; h++) {
      mappedRow[h] = '';
    }

    function setField(headerName, val) {
      var idx = FRAMER_WORK_HEADERS.indexOf(headerName);
      if (idx !== -1) {
        mappedRow[idx] = val;
      }
    }

    // Mapping fields
    setField('Slug', slug);
    setField('Title', title);
    setField('Tag', normalizedTag);
    setField('Name', getVal('name') || 'Projects');
    setField('Card Number', cardNum);
    setField('Number', numBracket);
    setField('About', cleanBr(getVal('about')));
    setField('short description with number', cleanBr(getVal('short_desc')));
    setField('Subtitle 1', getVal('intro_subtitle') || 'Introduction');
    setField('Number 1', getVal('intro_number') || '01');
    setField('Title 2', cleanBr(getVal('intro_title')));
    setField('Description 1', cleanBr(getVal('intro_desc')));
    setField('Type', 'Project Type:');
    setField('Type Text', cleanBr(getVal('project_type')));
    setField('Date', 'Date');
    setField('Date Text', getVal('date_text'));
    setField('Image 1', getVal('cover_image_url'));
    setField('Image 1:alt', title + ' key visual');
    setField('Subtitle 2', getVal('challenge_subtitle') || 'Challenge');
    setField('Number 2', getVal('challenge_number') || '02');
    setField('Title 3', cleanBr(getVal('challenge_title')));
    setField('Description 2', cleanBr(getVal('challenge_desc_1')));
    setField('Description 3', cleanBr(getVal('challenge_desc_2')));
    setField('Subtitle 3', getVal('solution_subtitle') || 'Solution');
    setField('Number 3', getVal('solution_number') || '03');
    setField('Title 4', cleanBr(getVal('solution_title')));
    setField('Description 4', cleanBr(getVal('solution_desc')));
    setField('Link Video', getVal('video_url'));
    setField('Core', cleanBr(getVal('core_statement')));
    setField('A long short story about', cleanBr(getVal('story_headline')));
    setField('Story title 1', cleanBr(getVal('story_title_1')));
    setField('Story title 2', cleanBr(getVal('story_title_2')));
    setField('Story title 3', cleanBr(getVal('story_title_3')));
    setField('Story 1', cleanBr(getVal('story_1')));
    setField('Story 2', cleanBr(getVal('story_2')));
    setField('Story 3', cleanBr(getVal('story_3')));

    if (existingSlugs[slug]) {
      if (allowUpdate) {
        var targetRowIndex = existingSlugs[slug];
        workSheet.getRange(targetRowIndex, 1, 1, mappedRow.length).setValues([mappedRow]);
        updatedCount++;
      } else {
        skippedCount++;
      }
    } else {
      workSheet.appendRow(mappedRow);
      existingSlugs[slug] = workSheet.getLastRow();
      appendedCount++;
    }
  }

  // Safe sync for Framer_Export_Service if empty or requested
  if (serviceSheet && serviceSheet.getLastRow() <= 1) {
    for (var s = 0; s < INITIAL_SERVICES.length; s++) {
      var sRow = [];
      for (var sh = 0; sh < FRAMER_SERVICE_HEADERS.length; sh++) {
        var hName = FRAMER_SERVICE_HEADERS[sh];
        sRow.push(INITIAL_SERVICES[s][hName] || '');
      }
      serviceSheet.appendRow(sRow);
    }
  }

  var msg = 'Sync Complete!\n\n' +
    '• Appended new projects: ' + appendedCount + '\n' +
    '• Updated existing projects: ' + updatedCount + '\n' +
    '• Skipped (already existed): ' + skippedCount + '\n\n' +
    'Framer_Export_Work currently holds ' + (workSheet.getLastRow() - 1) + ' records.';
  
  ss.toast('Sync completed successfully!', 'Framer Automation', 5);
  ui.alert('⚡ Framer Sync Report', msg, ui.ButtonSet.OK);
}

/**
 * 3. INITIALIZE ALL 4 TABS & POPULATE 9 FLAGSHIP PROJECTS
 * - Creates 4 tabs with exact headers and branding styles:
 *   1. Projects_Master
 *   2. Case_Studies
 *   3. Framer_Export_Work (66 cols)
 *   4. Framer_Export_Service (48 cols)
 * - Populates the 9 flagship projects and 3 flagship services.
 */
function initAllTabsAndData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ui = SpreadsheetApp.getUi();

  var confirm = ui.alert(
    '⚡ Initialize Framer CMS Master Sheet',
    'This will initialize/verify 4 tabs:\n' +
    '1. Projects_Master\n' +
    '2. Case_Studies\n' +
    '3. Framer_Export_Work (100% Mirror of work single)\n' +
    '4. Framer_Export_Service (100% Mirror of service single)\n\n' +
    'And populate the 9 flagship engineering projects from artificialcraft.space.\n\n' +
    'Proceed?',
    ui.ButtonSet.YES_NO
  );

  if (confirm !== ui.Button.YES) return;

  function getOrCreateSheet(name) {
    var sh = ss.getSheetByName(name);
    if (!sh) {
      sh = ss.insertSheet(name);
    }
    return sh;
  }

  // Setup Tab 1: Projects_Master
  var ws1 = getOrCreateSheet('Projects_Master');
  ws1.clear();
  ws1.appendRow(PROJECTS_MASTER_HEADERS);
  for (var i = 0; i < INITIAL_PROJECTS_MASTER.length; i++) {
    var p = INITIAL_PROJECTS_MASTER[i];
    ws1.appendRow([p.project_id, p.title, p.slug, p.category, p.status, p.updated_at]);
  }
  formatHeaderRow(ws1, '#1A365D', 6);

  // Setup Tab 2: Case_Studies
  var ws2 = getOrCreateSheet('Case_Studies');
  ws2.clear();
  ws2.appendRow(CASE_STUDIES_HEADERS);
  for (var j = 0; j < INITIAL_CASE_STUDIES.length; j++) {
    var c = INITIAL_CASE_STUDIES[j];
    var cRow = [];
    for (var ch = 0; ch < CASE_STUDIES_HEADERS.length; ch++) {
      cRow.push(c[CASE_STUDIES_HEADERS[ch]] || '');
    }
    ws2.appendRow(cRow);
  }
  formatHeaderRow(ws2, '#1F2937', CASE_STUDIES_HEADERS.length);

  // Setup Tab 3: Framer_Export_Work
  var ws3 = getOrCreateSheet('Framer_Export_Work');
  ws3.clear();
  ws3.appendRow(FRAMER_WORK_HEADERS);
  formatHeaderRow(ws3, '#4C1D95', FRAMER_WORK_HEADERS.length);

  // Setup Tab 4: Framer_Export_Service
  var ws4 = getOrCreateSheet('Framer_Export_Service');
  ws4.clear();
  ws4.appendRow(FRAMER_SERVICE_HEADERS);
  for (var k = 0; k < INITIAL_SERVICES.length; k++) {
    var s = INITIAL_SERVICES[k];
    var sRow = [];
    for (var sh = 0; sh < FRAMER_SERVICE_HEADERS.length; sh++) {
      sRow.push(s[FRAMER_SERVICE_HEADERS[sh]] || '');
    }
    ws4.appendRow(sRow);
  }
  formatHeaderRow(ws4, '#064E3B', FRAMER_SERVICE_HEADERS.length);

  // Run initial sync to populate Framer_Export_Work
  var workRows = [];
  for (var r = 0; r < INITIAL_CASE_STUDIES.length; r++) {
    var cs = INITIAL_CASE_STUDIES[r];
    var wRow = new Array(FRAMER_WORK_HEADERS.length);
    for (var h = 0; h < FRAMER_WORK_HEADERS.length; h++) wRow[h] = '';
    
    function setF(hName, val) {
      var idx = FRAMER_WORK_HEADERS.indexOf(hName);
      if (idx !== -1) wRow[idx] = val;
    }
    setF('Slug', cs.slug);
    setF('Title', cs.title);
    setF('Tag', cs.tag);
    setF('Name', cs.name || 'Projects');
    setF('Card Number', cs.card_number);
    setF('Number', cs.number_bracket);
    setF('About', cs.about);
    setF('short description with number', cs.short_desc);
    setF('Subtitle 1', cs.intro_subtitle);
    setF('Number 1', cs.intro_number);
    setF('Title 2', cs.intro_title);
    setF('Description 1', cs.intro_desc);
    setF('Type', 'Project Type:');
    setF('Type Text', cs.project_type);
    setF('Date', 'Date');
    setF('Date Text', cs.date_text);
    setF('Image 1', cs.cover_image_url || '');
    setF('Image 1:alt', cs.title + ' key visual');
    setF('Subtitle 2', cs.challenge_subtitle);
    setF('Number 2', cs.challenge_number);
    setF('Title 3', cs.challenge_title);
    setF('Description 2', cs.challenge_desc_1);
    setF('Description 3', cs.challenge_desc_2);
    setF('Subtitle 3', cs.solution_subtitle);
    setF('Number 3', cs.solution_number);
    setF('Title 4', cs.solution_title);
    setF('Description 4', cs.solution_desc);
    setF('Link Video', cs.video_url || '');
    setF('Core', cs.core_statement);
    setF('A long short story about', cs.story_headline);
    setF('Story title 1', cs.story_title_1);
    setF('Story title 2', cs.story_title_2);
    setF('Story title 3', cs.story_title_3);
    setF('Story 1', cs.story_1);
    setF('Story 2', cs.story_2);
    setF('Story 3', cs.story_3);
    workRows.push(wRow);
  }
  
  if (workRows.length > 0) {
    ws3.getRange(2, 1, workRows.length, FRAMER_WORK_HEADERS.length).setValues(workRows);
  }

  ui.alert(
    '🎉 Framer CMS Initialization Successful',
    'All 4 tabs have been created and styled with 100% header integrity:\n\n' +
    '1. Projects_Master (9 projects)\n' +
    '2. Case_Studies (9 technical case studies populated)\n' +
    '3. Framer_Export_Work (66 headers, 9 records synced)\n' +
    '4. Framer_Export_Service (48 headers, 3 flagship services)\n\n' +
    'You can now use the "⚡ Framer Automation" menu anytime to clean and sync data.',
    ui.ButtonSet.OK
  );
}

/**
 * Helper to format sheet header row
 */
function formatHeaderRow(sheet, hexBgColor, numCols) {
  var headerRange = sheet.getRange(1, 1, 1, numCols);
  headerRange.setBackground(hexBgColor);
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setFontFamily('Arial');
  headerRange.setFontSize(10);
  headerRange.setHorizontalAlignment('center');
  headerRange.setVerticalAlignment('middle');
  sheet.setRowHeight(1, 32);
  sheet.setFrozenRows(1);
}
