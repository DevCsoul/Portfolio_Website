import niaRepairhub from '../assets/projects/nia_repairhub.png'
import rphDrughouse from '../assets/projects/RPH.jpg'
import airtechno from '../assets/projects/Airtechno.png'
import alangAlang from '../assets/projects/Alang-alang.jpg'

export type ProjectEntry = {
  id: string
  title: string
  type: string
  dates: string
  image?: string
  summary: string
  description: string[]
  tags: string[]
  role: string
  initials: string
  color: string
}

// Ordered most recent to oldest — home page shows the first 3.
export const projects: ProjectEntry[] = [
  {
    id: 'rph-drughouse',
    title: 'RPh Drughouse',
    type: 'Freelance',
    dates: 'NOV 2025 - JAN 2026',
    initials: 'RP',
    color: '#22c55e',
    image: rphDrughouse,
    role: 'Frontend & Support Developer',
    summary:
      'A high-conversion landing page and modular CMS for a nationwide community pharmacy brand.',
    description: [
      'RPh Drughouse needed a public-facing site that felt trustworthy at a glance and a way for non-technical staff to keep content current without calling a developer every time. I designed and built a landing page that leads with the brand promise of affordable, accessible medicine, paired with clear pathways to branch locations and services.',
      'The CMS is built from modular, reusable React.js components, so staff can update branches, health tips, and testimonials directly, reducing developer dependency for routine content changes.',
      'I also implemented on-page SEO fundamentals, optimized metadata, clean site structure, and internal linking, to improve visibility for franchise and local search audiences, and tuned the page for smooth performance across mobile and desktop.',
    ],
    tags: ['React.js', 'CMS', 'SEO Optimization', 'Responsive Design'],
  },
  {
    id: 'nia-repairhub',
    title: 'NIA RepairHub',
    type: 'Internship',
    dates: 'JAN 2026 - MAR 2026',
    initials: 'NR',
    color: '#f59e0b',
    image: niaRepairhub,
    role: 'Full-Stack Developer',
    summary:
      'A full-stack ticketing system that replaced a manual repair-request process with real-time tracking and instant notifications.',
    description: [
      "NIA RepairHub is an internal ticketing platform built for NIA to manage equipment repair inquiries end to end, from submission to resolution. Employees raise a ticket, personnel accept and act on it, and everyone can track status through a single dashboard, replacing what used to be a manual, paper-heavy process.",
      'I built and deployed the full stack using React.js, Express.js, and MongoDB, designing the ticket lifecycle (pending, accepted, resolved) along with personnel management and employee syncing so records stay accurate without manual re-entry.',
      'On top of the core system, I engineered a real-time notification and chat layer using WebSockets and JWT authentication, letting personnel and employees communicate instantly on a ticket without refreshing the page, which meaningfully cut down average response time.',
    ],
    tags: ['React.js', 'Express.js', 'MongoDB', 'WebSockets', 'JWT Authentication'],
  },
  {
    id: 'smarthr',
    title: 'SmartHR',
    type: 'Capstone Project',
    dates: 'NOV 2025 - JAN 2026',
    initials: 'SH',
    color: '#8b5cf6',
    role: 'Frontend & Support Developer',
    summary:
      'An HR and payroll management system with automated salary computation and IP-based attendance tracking.',
    description: [
      'SmartHR is an HR and payroll management system built to eliminate the manual spreadsheet work most small teams rely on. It automates salary, tax, and deduction calculations, removing a common source of payroll errors.',
      'The attendance side uses IP-based time tracking paired with automated leave management, so records stay accurate without extra admin overhead.',
      'I built the responsive React.js admin dashboard, translating workforce data (attendance, leave, payroll) into real-time metrics and dynamic, easy-to-scan UI components for HR staff.',
    ],
    tags: ['React.js', 'Payroll Automation', 'HR Dashboard', 'Real-time Data'],
  },
  {
    id: 'alang-alang',
    title: 'Alang-alang E-Governance',
    type: 'Freelance',
    dates: 'AUG 2025 - NOV 2025',
    initials: 'AA',
    color: '#14b8a6',
    image: alangAlang,
    role: 'Frontend & Support Developer',
    summary:
      "A digital feedback platform for the local government of Alang-alang, replacing paper surveys with real-time reporting.",
    description: [
      "Alang-alang's feedback process used to run entirely on paper surveys, which made it slow for residents and even slower for officials trying to act on the data. I built a platform that digitizes the whole loop: residents submit concerns and take surveys, officials review tickets and analytics from a single dashboard.",
      'The UI was designed to be intuitive and mobile-accessible first, since most residents would be reporting issues from their phones rather than visiting the municipal hall in person, which measurably improved participation.',
      'On the backend of the experience, I streamlined reporting for local officials with real-time data collection and sentiment analysis, giving them instant, data-driven visibility into community concerns instead of waiting on manually tallied paperwork.',
    ],
    tags: ['Real-time Data', 'Sentiment Analysis', 'Mobile UI', 'Reporting'],
  },
  {
    id: 'airtechno',
    title: 'Airtechno A/C Hub',
    type: 'Freelance',
    dates: 'APR 2025 - JUL 2025',
    initials: 'AT',
    color: '#38bdf8',
    image: airtechno,
    role: 'Frontend & Support Developer',
    summary:
      'A branded landing page and customer loyalty points system for a commercial and residential air-conditioning service.',
    description: [
      "Airtechno Airconditioning Hub wanted two things: a landing page that felt as established as their track record servicing homes and businesses, and a way to reward repeat customers. I built a high-performance landing page with a dynamic product catalog and testimonial section to reinforce brand authority.",
      'Alongside it, I architected a customer loyalty points system that integrates third-party APIs with physical loyalty cards, automating reward tracking and giving the business a concrete lever to increase repeat engagement.',
      'Performance mattered here since most customers land on mobile: I used lazy loading, asset minimization, and responsive design patterns to keep Core Web Vitals healthy across devices and browsers.',
    ],
    tags: ['API Integration', 'Loyalty System', 'Performance Optimization', 'Responsive Design'],
  },
]