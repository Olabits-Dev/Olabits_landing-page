export const profile = {
  name: "Samuel Olawale Atilola (Olabits-Dev)",
  role: "Web Developer",
  intro:
    "I am a Next.js developer who enjoys building polished web experiences that feel simple, useful, and modern.",
  welcome:
    "Welcome to my personal blog project where I share my learning journey, technical growth, and ideas in tech.",
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

export const blogPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started With Next.js",
    date: "2026-03-10",
    category: "Next.js",
    summary:
      "A beginner-friendly look at why Next.js is useful for building modern React applications.",
    content: [
      "Next.js gives developers a strong foundation for building fast and structured web applications. It provides file-based routing, server rendering options, and a clean developer experience out of the box.",
      "One of the biggest advantages of Next.js is that it helps you move from simple pages to production-ready applications without rebuilding your project structure from scratch. As your app grows, routing, layouts, APIs, and metadata are already part of the framework.",
      "For me, learning Next.js feels practical because it reflects how modern React apps are built in the real world. It makes it easier to organize pages, reuse components, and think about user experience from the start.",
    ],
  },
  {
    slug: "why-css-modules-matter",
    title: "Why CSS Modules Matter",
    date: "2026-03-12",
    category: "CSS",
    summary:
      "How CSS Modules keep styles organized and prevent naming conflicts in growing projects.",
    content: [
      "As a project gets bigger, writing all styles in one file can quickly become difficult to manage. CSS Modules solve that by scoping styles to the component that uses them.",
      "This means you can create class names like card, title, or button without worrying that they will accidentally affect another page. It keeps styling predictable and easier to maintain.",
      "In a blog project like this one, CSS Modules also encourage cleaner structure. Each page or component can have its own stylesheet, which makes it easier to read, edit, and scale.",
    ],
  },
  {
    slug: "building-with-reusable-components",
    title: "Building With Reusable Components",
    date: "2026-03-15",
    category: "React",
    summary:
      "Reusable components make your UI consistent, faster to build, and easier to update later.",
    content: [
      "Reusable components are one of the strongest ideas in React. Instead of rewriting the same block of UI many times, you create one component and feed it different data.",
      "This improves consistency across the app because the same layout rules, spacing, and styling can be shared. It also saves time whenever you need to update the design.",
      "For a personal blog project, this matters a lot. Skills cards, blog cards, and navigation links are all better when they are built once and reused across the site.",
    ],
  },
];
