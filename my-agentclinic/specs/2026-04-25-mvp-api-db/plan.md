# Plan — MVP API + DB (task groups)

1. Project setup
   - Initialize NestJS application scaffold
   - Configure TypeScript, ESLint, Prettier, and editor settings
   - Add SQLite and Prisma dependency and basic config

2. Data model and migrations
   - Design Prisma schema: `Agent`, `Ailment`, `Therapy`, `Appointment`
   - Run `prisma migrate` (or `prisma db push`) to create DB
   - Add a small seed script with example agents and appointments

3. API implementation
   - Implement NestJS modules/services/controllers for agents and appointments
   - Endpoints: list/create/get/update (as needed) for `agents` and `appointments`
   - Input validation and basic error handling

4. Minimal home page
   - Create a simple AgentClinic landing page summarizing the mission and target audiences
   - Include a clear call-to-action linking to the dev demo UI and docs (e.g., "Try the demo")
   - Lightweight responsive layout with basic styles to satisfy marketing needs

5. Minimal UI + integration
   - Add a small React + Vite page to list agents and create appointments (dev-only)
   - Wire UI to API endpoints (fetch + form)

6. Tests & CI
   - Unit tests for services (Jest)
   - Playwright smoke test that loads the list page and creates an appointment
   - Add GitHub Actions workflow for lint/test on PRs

7. Docs & handoff
   - Populate README with run instructions and example requests
   - Provide migration and seed instructions for students/demos
