/**
 * About Me page content (reference: jayantsharma.com/about-me)
 */

export const ABOUT_INTRO = {
  roleTags: [
    "Product Designer",
    "Web Designer",
    "Mobile Engineer",
    "Creative Developer",
  ],
  heading:
    "I craft digital experiences with a focus on simplicity and purpose.",
  bio: "I am a Senior Software Engineer & Product Designer based in Hanoi. With over 5 years of experience, I bridge the gap between design and engineering to build products that look great and work perfectly.",
  resumeUrl: "", // Tạm để trống, làm giao diện trước
  resumeCtaText: "Download Resume",
  moreAboutLabel: "More about me",
  moreAboutHref: "/#about", // anchor trên home
};

export const WORK_PROCESS = {
  sectionTitle: "How I work & what I believe",
  introSentence:
    "I'm most comfortable solving messy, high-stakes problems — where systems are layered, edge cases matter, and clarity directly affects trust, revenue, and user confidence.",
  ctaText: "Let's Chat",
  ctaHref: "/contact",
  steps: [
    {
      id: "strategy",
      title: "Ask first",
      subtitle: "Solve the right problems",
      label: "Strategy",
      description:
        "Before designing anything, we make sure we're solving the right problem. This phase may include: Product and business discovery, Market and competitor analysis, User understanding and pain-point mapping, Defining goals, constraints, and success metrics.",
      tagline: "The output is clarity.",
      image: "/images/aboutMe/question_mark.png",
    },
    {
      id: "design",
      title: "Design",
      subtitle: "Bring it to Life",
      label: "Design",
      description:
        "Once direction is clear, I move into problem-solving through design. This includes: User flows and information architecture, Wireframes, Interaction design, High-fidelity pixel-perfect UI, Prototypes that simulate real product behavior.",
      tagline:
        "Design decisions are always tied back to user needs and business goals.",
      image: "/images/aboutMe/mouse.png",
    },
    {
      id: "development",
      title: "Development Collaboration",
      subtitle: "Work with engineering",
      label: "Development Collaboration",
      description:
        "I work closely with engineering teams to ensure designs are built exactly as intended. Clear handoffs and documentation, Design QA during development and Front-end support for web projects when needed.",
      tagline:
        "Because I understand code, collaboration stays smooth and practical.",
      image: "/images/aboutMe/code.png",
    },
    {
      id: "qa",
      title: "Quality Assurance",
      subtitle: "Iterate with Confidence",
      label: "Quality Assurance",
      description:
        "Design doesn't stop at delivery. Regular check-ins and transparent progress, Feedback-driven iterations, Optional user testing with real customers and Refinement based on data and insights.",
      tagline: "The goal is confidence — for you and your users.",
      image: "/images/aboutMe/chat.png",
    },
  ],
};

/** Work Experience (nội dung từ CV, layout tham khảo jayantsharma) */
export const WORK_EXPERIENCE = [
  {
    id: "pila",
    title: "Full-stack Developer",
    company: "Pila",
    dateRange: "Oct 2025 - Present",
    description:
      "Own end-to-end development from API design and backend services to web and mobile UIs. Ship scalable features, reusable SDKs, and integrations; collaborate with product and design. Drive quality through code reviews, testing, and documentation.",
  },
  {
    id: "pvcombank",
    title: "Front-end Developer (Web & Mobile)",
    company: "PVComBank",
    dateRange: "Oct 2022 - Oct 2025",
    description:
      "Built and maintained customer-facing web applications and internal SDKs in a regulated banking environment. Delivered responsive, performant interfaces; worked closely with backend and QA to ensure reliability and security. Contributed to design-system adoption and cross-team front-end standards.",
  },
  {
    id: "siten-1",
    title: "Front-end Developer (Web & Mobile)",
    company: "Siten JSC",
    dateRange: "Mar 2021 - Sep 2022",
    description:
      "Established and evolved the React Native codebase for production mobile apps. Implemented new features, fixed bugs, and performed ongoing maintenance. Worked both independently and within agile teams, following defined processes and contributing to sprint planning and delivery.",
  },
  {
    id: "siten-2",
    title: "ReactJS, React-Native Intern",
    company: "Siten JSC",
    dateRange: "Dec 2020 - Mar 2021",
    description:
      "Gained hands-on experience with React and React Native through guided learning and real project work. Supported development and maintenance of existing applications, wrote components and assisted with testing and deployments under senior mentorship.",
  },
  {
    id: "ncc-soft",
    title: "Game Developer Intern",
    company: "NCC SOFT",
    dateRange: "Jan 2020 - Jun 2020",
    description:
      "Contributed to game development pipelines using Cocos Creator, Cocos2d-x, and Unity. Implemented gameplay mechanics, UI flows, and small features; participated in builds, testing, and iteration with the team.",
  },
];

/** Skills/Tools - assets từ public/images/techStack (marquee) */
export const TECH_STACK = [
  "/images/techStack/angular.svg",
  "/images/techStack/antdesign.svg",
  "/images/techStack/dart.svg",
  "/images/techStack/figma.svg",
  "/images/techStack/git.svg",
  "/images/techStack/jira.svg",
  "/images/techStack/js.svg",
  "/images/techStack/materialui.svg",
  "/images/techStack/mongodb.svg",
  "/images/techStack/mysql.svg",
  "/images/techStack/nextjs.svg",
  "/images/techStack/react.svg",
  "/images/techStack/slack.svg",
  "/images/techStack/swift.svg",
  "/images/techStack/tailwindcss.svg",
  "/images/techStack/ts.svg",
  "/images/techStack/wordpress.svg",
];

export const ABOUT_STATISTICS = [
  {
    id: "workfolio",
    value: 4,
    suffix: "+",
    label: "Years of designing digital products across web, apps & platforms.",
    image: "/images/aboutMe/star.png",
    imagePosition: "left" as const,
    accentBg: true,
  },
  {
    id: "experience",
    value: 5,
    suffix: "+",
    label: "Years of experience",
    image: "/images/aboutMe/keyboard.png",
    imagePosition: "left" as const,
  },
  {
    id: "freelance",
    value: 3,
    suffix: "+",
    label: "Years — Worked as freelance software engineer",
    image: "/images/services/mobile.png",
    imagePosition: "right" as const,
    imageOverflow: true,
  },
  {
    id: "projects",
    value: 20,
    suffix: "+",
    label: "Successfully completed projects",
    subLabel: "4.8 ratings",
    image: "/images/aboutMe/mouse.png",
    imagePosition: "right" as const,
    imageOverflow: true,
  },
];
