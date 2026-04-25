# Requirements — MVP API + DB

Scope
- Implement the backend API and database schema for agents and appointments required for Phase 1 (MVP API + DB) of the roadmap.

Decisions
- Framework: NestJS (per `specs/tech-stack.md`) for a TypeScript-first server structure.
- Database: SQLite with Prisma as the ORM/tooling.
- Keep UI minimal and focused on demonstrating API usage for students and demos.

Context & constraints
- Aligns with `specs/mission.md` to support course students and demo developers.
- Use SQLite to keep infrastructure lightweight for local demos and classroom setups.
- Prioritize clarity and testability over production-grade scaling for this phase.

Data models (minimum)
- Agent
  - id: string (uuid)
  - name: string
  - status: string (e.g., healthy, recovering)
  - createdAt: DateTime

- Ailment
  - id, name, description

- Therapy
  - id, name, description, durationMinutes

- Appointment
  - id: string (uuid)
  - agentId: string (FK -> Agent)
  - scheduledAt: DateTime
  - therapyId: string (FK -> Therapy)
  - notes: string
  - status: string (scheduled, completed, cancelled)

Non-goals
- No multi-tenant or production-grade scaling in this phase
- No advanced auth beyond a simple demo-friendly mechanism

Assumptions
- Students will run locally using Node.js and the provided SQLite DB file
