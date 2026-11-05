import os, sys, csv, json, re
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

BASE_DIR = "/Users/macbookpro/Library/CloudStorage/GoogleDrive-mizu2711@gmail.com/My Drive/FRAMER PORTFOLIO"

def sanitize_text(text):
    if not text:
        return ""
    t = text.replace("\r\n", "\n").replace("\r", "\n")
    lines = [line.strip() for line in t.split("\n")]
    res = []
    prev_empty = False
    for line in lines:
        if not line:
            if not prev_empty:
                res.append("")
                prev_empty = True
        else:
            res.append(line)
            prev_empty = False
    out = "<br>".join(res)
    out = re.sub(r'(<br>\s*){3,}', '<br><br>', out)
    return out.strip()

def sanitize_tag(tag):
    if not tag:
        return ""
    return ",".join([t.strip().lower() for t in tag.split(",") if t.strip()])

# Load original headers
with open(os.path.join(BASE_DIR, "work single.csv"), "r", encoding="utf-8") as f:
    work_headers = next(csv.reader(f))

with open(os.path.join(BASE_DIR, "service single.csv"), "r", encoding="utf-8") as f:
    service_headers = next(csv.reader(f))

# Existing data
with open(os.path.join(BASE_DIR, "Projects_Master.csv"), "r", encoding="utf-8") as f:
    pm_rows = list(csv.DictReader(f))

with open(os.path.join(BASE_DIR, "Case_Studies.csv"), "r", encoding="utf-8") as f:
    cs_rows = list(csv.DictReader(f))

with open(os.path.join(BASE_DIR, "Framer_Export_Work_populated.csv"), "r", encoding="utf-8") as f:
    work_rows = list(csv.DictReader(f))

with open(os.path.join(BASE_DIR, "Framer_Export_Service_populated.csv"), "r", encoding="utf-8") as f:
    service_rows = list(csv.DictReader(f))

# New case study data
new_cs_data = {
    "project_id": "proj-ac-10",
    "slug": "webapp-presentation-engine",
    "title": "3D Spatial WebApp Presentation Engine",
    "tag": sanitize_tag("graphic,automation"),
    "name": "Projects",
    "card_number": "10",
    "number_bracket": "[10]",
    "about": sanitize_text("First-Person Tunnel Fly-Through + 3D Directory Tree & Live Configurator Dock with $0.00 Server Render Cost."),
    "short_desc": sanitize_text("First-Person Tunnel Fly-Through + 3D Directory Tree & Live Configurator Dock with $0.00 Server Render Cost."),
    "role": "Lead 3D Web & Systems Architect",
    "project_type": "Interactive 3D WebApp - WebGL Spatial Architecture & Live Configurator",
    "date_text": "Nov 2026",
    "intro_subtitle": "Introduction",
    "intro_number": "01",
    "intro_title": sanitize_text("Engineered a 3D Cybernetic Swiss Brutalist spatial presentation engine for artificialcraft.space."),
    "intro_desc": sanitize_text("Constructed a First-Person Tunnel Fly-Through web app combining 3D spatial stratification, radial dispersion mechanics, and an interactive line-branching directory tree.<br>Integrated a glassmorphic Live Customization Dock ([SYS//CONFIG DOCK]) enabling real-time UI texture swapping, JSON AST directory synchronization, and client-side 60 FPS WebM motion video recording.<br>Built using Three.js, React Three Fiber, GSAP, and Zod validation gates with zero server-side rendering overhead."),
    "challenge_subtitle": "Challenge",
    "challenge_number": "02",
    "challenge_title": sanitize_text("Transforming static presentation pages into dynamic, interactive 3D WebApps without expensive cloud GPU rendering costs."),
    "challenge_desc_1": sanitize_text("Traditional web presentation engines rely on heavy prerendered videos or server-side GPU instances, resulting in high latency, static user interaction, and expensive infrastructure overhead."),
    "challenge_desc_2": sanitize_text("Rendering complex 3D scenes with scattered directory nodes and deep UI component matrices on the client side often leads to visual occlusion, camera collision, and frame drops below 60 FPS."),
    "solution_subtitle": "Solution",
    "solution_number": "03",
    "solution_title": sanitize_text("Client-side WebGL spatial tunnel architecture with dual-state camera flight controls and in-memory JSON AST stream."),
    "solution_desc": sanitize_text("Engineered a 4-zone Z-axis perspective tunnel with radial dispersion mechanics that automatically clears the central flight path as the camera advances.<br>Implemented a dual-state camera machine (TUNNEL_FLIGHT_MODE and NODE_INSPECT_MODE) with GSAP smooth transitions and anchor memory.<br>Built a client-side WebM video recorder leveraging canvas.captureStream(60) and VP9 encoding for zero-cost, instant 60 FPS motion clip generation."),
    "core_statement": sanitize_text("Transformed web presentation into a 60 FPS interactive 3D spatial web application with zero server render costs."),
    "story_headline": sanitize_text("A LONG SHORT STORY ABOUT SPATIAL 3D WEBAPP ARCHITECTURE"),
    "story_title_1": sanitize_text("1. 4-Zone Perspective Tunnel & Radial Dispersion:"),
    "story_1": sanitize_text("Divided the spatial environment into 4 distinct depth zones along the Z-axis (UI Glass Viewport, Exploded Component Matrix, Interactive 3D Directory Tree, and Deep AI Reasoning Core). Implemented mathematical radial dispersion to push off-axis components to screen margins as the camera flies through."),
    "story_title_2": sanitize_text("2. Dual-State Camera & 3D Line-Branching Tree:"),
    "story_2": sanitize_text("Designed a GSAP-driven camera state machine allowing seamless switching between continuous tunnel flight and close-up node inspection. Built an interactive 3D directory tree where clicking nodes triggers vector line growth, pollen particle bursts, and floating glassmorphic HUD cards (xb.UICard)."),
    "story_title_3": sanitize_text("3. Collapsible Control Dock & Client-Side WebM Exporter:"),
    "story_3": sanitize_text("Created a 5-tab glassmorphic dock enabling live UI texture replacement, Zod-validated JSON directory tree syncing, camera flight tuning, and client-side 60 FPS WebM video recording via canvas.captureStream for instant $0.00-cost motion asset exports."),
    "tools": "Three.js, React Three Fiber, GSAP, WebGL, WebM Canvas Recorder, Zod, Tailwind CSS, TypeScript",
    "cover_image_url": "",
    "video_url": "https://artificialcraft.space/"
}

