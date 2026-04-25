import prismaClient from '../src/prisma'

async function main() {
  await prismaClient.appointment.deleteMany()
  await prismaClient.agent.deleteMany()

  const alice = await prismaClient.agent.create({ data: { name: 'Alice', specialty: 'Anxiety' } })
  const bob = await prismaClient.agent.create({ data: { name: 'Dr. Bob', specialty: 'Back Pain' } })

  await prismaClient.appointment.create({
    data: { agentId: alice.id, patient: 'Sam', scheduled: new Date(), notes: 'First visit' }
  })

  await prismaClient.appointment.create({
    data: { agentId: bob.id, patient: 'Riley', scheduled: new Date(Date.now() + 86400000), notes: 'Follow up' }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prismaClient.$disconnect()
  })
