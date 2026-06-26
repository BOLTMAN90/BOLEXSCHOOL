---
name: push-and-deploy
description: >-
  Commits local changes, pushes to GitHub, and triggers Vercel deployment for
  BOLEXSCHOOL. Use when the user asks to push, deploy, ship, publish, or sync
  changes to GitHub or Vercel.
---

# Push & Deploy — BOLEXSCHOOL

End-to-end release workflow. Execute all steps without asking the user to run commands.

## Project

| Item | Value |
|------|-------|
| Repo | `https://github.com/BOLTMAN90/BOLEXSCHOOL.git` |
| Remote | `origin` |
| Branch | `main` (unless user says otherwise) |
| Framework | Next.js 16 — Vercel-native |
| Vercel deploy | Auto on push to `main` via GitHub integration |

## Workflow

Copy this checklist and track progress:

```
- [ ] 1. Inspect changes
- [ ] 2. Verify build
- [ ] 3. Stage & commit
- [ ] 4. Push to GitHub
- [ ] 5. Confirm deployment
```

### Step 1 — Inspect changes

Run in parallel:

```powershell
cd c:\Users\USER\Desktop\BOLEXSCHOOL
git status
git diff
git log -5 --oneline
```

Review all changes. **Never stage:** `.env`, `.env.local`, `*.pem`, credentials.

### Step 2 — Verify build

```powershell
npm run build
```

If build fails, fix errors or stop and report. Do not push broken code.

### Step 3 — Stage & commit

```powershell
git add <relevant-files>
git commit -m "Short summary of why these changes matter"
```

Commit message style (match existing history):
- One line, imperative mood, describes the "why"
- Examples: `Add parent portal dashboard and login API`, `Fix contact form SMTP error handling`

On Windows PowerShell, use a simple `-m "message"` string (no heredoc needed).

### Step 4 — Push to GitHub

```powershell
git push origin main
```

If the branch has no upstream yet:

```powershell
git push -u origin main
```

If push is rejected (remote ahead), pull with rebase then push:

```powershell
git pull --rebase origin main
git push origin main
```

### Step 5 — Confirm deployment

Vercel is connected to this GitHub repo — **pushing `main` triggers production deploy automatically**.

Wait ~30–60 seconds, then check status:

```powershell
npx vercel ls --token $env:VERCEL_TOKEN 2>$null
```

If `VERCEL_TOKEN` is not set, report that the push succeeded and Vercel will auto-deploy from GitHub. Optionally fetch the latest deployment:

```powershell
npx vercel inspect --wait 2>$null
```

**Fallback** (only if GitHub integration is broken and user has linked the project locally):

```powershell
npx vercel --prod
```

## Response template

Report back to the user:

```markdown
## Shipped

**Commit:** `<hash>` — <message>
**Pushed:** `main` → origin
**Build:** passed
**Deploy:** Vercel auto-deploy triggered (check dashboard or share URL if known)
```

## Failure handling

| Problem | Action |
|---------|--------|
| Nothing to commit | Say so; ask if they want to deploy existing commits |
| Build fails | Fix if obvious; otherwise report error and stop |
| Push rejected | `git pull --rebase origin main`, resolve conflicts, retry |
| Auth error on push | Tell user to sign in to GitHub (Git Credential Manager) |
| Secrets in diff | Exclude from commit; warn user |

## Optional: custom commit message

If the user provides a commit message in their prompt, use it verbatim.
