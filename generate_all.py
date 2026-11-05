import os, sys, csv, json
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

BASE_DIR = "/Users/macbookpro/Library/CloudStorage/GoogleDrive-mizu2711@gmail.com/My Drive/FRAMER PORTFOLIO"

# Load original headers
with open(os.path.join(BASE_DIR, "work single.csv"), "r", encoding="utf-8") as f:
    work_headers = next(csv.reader(f))

with open(os.path.join(BASE_DIR, "service single.csv"), "r", encoding="utf-8") as f:
    service_headers = next(csv.reader(f))

# The 9 Projects Data
projects_master_rows = [
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
    }
]

case_studies_headers = [
    "project_id", "slug", "title", "tag", "name", "card_number", "number_bracket",
    "about", "short_desc", "role", "project_type", "date_text",
    "intro_subtitle", "intro_number", "intro_title", "intro_desc",
    "challenge_subtitle", "challenge_number", "challenge_title", "challenge_desc_1", "challenge_desc_2",
    "solution_subtitle", "solution_number", "solution_title", "solution_desc",
    "core_statement", "story_headline",
    "story_title_1", "story_1",
    "story_title_2", "story_2",
    "story_title_3", "story_3",
    "tools", "cover_image_url", "video_url"
]

case_studies_rows = [
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
        "challenge_desc_1": "Traditional multi-room 3D scenes cause severe GPU thermal throttling and stutter during high-speed camera viewpoint transitions.<br>Triggering dynamic interactive events—such as pulling mechanical levers or generating fluid ripples—often disrupted scroll synchronization.",
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
    }
]

# Map Case_Studies to Framer_Export_Work (66 headers)
def map_case_study_to_work_row(cs):
    # exact 66 headers
    row = {h: "" for h in work_headers}
    row["Slug"] = cs["slug"]
    row["Title"] = cs["title"]
    row["Tag"] = cs["tag"]
    row["Name"] = cs.get("name", "Projects")
    row["Card Number"] = cs["card_number"]
    row["Number"] = cs["number_bracket"]
    row["About"] = cs["about"]
    row["short description with number"] = cs["short_desc"]
    row["Subtitle 1"] = cs["intro_subtitle"]
    row["Number 1"] = cs["intro_number"]
    row["Title 2"] = cs["intro_title"]
    row["Description 1"] = cs["intro_desc"]
    row["Type"] = "Project Type:"
    row["Type Text"] = cs["project_type"]
    row["Date"] = "Date"
    row["Date Text"] = cs["date_text"]
    row["Image 1"] = cs.get("cover_image_url", "")
    row["Image 1:alt"] = f"{cs['title']} key visual"
    row["Subtitle 2"] = cs["challenge_subtitle"]
    row["Number 2"] = cs["challenge_number"]
    row["Title 3"] = cs["challenge_title"]
    row["Description 2"] = cs["challenge_desc_1"]
    row["Description 3"] = cs["challenge_desc_2"]
    row["Image 2"] = ""
    row["Image 2:alt"] = ""
    row["Image 3"] = ""
    row["Image 3:alt"] = ""
    row["Image 4"] = ""
    row["Image 4:alt"] = ""
    row["Subtitle 3"] = cs["solution_subtitle"]
    row["Number 3"] = cs["solution_number"]
    row["Title 4"] = cs["solution_title"]
    row["Description 4"] = cs["solution_desc"]
    row["Image"] = ""
    row["Image:alt"] = ""
    row["Link Video"] = cs.get("video_url", "")
    row["Slide Image 1"] = ""
    row["Slide Image 1:alt"] = ""
    row["Slide Image 2"] = ""
    row["Slide Image 2:alt"] = ""
    row["Slide Image 3"] = ""
    row["Slide Image 3:alt"] = ""
    row["Slide Image 4"] = ""
    row["Slide Image 4:alt"] = ""
    row["Slide Image 5"] = ""
    row["Slide Image 5:alt"] = ""
    row["Slide Image 6"] = ""
    row["Slide Image 6:alt"] = ""
    row["Slide Image 7"] = ""
    row["Slide Image 7:alt"] = ""
    row["Slide Image 8"] = ""
    row["Slide Image 8:alt"] = ""
    row["Slide Image 9"] = ""
    row["Slide Image 9:alt"] = ""
    row["Core"] = cs["core_statement"]
    row["Core small image"] = ""
    row["Core small image:alt"] = ""
    row["Logo"] = ""
    row["Logo:alt"] = ""
    row["A long short story about"] = cs["story_headline"]
    row["Story title 1"] = cs["story_title_1"]
    row["Story title 2"] = cs["story_title_2"]
    row["Story title 3"] = cs["story_title_3"]
    row["Story 1"] = cs["story_1"]
    row["Story 2"] = cs["story_2"]
    row["Story 3"] = cs["story_3"]
    return row

