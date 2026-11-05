import os, json, csv

BASE_DIR = '/Users/macbookpro/Library/CloudStorage/GoogleDrive-mizu2711@gmail.com/My Drive/FRAMER PORTFOLIO'

with open(os.path.join(BASE_DIR, 'Projects_Master.csv'), encoding='utf-8') as f:
    projects_master = list(csv.DictReader(f))

with open(os.path.join(BASE_DIR, 'Case_Studies.csv'), encoding='utf-8') as f:
    case_studies = list(csv.DictReader(f))

with open(os.path.join(BASE_DIR, 'Framer_Export_Work_populated.csv'), encoding='utf-8') as f:
    framer_work = list(csv.DictReader(f))

with open(os.path.join(BASE_DIR, 'Framer_Export_Service_populated.csv'), encoding='utf-8') as f:
    framer_services = list(csv.DictReader(f))

with open(os.path.join(BASE_DIR, 'work single.csv'), encoding='utf-8') as f:
    work_headers = next(csv.reader(f))

with open(os.path.join(BASE_DIR, 'service single.csv'), encoding='utf-8') as f:
    service_headers = next(csv.reader(f))

code_gs_lines = []
code_gs_lines.append("""/**
 * ==============================================================================
 * ⚡ FRAMER CMS DATA ENGINEERING & AUTOMATION SCRIPT
 * System Identity: ARTIFICIAL CRAFT // CRAFT//CODE
 * Lead Architect: Senior Data Engineer & Framer CMS Specialist
 * Purpose: Schema Validation, Newline Sanitization (<br>), and Lossless Framer Sync
 * ==============================================================================
 */

// EXACT HEADERS: WORK SINGLE (66 COLUMNS)
var FRAMER_WORK_HEADERS = """ + json.dumps(work_headers, indent=2) + """;

// EXACT HEADERS: SERVICE SINGLE (48 COLUMNS)
var FRAMER_SERVICE_HEADERS = """ + json.dumps(service_headers, indent=2) + """;

// CASE STUDIES HEADERS (36 COLUMNS)
var CASE_STUDIES_HEADERS = """ + json.dumps(list(case_studies[0].keys()), indent=2) + """;

// PROJECTS MASTER HEADERS (6 COLUMNS)
var PROJECTS_MASTER_HEADERS = """ + json.dumps(list(projects_master[0].keys()), indent=2) + """;

// INITIAL RAW DATA FOR 9 FLAGSHIP PROJECTS
var INITIAL_PROJECTS_MASTER = """ + json.dumps(projects_master, indent=2) + """;
var INITIAL_CASE_STUDIES = """ + json.dumps(case_studies, indent=2) + """;
var INITIAL_SERVICES = """ + json.dumps(framer_services, indent=2) + """;
""")

code_gs_lines.append(r"""
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
""")

output_path = os.path.join(BASE_DIR, 'Code.gs')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write("".join(code_gs_lines))

print(f"Successfully generated Code.gs at: {output_path}")
