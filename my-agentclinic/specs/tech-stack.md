# Tech Stack

- Language: TypeScript (server-side)
- Runtime: Node.js
- Framework (recommended): NestJS — structured, extensible, and works well for TypeScript server apps.
- Database: SQLite (development & lightweight production) as requested in prompts.
- ORM / DB toolkit: Prisma (works smoothly with SQLite and TypeScript)
- Frontend (suggested): React + Vite (modern, fast), but can be swapped for Svelte/Vue as preferred.
- Testing: Jest for unit tests, Playwright for end-to-end/browser tests.

Why these choices
- NestJS aligns with a TypeScript-first architecture and provides clear structure for dashboards and APIs.
- SQLite keeps the initial infra simple for course/demo use while Prisma gives a clean DX.
