import {
  AITradingAdvisor,
  DApp,
  GroupFinder,
  PortfolioWeb,
  css3,
  docker,
  gin,
  github,
  githubWhite,
  go,
  hku,
  html5,
  javascript,
  nextjs,
  nodejs,
  postgresql,
  python,
  reactIcon,
  tailwindcss,
  typescript,
} from "@/assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const tech = {
  frontend: [
    {
      id: "html5",
      name: "HTML 5",
      icon: html5,
    },
    {
      id: "css3",
      name: "CSS 3",
      icon: css3,
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: javascript,
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: typescript,
    },
    {
      id: "reactjs",
      name: "ReactJS",
      icon: reactIcon,
    },
    {
      id: "nextjs",
      name: "NextJS",
      icon: nextjs,
    },
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      icon: tailwindcss,
    },
  ],
  backend: [
    {
      id: "nodejs",
      name: "NodeJS",
      icon: nodejs,
    },
    {
      id: "golang",
      name: "GO",
      icon: go,
    },
    {
      id: "gin",
      name: "Gin",
      icon: gin,
    },
    {
      id: "python",
      name: "Python",
      icon: python,
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      icon: postgresql,
    },
  ],
  other: [
    {
      id: "docker",
      name: "Docker",
      icon: docker,
    },
    {
      id: "github",
      name: "Github",
      icon: github,
    },
  ],
};

const education = [
  {
    title: "MSc in Computer Science",
    college: "HKU",
    icon: hku,
    iconBg: "#FFFFFF",
    date: "September 2022 - August 2023",
    points: [
      "Developed mobile app using Java and Swift",
      "Studied the latest AI technologies, such as data mining, state-of-the-art LLMs, and model training methods",
      "Built a decentralized App using ReactJS, Solidity, and Ethereum",
      "Created a Python application to calculate the prices of different options",
    ],
  },
  {
    title: "BEng in Mechanical Engineering",
    college: "HKU",
    icon: hku,
    iconBg: "#FFFFFF",
    date: "September 2019 - July 2022",
    points: [
      "Participated in the development team of HKU Unmanned Aerial System Team",
      "Collaborated with cross-functional teams, including mechanical designers, electrical team, and other software developers, to create unmanned systems of the drone and ground vehicle",
      "Assisted in the development of the obstacle avoidance script using the A* search algorithm",
    ],
  },
];

const techColor = {
  reactjs: "text-sky-500",
  shadcnUI: "text-slate-400",
  tailwindcss: "text-sky-600",
  python: "text-blue-500",
  pytorch: "text-orange-400",
  pandas: "text-red-400",
  solidity: "text-gray-400",
  ethereum: "text-gray-600",
  java: "text-red-500",
  androidStudio: "text-green-500",
  go: "text-cyan-500",
  gin: "text-cyan-400",
  postgresql: "text-cyan-700",
};

const projects = [
  {
    name: "E-commercial Web Server",
    description:
      "An e-commerce backend server that handles authentication, menu updates, and customer orders.",
    tags: [
      {
        name: "go",
        color: techColor.go,
      },
      {
        name: "gin",
        color: techColor.gin,
      },
      {
        name: "postgresql",
        color: techColor.postgresql,
      },
    ],
    image: go,
    link: "https://github.com/toml5566/go_pos_backend",
    link_icon: githubWhite,
  },
  {
    name: "Portfolio Website",
    description: "A simple react portfolio website.",
    tags: [
      {
        name: "reactjs",
        color: techColor.reactjs,
      },
      {
        name: "shadcn/ui",
        color: techColor.shadcnUI,
      },
      {
        name: "tailwindcss",
        color: techColor.tailwindcss,
      },
    ],
    image: PortfolioWeb,
    link: "https://github.com/toml5566/portfolio_web",
    link_icon: githubWhite,
  },
  {
    name: "AI Trading Advisor",
    description:
      "A web-based platform that allows users to view the stock price trend prediction in the technology sector. The prediction is based on the related news articles.",
    tags: [
      {
        name: "python",
        color: techColor.python,
      },
      {
        name: "pytorch",
        color: techColor.pytorch,
      },
      {
        name: "pandas",
        color: techColor.pandas,
      },
    ],
    image: AITradingAdvisor,
    link: "",
    link_icon: "",
  },
  {
    name: "Group Finder",
    description:
      "An Android mobile app that allows users find groupmates, rate, and comment on their peers, and review other user evaluations to avoid free-riders.",
    tags: [
      {
        name: "java",
        color: techColor.java,
      },
      {
        name: "android studio",
        color: techColor.androidStudio,
      },
    ],
    image: GroupFinder,
    link: "https://github.com/joec07/mobile_app_project",
    link_icon: githubWhite,
  },
  {
    name: "Coin Flip Ethereum DApp",
    description:
      "A web application that enables users to play the coin flip game using ETH in their wallets. The winner can take all ETH. All transaction history can be viewed on the history page.",
    tags: [
      {
        name: "react",
        color: techColor.reactjs,
      },
      {
        name: "solidity",
        color: techColor.solidity,
      },
      {
        name: "ethereum",
        color: techColor.ethereum,
      },
    ],
    image: DApp,
    link: "",
    link_icon: "",
  },
];

export { navLinks, tech, education, projects };
