# Validation — How we'll know this is done

Acceptance criteria
- Database: Prisma migrations applied and SQLite DB file exists with expected tables (`Agent`, `Appointment`, `Therapy`, `Ailment`).
- API: `GET /agents` returns seeded agents; `POST /appointments` creates an appointment and returns 201 with appointment payload.
- UI: Minimal list page loads and displays agents; user can create an appointment through the form in the dev UI.
- Tests: Unit tests pass locally; Playwright smoke test completes successfully in CI.
- Docs: README updated with run, migrate, and seed instructions.

- Home page: the root landing page (`/`) renders mission text and a link/button to the dev demo UI; it loads without console errors in a modern browser.

Manual validation steps
1. Install dependencies and generate Prisma client:
   - `npm install`
   - `npx prisma generate`
2. Run migrations / push schema and seed data:
   - `npx prisma migrate dev --name init` or `npx prisma db push` + seed
3. Start the API:
   - `npm run start:dev`
4. Verify endpoints:
   - `curl -s http://localhost:3000/agents | jq .` should return a JSON array
   - `curl -X POST http://localhost:3000/appointments -H 'Content-Type: application/json' -d '{"agentId":"<id>","therapyId":"<id>","scheduledAt":"2026-05-01T10:00:00Z"}'`
6. Open the home page:
   - Visit `http://localhost:3000/` and confirm mission text is visible and the "Try the demo" link/button navigates to the dev UI.
5. Open the dev UI and confirm the list and create flows work.

CI validation
- Add GH Actions job: run `npm test` and `npx playwright test --project=chromium --reporter=list` and fail the job if either fails.

Definition of done
- All acceptance criteria met, tests passing, PR opened against `main` from this branch with updated specs and implementation.
