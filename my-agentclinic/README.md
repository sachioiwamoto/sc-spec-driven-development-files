# AgentClinic

## Input from stakeholders

- Mary in engineering wants a reliable site with a popular stack based on TypeScript, giving agents and staff a dashboard for easy access.
- Susan in product has a set of features about agents and their ailments, therapies, and booking appointments.
- Steve in marketing wants an attractive site that works well with a modern browser.

## Local dev (API + DB)

Prereqs: Node 18+, npm

Install and prepare:

```bash
npm install
npm run prepare
```

Create the SQLite DB and generate client:

```bash
npm run db:push
npm run seed
```

Start dev server:

```bash
npm run dev
```

The API will be available at `http://localhost:4000` with routes `/agents` and `/appointments`.

## Demo UI (local)

A small React + Vite demo lives in the `web/` folder. To run it:

```bash
cd web
npm install
npm run dev
```

When running, the demo expects the API at `http://localhost:4000` (same host). You can run the API concurrently.

