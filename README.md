# Beginner Git & GitHub Workshop Challenge

Welcome to the Git & GitHub Workshop! In this activity, you'll work in teams of 3 to collaborate on fixing intentionally broken code using a real Git branching, reviewing, and pull request workflow. ** Remember we are not focusing on the code here but the git/github practises.

## Pre-workshop Checklist (Do this before the session)
- [ ] Have a [GitHub account](https://github.com).
- [ ] Have Git installed locally (confirm by running `git --version` in your terminal).
- [ ] Decide as a team who will fork the repository at the start of the session.

---

## The Team Workflow (Follow these exact steps)

1. **One team member forks this repo** to their personal GitHub account.
2. That person adds the other two teammates as collaborators on their fork (`Settings` → `Collaborators` → `Add people`). **The invited teammates must accept the invite** (check your email or github.com/notifications).
3. **All three team members clone the SAME fork** (not the original repo) to their own local machines.
4. As a team, divide up the 4 issues in `ISSUES.md`. 
5. Each person creates their own branch off `main` for their issue (e.g. `git checkout -b fix/navbar-link`), makes the fix, commits with a clear message, and pushes the branch to the shared fork.
6. Each person opens a Pull Request on GitHub: from their branch → to the fork's `main` branch.
7. In the PR, `@mention` a teammate in a comment and ask them to review (since you're all collaborators, anyone can review).
8. The reviewer opens the "Files changed" tab, checks the fix matches the issue's Definition of Done in `ISSUES.md`, and either approves or requests changes with a comment.
9. Once approved, the PR gets merged into the fork's `main` branch.
10. **The conflict moment: *This is expected and exciting, not a mistake!* You will find yourself in a merge conflict. This is the challenge fix it and merge the branch
11. Once all 4 issues are merged into the fork's `main`, the team member who forked opens **ONE final Pull Request**: from the fork's `main` → to the ORIGIN repo's `main`.
12. That final PR's title and description must follow this exact format:

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

14. **Important:** do NOT merge this final PR yourselves — I will review all teams' final PRs after the activity. Just make sure it's open and clearly labeled!

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

**Why this matters:** In the real world, software engineering is a team sport. Learning how to isolate your work in branches, review your peers' code, and confidently resolve merge conflicts when two people touch the same file are the fundamental building blocks of modern collaboration!
