# Beginner Git & GitHub Workshop Challenge

Welcome to the Git & GitHub Workshop! In this activity, you'll work in teams of 3 to collaborate on fixing intentionally broken code using a real Git branching, reviewing, and pull request workflow.

## Pre-workshop Checklist (Do this before the session)
- [ ] Have a [GitHub account](https://github.com).
- [ ] Have Git installed locally (confirm by running `git --version` in your terminal).
- [ ] Have authentication set up to push to GitHub (either via [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) or a [Personal Access Token (PAT)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) — PAT is usually easier for beginners).
- [ ] Decide as a team who will fork the repository at the start of the session.

---

## The Team Workflow (Follow these exact steps)

1. **One team member forks this repo** to their personal GitHub account.
2. That person adds the other two teammates as collaborators on their fork (`Settings` → `Collaborators` → `Add people`). **The invited teammates must accept the invite** (check your email or github.com/notifications).
3. **All three team members clone the SAME fork** (not the original repo) to their own local machines.
4. As a team, divide up the 4 issues in `ISSUES.md`. 
   > **Note:** Issues 1 and 2 **must** be done by two DIFFERENT teammates since they touch the same line and are designed to cause a merge conflict on purpose. This simulates real teamwork!
5. Each person creates their own branch off `main` for their issue (e.g. `git checkout -b fix/navbar-link`), makes the fix, commits with a clear message, and pushes the branch to the shared fork.
6. Each person opens a Pull Request on GitHub: from their branch → to the fork's `main` branch.
7. In the PR, `@mention` a teammate in a comment and ask them to review (since you're all collaborators, anyone can review).
8. The reviewer opens the "Files changed" tab, checks the fix matches the issue's Definition of Done in `ISSUES.md`, and either approves or requests changes with a comment.
9. Once approved, the PR gets merged into the fork's `main` branch.
10. **The conflict moment:** Whoever's Issue 1 or 2 PR was approved and merged FIRST should merge first. The second person's PR (touching that same navbar line) will now show "This branch has conflicts that must be resolved". *This is expected and exciting, not a mistake!*
11. **To resolve the conflict:**
    - Pull the latest fork `main` into your local branch (`git pull origin main`).
    - Open the conflicting file in your editor.
    - Look for the `<<<<<<< HEAD` / `=======` / `>>>>>>>` conflict markers.
    - Manually edit the file so the final line has BOTH fixes (correct href AND correct text).
    - Delete the conflict markers, save, commit, and push again.
    - Get re-reviewed, then merge your PR.
12. Once all 4 issues are merged into the fork's `main`, the team member who forked opens **ONE final Pull Request**: from the fork's `main` → to the ORIGIN repo's `main`.
13. That final PR's title and description must follow this exact format:

```text
Title: [Team Name] Fixes: #1, #2, #3, #4

Description:
## Issues Fixed
- #1 - Fixed navbar link href
- #2 - Fixed navbar button text
- #3 - Fixed form validation logic
- #4 - Fixed mobile card layout

## Team Members
- @username1 (issues: 1, 3)
- @username2 (issues: 2)
- @username3 (issues: 4)
```

14. **Important:** do NOT merge this final PR yourselves — the workshop presenter will review all teams' final PRs after the activity. Just make sure it's open and clearly labeled!

---

## Scoring

| Issue # | Title | Difficulty | Points |
|---|---|---|---|
| #1 | Broken navbar link | 🟢 Easy | 1 |
| #2 | Incorrect button text | 🟢 Easy | 1 |
| #3 | Broken form validation | 🟡 Medium | 2 |
| #4 | Broken mobile card layout | 🟡 Medium | 2 |

**Note:** Reviewed and properly merged PRs count in full. Unreviewed or skipped-process merges will not count for points, even if the bug is fixed — the goal is practicing the workflow, not just fixing bugs!

---

## Troubleshooting

- **"Permission denied (publickey)" or push authentication failures:** Check your SSH/PAT setup from the pre-workshop checklist.
- **Collaborator invite not showing up:** Check the GitHub notifications bell icon and your email. Invites must be manually accepted.
- **"This branch has conflicts" appearing on a PR that ISN'T Issue 1 or 2:** This likely means two people edited the same line by accident. The same resolution process (Step 11) applies.
- **Can't find "Request review" option:** Just use a `@mention` in a comment to request a review. The formal reviewer request feature requires special repo permissions.

---

**Why this matters:** In the real world, software engineering is a team sport. Learning how to isolate your work in branches, review your peers' code, and confidently resolve merge conflicts when two people touch the same file are the fundamental building blocks of modern collaboration!
