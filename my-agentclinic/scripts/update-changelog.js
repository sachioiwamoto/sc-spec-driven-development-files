#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const repoRoot = path.resolve(__dirname, '..')
const changelogPath = path.join(repoRoot, 'CHANGELOG.md')

function getGitLog() {
  // date \t short-hash \t subject
  const cmd = 'git log --pretty=format:%ad%x09%h%x09%s --date=short'
  return execSync(cmd, { cwd: repoRoot, encoding: 'utf8' })
}

function parseLog(log) {
  const lines = log.split('\n').filter(Boolean)
  const byDate = {}
  for (const line of lines) {
    const [date, hash, ...rest] = line.split('\t')
    const subject = rest.join('\t')
    if (!byDate[date]) byDate[date] = []
    byDate[date].push({ hash, subject })
  }
  return byDate
}

function buildChangelog(byDate) {
  const dates = Object.keys(byDate).sort((a, b) => (a < b ? 1 : -1)) // newest first
  const parts = ['# Changelog', '', 'Automatically generated — edit as needed.', '']
  for (const date of dates) {
    parts.push(`## ${date}`, '')
    for (const entry of byDate[date]) {
      parts.push(`- ${entry.subject} (${entry.hash})`)
    }
    parts.push('')
  }
  return parts.join('\n')
}

function main() {
  try {
    const log = getGitLog()
    const byDate = parseLog(log)
    const content = buildChangelog(byDate)
    if (fs.existsSync(changelogPath)) {
      console.log('CHANGELOG.md exists — writing to CHANGELOG.generated.md instead to avoid overwriting.')
      fs.writeFileSync(path.join(repoRoot, 'CHANGELOG.generated.md'), content, 'utf8')
      console.log('Wrote CHANGELOG.generated.md — please merge contents into CHANGELOG.md as desired.')
    } else {
      fs.writeFileSync(changelogPath, content, 'utf8')
      console.log('Created CHANGELOG.md')
    }
  } catch (err) {
    console.error('Failed to generate changelog:', err.message)
    process.exit(1)
  }
}

if (require.main === module) main()