new_pm_row = {
    "project_id": "proj-ac-10",
    "title": "3D Spatial WebApp Presentation Engine",
    "slug": "webapp-presentation-engine",
    "category": "Interactive Web3D Systems",
    "status": "Production Live",
    "updated_at": "2026-11-01"
}

new_work_row = {h: "" for h in work_headers}
new_work_row["Slug"] = new_cs_data["slug"]
new_work_row["Title"] = new_cs_data["title"]
new_work_row["Tag"] = new_cs_data["tag"]
new_work_row["Name"] = new_cs_data["name"]
new_work_row["Card Number"] = new_cs_data["card_number"]
new_work_row["Number"] = new_cs_data["number_bracket"]
new_work_row["About"] = new_cs_data["about"]
new_work_row["short description with number"] = new_cs_data["short_desc"]
new_work_row["Subtitle 1"] = new_cs_data["intro_subtitle"]
new_work_row["Number 1"] = new_cs_data["intro_number"]
new_work_row["Title 2"] = new_cs_data["intro_title"]
new_work_row["Description 1"] = new_cs_data["intro_desc"]
new_work_row["Type"] = "Project Type:"
new_work_row["Type Text"] = new_cs_data["project_type"]
new_work_row["Date"] = "Date"
new_work_row["Date Text"] = new_cs_data["date_text"]
new_work_row["Image 1"] = new_cs_data["cover_image_url"]
new_work_row["Image 1:alt"] = f"{new_cs_data['title']} key visual"
new_work_row["Subtitle 2"] = new_cs_data["challenge_subtitle"]
new_work_row["Number 2"] = new_cs_data["challenge_number"]
new_work_row["Title 3"] = new_cs_data["challenge_title"]
new_work_row["Description 2"] = new_cs_data["challenge_desc_1"]
new_work_row["Description 3"] = new_cs_data["challenge_desc_2"]
new_work_row["Subtitle 3"] = new_cs_data["solution_subtitle"]
new_work_row["Number 3"] = new_cs_data["solution_number"]
new_work_row["Title 4"] = new_cs_data["solution_title"]
new_work_row["Description 4"] = new_cs_data["solution_desc"]
new_work_row["Link Video"] = new_cs_data["video_url"]
new_work_row["Core"] = new_cs_data["core_statement"]
new_work_row["A long short story about"] = new_cs_data["story_headline"]
new_work_row["Story title 1"] = new_cs_data["story_title_1"]
new_work_row["Story title 2"] = new_cs_data["story_title_2"]
new_work_row["Story title 3"] = new_cs_data["story_title_3"]
new_work_row["Story 1"] = new_cs_data["story_1"]
new_work_row["Story 2"] = new_cs_data["story_2"]
new_work_row["Story 3"] = new_cs_data["story_3"]

# Insert new case study right after proj-ac-09 (at position index 9), and renumber legacy projects 10-15 to 11-16
updated_pm = []
updated_cs = []
updated_work = []

