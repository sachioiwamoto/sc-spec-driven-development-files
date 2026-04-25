import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '../layout.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-layout">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
