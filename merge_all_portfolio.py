import os, sys, csv, json, re
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

BASE_DIR = "/Users/macbookpro/Library/CloudStorage/GoogleDrive-mizu2711@gmail.com/My Drive/FRAMER PORTFOLIO"

def sanitize_text(text):
    if not text:
        return ""
    # Normalize \r\n and \r to \n
    t = text.replace("\r\n", "\n").replace("\r", "\n")
    # Replace multiple consecutive newlines (\n\n+) with <br><br>
    # and single newline with <br>
    # First split by \n
    lines = [line.strip() for line in t.split("\n")]
    # Join with <br>
    # If consecutive empty lines, produce <br><br>
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
    
    # join with <br>
    out = "<br>".join(res)
    # collapse excessive breaks
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

# Load existing 9 new projects from Case_Studies.csv and Projects_Master.csv
with open(os.path.join(BASE_DIR, "Projects_Master.csv"), "r", encoding="utf-8") as f:
    existing_pm = list(csv.DictReader(f))

with open(os.path.join(BASE_DIR, "Case_Studies.csv"), "r", encoding="utf-8") as f:
    existing_cs = list(csv.DictReader(f))

with open(os.path.join(BASE_DIR, "Framer_Export_Work_populated.csv"), "r", encoding="utf-8") as f:
    existing_work = list(csv.DictReader(f))

with open(os.path.join(BASE_DIR, "Framer_Export_Service_populated.csv"), "r", encoding="utf-8") as f:
    existing_service = list(csv.DictReader(f))

# Load raw original work single and service single
with open(os.path.join(BASE_DIR, "work single.csv"), "r", encoding="utf-8") as f:
    orig_work_rows = list(csv.DictReader(f))

with open(os.path.join(BASE_DIR, "service single.csv"), "r", encoding="utf-8") as f:
    orig_service_rows = list(csv.DictReader(f))

print(f"Loaded {len(existing_cs)} new case studies and {len(orig_work_rows)} original work rows.")
print(f"Loaded {len(existing_service)} new services and {len(orig_service_rows)} original service rows.")

# 1. Process 6 original work rows into clean Framer_Export_Work and Case_Studies
legacy_tools_map = {
    "hubbis": "Adobe InDesign, Illustrator, Photoshop, Pre-press, Financial Data Visualization",
    "australia-experiences": "DaVinci Resolve, Adobe After Effects, Lightroom, Canva/Affinity, Social Frameworks",
    "project-98": "Packaging Dieline Design, Adobe Illustrator, Branding Strategy, Cross-Border Workflow",
    "the-deer-project": "Industrial Dielines, Form Factor Ideation, Factory Prototyping, Technical Sketching",
    "the-growth-agency": "Figma, Creative Direction, UI/UX Design, International Advertising, Workflow Systems",
    "vgs-shop": "WordPress Frontend, Figma, Adobe Photoshop, TV Homeshopping Broadcast Graphics"
}

legacy_role_map = {
    "hubbis": "Lead Editorial & Publishing Designer",
    "australia-experiences": "Creative Director & Motion Producer",
    "project-98": "Lead Product Designer & Creative Strategist",
    "the-deer-project": "Senior Industrial & Packaging Designer",
    "the-growth-agency": "Creative Director & UI/UX Lead",
    "vgs-shop": "Senior Multi-Platform Digital Designer"
}

legacy_category_map = {
    "hubbis": "Editorial & Data Visualization",
    "australia-experiences": "Brand Identity & Motion Graphics",
    "project-98": "Product Redirection & Packaging",
    "the-deer-project": "Industrial & Form Design",
    "the-growth-agency": "Creative Direction & UI/UX",
    "vgs-shop": "E-Commerce & Digital Media"
}

legacy_date_map = {
    "hubbis": "2025-07-01",
    "australia-experiences": "2025-08-01",
    "project-98": "2026-09-01",
    "the-deer-project": "2020-10-01",
    "the-growth-agency": "2018-10-01",
    "vgs-shop": "2016-10-01"
}

