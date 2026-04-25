Skill: update-changelog

Purpose
-------
Generate or update a repository `CHANGELOG.md` from git commit history. Intended to be run manually before merging a feature branch to produce a dated list of changes.

Behavior
--------
- If no `CHANGELOG.md` exists at the repository root, the skill creates one with a top-level `# Changelog` heading and sections grouped by commit date (newest first).
- If `CHANGELOG.md` already exists, the skill writes `CHANGELOG.generated.md` so you can review and merge entries manually to preserve curated notes.

Implementation
--------------
The skill is implemented as a Node script at `scripts/update-changelog.js`. It runs `git log --pretty=format:%ad\t%h\t%s --date=short`, groups commits by date, and writes the output.

Usage
-----
From the repository root:

```bash
node scripts/update-changelog.js
```

Or via npm script (if configured):

```bash
npm run changelog:update
```

Notes
-----
- The generated file is a starting point — edit for clarity, grouping, and to omit noisy commits.
- This skill intentionally avoids overwriting an existing `CHANGELOG.md` to preserve human-written changelogs.
