import os, sys, csv, json
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

BASE_DIR = "/Users/macbookpro/Library/CloudStorage/GoogleDrive-mizu2711@gmail.com/My Drive/FRAMER PORTFOLIO"

# 1. Read existing headers
with open(os.path.join(BASE_DIR, "work single.csv"), "r", encoding="utf-8") as f:
    work_headers = next(csv.reader(f))

with open(os.path.join(BASE_DIR, "service single.csv"), "r", encoding="utf-8") as f:
    service_headers = next(csv.reader(f))

print(f"Loaded {len(work_headers)} work headers and {len(service_headers)} service headers.")