merged_pm = list(existing_pm) # start with 9
merged_cs = list(existing_cs) # start with 9
merged_work = list(existing_work) # start with 9

# Append the 6 legacy projects
for idx, r in enumerate(orig_work_rows):
    seq_num = 10 + idx
    seq_str = f"{seq_num}"
    seq_bracket = f"[{seq_str}]"
    slug = r["Slug"].strip()
    
    # 1. Projects Master row
    pm_row = {
        "project_id": f"proj-legacy-0{idx+1}",
        "title": r["Title"].strip(),
        "slug": slug,
        "category": legacy_category_map.get(slug, "Design & Digital Production"),
        "status": "Archived / Production",
        "updated_at": legacy_date_map.get(slug, "2025-01-01")
    }
    merged_pm.append(pm_row)

    # 2. Case Studies row
    cs_row = {
        "project_id": f"proj-legacy-0{idx+1}",
        "slug": slug,
        "title": r["Title"].strip(),
        "tag": sanitize_tag(r.get("Tag", "")),
        "name": r.get("Name", "Clients").strip(),
        "card_number": seq_str,
        "number_bracket": seq_bracket,
        "about": sanitize_text(r.get("About", "")),
        "short_desc": sanitize_text(r.get("short description with number", "")),
        "role": legacy_role_map.get(slug, "Senior Lead Designer"),
        "project_type": sanitize_text(r.get("Type Text", "")),
        "date_text": r.get("Date Text", "").strip(),
        "intro_subtitle": r.get("Subtitle 1", "Introduction").strip(),
        "intro_number": r.get("Number 1", "01").strip(),
        "intro_title": sanitize_text(r.get("Title 2", "")),
        "intro_desc": sanitize_text(r.get("Description 1", "")),
        "challenge_subtitle": r.get("Subtitle 2", "Challenge").strip(),
        "challenge_number": r.get("Number 2", "02").strip(),
        "challenge_title": sanitize_text(r.get("Title 3", "")),
        "challenge_desc_1": sanitize_text(r.get("Description 2", "")),
        "challenge_desc_2": sanitize_text(r.get("Description 3", "")),
        "solution_subtitle": r.get("Subtitle 3", "Solution").strip(),
        "solution_number": r.get("Number 3", "03").strip(),
        "solution_title": sanitize_text(r.get("Title 4", "")),
        "solution_desc": sanitize_text(r.get("Description 4", "")),
        "core_statement": sanitize_text(r.get("Core", "")),
        "story_headline": sanitize_text(r.get("A long short story about", "")),
        "story_title_1": sanitize_text(r.get("Story title 1", "")),
        "story_1": sanitize_text(r.get("Story 1", "")),
        "story_title_2": sanitize_text(r.get("Story title 2", "")),
        "story_2": sanitize_text(r.get("Story 2", "")),
        "story_title_3": sanitize_text(r.get("Story title 3", "")),
        "story_3": sanitize_text(r.get("Story 3", "")),
        "tools": legacy_tools_map.get(slug, "Adobe Creative Cloud, Figma"),
        "cover_image_url": r.get("Image 1", "").strip(),
        "video_url": r.get("Link Video", "").strip()
    }
    merged_cs.append(cs_row)

    # 3. Cleaned Framer_Export_Work row (preserve 100% of the 66 original columns)
    cleaned_work_row = {}
    for h in work_headers:
        val = r.get(h, "")
        if h == "Card Number":
            cleaned_work_row[h] = seq_str
        elif h == "Number":
            cleaned_work_row[h] = seq_bracket
        elif h == "Tag":
            cleaned_work_row[h] = sanitize_tag(val)
        elif h in ["Description 1", "Description 2", "Description 3", "Description 4", "About", "short description with number", "Core", "Title 2", "Title 3", "Title 4", "Story 1", "Story 2", "Story 3"]:
            cleaned_work_row[h] = sanitize_text(val)
        else:
            cleaned_work_row[h] = val.strip() if isinstance(val, str) else val
            
    merged_work.append(cleaned_work_row)

