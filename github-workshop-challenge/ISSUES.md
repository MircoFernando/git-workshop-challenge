# Team Dashboard Issues

| Issue # | Title | Difficulty | Points | Affected File | Description |
|---|---|---|---|---|---|
| #1 | Broken navbar link | 🟢 Easy | 1 | `index.html` | A link in the navbar goes to the wrong place. |
| #2 | Incorrect button text | 🟢 Easy | 1 | `index.html` | A link in the navbar has a typo in its visible text. |
| #3 | Broken form validation | 🟡 Medium | 2 | `script.js` | The contact form validation logic is flawed. |
| #4 | Broken mobile card layout | 🟡 Medium | 2 | `style.css` | Team member cards get squished on mobile instead of stacking. |

---

## Definitions of Done

### Issue 1: Broken navbar link
**The Bug:** In the navbar, the second link has an incorrect `href` attribute. Clicking it currently does nothing or goes to a broken section.
**Definition of Done:** Clicking the link successfully scrolls down to the "Team Members" section. 
*(Hint: Check the id of the Team Members section!)*

### Issue 2: Incorrect button text
**The Bug:** The second link in the navbar has a typo in its text (says "Teem").
**Definition of Done:** The visible text for the link in the navbar correctly reads "Team". 
*(Note: You must fix the text on the exact same line as Issue 1!)*

### Issue 3: Broken form validation
**The Bug:** In `script.js`, the form validates backwards or incorrectly. It accepts submissions even if only one field is filled out, missing the other error state.
**Definition of Done:** Submitting the form with an empty name OR an email missing an "@" symbol shows a visible inline red error message and does NOT submit. Submitting with valid name and email shows a green success message.

### Issue 4: Broken mobile card layout
**The Bug:** In `style.css`, the Team Members card grid should stack to a single column below 600px width, but currently stays squeezed into two columns.
**Definition of Done:** Resizing the browser (or using dev tools device toolbar) below 600px width shows the cards stacked in a single column instead of overlapping/squeezed.
