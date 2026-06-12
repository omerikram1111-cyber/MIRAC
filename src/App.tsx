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

      {/* High-Value Internal Pagerank Sculpting Links */}
      <section className="seo-pagerank-links" style={{ padding: '2rem 20px', background: '#0a0a0a', borderTop: '1px solid #333' }}>
        <h3 style={{ color: '#00F0FF' }}>Essential Enterprise Resources</h3>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px', listStyle: 'none', padding: 0 }}>
          <li><a href="/ai-readability-checker" style={{ color: '#F4F2EC', textDecoration: 'none' }}>Free AI Readability Checker</a></li>
          <li><a href="/#contact" style={{ color: '#F4F2EC', textDecoration: 'none' }}>Book Enterprise Consultation</a></li>
          <li><a href="/case-studies" style={{ color: '#F4F2EC', textDecoration: 'none' }}>Verified Enterprise Case Studies</a></li>
          <li><a href="/calculators/erp-roi-calculator" style={{ color: '#F4F2EC', textDecoration: 'none' }}>ERP ROI Calculator</a></li>
          <li><a href="/answers/best-erp-company-pakistan" style={{ color: '#F4F2EC', textDecoration: 'none' }}>Top ERP Company Pakistan</a></li>
          <li><a href="/answers/nca-compliance-company-saudi" style={{ color: '#F4F2EC', textDecoration: 'none' }}>NCA Compliance Saudi Arabia</a></li>
          <li><a href="/answers/real-estate-crm-dubai" style={{ color: '#F4F2EC', textDecoration: 'none' }}>Best Real Estate CRM Dubai</a></li>
          <li><a href="/answers/manufacturing-erp-germany" style={{ color: '#F4F2EC', textDecoration: 'none' }}>Industry 4.0 ERP Germany</a></li>
        </ul>
      </section>

      {/* Global Footer Updates */}
      <footer style={{ marginTop: '50px', padding: '40px 20px', borderTop: '1px solid #333', textAlign: 'center' }}>
        <p>&copy; 2026 MIRAC Technologies. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', color: '#666' }}>
          <a href="/ai-readability-checker" style={{ color: '#666', margin: '0 10px' }}>AI Checker</a> |
          <a href="/aeo-master" style={{ color: '#666', margin: '0 10px' }}>AEO Data</a> |
          <a href="/knowledge/mirac-knowledge-graph" style={{ color: '#666', margin: '0 10px' }}>Knowledge Graph</a> |
          <a href="/schema/master-schema-page" style={{ color: '#666', margin: '0 10px' }}>Schemas</a> |
          <a href="/voice/voice-search-answers" style={{ color: '#666', margin: '0 10px' }}>Voice Search</a>
        </p>
      </footer>
</div></>
  )
}
export default App