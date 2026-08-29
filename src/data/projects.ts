import niaRepairhub from '../assets/projects/nia_repairhub.png'
import rphDrughouse from '../assets/projects/RPH.jpg'
import airtechno from '../assets/projects/Airtechno.png'
import alangAlang from '../assets/projects/Alang-alang.jpg'

export type ProjectDetails = {
  introduction: string
  problem: string
  research: string[]
  process: string[]
}

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
  details: ProjectDetails
}

// Shared strap-line that anchors the Process step of every project's detail page.
export const processPrinciple =
  "Started with usability testing, found checkout friction, and redesigned the highest impact steps."

// Ordered most recent to oldest — home page shows the first 2.
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
      "A high-conversion landing page and modular CMS for a nationwide community pharmacy brand.",
    description: [
      "RPh Drughouse needed a public-facing site that felt trustworthy at a glance and a way for non-technical staff to keep content current without calling a developer every time. I designed and built a landing page that leads with the brand promise of affordable, accessible medicine, paired with clear pathways to branch locations and services.",
      "The CMS is built from modular, reusable React.js components, so staff can update branches, health tips, and testimonials directly, reducing developer dependency for routine content changes.",
      "I also implemented on-page SEO fundamentals, optimized metadata, clean site structure, and internal linking, to improve visibility for franchise and local search audiences, and tuned the page for smooth performance across mobile and desktop.",
    ],
    tags: ['React.js', 'CMS', 'SEO Optimization', 'Responsive Design'],
    details: {
      introduction:
        "RPh Drughouse is a nationwide community pharmacy brand that needed a public-facing site people could trust in seconds, plus a way for non-technical staff to keep it current without filing a ticket every time a branch or promo changed.",
      problem:
        "The brand had no consistent online presence: branch details went stale, health tips lived in scattered social posts, and every content update depended on a developer being available.",
      research: [
        "Audited existing branch pages and social posts to see which content actually got engagement versus what was ignored.",
        "Talked to front-desk staff about what customers ask for most: nearest branch, stock availability, and trust signals like licenses and pricing.",
        "Benchmarked competing pharmacy chains to see how they structured navigation between branches and services.",
      ],
      process: [
        "Mapped every piece of recurring content (branches, promos, testimonials) to a reusable component instead of a one-off page edit.",
        "Ran the landing page past three staff members with no design background to see where they got stuck updating it.",
        "Cut the CMS down to the fields staff actually touch monthly, removing everything that only existed for flexibility.",
      ],
    },
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
      "A full-stack ticketing system that replaced a manual repair-request process with real-time tracking and instant notifications.",
    description: [
      "NIA RepairHub is an internal ticketing platform built for NIA to manage equipment repair inquiries end to end, from submission to resolution. Employees raise a ticket, personnel accept and act on it, and everyone can track status through a single dashboard, replacing what used to be a manual, paper-heavy process.",
      "I built and deployed the full stack using React.js, Express.js, and MongoDB, designing the ticket lifecycle (pending, accepted, resolved) along with personnel management and employee syncing so records stay accurate without manual re-entry.",
      "On top of the core system, I engineered a real-time notification and chat layer using WebSockets and JWT authentication, letting personnel and employees communicate instantly on a ticket without refreshing the page, which meaningfully cut down average response time.",
    ],
    tags: ['React.js', 'Express.js', 'MongoDB', 'WebSockets', 'JWT Authentication'],
    details: {
      introduction:
        "NIA RepairHub replaces a manual, paper-heavy repair-request process with a single dashboard where employees log issues and repair personnel track them through to resolution.",
      problem:
        "Repair requests were logged on paper or in chat threads, so nobody had a reliable answer to who was handling a request or how long it had been open, and duplicate reports were common.",
      research: [
        "Shadowed the repair team for a week to trace how a request actually moved from report to fix.",
        "Interviewed employees about their biggest frustration: not the wait itself, but not knowing whether the request had even been seen.",
        "Reviewed old paper logs to define what statuses a ticket realistically needs, avoiding an overbuilt workflow.",
      ],
      process: [
        "Started with usability testing on a static ticket list and found personnel had no way to tell urgent tickets apart at a glance.",
        "Identified the notification gap as the highest-impact fix and layered in WebSockets so status changes appear without a page reload.",
        "Redesigned the ticket lifecycle down to three honest states (pending, accepted, resolved) instead of the six originally proposed.",
      ],
    },
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
      "An HR and payroll management system with automated salary computation and IP-based attendance tracking.",
    description: [
      "SmartHR is an HR and payroll management system built to eliminate the manual spreadsheet work most small teams rely on. It automates salary, tax, and deduction calculations, removing a common source of payroll errors.",
      "The attendance side uses IP-based time tracking paired with automated leave management, so records stay accurate without extra admin overhead.",
      "I built the responsive React.js admin dashboard, translating workforce data (attendance, leave, payroll) into real-time metrics and dynamic, easy-to-scan UI components for HR staff.",
    ],
    tags: ['React.js', 'Payroll Automation', 'HR Dashboard', 'Real-time Data'],
    details: {
      introduction:
        "SmartHR gives small teams an HR and payroll system that replaces the spreadsheet-and-manual-computation workflow most of them were still running on.",
      problem:
        "Payroll errors kept tracing back to manual computation and attendance edits made after the fact, with no single source of truth for either.",
      research: [
        "Reviewed a semester of past payroll spreadsheets to find where errors most often crept in.",
        "Interviewed HR staff about which attendance edge cases (late clock-ins, missed logs) caused the most back-and-forth.",
        "Compared IP-based tracking against biometric and manual sign-in to weigh accuracy against setup cost for a small team.",
      ],
      process: [
        "Started with usability testing on the manual entry flow and found attendance corrections were the single biggest source of delay before payroll could run.",
        "Prioritized automating salary, tax, and deduction computation first, since that carried the highest error cost of any step.",
        "Redesigned the attendance screen around exceptions (late, missing, disputed) instead of a flat daily log.",
      ],
    },
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
      "The UI was designed to be intuitive and mobile-accessible first, since most residents would be reporting issues from their phones rather than visiting the municipal hall in person, which measurably improved participation.",
      "On the backend of the experience, I streamlined reporting for local officials with real-time data collection and sentiment analysis, giving them instant, data-driven visibility into community concerns instead of waiting on manually tallied paperwork.",
    ],
    tags: ['Real-time Data', 'Sentiment Analysis', 'Mobile UI', 'Reporting'],
    details: {
      introduction:
        "Alang-alang's local government ran its entire feedback loop on paper surveys. This platform digitizes it end to end: residents report and respond, officials review and act, all from one dashboard.",
      problem:
        "Paper surveys meant weeks between a resident raising a concern and an official seeing it tallied, and low-effort reporting meant most concerns went unrecorded entirely.",
      research: [
        "Observed how residents currently filed complaints, mostly in person at the municipal hall during office hours.",
        "Talked to officials about how they used the tallied paper data, and found most of it went unread after the initial count.",
        "Confirmed most residents only had mobile access, which reframed the whole project as mobile-first, not desktop-first.",
      ],
      process: [
        "Started with usability testing on a desktop-first prototype and found residents abandoned it almost immediately on mobile.",
        "Found the report-submission form itself was the highest-friction step, so it was redesigned around large tap targets and minimal required fields.",
        "Added sentiment analysis to the officials' dashboard after testing showed raw ticket counts alone did not tell them which issues were escalating.",
      ],
    },
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
      "A branded landing page and customer loyalty points system for a commercial and residential air-conditioning service.",
    description: [
      "Airtechno Airconditioning Hub wanted two things: a landing page that felt as established as their track record servicing homes and businesses, and a way to reward repeat customers. I built a high-performance landing page with a dynamic product catalog and testimonial section to reinforce brand authority.",
      "Alongside it, I architected a customer loyalty points system that integrates third-party APIs with physical loyalty cards, automating reward tracking and giving the business a concrete lever to increase repeat engagement.",
      "Performance mattered here since most customers land on mobile: I used lazy loading, asset minimization, and responsive design patterns to keep Core Web Vitals healthy across devices and browsers.",
    ],
    tags: ['API Integration', 'Loyalty System', 'Performance Optimization', 'Responsive Design'],
    details: {
      introduction:
        "Airtechno needed a landing page that read as established as their service record, plus a loyalty system that gave repeat customers a real reason to come back.",
      problem:
        "The brand's online presence did not reflect its actual track record, and repeat customers had no visible reward for staying loyal beyond word of mouth.",
      research: [
        "Reviewed existing physical loyalty cards to understand how the business already tracked repeat customers offline.",
        "Checked page-load performance against competitors, since most traffic was already confirmed to be mobile.",
        "Surveyed which service categories customers asked about most, to prioritize the product catalog structure.",
      ],
      process: [
        "Started with usability testing on the initial catalog layout and found customers bounced before reaching pricing.",
        "Identified page weight as the highest-impact fix for mobile customers and redesigned image loading around lazy loading and asset minimization.",
        "Simplified the loyalty flow to mirror the physical card customers already understood, instead of introducing a new mental model.",
      ],
    },
  },
]