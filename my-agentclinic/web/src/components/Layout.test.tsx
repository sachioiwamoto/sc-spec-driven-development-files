import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './Layout'

describe('Layout component', () => {
  test('renders Header, Main (children) and Footer', () => {
    render(
      <Layout>
        <div>Child content</div>
      </Layout>
    )

    // Header title (explicit heading)
    expect(screen.getByRole('heading', { name: /AgentClinic/i })).toBeInTheDocument()

    // Child content rendered inside Main
    expect(screen.getByText(/Child content/)).toBeInTheDocument()

    // Footer contains demo text
    expect(screen.getByText(/AgentClinic Demo/)).toBeInTheDocument()
  })
})
