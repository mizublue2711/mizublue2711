/**
 * CYBERNETIC SWISS APPLICATION CONTROLLER
 * Architecture: ARTIFICIAL CRAFT // DUAL-LANGUAGE (EN / VI)
 */

(function () {
  let currentLang = 'en';
  let cvData = null;

  // Embedded Fallback Data for offline / file:// protocol compatibility
  const FALLBACK_DATA = {
    en: {
      nav: {
        status: "ONLINE // 60 FPS",
        metrics: "01 // METRICS",
        experience: "02 // EXPERIENCE",
        stack: "03 // TECH STACK",
        education: "04 // CREDENTIALS",
        contact: "05 // TRANSMIT",
        download_cv: "DOWNLOAD CV.PDF",
        lang_label: "$ lang:"
      },
      hero: {
        telemetry: "SYSTEM // IDENTIFIER // 2026.V3",
        name: "THUY VU",
        full_name: "Vu Thu Thuy",
        role: "SENIOR MULTIMEDIA DESIGNER & CREATIVE AUTOMATION ENGINEER",
        specializations: "Brand Identity • Editorial Publishing & Packaging • Motion Ads • Design Automation",
        experience_badge: "9+ YEARS EXP // SINCE 2016",
        summary: "Senior Multimedia Designer with 9+ years of hands-on execution across 500+ financial publications, 100+ e-commerce landing pages, and 200+ short-form video ads. Combines graphic design precision with Python, n8n, Dify, Remotion, and WebGL to automate creative pipelines, slashing processing latency by 98% and eliminating cloud rendering fees.",
        cta_portfolio: "FRAMER PORTFOLIO",
        cta_platform: "ARTIFICIAL CRAFT",
        cta_contact: "TRANSMIT MESSAGE"
      },
      metrics: {
        prefix: "01 // QUANTIFIABLE PERFORMANCE METRICS",
        heading: "SYSTEM OUTPUT & TELEMETRY",
        subheading: "Deterministic benchmarks measured across enterprise production environments",
        items: [
          {
            val: "9+",
            unit: "YEARS",
            label: "Hands-on Production",
            desc: "Practical experience delivering high-volume visual assets under strict technical specs and tight deadlines."
          },
          {
            val: "500+",
            unit: "REPORTS & CHARTS",
            label: "Financial Publications",
            desc: "Complex financial journals and data infographics for Hong Kong / global wealth management markets (Hubbis)."
          },
          {
            val: "100+",
            unit: "PAGES",
            label: "E-Commerce Landers",
            desc: "High-converting UI/UX layouts for VGS Shop, driving up to a 30% increase in online sales volume."
          },
          {
            val: "200+",
            unit: "MOTION ADS",
            label: "Video Production",
            desc: "Rapid 4-hour editing turnarounds, with 70% featuring custom-composed audio tracks."
          },
          {
            val: "-98%",
            unit: "LATENCY",
            label: "AI PIM Pipeline",
            desc: "Automated product image pipeline, collapsing processing from 3–5 min down to 1–3 sec per asset."
          },
          {
            val: "$0.00",
            unit: "RENDER COST",
            label: "Client GPU Offload",
            desc: "Architected WebGL 3D web applications offloading high-fidelity spatial graphics directly to user hardware."
          }
        ]
      },
      mindmap: {
        tag: "// OPERATIONAL WORKFLOW TOPOLOGY",
        title: "4-STAGE DETERMINISTIC PRODUCTION PIPELINE",
        node1_tag: "01 // DISCOVERY",
        node1_title: "Brief Decoding",
        node1_b1: "• Constraint Audit",
        node1_b2: "• Market Matrix",
        node1_b3: "• Technical Scope",
        node1_out: "> WIREFRAME AST",
        node2_tag: "02 // PROTOTYPE",
        node2_title: "Visual Blueprint",
        node2_b1: "• Swiss 1px Grids",
        node2_b2: "• 60 FPS Kinetic Spec",
        node2_b3: "• 3D Space Shaders",
        node2_out: "> DESIGN TOKENS",
        node3_tag: "03 // EXECUTION",
        node3_title: "Production Engine",
        node3_b1: "• InDesign Pre-press",
        node3_b2: "• Remotion Video Code",
        node3_b3: "• Python / n8n / Zod",
        node3_out: "> DETERMINISTIC ASSETS",
        node4_tag: "04 // DELIVERY",
        node4_title: "Zero-Drift SLA",
        node4_b1: "• Color / Print QA",
        node4_b2: "• Client GPU Offload",
        node4_b3: "• GitOps & PIM Sync",
        node4_out: "> $0.00 RENDER DEPLOY",
        footer_left: "[ PROTOCOL: ISO-PRECISION CAD ]",
        footer_right: "[ CONTINUOUS AUTOMATION LOOP // 60 FPS ]"
      },
      experience: {
        prefix: "02 // WORK EXPERIENCE & PRODUCTION ARCHITECTURE",
        heading: "HANDS-ON CAREER LOGS & 3-TIER PRODUCTION SHOWCASE",
        subheading: "A 9-year chronological timeline combining full-stack creative technology, multi-year enterprise retainers, and applied R&D automation.",
        labels: {
          role: "ROLE",
          entity: "ENTITY",
          domain: "DOMAIN",
          stack: "STACK",
          live_demo: "LIVE DEMO ↗",
          case_study: "CASE STUDY ↗",
          cta_prefix: "[ FULL ARCHIVE // 11 CASE STUDIES ]",
          cta_banner: "EXPLORE FULL CASE STUDIES ON FRAMER ↗",
          cta_url: "https://thuy-vu-designer.framer.website/"
        },
        tier1: {
          tag: "TIER 01 // PROPRIETARY PRODUCTS & CREATIVE TECH (2025 – PRESENT)",
          title: "ARTIFICIAL CRAFT LAB // FOUNDER & FULL-STACK CREATIVE TECHNOLOGIST",
          subtitle: "Owning end-to-end UI/UX architecture, system state logic, and production codebases.",
          items: [
            {
              id: "proj-puffy",
              project_label: "PROJECT 01",
              timeframe: "2025 – PRESENT",
              title: "PUFFY 3D INTERACTIVE SHOWROOM & AUTOMATED CREATIVE ENGINE",
              role: "Lead Spatial Engineer & Full-Stack Architect",
              entity: "Artificial Craft Lab",
              stack: [
                "Three.js",
                "WebGL 60 FPS",
                "GSAP",
                "Two-Tier Tactile Physics",
                "AGENT.md"
              ],
              live_url: "https://enter-to-dream.artificialcraft.space/",
              case_url: "https://thuy-vu-designer.framer.website/work/puffy-3d-creative-engine",
              bullets: [
                "<strong>Two-Pass Synchronous Canvas Capture:</strong> Engineered an atomic-frame buffer capture mechanism that resolves mobile WebGL canvas blackout glitches during high-resolution snapshot generation.",
                "<strong>Two-Tier Tactile Physics:</strong> Decoupled user touch and drag interaction loops from heavy scene matrix recomputations, maintaining a locked 60 FPS rendering threshold directly on client GPUs ($0.00 server cost).",
                "<strong>&lt;60ms 12-Node Colorway Swapper:</strong> Built a procedural PBR material swapping engine governed by an AGENT.md multi-agent code orchestration protocol."
              ]
            },
            {
              id: "proj-vibepath",
              project_label: "PROJECT 02",
              timeframe: "2025 – PRESENT",
              title: "VIBEPATH MULTI-TAB CREATOR STUDIO PLATFORM",
              role: "Senior Product UI/UX Architect & Systems Engineer",
              entity: "Artificial Craft Lab",
              stack: [
                "Next.js",
                "Complex UI/UX",
                "Async State Locking",
                "FastAPI",
                "Cubic B-Spline",
                "Dify Co-Pilot"
              ],
              live_url: "https://vibepath.artificialcraft.space/",
              case_url: "https://thuy-vu-designer.framer.website/work/vibepath-gps-3d-map-pipeline",
              bullets: [
                "<strong>Async State Locking Architecture:</strong> Decoupled command triggers from background rendering states, eliminating race conditions and accidental double-submissions during high-load asset export.",
                "<strong>FastAPI Cubic B-Spline Smoothing:</strong> Developed server-side geospatial telemetry regularization that transforms raw, jittery mobile GPS coordinates into cinematic 3D map camera trajectories.",
                "<strong>Dify Bilingual Co-Pilot Integration:</strong> Embedded an autonomous LLM copilot generating structured bilingual metadata and narration scripts from raw telemetry."
              ]
            },
            {
              id: "proj-remotion",
              project_label: "PROJECT 03",
              timeframe: "2025 – PRESENT",
              title: "VIDEO-AS-CODE ENGINE VIA REMOTION",
              role: "Creative Automation Engineer",
              entity: "Artificial Craft Lab",
              stack: [
                "Remotion 4.0",
                "React",
                "TypeScript",
                "Strict Zod Schemas",
                "Headless GCP Cloud Run"
              ],
              live_url: "https://auto-video-engine.artificialcraft.space/",
              case_url: "https://thuy-vu-designer.framer.website/work/video-as-code-remotion-pipeline",
              bullets: [
                "<strong>Strict Zod Schema Contracts:</strong> Enforced compile-time and runtime payload validation, eliminating broken renders and video generation drift across automated batch pipelines.",
                "<strong>Headless GCP Cloud Run Rendering:</strong> Orchestrated a serverless containerized Chromium rendering pipeline that slashes video production turnarounds from hours down to seconds with zero visual artifacts.",
                "<strong>Code-Driven Motion Templates:</strong> Programmed scalable, parameterized React components that replace manual After Effects timeline dragging with deterministic code execution."
              ]
            }
          ]
        },
        tier2: {
          tag: "TIER 02 // ENTERPRISE CLIENT RETAINERS (2016 – 2025)",
          title: "MULTI-YEAR COMMERCIAL TRACK RECORD // SENIOR OPERATIONAL RELIABILITY",
          subtitle: "Institutional publishing discipline, multi-channel art direction, and high-volume commercial systems.",
          items: [
            {
              id: "client-hubbis",
              timeframe: "2018 – 2025 // 5+ YEARS",
              title: "HUBBIS (HONG KONG)",
              role: "Senior Publishing & Editorial Designer (Enterprise Retainer)",
              domain: "Wealth Management Publishing & Financial Infographics",
              stack: [
                "Adobe InDesign (Master Grid)",
                "Pre-press Color Management",
                "0-Code Digital Flipbook"
              ],
              case_url: "https://thuy-vu-designer.framer.website/work/hubbis",
              bullets: [
                "<strong>500+ Financial Journals &amp; Data Infographics:</strong> Synthesized dense, unstructured private wealth management data and macroeconomic reports into 500+ publication-grade print journals and digital assets across 5+ consecutive years.",
                "<strong>Zero-Error Pre-Press Calibration:</strong> Enforced strict Swiss typographic grid alignments and certified CMYK/Pantone pre-press standards, eliminating misprints across large-format offset runs.",
                "<strong>0-Code Digital Flipbook Engine:</strong> Architected a lightweight, JSON-driven web reader enabling instant browser-based interactive publication distribution without forcing heavy PDF downloads."
              ]
            },
            {
              id: "client-growth-agency",
              timeframe: "2016 – 2024 // MULTI-YEAR",
              title: "THE GROWTH AGENCY (AUSTRALIA)",
              role: "Creative Lead & Offshore Production Coordinator",
              domain: "Performance Marketing, Brand Identity & Acquisition Landers",
              stack: [
                "Brand Strategy",
                "Figma Design Systems",
                "Conversion UI/UX",
                "Campaign Direction"
              ],
              case_url: "https://thuy-vu-designer.framer.website/work/the-growth-agency",
              bullets: [
                "<strong>Full-Funnel Brand Direction:</strong> Directed 30+ brand identities, design systems, and cross-channel campaign kits for enterprise clients across Australian and UK markets.",
                "<strong>Offshore Operations Leadership:</strong> Coordinated an agile design production squad in Ho Chi Minh City, delivering assets under tight agency SLA sprint cadences.",
                "<strong>High-Conversion Landing Pages:</strong> Designed performance-engineered conversion funnels and marketing collateral tightly coupled with paid ad channels."
              ]
            },
            {
              id: "client-vgs-shop",
              timeframe: "2016 – 2020 // MULTI-YEAR",
              title: "VGS SHOP (HOMESHOPPING & E-COMMERCE)",
              role: "Senior E-Commerce & Broadcast Motion Designer",
              domain: "Broadcast Homeshopping & High-Volume Digital Commerce",
              stack: [
                "Broadcast Motion Graphics",
                "After Effects",
                "Packaging Standards",
                "E-Commerce UI"
              ],
              case_url: "https://thuy-vu-designer.framer.website/work/vgs-shop",
              bullets: [
                "<strong>100+ High-Converting E-Commerce Landers:</strong> Designed and launched over 100 conversion-focused web layouts (vgsshop.vn), driving up to a documented 30% increase in campaign sales volumes.",
                "<strong>TV Broadcast Motion Graphics:</strong> Produced on-air promotional motion graphics, commercial TV lower-thirds, and broadcast sales packages under daily live-production deadlines.",
                "<strong>High-Volume Retail Packaging:</strong> Standardized multi-SKU retail packaging die-cuts, print finishes, and physical box guidelines for diverse consumer product lines."
              ]
            },
            {
              id: "client-australia-experiences",
              timeframe: "AUG 2025 – DEC 2025",
              title: "AUSTRALIA EXPERIENCES",
              role: "Motion Graphics Designer & Visual Identity Specialist (Contract)",
              domain: "Experiential Tourism & Rapid Social Content Engine",
              stack: [
                "DaVinci Resolve",
                "After Effects",
                "CapCut Studio",
                "Social Brand Architecture"
              ],
              case_url: "https://thuy-vu-designer.framer.website/work/australia-experiences",
              bullets: [
                "<strong>End-to-End Tourism Brand Identity:</strong> Established contemporary visual identities, color palettes, and social media layout systems from the ground up for Sydney-based hospitality businesses.",
                "<strong>Rapid 4-Hour Motion Turnarounds:</strong> Ingested 2GB–10GB of raw multi-camera footage per project to cut, color-grade, and export dynamic short-form social videos within strict 4-hour delivery windows.",
                "<strong>Hybrid Post-Production Workflow:</strong> Integrated DaVinci Resolve (color grading), After Effects (motion typography), and CapCut (kinetic pacing) to maximize engagement across TikTok, Instagram, and YouTube."
              ]
            }
          ]
        },
        tier3: {
          tag: "TIER 03 // APPLIED R&D, SPATIAL SIMULATION & MEDIA OPS",
          title: "INNOVATION VAULT // EXPERIMENTAL LAB & BESPOKE ARCHIVE",
          subtitle: "Bespoke CAD engineering, micro-automation pipelines, and specialized design solutions.",
          clusters: [
            {
              id: "cluster-spatial",
              index: "CLUSTER 01",
              title: "SPATIAL SIMULATION & DIGITAL TWINS",
              nodes: [
                {
                  title: "3D Data Metropolis",
                  desc: "Interactive 60 FPS WebGL voxel city mapping quarterly corporate performance; features logarithmic height scaling and an underground negative-profit floor (Sink of Shame).",
                  url: "https://thuy-vu-designer.framer.website/work/spatial-uiux-tactical-cad-systems"
                },
                {
                  title: "3D Robotics Factory",
                  desc: "Industrial 11-DOF robotic arm digital twin and spatial point cloud simulation showcasing real-time inverse kinematics and sensor telemetry in browser.",
                  url: "https://thuy-vu-designer.framer.website/work/spatial-uiux-tactical-cad-systems"
                },
                {
                  title: "Spatial UI/UX & Tactical CAD Systems",
                  desc: "An enterprise Cybernetic Swiss Brutalism design system built with 1px CAD lines, 0px border-radius, and tactile planar elevations.",
                  url: "https://thuy-vu-designer.framer.website/work/spatial-uiux-tactical-cad-systems"
                }
              ]
            },
            {
              id: "cluster-media",
              index: "CLUSTER 02",
              title: "AUTONOMOUS MEDIA & TOOLING",
              nodes: [
                {
                  title: "E2E AI-Image PIM Automation Pipeline",
                  desc: "Multi-model PIM pipeline utilizing Python FastAPI, FLUX rendering, Gemini Flash physical triage, and Claude Sonnet aesthetic validation; slashes image turnaround times by 75% on Cloudflare R2.",
                  url: "https://thuy-vu-designer.framer.website/work/e2e-ai-image-pim-automation"
                },
                {
                  title: "GPS Telemetry Regularization & Flipbook Reader",
                  desc: "Specialized mathematical utilities including Ramer-Douglas-Peucker (RDP) path filtering and canvas flipbook rendering engines.",
                  url: "https://thuy-vu-designer.framer.website/work/vibepath-gps-3d-map-pipeline"
                }
              ]
            },
            {
              id: "cluster-boutique",
              index: "CLUSTER 03",
              title: "BOUTIQUE PACKAGING & IDENTITY ARCHIVE",
              nodes: [
                {
                  title: "Project 98 (Export Agribusiness)",
                  desc: "Strategic brand identity and bilingual packaging system for Lam Dong export durians, engineered to meet strict Chinese customs import labeling; backed by custom Python file delivery automation.",
                  url: "https://thuy-vu-designer.framer.website/work/project-98"
                },
                {
                  title: "The Deer Project (Eco-Packaging Dielines)",
                  desc: "Structural packaging engineering featuring load-bearing curved corners and interlocking glue-free die-cuts across 5 custom fast-food geometries.",
                  url: "https://thuy-vu-designer.framer.website/work/the-deer-project"
                }
              ]
            }
          ]
        }
      },
      tech_stack: {
        prefix: "03 // CAPABILITY MATRIX & TOOLKIT",
        heading: "TECHNICAL STACK & ECOSYSTEM",
        subheading: "Four pillars bridging meticulous graphic design precision with automated engineering",
        pillars: [
          {
            title: "PUBLISHING & PRINT",
            subtitle: "01 // EDITORIAL & PACKAGING",
            tools: [
              "Adobe InDesign (Master)",
              "Adobe Illustrator",
              "Adobe Photoshop",
              "Figma Design System",
              "Pre-press Color Management",
              "Structural Dieline Engineering"
            ]
          },
          {
            title: "VIDEO & MOTION",
            subtitle: "02 // BROADCAST & AUTOMATION",
            tools: [
              "DaVinci Resolve (Color/Audio)",
              "Adobe After Effects",
              "Adobe Premiere Pro",
              "Remotion 4.0 (Video-as-Code)",
              "FFmpeg Pipelines",
              "CapCut Studio"
            ]
          },
          {
            title: "3D & WEB GRAPHICS",
            subtitle: "03 // SPATIAL & CLIENT GPU",
            tools: [
              "Three.js & WebGL",
              "React Three Fiber",
              "GSAP Motion Engine",
              "Framer CMS Architecture",
              "HTML5/CSS3 Canvas",
              "Blender 3D Modeling"
            ]
          },
          {
            title: "AUTOMATION & CODE",
            subtitle: "04 // AGENTIC & CLOUD PIPELINES",
            tools: [
              "Python (FastAPI, Pillow, OpenCV)",
              "n8n Event Orchestrator",
              "Dify.ai Workflow Engine",
              "Docker Containers",
              "Zod Schema Validation",
              "Cloudflare R2 & Tunnels",
              "GitOps & CLI Pipelines"
            ]
          }
        ]
      },
      radar_stack: {
        tag: "// TELEMETRY MATRIX",
        title: "FULLSTACK COMPETENCY RATIO",
        legend_automation: "Automation",
        legend_design: "Design",
        legend_devops: "DevOps"
      },
      education: {
        prefix: "04 // ACCREDITATIONS & CERTIFICATIONS",
        heading: "CONTINUOUS SKILL UPGRADES",
        subheading: "Rigorous academic and technical credentialing in systems, AI, and languages",
        items: [
          {
            year: "2026",
            title: "Python Fundamentals for Designers",
            institution: "University of Michigan",
            type: "TECHNICAL CERTIFICATION"
          },
          {
            year: "2026",
            title: "AI Agents and Agentic AI with Python & Generative AI",
            institution: "Vanderbilt University",
            type: "AI ARCHITECTURE"
          },
          {
            year: "2024",
            title: "HSK Level 5 Chinese Proficiency Certificate",
            institution: "Peking University (北京大学)",
            type: "LANGUAGE PROFICIENCY"
          },
          {
            year: "2016",
            title: "Bachelor's Degree — Multimedia Design Major",
            institution: "University Degree (Hands-on Industry Execution)",
            type: "FOUNDATIONAL DEGREE"
          }
        ]
      },
      contact: {
        prefix: "05 // TELEMETRY TRANSMISSION",
        heading: "CONNECT & COLLABORATE",
        subheading: "Direct communication line for enterprise consulting, spatial engineering, and automation",
        email_label: "PRIMARY EMAIL",
        email: "mizu2711@gmail.com",
        phone_label: "SECURE TELEPHONE",
        phone: "+84 979 203 507",
        location_label: "BASE OF OPERATIONS",
        location: "Ho Chi Minh City, Vietnam (Global Remote)",
        copy_button: "COPY EMAIL",
        copied_msg: "COPIED TO CLIPBOARD!",
        links: [
          { name: "PORTFOLIO", url: "https://thuy-vu-designer.framer.website/", tag: "FRAMER LIVE" },
          { name: "PLATFORM", url: "https://artificialcraft.space/", tag: "SYSTEM HUB" },
          { name: "LINKEDIN", url: "https://www.linkedin.com/in/thuy-thu-vu-271190/", tag: "PROFILE" },
          { name: "GITHUB", url: "https://github.com/mizublue2711", tag: "CODE REPO" },
          { name: "UNSPLASH", url: "https://unsplash.com/@mizu2711", tag: "PHOTO ARCHIVE" }
        ]
      },
      footer: {
        rights: "© 2026 THUY VU // MIZUBLUE2711. ALL RIGHTS RESERVED.",
        spec: "ENGINEERED UNDER CYBERNETIC SWISS BRUTALISM • ZERO SOFT RADIUS • 60 FPS DETERMINISTIC CANVAS"
      },
      radar_p5: {
        tag: "// REAL-WORLD TELEMETRY BENCHMARKS",
        title: "ITERATIVE SYSTEM SLA & TEST PASS RATES",
        leg_pim: "AI PIM Pipeline",
        leg_video: "Video-as-Code Engine",
        leg_webgl: "Spatial UI/UX & CAD Systems"
      }
    },
    vi: {
      nav: {
        status: "ONLINE // 60 FPS",
        metrics: "01 // CHỈ SỐ",
        experience: "02 // KINH NGHIỆM",
        stack: "03 // KỸ THUẬT",
        education: "04 // HỌC VẤN",
        contact: "05 // LIÊN HỆ",
        download_cv: "TẢI CV.PDF",
        lang_label: "$ lang:"
      },
      hero: {
        telemetry: "HỆ THỐNG // ĐỊNH DANH // 2026.V3",
        name: "VŨ THU THỦY",
        full_name: "Vũ Thu Thủy (Thuy Vu)",
        role: "SENIOR MULTIMEDIA DESIGNER & CREATIVE AUTOMATION ENGINEER",
        specializations: "Thiết kế thương hiệu • Bao bì xuất bản • Đồ họa chuyển động (Motion Ads) • Tự động hóa thiết kế",
        experience_badge: "9+ NĂM KINH NGHIỆM // TỪ 2016",
        summary: "9+ năm kinh nghiệm sản xuất hình ảnh đa phương tiện, xử lý hơn 500 ấn phẩm báo cáo tài chính, 100+ landing page e-commerce và 200+ video quảng cáo ngắn. Kết hợp tư duy đồ họa chính xác với lập trình Python, n8n, Dify, Remotion và WebGL để tự động hóa luồng làm việc, rút ngắn 60% thời gian xử lý dữ liệu và cắt giảm chi phí vận hành.",
        cta_portfolio: "XEM FRAMER PORTFOLIO",
        cta_platform: "HỆ THỐNG ARTIFICIAL CRAFT",
        cta_contact: "GỬI YÊU CẦU LIÊN HỆ"
      },
      metrics: {
        prefix: "01 // CHỈ SỐ LÀM VIỆC THỰC TẾ",
        heading: "KẾT QUẢ VẬN HÀNH ĐO LƯỜNG ĐƯỢC",
        subheading: "Các chỉ số thực chiến đã được chứng minh qua môi trường sản xuất của doanh nghiệp",
        items: [
          {
            val: "9+",
            unit: "NĂM",
            label: "Kinh nghiệm thực chiến",
            desc: "Xử lý khối lượng tài nguyên hình ảnh lớn dưới các quy chuẩn kỹ thuật và tiến độ khắt khe."
          },
          {
            val: "500+",
            unit: "BÁO CÁO & BIỂU ĐỒ",
            label: "Ấn phẩm tài chính",
            desc: "Báo cáo tài chính phức tạp cho thị trường quản lý tài sản Hong Kong và quốc tế (Hubbis)."
          },
          {
            val: "100+",
            unit: "TRANG",
            label: "Landing Page Bán Hàng",
            desc: "Tối ưu UI/UX cho trang thương mại điện tử VGS Shop, đóng góp tăng trưởng doanh số tới +30%."
          },
          {
            val: "200+",
            unit: "VIDEO ADS",
            label: "Đồ họa chuyển động",
            desc: "Dựng video ngắn tốc độ cao (khung thời gian 4 tiếng/video), 70% có nhạc nền sản xuất riêng."
          },
          {
            val: "-60%",
            unit: "THỜI GIAN PIM",
            label: "Pipeline AI Xử lý Ảnh",
            desc: "Tự động hóa quy trình quản lý ảnh sản phẩm AI từ 5-10 phút xuống còn 2-3 phút mỗi tài nguyên."
          },
          {
            val: "$0.00",
            unit: "RENDER SERVER",
            label: "Offload GPU Máy Khách",
            desc: "Xây dựng các ứng dụng WebGL 3D chạy trực tiếp trên GPU máy khách, không tốn phí render cloud."
          }
        ]
      },
      mindmap: {
        tag: "// CẤU TRÚC LUỒNG VẬN HÀNH SẢN XUẤT",
        title: "QUY TRÌNH SẢN XUẤT TẤT ĐỊNH 4 GIAI ĐOẠN",
        node1_tag: "01 // KHẢO SÁT",
        node1_title: "Giải mã Đề bài",
        node1_b1: "• Rà soát Ràng buộc",
        node1_b2: "• Ma trận Thị trường",
        node1_b3: "• Phạm vi Kỹ thuật",
        node1_out: "> WIREFRAME AST",
        node2_tag: "02 // NGUYÊN MẪU",
        node2_title: "Bản thiết kế Hình ảnh",
        node2_b1: "• Hệ lưới 1px Swiss",
        node2_b2: "• Đồ họa Động 60 FPS",
        node2_b3: "• Shaders Không gian 3D",
        node2_out: "> DESIGN TOKENS",
        node3_tag: "03 // THỰC THI",
        node3_title: "Động cơ Sản xuất",
        node3_b1: "• Chế bản InDesign",
        node3_b2: "• Lập trình Remotion",
        node3_b3: "• Python / n8n / Zod",
        node3_out: "> TÀI NGUYÊN TẤT ĐỊNH",
        node4_tag: "04 // BÀN GIAO",
        node4_title: "SLA Chuẩn Tuyệt đối",
        node4_b1: "• Kiểm chuẩn Màu & In",
        node4_b2: "• Offload GPU Máy khách",
        node4_b3: "• Đồng bộ GitOps & PIM",
        node4_out: "> TRIỂN KHAI RENDER $0",
        footer_left: "[ TIÊU CHUẨN: CAD ĐỘ CHÍNH XÁC CAO ]",
        footer_right: "[ VÒNG LẶP TỰ ĐỘNG HÓA LIÊN TỤC // 60 FPS ]"
      },
      experience: {
        prefix: "02 // KINH NGHIỆM LÀM VIỆC & KIẾN TRÚC SẢN XUẤT",
        heading: "NHẬT KÝ SỰ NGHIỆP THỰC CHIẾN & DANH MỤC SẢN XUẤT 3 TẦNG",
        subheading: "Hành trình 9 năm kết hợp công nghệ sáng tạo full-stack, vận hành doanh nghiệp dài hạn và tự động hóa R&D ứng dụng.",
        labels: {
          role: "CHỨC DANH",
          entity: "ĐƠN VỊ",
          domain: "LĨNH VỰC",
          stack: "CÔNG NGHỆ",
          live_demo: "XEM LIVE DEMO ↗",
          case_study: "XEM CASE STUDY ↗",
          cta_prefix: "[ KHO LƯU TRỮ // 11 CASE STUDY ]",
          cta_banner: "KHÁM PHÁ TOÀN BỘ CASE STUDY TRÊN FRAMER ↗",
          cta_url: "https://thuy-vu-designer.framer.website/"
        },
        tier1: {
          tag: "TẦNG 01 // SẢN PHẨM ĐỘC QUYỀN & CÔNG NGHỆ SÁNG TẠO (2025 – HIỆN TẠI)",
          title: "ARTIFICIAL CRAFT LAB // NHÀ SÁNG LẬP & KỸ SƯ CÔNG NGHỆ SÁNG TẠO FULL-STACK",
          subtitle: "Làm chủ trọn vẹn từ kiến trúc UI/UX, logic trạng thái hệ thống đến mã nguồn sản xuất.",
          items: [
            {
              id: "proj-puffy",
              project_label: "DỰ ÁN 01",
              timeframe: "2025 – HIỆN TẠI",
              title: "PUFFY — SHOWROOM 3D TƯƠNG TÁC & ĐỘNG CƠ SÁNG TẠO TỰ ĐỘNG",
              role: "Kỹ sư Không gian 3D & Kiến trúc sư Full-Stack",
              entity: "Artificial Craft Lab",
              stack: [
                "Three.js",
                "WebGL 60 FPS",
                "GSAP",
                "Two-Tier Tactile Physics",
                "AGENT.md"
              ],
              live_url: "https://enter-to-dream.artificialcraft.space/",
              case_url: "https://thuy-vu-designer.framer.website/work/puffy-3d-creative-engine",
              bullets: [
                "<strong>Chụp Canvas Đồng bộ Hai Lượt (Two-Pass Synchronous Capture):</strong> Thiết kế cơ chế ghi buffer khung hình nguyên tử, xử lý triệt để lỗi đen khung ảnh WebGL trên di động khi xuất ảnh độ phân giải cao.",
                "<strong>Động cơ Vật lý Chạm Hai Tầng (Two-Tier Tactile Physics):</strong> Tách biệt vòng lặp tương tác chạm/kéo khỏi tính toán ma trận scene nặng, giữ vững ngưỡng 60 FPS trực tiếp trên GPU máy khách ($0.00 chi phí server).",
                "<strong>Đổi màu 12 Node dưới 60ms:</strong> Xây dựng engine hoán đổi vật liệu PBR tự động được điều phối và kiểm soát ranh giới code bởi hệ thống AGENT.md đa tác tử."
              ]
            },
            {
              id: "proj-vibepath",
              project_label: "DỰ ÁN 02",
              timeframe: "2025 – HIỆN TẠI",
              title: "VIBEPATH — NỀN TẢNG CREATOR STUDIO ĐA TAB",
              role: "Kiến trúc sư UI/UX Sản phẩm & Kỹ sư Hệ thống",
              entity: "Artificial Craft Lab",
              stack: [
                "Next.js",
                "UI/UX Phức hợp",
                "Async State Locking",
                "FastAPI",
                "Cubic B-Spline",
                "Dify Co-Pilot"
              ],
              live_url: "https://vibepath.artificialcraft.space/",
              case_url: "https://thuy-vu-designer.framer.website/work/vibepath-gps-3d-map-pipeline",
              bullets: [
                "<strong>Kiến trúc Khóa Trạng thái Bất đồng bộ (Async State Locking):</strong> Tách biệt nút kích hoạt lệnh khỏi trạng thái render nền, loại bỏ xung đột dữ liệu và thao tác gửi trùng khi xuất tài nguyên tải cao.",
                "<strong>Làm mượt Quỹ đạo GPS bằng FastAPI Cubic B-Spline:</strong> Phát triển dịch vụ chuẩn hóa dữ liệu định vị phía server, biến tọa độ GPS di động nhiễu loạn thành đường bay camera 3D mượt mà.",
                "<strong>Tích hợp Dify Co-Pilot Song ngữ:</strong> Nhúng trợ lý LLM tự chủ giúp tạo metadata có cấu trúc và kịch bản thuyết minh song ngữ trực tiếp từ dữ liệu hành trình thô."
              ]
            },
            {
              id: "proj-remotion",
              project_label: "DỰ ÁN 03",
              timeframe: "2025 – HIỆN TẠI",
              title: "ĐỘNG CƠ VIDEO-AS-CODE TRÊN REMOTION",
              role: "Kỹ sư Tự động hóa Sáng tạo",
              entity: "Artificial Craft Lab",
              stack: [
                "Remotion 4.0",
                "React",
                "TypeScript",
                "Strict Zod Schemas",
                "Headless GCP Cloud Run"
              ],
              live_url: "https://auto-video-engine.artificialcraft.space/",
              case_url: "https://thuy-vu-designer.framer.website/work/video-as-code-remotion-pipeline",
              bullets: [
                "<strong>Hợp đồng Schema Zod Nghiêm ngặt:</strong> Kiểm định dữ liệu đầu vào ở cả lúc biên dịch và chạy thực tế, triệt tiêu lỗi hỏng render và sai lệch khung hình trong các pipeline hàng loạt.",
                "<strong>Render Headless trên GCP Cloud Run:</strong> Điều phối pipeline Chromium đóng gói serverless rút ngắn thời gian xuất video từ nhiều giờ xuống còn vài giây với độ chuẩn xác tuyệt đối.",
                "<strong>Template Chuyển động Lập trình bằng Code:</strong> Xây dựng các React component tham số hóa thay thế thao tác kéo timeline After Effects thủ công bằng thực thi mã nguồn tất định."
              ]
            }
          ]
        },
        tier2: {
          tag: "TẦNG 02 // KHÁCH HÀNG DOANH NGHIỆP DÀI HẠN (2016 – 2025)",
          title: "BỀ DÀY THƯƠNG MẠI NHIỀU NĂM // ĐỘ TIN CẬY VẬN HÀNH CẤP CAO",
          subtitle: "Kỷ luật xuất bản định chế, chỉ đạo nghệ thuật đa kênh và hệ thống sản xuất thương mại khối lượng lớn.",
          items: [
            {
              id: "client-hubbis",
              timeframe: "2018 – 2025 // 5+ NĂM",
              title: "HUBBIS (HONG KONG)",
              role: "Senior Publishing & Editorial Designer (Đối tác Doanh nghiệp)",
              domain: "Xuất bản Quản lý Tài sản & Infographic Tài chính",
              stack: [
                "Adobe InDesign (Master Grid)",
                "Pre-press Color Management",
                "0-Code Digital Flipbook"
              ],
              case_url: "https://thuy-vu-designer.framer.website/work/hubbis",
              bullets: [
                "<strong>500+ Tạp chí Tài chính &amp; Infographic Dữ liệu:</strong> Chuyển hóa dữ liệu quản lý tài sản tư nhân phức tạp và báo cáo kinh tế vĩ mô thành hơn 500 ấn phẩm in và tài sản số chuẩn xuất bản suốt 5+ năm liên tiếp.",
                "<strong>Kiểm chuẩn Pre-Press Không Sai sót:</strong> Áp dụng kỷ luật hệ lưới Swiss typography và quy chuẩn quản lý màu CMYK/Pantone nghiêm ngặt, loại bỏ lỗi in ấn trên các bản in offset khổ lớn.",
                "<strong>Động cơ Flipbook Số 0-Code:</strong> Kiến trúc hóa trình đọc web gọn nhẹ chạy bằng JSON cho phép phát hành ấn phẩm tương tác tức thì trên trình duyệt mà không cần tải file PDF nặng."
              ]
            },
            {
              id: "client-growth-agency",
              timeframe: "2016 – 2024 // NHIỀU NĂM",
              title: "THE GROWTH AGENCY (AUSTRALIA)",
              role: "Creative Lead & Điều phối Sản xuất Offshore",
              domain: "Performance Marketing, Nhận diện Thương hiệu & Landing Page Chuyển đổi",
              stack: [
                "Brand Strategy",
                "Figma Design Systems",
                "Conversion UI/UX",
                "Campaign Direction"
              ],
              case_url: "https://thuy-vu-designer.framer.website/work/the-growth-agency",
              bullets: [
                "<strong>Chỉ đạo Thương hiệu Toàn phễu:</strong> Dẫn dắt thiết kế hơn 30 bộ nhận diện thương hiệu, hệ thống design system và bộ tài nguyên chiến dịch đa kênh cho khách hàng doanh nghiệp tại Úc và Anh.",
                "<strong>Điều hành Đội ngũ Sản xuất Offshore:</strong> Điều phối nhóm thiết kế linh hoạt tại TP. Hồ Chí Minh, đảm bảo bàn giao đúng nhịp sprint SLA khắt khe của agency.",
                "<strong>Landing Page Tối ưu Chuyển đổi:</strong> Thiết kế các phễu chuyển đổi và ấn phẩm marketing hiệu suất cao gắn kết trực tiếp với các kênh quảng cáo trả phí."
              ]
            },
            {
              id: "client-vgs-shop",
              timeframe: "2016 – 2020 // NHIỀU NĂM",
              title: "VGS SHOP (HOMESHOPPING & E-COMMERCE)",
              role: "Senior Designer TMĐT & Đồ họa Chuyển động Truyền hình",
              domain: "Truyền hình Mua sắm & Thương mại Điện tử Khối lượng lớn",
              stack: [
                "Broadcast Motion Graphics",
                "After Effects",
                "Packaging Standards",
                "E-Commerce UI"
              ],
              case_url: "https://thuy-vu-designer.framer.website/work/vgs-shop",
              bullets: [
                "<strong>100+ Landing Page TMĐT Tỷ lệ Chuyển đổi cao:</strong> Thiết kế và triển khai hơn 100 giao diện web tối ưu bán hàng (vgsshop.vn), đóng góp vào mức tăng trưởng doanh số chiến dịch được ghi nhận tới 30%.",
                "<strong>Đồ họa Chuyển động Phát sóng Truyền hình:</strong> Sản xuất đồ họa quảng cáo lên sóng, thanh thông tin truyền hình thương mại và gói hình ảnh bán hàng theo tiến độ phát sóng hàng ngày.",
                "<strong>Chuẩn hóa Bao bì Bán lẻ Khối lượng lớn:</strong> Chuẩn hóa khuôn bế bao bì đa SKU, quy cách hoàn thiện in ấn và hướng dẫn đóng gói vật lý cho nhiều dòng sản phẩm tiêu dùng."
              ]
            },
            {
              id: "client-australia-experiences",
              timeframe: "08/2025 – 12/2025",
              title: "AUSTRALIA EXPERIENCES",
              role: "Chuyên viên Đồ họa Chuyển động & Nhận diện Thương hiệu (Hợp đồng)",
              domain: "Du lịch Trải nghiệm & Sản xuất Nội dung Social Tốc độ cao",
              stack: [
                "DaVinci Resolve",
                "After Effects",
                "CapCut Studio",
                "Social Brand Architecture"
              ],
              case_url: "https://thuy-vu-designer.framer.website/work/australia-experiences",
              bullets: [
                "<strong>Nhận diện Thương hiệu Du lịch Toàn diện:</strong> Xây dựng từ đầu bộ nhận diện thị giác hiện đại, bảng màu và hệ thống bố cục mạng xã hội cho các doanh nghiệp dịch vụ lưu trú tại Sydney.",
                "<strong>Quay vòng Video Chuyển động Siêu tốc 4 Giờ:</strong> Xử lý 2GB–10GB tư liệu thô đa góc máy mỗi dự án để dựng, chỉnh màu và xuất video short-form sống động trong khung bàn giao 4 giờ.",
                "<strong>Quy trình Hậu kỳ Đa công cụ:</strong> Kết hợp DaVinci Resolve (chỉnh màu), After Effects (typography chuyển động) và CapCut (nhịp dựng nhanh) nhằm tối đa hóa tương tác trên TikTok, Instagram và YouTube."
              ]
            }
          ]
        },
        tier3: {
          tag: "TẦNG 03 // R&D ỨNG DỤNG, MÔ PHỎNG KHÔNG GIAN & MEDIA OPS",
          title: "INNOVATION VAULT // PHÒNG LAB THỬ NGHIỆM & LƯU TRỮ ĐẶC THÙ",
          subtitle: "Kỹ thuật CAD đặc thù, pipeline tự động hóa vi mô và giải pháp thiết kế chuyên biệt.",
          clusters: [
            {
              id: "cluster-spatial",
              index: "CỤM 01",
              title: "MÔ PHỎNG KHÔNG GIAN & DIGITAL TWINS",
              nodes: [
                {
                  title: "3D Data Metropolis",
                  desc: "Đô thị Voxel WebGL 60 FPS trực quan hóa hiệu suất tài chính theo quý; tích hợp thang chiều cao logarit và tầng hầm báo lỗ âm sàn (Sink of Shame).",
                  url: "https://thuy-vu-designer.framer.website/work/spatial-uiux-tactical-cad-systems"
                },
                {
                  title: "3D Robotics Factory",
                  desc: "Digital Twin cánh tay robot công nghiệp 11-DOF và mô phỏng đám mây điểm không gian trình diễn động học ngược và cảm biến thời gian thực trên trình duyệt.",
                  url: "https://thuy-vu-designer.framer.website/work/spatial-uiux-tactical-cad-systems"
                },
                {
                  title: "Spatial UI/UX & Tactical CAD Systems",
                  desc: "Hệ thống thiết kế Cybernetic Swiss Brutalism cấp doanh nghiệp với đường nét CAD 1px, bo góc 0px và phân tầng mặt phẳng trực quan.",
                  url: "https://thuy-vu-designer.framer.website/work/spatial-uiux-tactical-cad-systems"
                }
              ]
            },
            {
              id: "cluster-media",
              index: "CỤM 02",
              title: "TỰ ĐỘNG HÓA MEDIA & CÔNG CỤ",
              nodes: [
                {
                  title: "E2E AI-Image PIM Automation Pipeline",
                  desc: "Pipeline PIM đa mô hình kết hợp Python FastAPI, FLUX render, sàng lọc vật lý bằng Gemini Flash và kiểm định thẩm mỹ Claude Sonnet; giảm 75% thời gian xử lý ảnh trên Cloudflare R2.",
                  url: "https://thuy-vu-designer.framer.website/work/e2e-ai-image-pim-automation"
                },
                {
                  title: "GPS Telemetry Regularization & Flipbook Reader",
                  desc: "Bộ công cụ toán học chuyên biệt gồm thuật toán lọc đường đi Ramer-Douglas-Peucker (RDP) và trình đọc sách lật trang trên canvas.",
                  url: "https://thuy-vu-designer.framer.website/work/vibepath-gps-3d-map-pipeline"
                }
              ]
            },
            {
              id: "cluster-boutique",
              index: "CỤM 03",
              title: "LƯU TRỮ BAO BÌ & NHẬN DIỆN ĐẶC THÙ",
              nodes: [
                {
                  title: "Project 98 (Export Agribusiness)",
                  desc: "Chiến lược nhận diện thương hiệu và bao bì song ngữ cho sầu riêng Lâm Đồng xuất khẩu đạt chuẩn nhãn mác hải quan Trung Quốc; tích hợp script Python tự động giao nhận file.",
                  url: "https://thuy-vu-designer.framer.website/work/project-98"
                },
                {
                  title: "The Deer Project (Eco-Packaging Dielines)",
                  desc: "Kỹ thuật hóa cấu trúc bao bì sinh thái với góc bo cong chịu lực và ngàm khóa gài không keo dán trên 5 hình khối đồ ăn nhanh riêng biệt.",
                  url: "https://thuy-vu-designer.framer.website/work/the-deer-project"
                }
              ]
            }
          ]
        }
      },
      tech_stack: {
        prefix: "03 // MA TRẬN NĂNG LỰC & CÔNG CỤ",
        heading: "BỘ CÔNG CỤ & KỸ THUẬT",
        subheading: "4 trụ cột giao thoa giữa kỷ luật đồ họa chính xác và kỹ thuật tự động hóa",
        pillars: [
          {
            title: "THIẾT KẾ & BÁO CHÍ",
            subtitle: "01 // XUẤT BẢN & BAO BÌ",
            tools: [
              "Adobe InDesign (Master)",
              "Adobe Illustrator",
              "Adobe Photoshop",
              "Figma Design System",
              "Pre-press Color Management",
              "Kỹ thuật Rập Bao Bì (Dieline)"
            ]
          },
          {
            title: "SẢN XUẤT VIDEO & MOTION",
            subtitle: "02 // TRUYỀN HÌNH & TỰ ĐỘNG HÓA",
            tools: [
              "DaVinci Resolve (Color/Audio)",
              "Adobe After Effects",
              "Adobe Premiere Pro",
              "Remotion 4.0 (Video-as-Code)",
              "FFmpeg Pipelines",
              "CapCut Studio"
            ]
          },
          {
            title: "3D & ĐỒ HỌA WEB",
            subtitle: "03 // KHÔNG GIAN & GPU MÁY KHÁCH",
            tools: [
              "Three.js & WebGL",
              "React Three Fiber",
              "GSAP Motion Engine",
              "Framer CMS Architecture",
              "HTML5/CSS3 Canvas",
              "Blender 3D Modeling"
            ]
          },
          {
            title: "TỰ ĐỘNG HÓA & LẬP TRÌNH",
            subtitle: "04 // AGENTIC & PIPELINE ĐÁM MÂY",
            tools: [
              "Python (FastAPI, Pillow, OpenCV)",
              "n8n Event Orchestrator",
              "Dify.ai Workflow Engine",
              "Docker Containers",
              "Zod Schema Validation",
              "Cloudflare R2 & Tunnels",
              "GitOps & CLI Pipelines"
            ]
          }
        ]
      },
      radar_stack: {
        tag: "// MA TRẬN ĐỊNH LƯỢNG",
        title: "TỶ LỆ NĂNG LỰC TOÀN DIỆN",
        legend_automation: "Tự động hóa",
        legend_design: "Thiết kế đồ họa",
        legend_devops: "Hạ tầng & DevOps"
      },
      education: {
        prefix: "04 // HỌC VẤN & CHỨNG CHỈ NÂNG CẤP",
        heading: "CHỨNG NHẬN CHUYÊN MÔN & ĐÀO TẠO",
        subheading: "Không ngừng nâng cấp kiến thức hệ thống, trí tuệ nhân tạo và ngoại ngữ",
        items: [
          {
            year: "2026",
            title: "Python Fundamentals for Designers",
            institution: "University of Michigan",
            type: "CHỨNG CHỈ KỸ THUẬT"
          },
          {
            year: "2026",
            title: "AI Agents and Agentic AI with Python & Generative AI",
            institution: "Vanderbilt University",
            type: "KIẾN TRÚC AI AGENTS"
          },
          {
            year: "2024",
            title: "Chứng chỉ Tiếng Trung HSK Cấp 5",
            institution: "Đại học Bắc Kinh (Peking University)",
            type: "NGOẠI NGỮ QUỐC TẾ"
          },
          {
            year: "2016",
            title: "Cử nhân — Chuyên ngành Thiết kế Đa phương tiện",
            institution: "Bằng Cử nhân Đại học (Thực chiến từ 2016)",
            type: "NỀN TẢNG CHUYÊN NGÀNH"
          }
        ]
      },
      contact: {
        prefix: "05 // TRUYỀN PHÁT TÍN HIỆU",
        heading: "KẾT NỐI & HỢP TÁC",
        subheading: "Kênh liên lạc trực tiếp cho các dự án tư vấn doanh nghiệp, đồ họa 3D và tự động hóa",
        email_label: "EMAIL CHÍNH",
        email: "mizu2711@gmail.com",
        phone_label: "SỐ ĐIỆN THOẠI TRỰC TIẾP",
        phone: "+84 979 203 507",
        location_label: "ĐỊA BÀN HOẠT ĐỘNG",
        location: "TP. Hồ Chí Minh, Việt Nam (Làm việc từ xa toàn cầu)",
        copy_button: "SAO CHÉP EMAIL",
        copied_msg: "ĐÃ SAO CHÉP EMAIL!",
        links: [
          { name: "PORTFOLIO", url: "https://thuy-vu-designer.framer.website/", tag: "FRAMER LIVE" },
          { name: "PLATFORM", url: "https://artificialcraft.space/", tag: "SYSTEM HUB" },
          { name: "LINKEDIN", url: "https://www.linkedin.com/in/thuy-thu-vu-271190/", tag: "HỒ SƠ" },
          { name: "GITHUB", url: "https://github.com/mizublue2711", tag: "MÃ NGUỒN" },
          { name: "UNSPLASH", url: "https://unsplash.com/@mizu2711", tag: "ẢNH CHỤP" }
        ]
      },
      footer: {
        rights: "© 2026 VŨ THU THỦY // MIZUBLUE2711. TOÀN BỘ QUYỀN ĐƯỢC BẢO LƯU.",
        spec: "THIẾT KẾ THEO CYBERNETIC SWISS BRUTALISM • ZERO SOFT RADIUS • CANVAS 60 FPS ĐỒNG BỘ"
      },
      radar_p5: {
        tag: "// ĐO LƯỜNG HỆ THỐNG THỰC TẾ",
        title: "SLA VẬN HÀNH THỰC TẾ & TỶ LỆ TEST PASS",
        leg_pim: "Pipeline AI Xử lý Ảnh PIM",
        leg_video: "Động cơ Video-as-Code",
        leg_webgl: "Spatial UI/UX & Hệ thống CAD"
      }
    }
  };

  cvData = FALLBACK_DATA;

  // Try fetching external JSON (for dynamic updates if served over HTTP)
  fetch('cv-data.json')
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error('Fallback to embedded');
    })
    .then((data) => {
      cvData = data;
      renderCurrentLanguage();
    })
    .catch(() => {
      // Retain embedded fallback
      renderCurrentLanguage();
    });

  // Render Tier 1: Proprietary Products & Creative Tech (Page 3)
  function renderExperienceTier1(exp) {
    if (!exp || !exp.tier1) return '';
    const labels = exp.labels || {};
    const tier1Cards = (exp.tier1.items || [])
      .map(
        (item) => `
          <article class="career-card career-card-tier1 chamfer-tr cv-lego-block" id="${item.id}">
            <div class="career-card-head">
              <div class="career-head-badges">
                <span class="career-timeframe-badge">[ ${item.timeframe} ]</span>
                <span class="career-project-badge">${item.project_label}</span>
              </div>
              <div class="career-head-links">
                ${
                  item.live_url
                    ? `<a href="${item.live_url}" target="_blank" rel="noopener noreferrer" class="showcase-link-live">${labels.live_demo || 'LIVE DEMO ↗'}</a>`
                    : ''
                }
                <a href="${item.case_url}" target="_blank" rel="noopener noreferrer" class="showcase-link-case">${labels.case_study || 'CASE STUDY ↗'}</a>
              </div>
            </div>
            <h4 class="career-card-title">${item.title}</h4>
            <div class="career-meta-grid">
              <div class="career-meta-cell">
                <span class="career-meta-label">${labels.role || 'ROLE'}</span>
                <span class="career-meta-val">${item.role}</span>
              </div>
              <div class="career-meta-cell">
                <span class="career-meta-label">${labels.entity || 'ENTITY'}</span>
                <span class="career-meta-val">${item.entity}</span>
              </div>
            </div>
            <div class="career-stack-row">
              <span class="career-stack-label">${labels.stack || 'STACK'}:</span>
              <div class="showcase-tags">
                ${(item.stack || []).map((t) => `<span class="showcase-tag">${t}</span>`).join('')}
              </div>
            </div>
            <ul class="career-bullets">
              ${(item.bullets || []).map((b) => `<li>${b}</li>`).join('')}
            </ul>
          </article>
        `
      )
      .join('');

    return `
      <div class="showcase-tier-block showcase-tier-1">
        <div class="showcase-tier-header cv-lego-block">
          <div class="showcase-tier-meta">
            <span class="showcase-tier-tag">${exp.tier1.tag}</span>
            <h3 class="showcase-tier-title">${exp.tier1.title}</h3>
          </div>
          <p class="showcase-tier-subtitle">${exp.tier1.subtitle}</p>
        </div>
        <div class="career-tier1-list">
          ${tier1Cards}
        </div>
      </div>
    `;
  }

  // Render Tier 2: Enterprise Client Retainers (Page 4)
  function renderExperienceTier2(exp) {
    if (!exp || !exp.tier2) return '';
    const labels = exp.labels || {};
    const tier2Cards = (exp.tier2.items || [])
      .map(
        (item) => `
          <article class="career-card career-card-tier2 chamfer-tr cv-lego-block" id="${item.id}">
            <div class="career-card-head">
              <div class="career-head-badges">
                <span class="career-timeframe-badge career-timeframe-indigo badge-purple">[ ${item.timeframe} ]</span>
              </div>
              <div class="career-head-links">
                <a href="${item.case_url}" target="_blank" rel="noopener noreferrer" class="showcase-link-case showcase-link-case-indigo">${labels.case_study || 'CASE STUDY ↗'}</a>
              </div>
            </div>
            <h4 class="career-card-title">${item.title}</h4>
            <div class="career-meta-grid career-meta-grid-stack">
              <div class="career-meta-cell">
                <span class="career-meta-label career-meta-label-indigo">${labels.role || 'ROLE'}</span>
                <span class="career-meta-val">${item.role}</span>
              </div>
              <div class="career-meta-cell">
                <span class="career-meta-label career-meta-label-indigo">${labels.domain || 'DOMAIN'}</span>
                <span class="career-meta-val">${item.domain}</span>
              </div>
            </div>
            <div class="career-stack-row">
              <span class="career-stack-label">${labels.stack || 'STACK'}:</span>
              <div class="showcase-tags">
                ${(item.stack || []).map((t) => `<span class="showcase-tag">${t}</span>`).join('')}
              </div>
            </div>
            <ul class="career-bullets career-bullets-indigo">
              ${(item.bullets || []).map((b) => `<li>${b}</li>`).join('')}
            </ul>
          </article>
        `
      )
      .join('');

    return `
      <div class="showcase-tier-block showcase-tier-2">
        <div class="showcase-tier-header showcase-tier-header-indigo cv-lego-block">
          <div class="showcase-tier-meta">
            <span class="showcase-tier-tag showcase-tier-tag-indigo">${exp.tier2.tag}</span>
            <h3 class="showcase-tier-title">${exp.tier2.title}</h3>
          </div>
          <p class="showcase-tier-subtitle">${exp.tier2.subtitle}</p>
        </div>
        <div class="career-tier2-grid">
          ${tier2Cards}
        </div>
      </div>
    `;
  }

  // Render Tier 3: Innovation Vault & Framer Archive CTA (Page 5)
  function renderExperienceTier3(exp) {
    if (!exp || !exp.tier3) return '';
    const labels = exp.labels || {};
    const tier3Clusters = (exp.tier3.clusters || [])
      .map(
        (cluster) => `
          <div class="vault-cluster cv-lego-block" id="${cluster.id}">
            <div class="vault-cluster-header">
              <span class="vault-cluster-index">${cluster.index}</span>
              <h4 class="vault-cluster-title">${cluster.title}</h4>
            </div>
            <div class="vault-nodes-list">
              ${(cluster.nodes || [])
                .map(
                  (node) => `
                  <a href="${node.url}" target="_blank" rel="noopener noreferrer" class="vault-node">
                    <div class="vault-node-head">
                      <span class="vault-node-title">${node.title}</span>
                      <span class="vault-node-arrow">↗</span>
                    </div>
                    <p class="vault-node-desc">${node.desc}</p>
                  </a>
                `
                )
                .join('')}
            </div>
          </div>
        `
      )
      .join('');

    return `
      <div class="showcase-tier-block showcase-tier-3 cv-lego-block">
        <div class="showcase-tier-header showcase-tier-header-vault cv-lego-block">
          <div class="showcase-tier-meta">
            <span class="showcase-tier-tag">${exp.tier3.tag}</span>
            <h3 class="showcase-tier-title">${exp.tier3.title}</h3>
          </div>
          <p class="showcase-tier-subtitle">${exp.tier3.subtitle}</p>
        </div>
        <div class="showcase-vault-grid">
          ${tier3Clusters}
        </div>
      </div>

      <a href="${labels.cta_url || 'https://thuy-vu-designer.framer.website/'}" target="_blank" rel="noopener noreferrer" class="showcase-cta-bar chamfer-tr cv-lego-block">
        <span class="showcase-cta-prefix">${labels.cta_prefix || '[ FULL ARCHIVE // 11 CASE STUDIES ]'}</span>
        <span class="showcase-cta-label">${labels.cta_banner || 'EXPLORE FULL CASE STUDIES ON FRAMER ↗'}</span>
      </a>
    `;
  }

  // Language Switcher handler
  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'vi') return;
    currentLang = lang;
    localStorage.setItem('cv_lang_pref', lang);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    renderCurrentLanguage();
  }

  // Render language texts dynamically without scroll reset or canvas reload
  function renderCurrentLanguage() {
    if (!cvData || !cvData[currentLang]) return;
    const d = cvData[currentLang];

    // Navigation
    document.querySelectorAll('[data-key="nav.status"]').forEach((el) => (el.textContent = d.nav.status));
    document.querySelectorAll('[data-key="nav.metrics"]').forEach((el) => (el.textContent = d.nav.metrics));
    document.querySelectorAll('[data-key="nav.experience"]').forEach((el) => (el.textContent = d.nav.experience));
    document.querySelectorAll('[data-key="nav.stack"]').forEach((el) => (el.textContent = d.nav.stack));
    document.querySelectorAll('[data-key="nav.education"]').forEach((el) => (el.textContent = d.nav.education));
    document.querySelectorAll('[data-key="nav.contact"]').forEach((el) => (el.textContent = d.nav.contact));
    document.querySelectorAll('[data-key="nav.download_cv"]').forEach((el) => (el.textContent = d.nav.download_cv));

    // Hero
    document.querySelector('[data-key="hero.telemetry"]').textContent = d.hero.telemetry;
    document.querySelector('[data-key="hero.name"]').textContent = d.hero.name;
    document.querySelector('[data-key="hero.role"]').textContent = d.hero.role;
    document.querySelector('[data-key="hero.specializations"]').textContent = d.hero.specializations;
    document.querySelector('[data-key="hero.experience_badge"]').textContent = d.hero.experience_badge;
    document.querySelector('[data-key="hero.summary"]').textContent = d.hero.summary;
    document.querySelector('[data-key="hero.cta_portfolio"]').textContent = d.hero.cta_portfolio;
    document.querySelector('[data-key="hero.cta_platform"]').textContent = d.hero.cta_platform;
    document.querySelector('[data-key="hero.cta_contact"]').textContent = d.hero.cta_contact;

    // Metrics
    document.querySelector('[data-key="metrics.prefix"]').textContent = d.metrics.prefix;
    document.querySelector('[data-key="metrics.heading"]').textContent = d.metrics.heading;
    document.querySelector('[data-key="metrics.subheading"]').textContent = d.metrics.subheading;

    const metricsContainer = document.getElementById('metrics-container');
    if (metricsContainer) {
      metricsContainer.innerHTML = d.metrics.items
        .map(
          (m) => `
        <div class="metric-card chamfer-tr cv-lego-block">
          <div class="metric-header">
            <span class="metric-val metric-value metric-number">${m.val}</span>
            <span class="metric-unit">${m.unit}</span>
          </div>
          <div class="metric-label">${m.label}</div>
          <p class="metric-desc">${m.desc}</p>
        </div>
      `
        )
        .join('');
    }

    // Experience & 3-Tier Production Showcase (Discrete Pages 3, 4, 5)
    document.querySelector('[data-key="experience.prefix"]').textContent = d.experience.prefix;
    document.querySelector('[data-key="experience.heading"]').textContent = d.experience.heading;
    document.querySelector('[data-key="experience.subheading"]').textContent = d.experience.subheading;

    const tier1Container = document.getElementById('experience-tier1-container');
    if (tier1Container) {
      tier1Container.innerHTML = renderExperienceTier1(d.experience);
    }
    const tier2Container = document.getElementById('experience-tier2-container');
    if (tier2Container) {
      tier2Container.innerHTML = renderExperienceTier2(d.experience);
    }
    const tier3Container = document.getElementById('experience-tier3-container');
    if (tier3Container) {
      tier3Container.innerHTML = renderExperienceTier3(d.experience);
    }

    // Tech Stack
    document.querySelector('[data-key="tech_stack.prefix"]').textContent = d.tech_stack.prefix;
    document.querySelector('[data-key="tech_stack.heading"]').textContent = d.tech_stack.heading;
    document.querySelector('[data-key="tech_stack.subheading"]').textContent = d.tech_stack.subheading;

    const stackContainer = document.getElementById('stack-container');
    if (stackContainer) {
      stackContainer.innerHTML = d.tech_stack.pillars
        .map(
          (p) => `
        <div class="stack-pillar-card chamfer-tr cv-lego-block">
          <span class="pillar-subtitle">${p.subtitle}</span>
          <h4 class="pillar-title">${p.title}</h4>
          <ul class="pillar-tools-list">
            ${p.tools.map((t) => `<li class="tool-badge-item">${t}</li>`).join('')}
          </ul>
        </div>
      `
        )
        .join('');
    }

    // Education
    document.querySelector('[data-key="education.prefix"]').textContent = d.education.prefix;
    document.querySelector('[data-key="education.heading"]').textContent = d.education.heading;
    document.querySelector('[data-key="education.subheading"]').textContent = d.education.subheading;

    const eduContainer = document.getElementById('education-container');
    if (eduContainer) {
      eduContainer.innerHTML = d.education.items
        .map(
          (edu) => `
        <div class="edu-card chamfer-tr cv-lego-block">
          <span class="edu-type-tag">${edu.type}</span>
          <span class="edu-year">${edu.year}</span>
          <h4 class="edu-title">${edu.title}</h4>
          <div class="edu-institution">► ${edu.institution}</div>
        </div>
      `
        )
        .join('');
    }

    // Contact
    document.querySelector('[data-key="contact.prefix"]').textContent = d.contact.prefix;
    document.querySelector('[data-key="contact.heading"]').textContent = d.contact.heading;
    document.querySelector('[data-key="contact.subheading"]').textContent = d.contact.subheading;
    document.querySelector('[data-key="contact.email_label"]').textContent = d.contact.email_label;
    document.querySelector('[data-key="contact.phone_label"]').textContent = d.contact.phone_label;
    document.querySelector('[data-key="contact.location_label"]').textContent = d.contact.location_label;
    document.querySelector('[data-key="contact.location"]').textContent = d.contact.location;
    document.querySelector('[data-key="contact.copy_button"]').textContent = d.contact.copy_button;

    const channelsContainer = document.getElementById('channels-container');
    if (channelsContainer) {
      channelsContainer.innerHTML = d.contact.links
        .map(
          (link) => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="channel-link-card chamfer-tr cv-lego-block">
          <span class="channel-name">${link.name}</span>
          <span class="channel-tag">[ ${link.tag} ] ↗</span>
        </a>
      `
        )
        .join('');
    }

    // Footer
    document.querySelector('[data-key="footer.rights"]').textContent = d.footer.rights;
    document.querySelector('[data-key="footer.spec"]').textContent = d.footer.spec;

    // Radar Charts (Telemetry Spectrum & Competency Ratio)
    const radarStackTag = document.querySelector('[data-key="radar_stack.tag"]');
    if (radarStackTag && d.radar_stack) radarStackTag.textContent = d.radar_stack.tag;
    const radarStackTitle = document.querySelector('[data-key="radar_stack.title"]');
    if (radarStackTitle && d.radar_stack) radarStackTitle.textContent = d.radar_stack.title;

    const legAuto = document.querySelector('[data-key="radar.legend_automation"]');
    if (legAuto && d.radar_stack) legAuto.textContent = d.radar_stack.legend_automation;
    const legDesign = document.querySelector('[data-key="radar.legend_design"]');
    if (legDesign && d.radar_stack) legDesign.textContent = d.radar_stack.legend_design;
    const legDevops = document.querySelector('[data-key="radar.legend_devops"]');
    if (legDevops && d.radar_stack) legDevops.textContent = d.radar_stack.legend_devops;

    // Page 5 Radar Chart (System Operational Benchmarks)
    const radarP5Tag = document.querySelector('[data-key="radar_p5.tag"]');
    if (radarP5Tag && d.radar_p5) radarP5Tag.textContent = d.radar_p5.tag;
    const radarP5Title = document.querySelector('[data-key="radar_p5.title"]');
    if (radarP5Title && d.radar_p5) radarP5Title.textContent = d.radar_p5.title;

    const legPim = document.querySelector('[data-key="radar_p5.leg_pim"]');
    if (legPim && d.radar_p5) legPim.textContent = d.radar_p5.leg_pim;
    const legVideo = document.querySelector('[data-key="radar_p5.leg_video"]');
    if (legVideo && d.radar_p5) legVideo.textContent = d.radar_p5.leg_video;
    const legWebgl = document.querySelector('[data-key="radar_p5.leg_webgl"]');
    if (legWebgl && d.radar_p5) legWebgl.textContent = d.radar_p5.leg_webgl;

    // Mind Map Topology
    if (d.mindmap) {
      Object.keys(d.mindmap).forEach((k) => {
        const el = document.querySelector(`[data-key="mindmap.${k}"]`);
        if (el) el.textContent = d.mindmap[k];
      });
    }
  }

  // Copy Email Helper
  window.copyEmail = function () {
    const email = 'mizu2711@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const btn = document.querySelector('[data-key="contact.copy_button"]');
      if (btn && cvData && cvData[currentLang]) {
        const original = cvData[currentLang].contact.copy_button;
        btn.textContent = `[ ${cvData[currentLang].contact.copied_msg} ]`;
        btn.style.borderColor = 'var(--cyan)';
        btn.style.color = 'var(--cyan)';
        setTimeout(() => {
          btn.textContent = original;
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 2200);
      }
    });
  };

  // Download PDF Action (Invokes clean print stylesheet)
  window.downloadPdf = function () {
    window.print();
  };

  // Initialize Language Switcher Buttons
  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('cv_lang_pref');
    if (saved === 'vi' || saved === 'en') {
      currentLang = saved;
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      if (btn.dataset.lang === currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });

    renderCurrentLanguage();
  });
})();
