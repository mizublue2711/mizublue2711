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
        summary: "Senior Multimedia Designer with 9+ years of hands-on execution across 500+ financial publications, 100+ e-commerce landing pages, and 200+ short-form video ads. Combines graphic design precision with Python, n8n, Dify, Remotion, and WebGL to automate creative pipelines, slashing processing latency by 81% and eliminating cloud rendering fees.",
        cta_portfolio: "FRAMER PORTFOLIO",
        cta_platform: "ARTIFICIAL CRAFT",
        cta_contact: "TRANSMIT MESSAGE"
      },
      metrics: {
        prefix: "01 // QUANTIFIABLE PERFORMANCE METRICS",
        heading: "SYSTEM OUTPUT & TELEMETRY",
        subheading: "Deterministic benchmarks measured across enterprise production environments",
        items: [
          { val: "9+", unit: "YEARS", label: "Hands-on Production", desc: "Practical experience delivering high-volume visual assets under strict technical specs and tight deadlines." },
          { val: "500+", unit: "REPORTS & CHARTS", label: "Financial Publications", desc: "Complex financial journals and data infographics for Hong Kong / global wealth management markets (Hubbis)." },
          { val: "100+", unit: "PAGES", label: "E-Commerce Landers", desc: "High-converting UI/UX layouts for VGS Shop, driving up to a 30% increase in online sales volume." },
          { val: "200+", unit: "MOTION ADS", label: "Video Production", desc: "Rapid 4-hour editing turnarounds, with 70% featuring custom-composed audio tracks." },
          { val: "-60%", unit: "LATENCY", label: "AI PIM Pipeline", desc: "Automated product image pipeline, collapsing processing from 5-7 min down to 1-3 min per asset." },
          { val: "$0.0", unit: "RENDER COST", label: "Client GPU Offload", desc: "Architected WebGL 3D web applications offloading high-fidelity spatial graphics directly to user hardware." }
        ]
      },
      radar_metrics: {
        tag: "// TELEMETRY BENCHMARK",
        title: "PERFORMANCE & VELOCITY SPECTRUM"
      },
      experience: {
        prefix: "02 // CHRONOLOGICAL PRODUCTION LOGS",
        heading: "HANDS-ON WORK EXPERIENCE",
        subheading: "Nine-year timeline spanning agency creative leadership to deterministic code automation",
        items: [
          {
            id: "exp-0",
            period: "2025 - PRESENT",
            role: "SPATIAL UI/UX & TACTICAL CAD DESIGN SYSTEMS",
            company: "ARTIFICIAL CRAFT, VIBEPATH, 3D DATA METROPOLIS",
            scope: "Enterprise UI/UX Architecture, Cybernetic Swiss Brutalism & 3D Spatial Ergonomics",
            tag: "FLAGSHIP UI/UX & CAD",
            bullets: [
              "<strong>Cybernetic Swiss Brutalism Design System:</strong> Built an enterprise-grade Cybernetic Swiss Brutalism design system (border-radius: 0px, 1px CAD lines, 4-tier planar elevation).",
              "<strong>Asynchronous Creator Workflows:</strong> Architected asynchronous creator workflows with decoupled state/command controls and dynamic async locks.",
              "<strong>Interactive 3D Voxel Cities:</strong> Transformed static corporate spreadsheets into interactive 60 FPS 3D Voxel cities with sub-level negative risk indicators."
            ]
          },
          {
            id: "exp-1",
            period: "2025 - PRESENT",
            role: "LEAD AUTOMATION ARCHITECT & SPATIAL DEVELOPER",
            company: "ARTIFICIAL CRAFT",
            scope: "Hybrid AI Automation, 3D Web Graphics & Video-as-Code Ecosystem",
            tag: "ACTIVE ARCHITECTURE",
            bullets: [
              "<strong>E2E AI-Image PIM Pipeline:</strong> Built an automated processing pipeline using Python FastAPI, n8n, and Cloudflare R2; implemented a 2-tier vision QA gate (Gemini Flash + Claude Sonnet) that reduced asset latency by 60% and saved 70% in AI vision token costs.",
              "<strong>Video-as-Code Engine:</strong> Programmed motion graphic templates using Remotion 4.0 & React; deployed serverless rendering on GCP Cloud Run achieving a 80% deterministic SLA with zero visual drift.",
              "<strong>Interactive 3D Web Engine:</strong> Developed client-side 60 FPS WebGL engines (Studio Configurator, 3D Data Metropolis, 3D Presentation Engine) using Three.js and GSAP with $0.00 server rendering fees."
            ]
          },
          {
            id: "exp-2",
            period: "2020 - 2026",
            role: "SENIOR BRAND & PACKAGING DESIGNER",
            company: "PROJECT 98 & THE DEER PROJECT",
            scope: "Export Agribusiness & Curved Structural Eco-Packaging",
            tag: "PRODUCTION & CAD",
            bullets: [
              "<strong>Project 98 (Export Durian Packaging):</strong> Directed brand identity and packaging compliant with Chinese import labeling and custom-print standards. Developed custom Python automation scripts for file delivery, reducing team operational turnaround by 20% and keeping client revisions below 15%.",
              "<strong>The Deer Project (Curved Eco Packaging):</strong> Engineered technical dielines for 5 custom eco-friendly packaging shapes (pastry, fries, burgers, salads, BBQ). Collaborated directly with manufacturing engineers on-site to calibrate die-cut scoring depth, ensuring glue-free assembly and structural durability during transit."
            ]
          },
          {
            id: "exp-3",
            period: "2020 - 2025",
            role: "SENIOR PUBLISHING & EDITORIAL DESIGNER",
            company: "HUBBIS (HONG KONG)",
            scope: "Institutional Wealth Management Publications & Financial Infographics",
            tag: "FINANCIAL EDITORIAL",
            bullets: [
              "<strong>500+ Financial Journals & Reports:</strong> Transformed complex financial spreadsheets and unstructured research into 500+ clear, publication-ready reports, journals, and infographics over 5+ years.",
              "<strong>Rigorous Pre-Press Calibration:</strong> Enforced structured grid systems and pre-press color management, eliminating typographic and numerical discrepancies prior to printing."
            ]
          },
          {
            id: "exp-4",
            period: "2016 - 2018",
            role: "CREATIVE LEAD & PRODUCTION COORDINATOR",
            company: "THE GROWTH AGENCY & VGS SHOP",
            scope: "Offshore Multi-channel Agency Delivery & Broadcast E-Commerce",
            tag: "CREATIVE DIRECTION",
            bullets: [
              "<strong>The Growth Agency (Australia):</strong> Coordinated an offshore production team in Ho Chi Minh City; delivered 30+ brand identities, websites, and multi-channel campaign assets for AU/UK clients.",
              "<strong>VGS Shop (TV Homeshopping & E-Commerce):</strong> Designed 100+ conversion-focused e-commerce landing pages (vgsshop.vn) and produced broadcast motion ads, contributing to a 30% surge in online sales."
            ]
          },
          {
            id: "exp-5",
            period: "AUG 2025 - DEC 2025",
            role: "MOTION GRAPHICS & VIDEO PRODUCTION",
            company: "AUSTRALIA EXPERIENCES",
            scope: "Australia · Remote // Hospitality Brand Identity & Rapid Video Engine",
            tag: "MOTION & BRANDING",
            bullets: [
              "<strong>Rapid Brand Identity Creation:</strong> Built comprehensive visual identities, logos, and high-engagement Instagram, Youtube and Tiktok layouts from scratch for multiple hospitality brands, ensuring cohesive digital storytelling under tight market launch timelines.",
              "<strong>\"Special-Forces\" Style Delivery:</strong> Processed 2GB to 10GB of raw footage per project to conceptualize, edit, and deliver dynamic short-form videos within a strict 4-hour turnaround time, mastering high-intensity workflows.",
              "<strong>Multi-Tool Software Mastery:</strong> Orchestrated a hybrid editing workflow combining DaVinci Resolve (color/grading), Adobe After Effects (motion graphics), and CapCut (fast-paced pacing) to maximize audience retention and elevate brand awareness."
            ]
          }
        ]
      },
      tech_stack: {
        prefix: "03 // CAPABILITY MATRIX & TOOLKIT",
        heading: "TECHNICAL STACK & ECOSYSTEM",
        subheading: "Four pillars bridging meticulous graphic design precision with automated engineering",
        pillars: [
          {
            title: "PUBLISHING & PRINT",
            subtitle: "01 // EDITORIAL & PACKAGING",
            tools: ["Adobe InDesign (Master)", "Adobe Illustrator", "Adobe Photoshop", "Figma Design System", "Pre-press Color Management", "Structural Dieline Engineering"]
          },
          {
            title: "VIDEO & MOTION",
            subtitle: "02 // BROADCAST & AUTOMATION",
            tools: ["DaVinci Resolve (Color/Audio)", "Adobe After Effects", "Adobe Premiere Pro", "Remotion 4.0 (Video-as-Code)", "FFmpeg Pipelines", "CapCut Studio"]
          },
          {
            title: "3D & WEB GRAPHICS",
            subtitle: "03 // SPATIAL & CLIENT GPU",
            tools: ["Three.js & WebGL", "React Three Fiber", "GSAP Motion Engine", "Framer CMS Architecture", "HTML5/CSS3 Canvas", "Blender 3D Modeling"]
          },
          {
            title: "AUTOMATION & CODE",
            subtitle: "04 // AGENTIC & CLOUD PIPELINES",
            tools: ["Python (FastAPI, Pillow, OpenCV)", "n8n Event Orchestrator", "Dify.ai Workflow Engine", "Docker Containers", "Zod Schema Validation", "Cloudflare R2 & Tunnels", "GitOps & CLI Pipelines"]
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
          { year: "2026", title: "Python Fundamentals for Designers", institution: "University of Michigan", type: "TECHNICAL CERTIFICATION" },
          { year: "2026", title: "AI Agents and Agentic AI with Python & Generative AI", institution: "Vanderbilt University", type: "AI ARCHITECTURE" },
          { year: "2024", title: "HSK Level 5 Chinese Proficiency Certificate", institution: "Peking University (北京大学)", type: "LANGUAGE PROFICIENCY" },
          { year: "2016", title: "Bachelor's Degree — Multimedia Design Major", institution: "University Degree (Hands-on Industry Execution)", type: "FOUNDATIONAL DEGREE" }
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
        rights: "© 2026 THUY VU // MIZU2711. ALL RIGHTS RESERVED.",
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
          { val: "9+", unit: "NĂM", label: "Kinh nghiệm thực chiến", desc: "Xử lý khối lượng tài nguyên hình ảnh lớn dưới các quy chuẩn kỹ thuật và tiến độ khắt khe." },
          { val: "500+", unit: "BÁO CÁO & BIỂU ĐỒ", label: "Ấn phẩm tài chính", desc: "Báo cáo tài chính phức tạp cho thị trường quản lý tài sản Hong Kong và quốc tế (Hubbis)." },
          { val: "100+", unit: "TRANG", label: "Landing Page Bán Hàng", desc: "Tối ưu UI/UX cho trang thương mại điện tử VGS Shop, đóng góp tăng trưởng doanh số tới +30%." },
          { val: "200+", unit: "VIDEO ADS", label: "Đồ họa chuyển động", desc: "Dựng video ngắn tốc độ cao (khung thời gian 4 tiếng/video), 70% có nhạc nền sản xuất riêng." },
          { val: "-60%", unit: "THỜI GIAN PIM", label: "Pipeline AI Xử lý Ảnh", desc: "Tự động hóa quy trình quản lý ảnh sản phẩm AI từ 5-7 phút xuống còn 1-3 phút mỗi tài nguyên." },
          { val: "$0.0", unit: "RENDER SERVER", label: "Offload GPU Máy Khách", desc: "Xây dựng các ứng dụng WebGL 3D chạy trực tiếp trên GPU máy khách, không tốn phí render cloud." }
        ]
      },
      radar_metrics: {
        tag: "// TIÊU CHUẨN ĐO LƯỜNG",
        title: "QUANG PHỔ HIỆU SUẤT & TỐC ĐỘ"
      },
      experience: {
        prefix: "02 // NHẬT KÝ SẢN XUẤT THEO THỜI GIAN",
        heading: "KINH NGHIỆM LÀM VIỆC THỰC CHIẾN",
        subheading: "Hành trình 9 năm từ điều phối sáng tạo agency đến kỹ sư tự động hóa tất định",
        items: [
          {
            id: "exp-0",
            period: "2025 - HIỆN TẠI",
            role: "HỆ THỐNG THIẾT KẾ SPATIAL UI/UX & TACTICAL CAD",
            company: "ARTIFICIAL CRAFT, VIBEPATH, 3D DATA METROPOLIS",
            scope: "Kiến trúc UI/UX Doanh nghiệp, Cybernetic Swiss Brutalism & Công thái học không gian 3D",
            tag: "DỰ ÁN CỜ ĐẦU UI/UX & CAD",
            bullets: [
              "<strong>Hệ thống Design System Cybernetic Swiss Brutalism:</strong> Xây dựng hệ thống thiết kế chuẩn doanh nghiệp (border-radius: 0px, đường nét CAD 1px, phân tầng cao độ 4 lớp phẳng).",
              "<strong>Luồng làm việc Creator bất đồng bộ:</strong> Thiết kế kiến trúc luồng làm việc creator bất đồng bộ với cơ chế tách biệt điều khiển trạng thái/lệnh thực thi và khóa async động.",
              "<strong>Công thái học không gian 3D Voxel:</strong> Biến đổi bảng tính doanh nghiệp phẳng tĩnh thành thành phố 3D Voxel tương tác 60 FPS với chỉ báo rủi ro âm chìm dưới lòng đất."
            ]
          },
          {
            id: "exp-1",
            period: "2025 - HIỆN TẠI",
            role: "LEAD AUTOMATION ARCHITECT & SPATIAL DEVELOPER",
            company: "ARTIFICIAL CRAFT",
            scope: "Hệ sinh thái tự động hóa AI đồ họa, 3D Web & Video-as-Code (CRAFT//CODE)",
            tag: "NỀN TẢNG KỸ THUẬT",
            bullets: [
              "<strong>E2E AI-Image PIM Pipeline:</strong> Lập trình luồng tự động hóa bằng Python FastAPI, n8n và Cloudflare R2; tích hợp kiểm định ảnh 2 lớp (Gemini Flash + Claude Sonnet) giúp giảm 60% thời gian xử lý và tiết kiệm 70% chi phí AI Vision token.",
              "<strong>Video-as-Code Engine:</strong> Lập trình khung video chuyển động bằng Remotion 4.0 & React, render serverless trên GCP Cloud Run đạt chuẩn 80% deterministic SLA, không bị lệch khung hình.",
              "<strong>3D WebApp Engines:</strong> Dựng các ứng dụng Web3D tương tác 60 FPS (Studio Configurator, 3D Data Metropolis, 3D Presentation Engine) bằng Three.js / WebGL, offload toàn bộ đồ họa xuống GPU máy khách với $0.00 chi phí render máy chủ."
            ]
          },
          {
            id: "exp-2",
            period: "2020 - 2026",
            role: "SENIOR BRAND & PACKAGING DESIGNER",
            company: "PROJECT 98 & THE DEER PROJECT",
            scope: "Nông sản xuất khẩu & Bao bì sinh thái uốn cong kỹ thuật cao",
            tag: "SẢN XUẤT & CAD",
            bullets: [
              "<strong>Project 98 (Sầu riêng Lâm Đồng xuất khẩu):</strong> Trực tiếp chỉ đạo thiết kế hệ thống bao bì & nhận diện chuẩn xuất khẩu sang thị trường Trung Quốc. Viết script Python tự động hóa giao nhận file, giảm 20% thời gian vận hành team và hạ tỷ lệ sửa đổi của khách hàng xuống dưới 15%.",
              "<strong>The Deer Project (Bao bì sinh thái uốn cong):</strong> Kỹ thuật hóa rập die-cut bao bì sinh thái cho 5 hình khối phức tạp (bánh, đồ nướng, salad, khoai tây, burger). Trực tiếp làm việc tại xưởng in để căn chỉnh độ sâu nếp gấp, đảm bảo cấu trúc khóa gài không cần keo dán mà vẫn chịu lực tốt khi vận chuyển."
            ]
          },
          {
            id: "exp-3",
            period: "2018 - 2025",
            role: "SENIOR PUBLISHING & EDITORIAL DESIGNER",
            company: "HUBBIS (HONG KONG)",
            scope: "Ấn phẩm quản lý tài sản quốc tế & Biểu đồ tài chính chuyên sâu",
            tag: "XUẤT BẢN TÀI CHÍNH",
            bullets: [
              "<strong>500+ Báo cáo & Tạp chí tài chính:</strong> Xử lý dữ liệu thô và bảng tính phức tạp thành hơn 500 bản báo cáo, tạp chí và biểu đồ tài chính chính xác suốt 5+ năm.",
              "<strong>Kiểm chuẩn Pre-press khắt khe:</strong> Xây dựng hệ thống lưới (grid system) và quy trình kiểm định pre-press nghiêm ngặt, loại bỏ hoàn toàn lỗi typographic và lệch số liệu trước khi in."
            ]
          },
          {
            id: "exp-4",
            period: "2016 - 2018",
            role: "CREATIVE LEAD & PRODUCTION COORDINATOR",
            company: "THE GROWTH AGENCY & VGS SHOP",
            scope: "Điều phối Agency đa kênh offshore & Thương mại điện tử truyền hình",
            tag: "ĐIỀU HÀNH SÁNG TẠO",
            bullets: [
              "<strong>The Growth Agency (Australia):</strong> Điều phối team thiết kế tại TP.HCM sản xuất tài nguyên marketing đa kênh; hoàn thành 30+ bộ nhận diện thương hiệu và website chuẩn UI/UX cho thị trường Úc/Anh.",
              "<strong>VGS Shop (TV Homeshopping & E-commerce):</strong> Thiết kế 100+ landing page bán hàng, sản xuất đồ họa chuyển động phát sóng TV, trực tiếp góp phần tăng 30% doanh số bán hàng online."
            ]
          },
          {
            id: "exp-5",
            period: "08/2025 - 12/2025",
            role: "MOTION GRAPHICS & VIDEO PRODUCTION",
            company: "AUSTRALIA EXPERIENCES",
            scope: "Australia · Làm việc từ xa (Remote) // Nhận diện ngành Hospitality & Dựng video tốc độ cao",
            tag: "MOTION & BRANDING",
            bullets: [
              "<strong>Xây dựng nhanh chóng bộ nhận diện thương hiệu:</strong> Thiết kế toàn diện hệ thống nhận diện hình ảnh, logo cùng các bố cục nội dung có tính tương tác cao trên Instagram, YouTube và TikTok cho nhiều thương hiệu trong ngành dịch vụ khách hàng (hospitality). Đảm bảo câu chuyện thương hiệu trên nền tảng số luôn nhất quán, ngay cả trong những dự án có tiến độ ra mắt thị trường vô cùng gấp rút.",
              "<strong>Quy trình làm việc tốc độ cao (phong cách \"đặc nhiệm\"):</strong> Xử lý từ 2GB đến 10GB dữ liệu thô cho mỗi dự án; từ khâu lên ý tưởng, biên tập đến hoàn thiện các video dạng ngắn (short-form) đầy sống động chỉ trong vòng 4 giờ - thể hiện khả năng làm chủ các quy trình đòi hỏi cường độ cao.",
              "<strong>Thông thạo đa dạng công cụ phần mềm:</strong> Kết hợp linh hoạt các phần mềm chuyên dụng - DaVinci Resolve (chỉnh màu/phân loại màu), Adobe After Effects (đồ họa chuyển động) và CapCut (tối ưu nhịp độ nhanh) - nhằm tối đa hóa khả năng giữ chân người xem và nâng cao độ nhận diện thương hiệu."
            ]
          }
        ]
      },
      tech_stack: {
        prefix: "03 // MA TRẬN NĂNG LỰC & CÔNG CỤ",
        heading: "BỘ CÔNG CỤ & KỸ THUẬT",
        subheading: "4 trụ cột giao thoa giữa kỷ luật đồ họa chính xác và kỹ thuật tự động hóa",
        pillars: [
          {
            title: "THIẾT KẾ & BÁO CHÍ",
            subtitle: "01 // XUẤT BẢN & BAO BÌ",
            tools: ["Adobe InDesign (Master)", "Adobe Illustrator", "Adobe Photoshop", "Figma Design System", "Pre-press Color Management", "Kỹ thuật Rập Bao Bì (Dieline)"]
          },
          {
            title: "SẢN XUẤT VIDEO & MOTION",
            subtitle: "02 // TRUYỀN HÌNH & TỰ ĐỘNG HÓA",
            tools: ["DaVinci Resolve (Color/Audio)", "Adobe After Effects", "Adobe Premiere Pro", "Remotion 4.0 (Video-as-Code)", "FFmpeg Pipelines", "CapCut Studio"]
          },
          {
            title: "3D & ĐỒ HỌA WEB",
            subtitle: "03 // KHÔNG GIAN & GPU MÁY KHÁCH",
            tools: ["Three.js & WebGL", "React Three Fiber", "GSAP Motion Engine", "Framer CMS Architecture", "HTML5/CSS3 Canvas", "Blender 3D Modeling"]
          },
          {
            title: "TỰ ĐỘNG HÓA & LẬP TRÌNH",
            subtitle: "04 // AGENTIC & PIPELINE ĐÁM MÂY",
            tools: ["Python (FastAPI, Pillow, OpenCV)", "n8n Event Orchestrator", "Dify.ai Workflow Engine", "Docker Containers", "Zod Schema Validation", "Cloudflare R2 & Tunnels", "GitOps & CLI Pipelines"]
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
          { year: "2026", title: "Python Fundamentals for Designers", institution: "University of Michigan", type: "CHỨNG CHỈ KỸ THUẬT" },
          { year: "2026", title: "AI Agents and Agentic AI with Python & Generative AI", institution: "Vanderbilt University", type: "KIẾN TRÚC AI AGENTS" },
          { year: "2024", title: "Chứng chỉ Tiếng Trung HSK Cấp 5", institution: "Đại học Bắc Kinh (Peking University)", type: "NGOẠI NGỮ QUỐC TẾ" },
          { year: "2016", title: "Cử nhân — Chuyên ngành Thiết kế Đa phương tiện", institution: "Bằng Cử nhân Đại học (Thực chiến từ 2016)", type: "NỀN TẢNG CHUYÊN NGÀNH" }
        ]
      },
      contact: {
        prefix: "05 // TRUYỀN PHÁT TÍN HIỆU",
        heading: "KẾT NỐI & HỢP TÁC",
        subheading: "Kênh liên lạc trực tiếp cho các dự án tư vấn doanh nghiệp, đồ họa 3D và tự động hóa",
        email_label: "EMAIL CHÍNH",
        email: "mizu2711@gmail.com",
        phone_label: "SỐ ĐIỆN THOẠI",
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
        rights: "© 2026 VŨ THU THỦY // MIZU2711. BẢN QUYỀN CÁ NHÂN.",
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
            <span class="metric-val">${m.val}</span>
            <span class="metric-unit">${m.unit}</span>
          </div>
          <div class="metric-label">${m.label}</div>
          <p class="metric-desc">${m.desc}</p>
        </div>
      `
        )
        .join('');
    }

    // Experience
    document.querySelector('[data-key="experience.prefix"]').textContent = d.experience.prefix;
    document.querySelector('[data-key="experience.heading"]').textContent = d.experience.heading;
    document.querySelector('[data-key="experience.subheading"]').textContent = d.experience.subheading;

    const expContainer = document.getElementById('experience-container');
    if (expContainer) {
      expContainer.innerHTML = d.experience.items
        .map(
          (exp, index) => `
        <div class="experience-card cv-lego-block ${index === 0 ? 'active' : 'collapsed'}" id="${exp.id}">
          <div class="exp-header" onclick="window.toggleExperience('${exp.id}')">
            <div class="exp-primary-meta">
              <span class="exp-period-badge">${exp.period}</span>
              <h3 class="exp-role-title">${exp.role}</h3>
              <div class="exp-company-sub">► ${exp.company} &nbsp; <span style="color: var(--text-muted); font-size: 11px;">[ ${exp.tag} ]</span></div>
              <div class="exp-scope-summary">${exp.scope}</div>
            </div>
            <div class="exp-toggle-btn">${index === 0 ? '−' : '+'}</div>
          </div>
          <div class="exp-body">
            <ul class="exp-bullets">
              ${exp.bullets.map((b) => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        </div>
      `
        )
        .join('');
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
  }

  // Accordion Toggle
  window.toggleExperience = function (cardId) {
    const card = document.getElementById(cardId);
    if (!card) return;
    const isCollapsed = card.classList.contains('collapsed');
    const btn = card.querySelector('.exp-toggle-btn');

    if (isCollapsed) {
      card.classList.remove('collapsed');
      card.classList.add('active');
      if (btn) btn.textContent = '−';
    } else {
      card.classList.add('collapsed');
      card.classList.remove('active');
      if (btn) btn.textContent = '+';
    }
  };

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
