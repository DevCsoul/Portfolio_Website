export type ExperienceEntry = {
  id: string
  company: string
  initials: string
  type: string
  role: string
  dates: string
  description: string[]
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'nia-repairhub',
    company: 'NIA Repairhub',
    initials: 'NI',
    type: 'Internship',
    role: 'Full-Stack Developer',
    dates: 'JAN 2026 - MAR 2026',
    description: [
      'Built and deployed a full-stack ticketing system using React.js, Express.js, and MongoDB, replacing a manual process and reducing average service response time significantly.',
      'Engineered a real-time notification and chat system with WebSockets and JWT authentication, enabling instant communication without page refreshes.',
      'Developed and maintained a secure web-based platform with a MongoDB database backend, improving data retrieval performance.',
    ],
    tags: ['React.js', 'Express.js', 'MongoDB', 'WebSockets', 'JWT Authentication'],
  },
  {
    id: 'rph-drughouse',
    company: 'RPh Drughouse Landing Page & CMS',
    initials: 'RD',
    type: 'Freelance',
    role: 'Frontend & Support Developer',
    dates: 'NOV 2025 - JAN 2026',
    description: [
      'Built a modular, reusable CMS using React.js components, enabling non-technical staff to manage content independently.',
      'Designed a high-conversion landing page optimized for cross-device performance, ensuring a seamless user journey for mobile and desktop visitors.',
      'Implemented on-page SEO best practices including optimized metadata, site structure, and internal linking, improving search visibility.',
    ],
    tags: ['React.js', 'CMS', 'SEO Optimization', 'Responsive Design'],
  },
  {
    id: 'smarthr',
    company: 'SmartHR: HR and Payroll Management System',
    initials: 'SH',
    type: 'Capstone Project',
    role: 'Frontend & Support Developer',
    dates: 'NOV 2025 - JAN 2026',
    description: [
      'Designed and automated a web-based payroll module that calculates salaries, taxes, and deductions, eliminating manual calculation errors.',
      'Built a comprehensive HR dashboard featuring IP-based time tracking and automated leave management for high-accuracy attendance records.',
      'Developed a responsive React.js admin dashboard with real-time workforce metrics and dynamic data rendering.',
    ],
    tags: ['React.js', 'Payroll Automation', 'HR Dashboard', 'Real-time Data'],
  },
  {
    id: 'airtechno',
    company: 'Airtechno A/C Hub & Points System',
    initials: 'AA',
    type: 'Freelance',
    role: 'Frontend & Support Developer',
    dates: 'APR 2025 - JUL 2025',
    description: [
      'Architected a customer loyalty points system by integrating third-party APIs and physical card infrastructure, automating reward tracking.',
      'Developed a high-performance landing page featuring a dynamic product catalog and testimonial section.',
      'Optimized cross-device and cross-browser performance using lazy loading, asset minimization, and responsive design patterns, improving Core Web Vitals scores.',
    ],
    tags: ['API Integration', 'Loyalty System', 'Performance Optimization', 'Responsive Design'],
  },
  {
    id: 'alang-alang',
    company: 'Alang-alang Feedback System',
    initials: 'AF',
    type: 'Freelance',
    role: 'Frontend & Support Developer',
    dates: 'AUG 2025 - NOV 2025',
    description: [
      "Digitized the local government's feedback process, replacing paper-based surveys with real-time data collection and sentiment analysis.",
      'Improved citizen participation by designing an intuitive, mobile-accessible UI, allowing residents to file issues remotely.',
      'Streamlined provincial reporting for local officials, providing instant access to community feedback and data-driven insights.',
    ],
    tags: ['Real-time Data', 'Sentiment Analysis', 'Mobile UI', 'Reporting'],
  },
]

export const stack: string[] = [
  'TypeScript',
  'JavaScript',
  'React.js',
  'Next.js',
  'Vue.js',
  'Node.js',
  'Express.js',
  'Laravel',
  'MongoDB',
  'MySQL',
  'Tailwind CSS',
  'Git',
]

export type StackCategory = {
  label: string
  items: string[]
}

export const stackCategories: StackCategory[] = [
  {
    label: 'Frontend',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript (ES2015+)',
      'TypeScript',
      'React.js',
      'Next.js',
      'Vue.js',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'Electron.js'],
  },
  {
    label: 'Databases',
    items: ['MongoDB', 'MySQL'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'NPM', 'Vercel', 'Vite', 'Figma', 'Prettier', 'Adobe Photoshop'],
  },
  {
    label: 'Other',
    items: ['WebSockets', 'JWT Authentication', 'RESTful APIs', 'SEO Optimization', 'Responsive Design'],
  },
]