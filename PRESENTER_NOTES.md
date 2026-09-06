# Presenter Notes (Answer Key & Setup)

## Setup Before Workshop
Create 4 GitHub issues in the main repository before the workshop starts. Copy-paste these exact templates:

### Issue 1
**Title:** Broken navbar link
**Body:**
```
**The Bug:** In the navbar, the second link has an incorrect `href` attribute. Clicking it currently does nothing or goes to a broken section.
**Definition of Done:** Clicking the link successfully scrolls down to the "Team Members" section. *(Hint: Check the id of the Team Members section!)*
```

### Issue 2
**Title:** Incorrect button text
**Body:**
```
**The Bug:** The second link in the navbar has a typo in its text (says "Teem").
**Definition of Done:** The visible text for the link in the navbar correctly reads "Team". *(Note: You must fix the text on the exact same line as Issue 1!)*
```

### Issue 3
**Title:** Broken form validation
**Body:**
```
**The Bug:** In `script.js`, the form validates backwards or incorrectly. It accepts submissions even if only one field is filled out, missing the other error state.
**Definition of Done:** Submitting the form with an empty name OR an email missing an "@" symbol shows a visible inline red error message and does NOT submit. Submitting with valid name and email shows a green success message.
```

### Issue 4
**Title:** Broken mobile card layout
**Body:**
```
**The Bug:** In `style.css`, the Team Members card grid should stack to a single column below 600px width, but currently stays squeezed into two columns.
**Definition of Done:** Resizing the browser (or using dev tools device toolbar) below 600px width shows the cards stacked in a single column instead of overlapping/squeezed.
```

---

## Answer Key

### Issue 1 & 2: Navbar Link & Text (Merge Conflict)
**File:** `index.html` (Line 14)
**Bug:** `<a href="#wrong">Teem</a>`
**Fix:**
```html
<a href="#team">Team</a>
```

### Issue 3: Form Validation Logic
**File:** `script.js` (Line 16)
**Bug:** The logic uses `&&` instead of `||`.
```javascript
if (name === '' && !email.includes('@')) { 
```
**Fix:**
```javascript
if (name === '' || !email.includes('@')) { 
```

### Issue 4: Mobile CSS Media Query Typo
**File:** `style.css` (Line 73)
**Bug:** The media query has a typo in the breakpoint `60px` instead of `600px`.
```css
@media (max-width: 60px) {
```
**Fix:**
```css
@media (max-width: 600px) {
```

### Bonus Issue (Hand out manually!)
**File:** `index.html` (Line 46)
**Bug:** Footer copyright year is 2014.
**Fix:** Update `2014` to the current year.

---

## Suggested Timing Breakdown (30 mins total)
* **0-5 min:** Setup, forking, and adding collaborators. Remind them to accept invites!
* **5-23 min:** Active work. Teams clone, branch out, fix issues, and open PRs. Walk around and help with merge conflicts (issues 1 & 2).
* **23-28 min:** Wrapping up PRs on forks and opening the FINAL PR back to the origin repo.
* **28-30 min:** Debrief. Share screen, quickly look over one or two final PRs. Celebrate the merge conflict resolution.