framer_work_rows = [map_case_study_to_work_row(cs) for cs in case_studies_rows]

# Service Rows (Preserve 100% headers of service single: 48 columns)
services_data = [
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
    }
]

# Write CSV outputs
print("Writing CSV files...")
# 1. Projects_Master.csv
with open(os.path.join(BASE_DIR, "Projects_Master.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=list(projects_master_rows[0].keys()))
    writer.writeheader()
    writer.writerows(projects_master_rows)

# 2. Case_Studies.csv
with open(os.path.join(BASE_DIR, "Case_Studies.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=case_studies_headers)
    writer.writeheader()
    writer.writerows(case_studies_rows)

# 3. Framer_Export_Work_populated.csv
with open(os.path.join(BASE_DIR, "Framer_Export_Work_populated.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=work_headers)
    writer.writeheader()
    writer.writerows(framer_work_rows)

# 4. Framer_Export_Service_populated.csv
with open(os.path.join(BASE_DIR, "Framer_Export_Service_populated.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=service_headers)
    writer.writeheader()
    writer.writerows(services_data)

# Create Master Excel Workbook with 4 styled tabs
print("Creating Master Excel Workbook (Framer_Portfolio_Master.xlsx)...")
wb = openpyxl.Workbook()
# remove default sheet
wb.remove(wb.active)

# Styles
header_font = Font(name="Arial", size=10, bold=True, color="FFFFFF")
header_fill_blue = PatternFill(start_color="1A365D", end_color="1A365D", fill_type="solid")
header_fill_dark = PatternFill(start_color="1F2937", end_color="1F2937", fill_type="solid")
header_fill_purple = PatternFill(start_color="4C1D95", end_color="4C1D95", fill_type="solid")
header_fill_emerald = PatternFill(start_color="064E3B", end_color="064E3B", fill_type="solid")
regular_font = Font(name="Arial", size=9)
align_left = Alignment(horizontal="left", vertical="top", wrap_text=True)
align_center = Alignment(horizontal="center", vertical="top")

# Tab 1: Projects_Master
ws1 = wb.create_sheet(title="Projects_Master")
ws1.append(list(projects_master_rows[0].keys()))
for row in projects_master_rows:
    ws1.append(list(row.values()))

# Style Tab 1
for col_num in range(1, len(projects_master_rows[0].keys()) + 1):
    cell = ws1.cell(row=1, column=col_num)
    cell.font = header_font
    cell.fill = header_fill_blue
    cell.alignment = Alignment(horizontal="center", vertical="center")
ws1.row_dimensions[1].height = 26
ws1.freeze_panes = "A2"

# Tab 2: Case_Studies
ws2 = wb.create_sheet(title="Case_Studies")
ws2.append(case_studies_headers)
for row in case_studies_rows:
    ws2.append([row.get(h, "") for h in case_studies_headers])

# Style Tab 2
for col_num in range(1, len(case_studies_headers) + 1):
    cell = ws2.cell(row=1, column=col_num)
    cell.font = header_font
    cell.fill = header_fill_dark
    cell.alignment = Alignment(horizontal="center", vertical="center")
ws2.row_dimensions[1].height = 26
ws2.freeze_panes = "B2"

# Tab 3: Framer_Export_Work
ws3 = wb.create_sheet(title="Framer_Export_Work")
ws3.append(work_headers)
for row in framer_work_rows:
    ws3.append([row.get(h, "") for h in work_headers])

# Style Tab 3
for col_num in range(1, len(work_headers) + 1):
    cell = ws3.cell(row=1, column=col_num)
    cell.font = header_font
    cell.fill = header_fill_purple
    cell.alignment = Alignment(horizontal="center", vertical="center")
ws3.row_dimensions[1].height = 26
ws3.freeze_panes = "B2"

# Tab 4: Framer_Export_Service
ws4 = wb.create_sheet(title="Framer_Export_Service")
ws4.append(service_headers)
for row in services_data:
    ws4.append([row.get(h, "") for h in service_headers])

# Style Tab 4
for col_num in range(1, len(service_headers) + 1):
    cell = ws4.cell(row=1, column=col_num)
    cell.font = header_font
    cell.fill = header_fill_emerald
    cell.alignment = Alignment(horizontal="center", vertical="center")
ws4.row_dimensions[1].height = 26
ws4.freeze_panes = "B2"

# Set column widths reasonably
for ws in [ws1, ws2, ws3, ws4]:
    for col in ws.columns:
        col_letter = get_column_letter(col[0].column)
        max_len = max(len(str(cell.value or '')) for cell in col[:10])
        ws.column_dimensions[col_letter].width = min(max(max_len + 3, 12), 40)

excel_path = os.path.join(BASE_DIR, "Framer_Portfolio_Master.xlsx")
wb.save(excel_path)
print(f"Saved Excel Master to {excel_path}")
