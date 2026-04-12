const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
// Vercel's serverless filesystem is read-only; use /tmp for writable storage.
const INQUIRIES_FILE = process.env.VERCEL
  ? '/tmp/inquiries.json'
  : path.join(__dirname, 'data', 'inquiries.json');

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve each screen folder's assets statically
app.use('/assets/homepage', express.static(path.join(__dirname, 'mirac_homepage_simple_nav')));
app.use('/assets/homepage-mobile', express.static(path.join(__dirname, 'mirac_mobile_simple_nav')));
app.use('/assets/contact', express.static(path.join(__dirname, 'mirac_contact_desktop')));
app.use('/assets/contact-mobile', express.static(path.join(__dirname, 'mirac_contact_app')));
app.use('/assets/services', express.static(path.join(__dirname, 'mirac_services_desktop')));
app.use('/assets/services-mobile', express.static(path.join(__dirname, 'mirac_services_mobile_app')));

// ─── Helpers ──────────────────────────────────────────────────────────────────
function readInquiries() {
  try {
    const raw = fs.readFileSync(INQUIRIES_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeInquiries(data) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// ─── Page Routes ──────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'mirac_homepage_simple_nav', 'code.html'));
});

app.get('/mobile', (req, res) => {
  res.sendFile(path.join(__dirname, 'mirac_mobile_simple_nav', 'code.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'mirac_contact_desktop', 'code.html'));
});

app.get('/contact-mobile', (req, res) => {
  res.sendFile(path.join(__dirname, 'mirac_contact_app', 'code.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'mirac_services_desktop', 'code.html'));
});

app.get('/services-mobile', (req, res) => {
  res.sendFile(path.join(__dirname, 'mirac_services_mobile_app', 'code.html'));
});

// ─── API: Health ──────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── API: Services ────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 'marketing',
    domain: 'Marketing',
    tagline: 'We build content systems.',
    items: [
      { code: '01A', name: 'Content Strategy' },
      { code: '01B', name: 'Performance Marketing' },
      { code: '01C', name: 'Branding' },
      { code: '01D', name: 'SEO' },
      { code: '01E', name: 'Social Media Systems' },
      { code: '01F', name: 'Funnels & Conversion Design' },
    ],
  },
  {
    id: 'technology',
    domain: 'Technology',
    tagline: 'We build infrastructure.',
    items: [
      { code: '02A', name: 'Web Ecosystems' },
      { code: '02B', name: 'Data Pipelines' },
      { code: '02C', name: 'AI Integration' },
      { code: '02D', name: 'CRM Systems' },
      { code: '02E', name: 'Automation Systems' },
      { code: '02F', name: 'Dashboards & Analytics' },
    ],
  },
  {
    id: 'growth',
    domain: 'Growth',
    tagline: 'We engineer it.',
    items: [
      { code: '03A', name: 'Brand Audits' },
      { code: '03B', name: 'Revenue Models' },
      { code: '03C', name: 'Scaling' },
      { code: '03D', name: 'Go-To-Market' },
      { code: '03E', name: 'Business Consultancy' },
      { code: '03F', name: 'Retention Systems' },
    ],
  },
];

app.get('/api/services', (req, res) => {
  res.json({ success: true, data: SERVICES });
});

app.get('/api/services/:id', (req, res) => {
  const service = SERVICES.find((s) => s.id === req.params.id);
  if (!service) {
    return res.status(404).json({ success: false, error: 'Service domain not found.' });
  }
  res.json({ success: true, data: service });
});

// ─── API: Contact / Inquiries ─────────────────────────────────────────────────

// Validate a contact submission
function validateInquiry(body) {
  const errors = {};

  if (!body.name || String(body.name).trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!body.email || !emailRe.test(String(body.email).trim())) {
    errors.email = 'A valid email address is required.';
  }

  const validTypes = [
    'Digital Ecosystem',
    'Brand Architecture',
    'Product Design',
    'Scalable Dev',
    'Editorial Design',
    'Strategic Consulting',
  ];
  if (!body.projectType || !validTypes.includes(body.projectType)) {
    errors.projectType = `Project type must be one of: ${validTypes.join(', ')}.`;
  }

  if (!body.brief || String(body.brief).trim().length < 10) {
    errors.brief = 'Brief must be at least 10 characters.';
  }

  return errors;
}

// POST /api/contact — submit a new inquiry
app.post('/api/contact', (req, res) => {
  const errors = validateInquiry(req.body);

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({ success: false, errors });
  }

  const inquiries = readInquiries();

  const entry = {
    id: `INQ-${Date.now()}`,
    name: String(req.body.name).trim(),
    email: String(req.body.email).trim().toLowerCase(),
    projectType: req.body.projectType,
    brief: String(req.body.brief).trim(),
    submittedAt: new Date().toISOString(),
    status: 'new',
  };

  inquiries.push(entry);
  writeInquiries(inquiries);

  console.log(`[INQUIRY] ${entry.id} — ${entry.name} <${entry.email}> — ${entry.projectType}`);

  res.status(201).json({
    success: true,
    message: 'Inquiry received. We will be in contact shortly.',
    data: { id: entry.id, submittedAt: entry.submittedAt },
  });
});

// GET /api/inquiries — list all submitted inquiries
app.get('/api/inquiries', (req, res) => {
  const inquiries = readInquiries();

  // Optional status filter: ?status=new
  const { status } = req.query;
  const filtered = status
    ? inquiries.filter((i) => i.status === status)
    : inquiries;

  res.json({
    success: true,
    total: filtered.length,
    data: filtered,
  });
});

// GET /api/inquiries/:id — get a single inquiry
app.get('/api/inquiries/:id', (req, res) => {
  const inquiries = readInquiries();
  const entry = inquiries.find((i) => i.id === req.params.id);

  if (!entry) {
    return res.status(404).json({ success: false, error: 'Inquiry not found.' });
  }

  res.json({ success: true, data: entry });
});

// PATCH /api/inquiries/:id — update status
app.patch('/api/inquiries/:id', (req, res) => {
  const validStatuses = ['new', 'in-review', 'replied', 'closed'];
  const { status } = req.body;

  if (!status || !validStatuses.includes(status)) {
    return res.status(422).json({
      success: false,
      error: `Status must be one of: ${validStatuses.join(', ')}.`,
    });
  }

  const inquiries = readInquiries();
  const index = inquiries.findIndex((i) => i.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Inquiry not found.' });
  }

  inquiries[index].status = status;
  inquiries[index].updatedAt = new Date().toISOString();
  writeInquiries(inquiries);

  res.json({ success: true, data: inquiries[index] });
});

// DELETE /api/inquiries/:id — remove an inquiry
app.delete('/api/inquiries/:id', (req, res) => {
  const inquiries = readInquiries();
  const index = inquiries.findIndex((i) => i.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Inquiry not found.' });
  }

  const [removed] = inquiries.splice(index, 1);
  writeInquiries(inquiries);

  res.json({ success: true, data: removed });
});

// ─── 404 catch-all ────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, error: `Route ${req.method} ${req.path} not found.` });
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('  ███╗   ███╗██╗██████╗  █████╗  ██████╗');
  console.log('  ████╗ ████║██║██╔══██╗██╔══██╗██╔════╝');
  console.log('  ██╔████╔██║██║██████╔╝███████║██║     ');
  console.log('  ██║╚██╔╝██║██║██╔══██╗██╔══██║██║     ');
  console.log('  ██║ ╚═╝ ██║██║██║  ██║██║  ██║╚██████╗');
  console.log('  ╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝');
  console.log('');
  console.log(`  Server running at  → http://localhost:${PORT}`);
  console.log('');
  console.log('  Pages');
  console.log(`    /                  → Homepage (desktop)`);
  console.log(`    /mobile            → Homepage (mobile)`);
  console.log(`    /contact           → Contact (desktop)`);
  console.log(`    /contact-mobile    → Contact (mobile)`);
  console.log(`    /services          → Services (desktop)`);
  console.log(`    /services-mobile   → Services (mobile)`);
  console.log('');
  console.log('  API');
  console.log(`    GET  /api/health`);
  console.log(`    GET  /api/services`);
  console.log(`    GET  /api/services/:id`);
  console.log(`    POST /api/contact`);
  console.log(`    GET  /api/inquiries`);
  console.log(`    GET  /api/inquiries/:id`);
  console.log(`    PATCH /api/inquiries/:id`);
  console.log(`    DELETE /api/inquiries/:id`);
  console.log('');
});
