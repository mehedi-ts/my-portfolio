export const mockProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    shortDescription: "A full-stack e-commerce platform.",
    fullDescription: "Built with Next.js and Stripe for payments.",
    category: "Full Stack",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
    image: "/placeholder-1.jpg",
    gallery: [],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    displayOrder: 1,
    status: "Completed",
    startDate: "2023-01-01",
    completionDate: "2023-03-01",
    role: "Lead Developer",
    challenges: "Handling complex payment flows.",
    solutions: "Implemented Stripe webhooks.",
    keyFeatures: ["Cart", "Checkout", "Admin Dashboard"],
    seoTitle: "E-Commerce Platform by Mehedi",
    seoDescription: "A modern full-stack e-commerce solution."
  },
  {
    id: "2",
    title: "SaaS Dashboard",
    slug: "saas-dashboard",
    shortDescription: "A scalable B2B SaaS dashboard.",
    fullDescription: "Built to handle thousands of concurrent users.",
    category: "Frontend",
    technologies: ["React", "Redux", "Material UI"],
    image: "/placeholder-2.jpg",
    gallery: [],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    displayOrder: 2,
    status: "In Progress",
    startDate: "2023-06-01",
    completionDate: "",
    role: "Frontend Engineer",
    challenges: "State management at scale.",
    solutions: "Used Redux Toolkit with RTK Query.",
    keyFeatures: ["Analytics", "User Management"],
    seoTitle: "SaaS Dashboard Case Study",
    seoDescription: "Case study for a scalable B2B SaaS dashboard."
  }
];

export const projectCategories = [
  "Frontend",
  "Backend",
  "Full Stack",
  "Mobile App",
  "UI/UX Design"
];

export const projectStatuses = [
  "Completed",
  "In Progress",
  "Planned",
  "Archived"
];
