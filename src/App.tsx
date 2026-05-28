import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from './utils/seo';
import { Blog } from './components/Blog';

function App() {
  return (
    <>
      <Helmet>
        <title>{SEO_CONFIG.defaultTitle}</title>
        <meta name="description" content={SEO_CONFIG.defaultDescription} />
      </Helmet>

      <nav role="banner" style={{ padding: '1rem 2rem', backgroundColor: '#0D0F1A', borderBottom: '1px solid rgba(0,240,255,0.1)', display: 'flex', gap: '2rem' }}>
        <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>HOME</a>
        <a href="#insights" style={{ color: '#fff', textDecoration: 'none' }}>INSIGHTS</a>
      </nav>

      <main role="main" style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
        <div aria-label="MIRAC Technologies - Enterprise Software" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '3rem', marginBottom: '1rem' }}>
            Welcome to MIRAC Technologies
          </h1>
          <p style={{ color: '#a0aec0', maxWidth: '600px', margin: '0 auto' }}>
            Enterprise ERP, AI Automation, MRP and custom software development firm based in Pakistan.
          </p>
          <button aria-describedby="hero-desc" style={{ marginTop: '2rem', padding: '1rem 2rem', backgroundColor: '#00F0FF', border: 'none', cursor: 'pointer' }}>Get Started</button>
          <p className="sr-only" id="hero-desc">
            MIRAC Technologies provides enterprise ERP development,
            AI automation systems, MRP manufacturing software, and
            custom software development services in Pakistan and GCC.
            Based in Lahore, Pakistan with clients across UAE, Saudi Arabia,
            and the wider Middle East region.
          </p>
        </div>

        {/* Blog section placed here as requested */}
        <div id="insights">
          <Blog />
        </div>
      </main>
    </>
  );
}

export default App;