# First 9 projects (proj-ac-01 to proj-ac-09)
for i in range(9):
    updated_pm.append(pm_rows[i])
    updated_cs.append(cs_rows[i])
    updated_work.append(work_rows[i])

# Insert new project as 10
updated_pm.append(new_pm_row)
updated_cs.append(new_cs_data)
updated_work.append(new_work_row)

# Append remaining legacy projects (previously 10 to 15, now 11 to 16)
for idx, (pm, cs, wk) in enumerate(zip(pm_rows[9:], cs_rows[9:], work_rows[9:])):
    new_num = 11 + idx
    new_num_str = f"{new_num}"
    new_bracket = f"[{new_num_str}]"
    
    # Update card numbers
    cs_copy = dict(cs)
    cs_copy["card_number"] = new_num_str
    cs_copy["number_bracket"] = new_bracket
    
    wk_copy = dict(wk)
    wk_copy["Card Number"] = new_num_str
    wk_copy["Number"] = new_bracket
    
    updated_pm.append(pm)
    updated_cs.append(cs_copy)
    updated_work.append(wk_copy)

print(f"Total projects updated: {len(updated_work)} (Expected: 16)")
for r in updated_work:
    print(f"Card {r['Card Number']} | {r['Number']} | {r['Slug']} | {r['Title'][:35]}")

# Save CSV Files
print("Writing updated CSV files...")
with open(os.path.join(BASE_DIR, "Projects_Master.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=list(updated_pm[0].keys()))
    writer.writeheader()
    writer.writerows(updated_pm)

with open(os.path.join(BASE_DIR, "Case_Studies.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=list(updated_cs[0].keys()))
    writer.writeheader()
    writer.writerows(updated_cs)

with open(os.path.join(BASE_DIR, "Framer_Export_Work_populated.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=work_headers)
    writer.writeheader()
    writer.writerows(updated_work)

# Update Master Excel Workbook
print("Writing Framer_Portfolio_Master.xlsx with 16 projects...")
wb = openpyxl.Workbook()
wb.remove(wb.active)

# Styles
header_font = Font(name="Arial", size=10, bold=True, color="FFFFFF")
header_fill_blue = PatternFill(start_color="1A365D", end_color="1A365D", fill_type="solid")
header_fill_dark = PatternFill(start_color="1F2937", end_color="1F2937", fill_type="solid")
header_fill_purple = PatternFill(start_color="4C1D95", end_color="4C1D95", fill_type="solid")
header_fill_emerald = PatternFill(start_color="064E3B", end_color="064E3B", fill_type="solid")

# Tab 1: Projects_Master
ws1 = wb.create_sheet(title="Projects_Master")
ws1.append(list(updated_pm[0].keys()))
for row in updated_pm:
    ws1.append(list(row.values()))
for col_num in range(1, len(updated_pm[0].keys()) + 1):
    cell = ws1.cell(row=1, column=col_num)
    cell.font = header_font
    cell.fill = header_fill_blue
    cell.alignment = Alignment(horizontal="center", vertical="center")
ws1.row_dimensions[1].height = 26
ws1.freeze_panes = "A2"

# Tab 2: Case_Studies
cs_headers = list(updated_cs[0].keys())
ws2 = wb.create_sheet(title="Case_Studies")
ws2.append(cs_headers)
for row in updated_cs:
    ws2.append([row.get(h, "") for h in cs_headers])
for col_num in range(1, len(cs_headers) + 1):
    cell = ws2.cell(row=1, column=col_num)
    cell.font = header_font
    cell.fill = header_fill_dark
    cell.alignment = Alignment(horizontal="center", vertical="center")
ws2.row_dimensions[1].height = 26
ws2.freeze_panes = "B2"

# Tab 3: Framer_Export_Work
ws3 = wb.create_sheet(title="Framer_Export_Work")
ws3.append(work_headers)
for row in updated_work:
    ws3.append([row.get(h, "") for h in work_headers])
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
for row in service_rows:
    ws4.append([row.get(h, "") for h in service_headers])
for col_num in range(1, len(service_headers) + 1):
    cell = ws4.cell(row=1, column=col_num)
    cell.font = header_font
    cell.fill = header_fill_emerald
    cell.alignment = Alignment(horizontal="center", vertical="center")
ws4.row_dimensions[1].height = 26
ws4.freeze_panes = "B2"

for ws in [ws1, ws2, ws3, ws4]:
    for col in ws.columns:
        col_letter = get_column_letter(col[0].column)
        max_len = max(len(str(cell.value or '')) for cell in col[:16])
        ws.column_dimensions[col_letter].width = min(max(max_len + 3, 12), 40)

excel_path = os.path.join(BASE_DIR, "Framer_Portfolio_Master.xlsx")
wb.save(excel_path)
print(f"Saved updated Excel Master to {excel_path}")
