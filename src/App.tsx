import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SEO_CONFIG } from './utils/seo'

function App() {
  return (
    <>
      <Helmet>
        <title>{SEO_CONFIG.defaultTitle}</title>
        <meta name="description" content={SEO_CONFIG.defaultDescription} />
      </Helmet>
      <div>
        <h1>Welcome to MIRAC Technologies</h1>
      </div>
    </>
  )
}

export default App