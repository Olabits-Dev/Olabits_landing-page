export const profile = {
  name: "Samuel Olawale Atilola (Olabits-Dev)",
  role: "Web Developer",
  githubUsername: "Olabits-Dev",
  githubUrl: "https://github.com/Olabits-Dev",
  intro:
    "I am a Next.js developer who enjoys building polished web experiences that feel simple, useful, and modern.",
  welcome:
    "Welcome to my personal website where I share my projects, learning journey, technical growth, and ideas in tech.",
  interests: [
    "Frontend development",
    "Backend development",
    "UI design systems",
    "Technical writing",
    "Building useful web products",
  ],
  background:
    "I am from Nigeria and I study software development while continuously improving my frontend and full-stack skills through projects.",
  goals:
    "My goal in tech is to become a strong full-stack engineer, build products that solve real problems, and create a portfolio that opens doors to internships and global opportunities.",
  hobbies: [
    "Reading",
    "Watching football",
    "Playing football",
    "Forex trading",
    "Learning new tools",
    "Exploring design ideas",
  ],
};

export const skills = [
  {
    name: "HTML",
    level: "Advanced",
    description: "Semantic markup, accessible structure, and well-organized page layouts.",
  },
  {
    name: "CSS",
    level: "Advanced",
    description: "Responsive layouts, animations, and component-focused styling with CSS Modules.",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    description: "Interactive interfaces, API consumption, and modern JavaScript patterns.",
  },
  {
    name: "React",
    level: "Intermediate",
    description: "Reusable UI components, state management, and clean frontend architecture.",
  },
  {
    name: "Next.js",
    level: "Intermediate",
    description: "Routing, App Router structure, dynamic pages, and API routes.",
  },
  {
    name: "Node.js",
    level: "Intermediate",
    description: "Building backend logic, handling requests, and creating server-side functionality.",
  },
  {
    name: "Express.js",
    level: "Intermediate",
    description: "Creating APIs, structuring backend routes, and managing application flow on the server.",
  },
  {
    name: "REST APIs",
    level: "Intermediate",
    description: "Designing and connecting frontend applications to backend services and endpoints.",
  },
  {
    name: "Git & GitHub",
    level: "Intermediate",
    description: "Version control, collaboration, and project publishing workflows.",
  },
];

