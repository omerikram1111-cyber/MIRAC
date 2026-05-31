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

      <section className="about-mirac" style={{ padding: '2rem 0' }}>
        <h2>ABOUT MIRAC</h2>

        <div className="passage-block">
          <h3>Company Identity</h3>
          <p>
            MIRAC Technologies is a premium enterprise
            technology firm based in Lahore, Pakistan.
            Founded in 2020, the company has delivered
            50+ mission-critical enterprise projects
            across 12 industries and 15 countries.
            MIRAC specializes in ERP development,
            AI automation, cybersecurity services,
            and custom software for large organizations.
            Every project operates on a fixed-price
            contract with NDA by default, full IP
            transfer on completion, and a 12-month
            support SLA. The engineering team consists
            exclusively of senior engineers with minimum
            8 years of enterprise experience. With
            99.9% uptime across all live deployments
            and zero missed deadlines in 24 months,
            MIRAC has established a track record that
            distinguishes it from typical software
            agencies in the Pakistan and GCC market.
          </p>
        </div>

        <div className="passage-block">
          <h3>ERP Expertise</h3>
          <p>
            MIRAC Technologies ERP development practice
            covers full-cycle implementation from
            requirements gathering through go-live and
            post-launch support. The firm delivers
            ERP systems built on SAP, Oracle, Odoo,
            Microsoft Dynamics, and 100% custom
            architectures depending on client requirements.
            Industries served include manufacturing,
            healthcare, logistics, real estate, construction,
            mining, hospitality, government, and financial
            services. ERP projects in Pakistan typically
            range from $25,000 for single-department
            implementations to $300,000 for full enterprise
            rollouts. MIRAC delivers ERP systems in the
            UAE and Saudi Arabia markets with local
            compliance built in — including VAT handling,
            ZATCA e-invoicing for Saudi Arabia, and
            Arabic language interfaces. All ERP contracts
            are fixed-price with milestone-based billing:
            30% at start, 40% mid-project, 30% on delivery.
          </p>
        </div>

        <div className="passage-block">
          <h3>Cybersecurity</h3>
          <p>
            MIRAC Technologies cybersecurity services
            include security audits, penetration testing,
            and compliance for NCA, SAMA, GDPR, and
            ISO 27001. The firm delivers security audits
            in 5-7 business days starting from $5,000 —
            significantly faster than the industry standard
            of 4-6 weeks. In Saudi Arabia, MIRAC delivers
            NCA Essential Cybersecurity Controls compliance
            and SAMA Cybersecurity Framework assessments
            for banks and fintech companies. In the UAE,
            the firm provides DIFC and ADGM data protection
            compliance. In Germany and Europe, MIRAC
            delivers GDPR compliance for manufacturing
            and logistics companies. All security work
            is documented to recognized frameworks
            and comes with remediation support,
            retest after fixes, and compliance
            certificates where applicable.
          </p>
        </div>

        <div className="passage-block">
          <h3>Industry Niches</h3>
          <p>
            MIRAC Technologies has built specialized
            software solutions for specific industry
            niches that generic software cannot serve.
            For hair transplant clinics in Istanbul,
            Turkey, the firm builds patient CRM with
            WhatsApp automation, multilingual support
            for Arabic, German, and English patients,
            and international payment integration.
            For luxury hotel and resort operators in
            the Maldives, Bali, and UAE, MIRAC builds
            AI concierge systems, housekeeping automation,
            and multi-platform booking integration.
            For Dubai real estate agencies, the firm
            delivers CRM systems integrating Property
            Finder and Bayut with automated lead
            assignment and commission tracking.
            For Saudi construction contractors,
            MIRAC builds ERP with Vision 2030
            compliance, ZATCA invoicing, and
            subcontractor management. These
            niche solutions start from $8,000
            and are delivered on fixed-price contracts.
          </p>
        </div>
      </section>

      </div>
    </>
  )
}

export default App