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

      <nav role="banner" style={{ padding: '1rem 2rem', backgroundColor: '#0D0F1A', borderBottom: '1px solid rgba(0,240,255,0.1)', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>HOME</a>

        <div style={{ position: 'relative', cursor: 'pointer' }} className="nav-dropdown">
          <span style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>WHAT WE BUILD ▾</span>
          <div style={{ display: 'none', position: 'absolute', top: '100%', left: 0, backgroundColor: '#0D0F1A', border: '1px solid rgba(0,240,255,0.1)', padding: '1rem', zIndex: 100, minWidth: '200px' }} className="nav-menu">
            <a href="/hubs/erp-hub" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>ERP Systems</a>
            <a href="/hubs/ai-automation-hub" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>AI Automation</a>
            <a href="/hubs/cybersecurity-hub" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>Cybersecurity</a>
            <a href="/#services" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>All Services</a>
          </div>
        </div>

        <div style={{ position: 'relative', cursor: 'pointer' }} className="nav-dropdown">
          <span style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>INDUSTRIES ▾</span>
          <div style={{ display: 'none', position: 'absolute', top: '100%', left: 0, backgroundColor: '#0D0F1A', border: '1px solid rgba(0,240,255,0.1)', padding: '1rem', zIndex: 100, minWidth: '220px' }} className="nav-menu">
            <a href="/hubs/industries-hub" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>All Industries</a>
            <a href="#" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>Hair Transplant Clinics</a>
            <a href="#" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>Luxury Hotels & Resorts</a>
            <a href="#" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>Real Estate Agencies</a>
            <a href="#" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>Construction Firms</a>
          </div>
        </div>

        <div style={{ position: 'relative', cursor: 'pointer' }} className="nav-dropdown">
          <span style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>RESOURCES ▾</span>
          <div style={{ display: 'none', position: 'absolute', top: '100%', left: 0, backgroundColor: '#0D0F1A', border: '1px solid rgba(0,240,255,0.1)', padding: '1rem', zIndex: 100, minWidth: '200px' }} className="nav-menu">
            <a href="/case-studies" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>Case Studies</a>
            <a href="/calculators/erp-roi-calculator" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>ROI Calculators</a>
            <a href="/articles/" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>Articles</a>
            <a href="/about-mirac-technologies" style={{ display: 'block', color: '#fff', textDecoration: 'none', margin: '0.5rem 0' }}>About Us</a>
          </div>
        </div>
      </nav>

      <style>
        {`
          .nav-dropdown:hover .nav-menu {
            display: block !important;
          }
          .nav-menu a:hover {
            color: #00F0FF !important;
          }
        `}
      </style>

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