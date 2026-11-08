export const EMAIL = 'moizimamburiro@gmail.com';

export function gmailUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to: EMAIL });
  if (subject) params.set('su', subject);
  if (body) params.set('body', body);
  return `https://mail.google.com/mail?${params.toString()}`;
}

type NavLink = { label: string; href: string };
type HeroButton = { label: string; href: string; variant: 'primary' | 'outline' };
type ProjectButton =
  | { label: string; kind: 'video'; videoId: string; embedUrl: string }
  | { label: string; kind: 'link'; href: string; external?: boolean }
  | { label: string; kind: 'mailto'; href: string };

type Project = {
  number: string;
  title: string;
  badge?: string;
  summary: string;
  problem: string;
  whatItDoes: string[];
  tags: string[];
  buttons: ProjectButton[];
  note?: string;
};

type Service = { title: string; text: string };
type SkillGroup = { label: string; items: string[] };

export const social: {
  email: string;
  github: string;
  linkedin: string;
  upwork: string;
  fiverr: string;
} = {
  email: EMAIL,
  github: 'https://github.com/moiz-imam-buriro',
  linkedin: '',
  upwork: '',
  fiverr: '',
};

export const nav: { name: string; links: NavLink[] } = {
  name: 'Moiz Imam',
  links: [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const hero: {
  label: string;
  heading: string;
  subtext: string;
  buttons: HeroButton[];
} = {
  label: 'Generative AI Engineer',
  heading: 'I build AI systems that answer questions from your data and watch over your websites.',
  subtext:
    'RAG assistants, text-to-SQL analysts and LangChain agents, built end to end: backend, database and interface. Based in Pakistan, working remotely.',
  buttons: [
    { label: 'View projects', href: '#projects', variant: 'primary' },
    { label: 'Contact me', href: '#contact', variant: 'outline' },
  ],
};

export const projects: {
  title: string;
  intro: string;
  items: Project[];
} = {
  title: 'Selected projects',
  intro: 'Three working systems, each built to solve a real business problem.',
  items: [
    {
      number: '01',
      title: 'MZI RAG System',
      summary:
        "A document assistant that lets employees get instant answers from their company's PDF files.",
      problem:
        'Employees waste time searching through long PDFs such as policies, manuals and handbooks.',
      whatItDoes: [
        'Business teams upload their PDF documents once',
        'Employees ask questions in plain language and get answers grounded in the uploaded files',
        'Similarity search finds the most relevant passages before the answer is written',
      ],
      tags: ['LangChain', 'Vector Database', 'Similarity Search', 'FastAPI', 'Python'],
      buttons: [
        { label: 'Watch demo', kind: 'video', videoId: 'iYCuOvJHc8w', embedUrl: 'https://www.youtube.com/embed/iYCuOvJHc8w' },
        { label: 'GitHub', kind: 'link', href: 'https://github.com/moiz-imam-buriro/mzi-rag-system' },
      ],
      note: 'A live version can be set up on request.',
    },
    {
      number: '02',
      title: 'MZI AI Data Analyst',
      summary:
        'Ask questions about your spreadsheets in plain English and get answers, tables and charts.',
      problem:
        'Business teams have data in CSV and Excel files but cannot write SQL to get answers from it.',
      whatItDoes: [
        'Upload CSV or Excel files, each stored as its own database table',
        'An LLM writes the SQL for the question and checks it is read-only before running it',
        'Results come back as a table, a chart and a short written summary',
      ],
      tags: ['FastAPI', 'PostgreSQL', 'LangChain', 'Text-to-SQL', 'Python'],
      buttons: [
        { label: 'Watch demo', kind: 'video', videoId: 'idlSsT0FuZI', embedUrl: 'https://www.youtube.com/embed/idlSsT0FuZI' },
        { label: 'GitHub', kind: 'link', href: 'https://github.com/moiz-imam-buriro/mzi-ai-data-analyst' },
      ],
      note: 'A live version can be set up on request.',
    },
    {
      number: '03',
      title: 'Website Monitor Agent',
      badge: 'Live',
      summary:
        'An AI agent that watches a live website, finds what went wrong and emails a clear report.',
      problem:
        'Site owners often learn about broken pages, failing APIs or missing images only after customers complain.',
      whatItDoes: [
        'Checks the website on a schedule for errors, failing APIs, offline images and broken routes',
        'Uses tools to investigate the cause, then writes a plain-language summary with suggestions',
        'Sends the report by email and runs on its own, with a dashboard to start, stop and change settings. It only monitors and never changes the website',
      ],
      tags: ['LangChain Agent', 'FastAPI', 'Docker', 'Email Alerts', 'Python'],
      buttons: [
        { label: 'Open live app', kind: 'link', href: 'https://website-monitor-agent-a2290.containers.snapdeploy.app/', external: true },
        {
          label: 'Request demo access',
          kind: 'mailto',
          href: `mailto:${EMAIL}?subject=Demo access request: Website Monitor Agent&body=Hi Moiz, I would like demo access to the Website Monitor Agent. My name: `,
        },
        { label: 'GitHub', kind: 'link', href: 'https://github.com/moiz-imam-buriro/website-monitor-agent' },
      ],
      note: 'The live app is private. Request access and I will send you a login.',
    },
  ],
};

export const services: {
  title: string;
  intro: string;
  items: Service[];
} = {
  title: 'What I can build for you',
  intro: 'I can also build a custom system around your specific problem.',
  items: [
    { title: 'RAG chatbots', text: 'Assistants that answer questions from your documents, with answers based on your own files.' },
    { title: 'Text-to-SQL assistants', text: 'Let your team ask questions about company data in plain English instead of writing queries.' },
    { title: 'LangChain agents', text: 'Agents that use tools to monitor, research or automate repetitive tasks.' },
    { title: 'LLM integration', text: 'Add language-model features to an existing website, app or internal tool.' },
  ],
};

export const skills: {
  title: string;
  groups: SkillGroup[];
} = {
  title: 'Skills and tools',
  groups: [
    { label: 'Generative AI', items: ['LangChain', 'RAG', 'Tool calling', 'Prompt design', 'Similarity search'] },
    { label: 'Machine learning', items: ['Python', 'Pandas', 'NumPy', 'Machine learning', 'Deep learning', 'NLP'] },
    { label: 'Backend and data', items: ['FastAPI', 'PostgreSQL', 'REST APIs'] },
    { label: 'Deployment', items: ['Docker', 'Git', 'GitHub'] },
  ],
};

export const about: {
  title: string;
  paragraphs: string[];
} = {
  title: 'About',
  paragraphs: [
    'I am an AI engineer based in Pakistan. I started with Python, machine learning and deep learning, then moved into generative AI, where I now build practical systems with LLMs: assistants that read documents, tools that turn questions into database queries, and agents that watch over live systems.',
    'I care about software that works reliably, so I build each project end to end, from the backend and database to the interface, and I write clear documentation for it.',
    'I am open to freelance projects and remote work.',
  ],
};

export const contact: {
  title: string;
  text: string;
  buttons: { label: string; kind: 'mailto' | 'link'; href: string }[];
} = {
  title: "Let's talk",
  text: 'Have a problem that AI could help with? Send me a short message and I will reply with how I would approach it.',
  buttons: [
    { label: 'Email me', kind: 'mailto', href: `mailto:${EMAIL}` },
    { label: 'GitHub', kind: 'link', href: 'https://github.com/moiz-imam-buriro' },
  ],
};
