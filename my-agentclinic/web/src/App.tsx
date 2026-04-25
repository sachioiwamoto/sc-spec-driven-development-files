import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'

type Agent = { id: string; name: string; specialty?: string }
type Appointment = { id: string; patient: string; scheduled: string; agentId: string }

export default function App() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [patient, setPatient] = useState('')
  const [agentId, setAgentId] = useState('')
  const [scheduled, setScheduled] = useState('')

  useEffect(() => {
    fetch('/agents').then((r) => r.json()).then(setAgents)
    fetch('/appointments').then((r) => r.json()).then(setAppointments)
  }, [])

  async function createAppointment(e: React.FormEvent) {
    e.preventDefault()
    if (!agentId || !patient || !scheduled) return
    const res = await fetch('/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ agentId, patient, scheduled })
    })
    const appt = await res.json()
    setAppointments((s) => [...s, appt])
    setPatient('')
    setScheduled('')
  }

  return (
    <Layout>
      <section>
        <h2>Agents</h2>
        <ul>
          {agents.map((a) => (
            <li key={a.id}>{a.name} — {a.specialty}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Create Appointment</h2>
        <form onSubmit={createAppointment}>
          <label>
            Patient
            <input value={patient} onChange={(e) => setPatient(e.target.value)} />
          </label>
          <label>
            Agent
            <select value={agentId} onChange={(e) => setAgentId(e.target.value)}>
              <option value="">— choose —</option>
              {agents.map((a) => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
          </label>
          <label>
            Scheduled
            <input type="datetime-local" value={scheduled} onChange={(e) => setScheduled(e.target.value)} />
          </label>
          <button type="submit">Create</button>
        </form>
      </section>

      <section>
        <h2>Appointments</h2>
        <ul>
          {appointments.map((a) => (
            <li key={a.id}>{a.patient} — {new Date(a.scheduled).toLocaleString()}</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
