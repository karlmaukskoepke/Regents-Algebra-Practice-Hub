# Algebra I Regents Reflection Tool — Setup Guide (v2)

## What's new in this version
- Students select their name from a dropdown (no typos)
- Teacher notes are fetched live when a student submits
- Real Claude AI generates the study plan on screen immediately
- Student tracker shows score trends across all four exams

---

## Step 1: Get your Anthropic API key (~5 minutes)

1. Go to **console.anthropic.com** and sign in (or create a free account)
2. Click **API Keys** in the left sidebar
3. Click **Create Key** — name it "Regents Reflection"
4. Copy the key (starts with `sk-ant-...`) — save it somewhere safe, you only see it once
5. Add a payment method under **Billing** — you'll be charged ~$0.01 per student submission (less than $4 for a full year of 4 exams × 24 students)

---

## Step 2: Set up Google Sheets & Apps Script (~10 minutes)

1. Go to **sheets.google.com** → create a new blank spreadsheet
2. Name it: `Regents Reflection Data`
3. In the top menu: **Extensions → Apps Script**
4. Delete everything in the editor
5. Click the **+** next to "Files" → name the new file `Config`
6. Paste these two lines into Config.gs:
   ```
   const ANTHROPIC_API_KEY = 'sk-ant-YOUR-KEY-HERE';
   const CLAUDE_MODEL = 'claude-sonnet-4-20250514';
   ```
7. Click back on `Code.gs` — delete everything — paste the entire contents of `apps-script.gs`
8. Save (Ctrl+S)

---

## Step 3: Add your roster

1. In the Apps Script editor, run the function **setupSheets** (select it from the dropdown → click Run)
   - This creates the Roster and Teacher Notes tabs in your Sheet
2. Go back to your Google Sheet — click the **Roster** tab
3. In column A starting at row 2, type each student's name:
   ```
   Jordan M.
   Alex T.
   Sam R.
   (one per row)
   ```
4. Go back to Apps Script → run **setupSheets** again
   - This pre-populates the Teacher Notes tab with one row per student per exam

---

## Step 4: Deploy the Apps Script

1. Click **Deploy → New deployment**
2. Click the gear → select **Web app**
3. Set **Execute as**: Me
4. Set **Who has access**: Anyone
5. Click **Deploy** → authorize when prompted
6. **Copy the Web App URL**

---

## Step 5: Connect the app

1. Open `index.html` in any text editor
2. Find this line near the top:
   ```javascript
   const SCRIPT_URL = '';
   ```
3. Replace with:
   ```javascript
   const SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';
   ```
4. Save the file

---

## Step 6: Upload to GitHub Pages

1. Go to your GitHub repository (`regents-reflection`)
2. Delete the old `index.html` (click it → trash icon)
3. Upload the new `index.html` from this folder
4. That's it — **no examData.js needed this time**, it's all built in

Your URL stays the same: `https://YOUR-USERNAME.github.io/regents-reflection`

---

## Your workflow on exam day

### Before students reflect:
1. Score their free-response questions, write comments on their paper
2. Open your Google Sheet → **Teacher Notes** tab
3. For each student, find their row for the current exam
4. Click the cell in column C and **dictate your paragraph** (Voice to text works great here)
   - Example: *"Jordan is solid on linear equations but consistently loses all points on completing the square — she sets it up right but makes arithmetic errors under the radical. She also struggled with the regression interpretation question but that may be a vocabulary issue more than a concept gap."*

### When students sit down to reflect:
1. They go to your GitHub Pages URL
2. Select their name, select the exam, click Start
3. Reflect on each question (10-15 minutes)
4. Hit Submit → study plan generates in ~15 seconds

---

## Your Google Sheet tabs explained

| Tab | What it's for |
|-----|--------------|
| **Roster** | Your student list — edit here to add/remove students, then re-run setupSheets() |
| **Teacher Notes** | One row per student per exam — this is where you dictate |
| **Responses** | Every question, every student, color-coded. Your teacher notes are copied here automatically after submission. |
| **Student Tracker** | One row per student, scores for all four exams, trend arrows (↑ ↓ →) |
| **Class Summary** | Run generateClassSummary() from Apps Script to get per-question reteach priorities |

---

## Generating Class Summary (for your planning)

After students have submitted:
1. Go to Extensions → Apps Script
2. Select **generateClassSummary** from the function dropdown
3. Click Run
4. Check the Class Summary tab — questions flagged 🔴 High priority are your reteach targets

---

## Flagged questions (auto-excluded from scores)

| Exam | Question | Reason |
|------|----------|--------|
| June 2022 | Q24 | Recursive sequences — no longer assessed |
| June 2022 | Q26 | Function transformations — not yet taught |
| June 2022 | Q35 | Linear regression — not yet taught |
| June 2023 | Q21 | Recursive sequences — no longer assessed |

Students see a banner on these questions. Their scores are calculated without them automatically.

---

## Troubleshooting

**"Could not load roster"** — check that your Apps Script is deployed and the URL in index.html is correct

**Study plan says "could not be generated"** — check your API key in Config.gs is correct and your Anthropic account has billing set up

**Student not in dropdown** — add them to the Roster tab and run setupSheets() again, then re-deploy

**Scores seem off** — make sure you're entering FR scores correctly (0/2, 1/2, 2/2 etc.) and that flagged questions show the banner