# 2. Process Services (Merge 3 new flagship services + 3 original services)
# Re-index Cover Number to 01-06 for seamless Framer presentation
merged_services = []

# First, add the 3 new flagship services
for i, s in enumerate(existing_service):
    s_clean = dict(s)
    s_clean["Cover Number"] = f"0{i+1}"
    merged_services.append(s_clean)

# Next, add the 3 original services from service single.csv
for i, s in enumerate(orig_service_rows):
    s_clean = {}
    for h in service_headers:
        val = s.get(h, "")
        if h == "Cover Number":
            s_clean[h] = f"0{len(merged_services) + 1}"
        elif isinstance(val, str):
            s_clean[h] = sanitize_text(val)
        else:
            s_clean[h] = val
    merged_services.append(s_clean)

print(f"Total merged Projects_Master: {len(merged_pm)}")
print(f"Total merged Case_Studies: {len(merged_cs)}")
print(f"Total merged Framer_Export_Work: {len(merged_work)}")
print(f"Total merged Framer_Export_Service: {len(merged_services)}")

# Save CSV Files
print("Saving merged CSV files...")
# Projects_Master.csv
with open(os.path.join(BASE_DIR, "Projects_Master.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=list(merged_pm[0].keys()))
    writer.writeheader()
    writer.writerows(merged_pm)

# Case_Studies.csv
with open(os.path.join(BASE_DIR, "Case_Studies.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=list(merged_cs[0].keys()))
    writer.writeheader()
    writer.writerows(merged_cs)

# Framer_Export_Work_populated.csv
with open(os.path.join(BASE_DIR, "Framer_Export_Work_populated.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=work_headers)
    writer.writeheader()
    writer.writerows(merged_work)

# Framer_Export_Service_populated.csv
with open(os.path.join(BASE_DIR, "Framer_Export_Service_populated.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=service_headers)
    writer.writeheader()
    writer.writerows(merged_services)

# Save Master Excel Workbook
print("Updating Framer_Portfolio_Master.xlsx with 15 projects and 6 services...")
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
ws1.append(list(merged_pm[0].keys()))
for row in merged_pm:
    ws1.append(list(row.values()))
for col_num in range(1, len(merged_pm[0].keys()) + 1):
    cell = ws1.cell(row=1, column=col_num)
    cell.font = header_font
    cell.fill = header_fill_blue
    cell.alignment = Alignment(horizontal="center", vertical="center")
ws1.row_dimensions[1].height = 26
ws1.freeze_panes = "A2"

# Tab 2: Case_Studies
cs_headers = list(merged_cs[0].keys())
ws2 = wb.create_sheet(title="Case_Studies")
ws2.append(cs_headers)
for row in merged_cs:
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
for row in merged_work:
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
for row in merged_services:
    ws4.append([row.get(h, "") for h in service_headers])
for col_num in range(1, len(service_headers) + 1):
    cell = ws4.cell(row=1, column=col_num)
    cell.font = header_font
    cell.fill = header_fill_emerald
    cell.alignment = Alignment(horizontal="center", vertical="center")
ws4.row_dimensions[1].height = 26
ws4.freeze_panes = "B2"

# Adjust column widths
for ws in [ws1, ws2, ws3, ws4]:
    for col in ws.columns:
        col_letter = get_column_letter(col[0].column)
        max_len = max(len(str(cell.value or '')) for cell in col[:15])
        ws.column_dimensions[col_letter].width = min(max(max_len + 3, 12), 40)

excel_path = os.path.join(BASE_DIR, "Framer_Portfolio_Master.xlsx")
wb.save(excel_path)
print(f"Saved complete merged Excel Master to {excel_path}")
