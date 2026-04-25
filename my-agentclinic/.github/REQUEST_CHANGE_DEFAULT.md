Request: Change default branch to `main` and delete `specs/2026-04-25-hello-hono`

Please change the repository default branch from `specs/2026-04-25-hello-hono` to `main`.

After changing the default branch, please delete the now-obsolete branch `specs/2026-04-25-hello-hono` on origin.

Rationale:
- `main` contains the currently validated project state, including tests and changelog.
- The `specs/...` branch was used as a temporary feature/default during development and is no longer needed.

Action for reviewers/maintainers:
1. Change repository default branch to `main` in the repository settings.
2. Delete the remote branch `specs/2026-04-25-hello-hono`.

If you'd like me to perform the default-branch switch and deletion via the GitHub API, provide a PAT with `repo` scope and I can automate it.