export const projectShowcase = {
  "job-alert-bot": {
    title: "AI Job Hunter Bot",
    category: "Automation Tool",
    featured: true,
    status: "GitHub Actions workflow",
    summary:
      "A serverless job discovery assistant that scans job sources, ranks matching roles, and emails a daily report with application-ready leads.",
    highlights: [
      "Scans RemoteOK, RSS feeds, and startup ATS boards like Greenhouse, Lever, and Ashby.",
      "Supports multiple candidate profiles for different job-search goals.",
      "Uses Resend to deliver daily reports and optional application emails.",
    ],
    stack: ["Node.js", "GitHub Actions", "Resend", "RSS Feeds"],
  },
  "Olabits_landing-page": {
    title: "Olabits Portfolio and Blog",
    category: "Portfolio Website",
    featured: true,
    status: "Next.js app",
    summary:
      "A personal website that combines an introduction page, skills section, blog posts, and project showcase in one responsive experience.",
    highlights: [
      "Built with the Next.js App Router and reusable UI components.",
      "Includes blog routes, a contact page, and API-powered features.",
      "Designed to grow from a learning project into a portfolio-ready site.",
    ],
    stack: ["Next.js", "React", "CSS Modules"],
  },
  "Mt5-Automated-Landing-Page": {
    title: "MT5 Automated Landing Page",
    category: "Landing Page",
    featured: false,
    status: "Marketing website concept",
    summary:
      "A product marketing landing page concept for an MT5 automation service, focused on clear calls to action and a conversion-friendly layout.",
    highlights: [
      "Structured as a focused landing page for a trading-related product.",
      "Built to communicate product value quickly with a frontend-first approach.",
    ],
    stack: ["React", "Vite", "CSS"],
  },
  "Mt5-SaaS-Automated-Dashboard": {
    title: "MT5 SaaS Automated Dashboard",
    category: "Dashboard App",
    featured: true,
    status: "MVP dashboard",
    summary:
      "An MVP dashboard for an MT5 SaaS workflow, built to manage automation features and present product data inside an app-style interface.",
    highlights: [
      "Structured as a dashboard product rather than a static website.",
      "Separates app experience from the public-facing landing page.",
      "Represents a more advanced build in the SaaS product direction.",
    ],
    stack: ["JavaScript", "React", "Dashboard UI"],
  },
  Expensetracker_refilne: {
    title: "Expense Tracker Rebuild",
    category: "Productivity App",
    featured: true,
    status: "React app",
    summary:
      "A rebuilt expense tracker app with create, edit, delete, category filtering, monthly summaries, and persistent local storage.",
    highlights: [
      "Tracks expenses with category filtering and breakdown views.",
      "Includes monthly summaries for a more useful reporting experience.",
      "Stores user data locally for a practical offline-friendly workflow.",
    ],
    stack: ["React", "Vite", "Local Storage"],
  },
  olabits_jobalert: {
    title: "Olabits Job Alert",
    category: "Automation Tool",
    featured: false,
    status: "Early automation experiment",
    summary:
      "An earlier project exploring automated job discovery workflows and how to package those ideas into a practical tool.",
    highlights: [
      "Explores the job-alert idea before the more advanced bot workflow.",
      "Shows iteration across related automation projects in the portfolio.",
    ],
    stack: ["JavaScript", "Automation"],
  },
  "saas-landing-page": {
    title: "SaaS Landing Page",
    category: "Landing Page",
    featured: false,
    status: "Frontend concept",
    summary:
      "A responsive SaaS landing page focused on product messaging, structure, and frontend presentation for a software business idea.",
    highlights: [
      "Explores hero sections, feature blocks, and conversion-focused layout design.",
      "Useful as a presentation project for frontend styling and responsive structure.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
  Res_landing_page: {
    title: "Responsive Landing Page",
    category: "Landing Page",
    featured: false,
    status: "Responsive UI project",
    summary:
      "A responsive landing page project focused on layout structure, mobile adaptation, and clean presentation for a web product.",
    highlights: [
      "Shows responsive frontend layout work across screen sizes.",
      "Highlights interface structure and visual presentation practice.",
    ],
    stack: ["JavaScript", "CSS", "Responsive Design"],
  },
};

export const blogPosts = [
  {
    slug: "building-strong-structure-with-html",
    title: "Building Strong Structure With HTML",
    date: "2026-03-08",
    category: "HTML",
    summary:
      "Why I see HTML as the foundation for clean structure, accessibility, and better frontend work.",
    content: [
      "HTML is one of the first skills I rely on whenever I start a project. Before styling or interactivity, I want the structure of the page to make sense and communicate clearly.",
      "Good HTML helps me build layouts that are easier to read, easier to maintain, and more accessible to users. It also gives the rest of the stack a stronger base to work from.",
      "As I keep improving in frontend development, I see semantic HTML as more than just markup. It is part of building professional websites that feel thoughtful and well organized.",
    ],
  },
  {
    slug: "why-css-matters-in-my-projects",
    title: "Why CSS Matters In My Projects",
    date: "2026-03-09",
    category: "CSS",
    summary:
      "How CSS helps me turn a simple layout into a polished, responsive, and more enjoyable user experience.",
    content: [
      "CSS is the skill that helps me shape how a project feels. It is where spacing, color, hierarchy, responsiveness, and visual identity start to come together.",
      "I enjoy using CSS to make interfaces cleaner and easier to use across different screen sizes. Small improvements in layout and styling can make a project feel far more complete.",
      "As I build more projects, CSS continues to teach me that design is not just about appearance. It is also about clarity, usability, and helping people move through a page with ease.",
    ],
  },
  {
    slug: "growing-with-javascript",
    title: "Growing With JavaScript",
    date: "2026-03-10",
    category: "JavaScript",
    summary:
      "A look at how JavaScript helps me build interactivity, logic, and real functionality into my projects.",
    content: [
      "JavaScript is where my projects start to feel alive. It allows me to move beyond static pages and create interactions that respond to users in meaningful ways.",
      "From handling events to working with APIs, JavaScript has helped me understand how frontend logic connects to real application behavior. It keeps teaching me how to think more clearly as a developer.",
      "The more I use JavaScript, the more confident I become in building features that are useful, practical, and closer to what real users expect from modern web apps.",
    ],
  },
  {
    slug: "building-with-react-components",
    title: "Building With React Components",
    date: "2026-03-11",
    category: "React",
    summary:
      "Why React has been important in helping me think in components and build cleaner user interfaces.",
    content: [
      "React changed the way I think about building interfaces. Instead of repeating the same blocks of code, I can create reusable components and keep my projects more organized.",
      "That approach helps me move faster and maintain consistency across different sections of an application. It also makes updates easier whenever I want to improve the design or behavior.",
      "For me, React is not only a library for building UI. It is also a way of developing with more structure, more reuse, and a better mindset for scaling projects over time.",
    ],
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started With Next.js",
    date: "2026-03-12",
    category: "Next.js",
    summary:
      "Why Next.js stands out to me as a framework for building modern React applications with structure.",
    content: [
      "Next.js gives developers a strong foundation for building fast and structured web applications. It provides file-based routing, server rendering options, and a clean developer experience out of the box.",
      "One of the biggest advantages of Next.js is that it helps you move from simple pages to production-ready applications without rebuilding your project structure from scratch. As your app grows, routing, layouts, APIs, and metadata are already part of the framework.",
      "For me, learning Next.js feels practical because it reflects how modern React apps are built in the real world. It makes it easier to organize pages, reuse components, and think about user experience from the start.",
    ],
  },
  {
    slug: "learning-backend-development-with-nodejs",
    title: "Learning Backend Development With Node.js",
    date: "2026-03-13",
    category: "Node.js",
    summary:
      "How Node.js is helping me grow from frontend projects into backend thinking and server-side logic.",
    content: [
      "Node.js has been an important step in my backend journey because it gives me a way to write server-side logic using JavaScript, a language I already use on the frontend.",
      "It helps me understand how requests are handled, how data moves through an application, and how backend systems support what users see on the screen.",
      "As I continue learning full-stack development, Node.js gives me confidence that I can build not only interfaces, but also the server-side features behind them.",
    ],
  },
  {
    slug: "understanding-apis-with-express",
    title: "Understanding APIs With Express.js",
    date: "2026-03-14",
    category: "Express.js",
    summary:
      "Why Express.js has been useful for learning routes, APIs, and backend structure in a simple way.",
    content: [
      "Express.js makes backend development feel more approachable to me. It gives structure to routing and request handling without making the setup unnecessarily complicated.",
      "Using Express helps me understand how to build APIs, organize endpoints, and create logic that supports frontend applications. It has made backend concepts feel more practical and easier to apply.",
      "I see Express.js as one of the tools helping me connect my frontend knowledge with backend skills, which is an important part of becoming a stronger full-stack developer.",
    ],
  },
  {
    slug: "how-i-think-about-rest-apis",
    title: "How I Think About REST APIs",
    date: "2026-03-15",
    category: "REST APIs",
    summary:
      "A simple look at why REST APIs matter in the way frontend and backend applications communicate.",
    content: [
      "REST APIs are one of the clearest ways I understand communication between the frontend and the backend. They help different parts of an application exchange data in a structured way.",
      "Learning REST APIs has helped me think more carefully about requests, responses, routes, and how information should move through a product. That knowledge is important for building more useful apps.",
      "As I keep growing in backend and full-stack development, understanding REST APIs gives me a stronger foundation for connecting interfaces to real services and data.",
    ],
  },
  {
    slug: "why-git-and-github-are-part-of-my-workflow",
    title: "Why Git And GitHub Are Part Of My Workflow",
    date: "2026-03-16",
    category: "Git & GitHub",
    summary:
      "How Git and GitHub help me manage progress, track changes, and build projects more professionally.",
    content: [
      "Git and GitHub are important parts of how I work because they help me track changes, manage updates, and keep a clear history of what I am building.",
      "They also make collaboration easier and encourage better habits when working on real projects. Even as a solo developer, version control helps me stay organized and confident when making improvements.",
      "For me, Git and GitHub are not just tools for storing code. They are part of building and presenting projects in a more professional and reliable way.",
    ],
  },
];
