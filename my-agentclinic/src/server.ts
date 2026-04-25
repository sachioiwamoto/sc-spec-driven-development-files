import express from 'express'
import prisma from './prisma'
import path from 'path'
import fs from 'fs'

const app = express()
app.use(express.json())

// Serve a minimal landing page from /public when present
const publicDir = path.join(process.cwd(), 'public')
if (fs.existsSync(publicDir)) app.use(express.static(publicDir))

app.get('/', (_req, res) => {
  const index = path.join(publicDir, 'index.html')
  if (fs.existsSync(index)) return res.sendFile(index)
  return res.send({ message: 'AgentClinic API - hello' })
})

// Agents
app.get('/agents', async (_req, res) => {
  const agents = await prisma.agent.findMany()
  res.json(agents)
})

app.post('/agents', async (req, res) => {
  const { name, specialty } = req.body
  const agent = await prisma.agent.create({ data: { name, specialty } })
  res.status(201).json(agent)
})

// Appointments
app.get('/appointments', async (_req, res) => {
  const appointments = await prisma.appointment.findMany({ include: { agent: true } })
  res.json(appointments)
})

app.post('/appointments', async (req, res) => {
  const { agentId, patient, scheduled, notes } = req.body
  const appt = await prisma.appointment.create({
    data: { agentId, patient, scheduled: new Date(scheduled), notes }
  })
  res.status(201).json(appt)
})

const port = process.env.PORT ? Number(process.env.PORT) : 4000
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
