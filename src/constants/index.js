import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  wordpress,
  threejs,
  pistacho,
  batatabit,
  helix,
  clothify,
  pokedux,
  githubsearcher
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Learning ability",
    description: "Technology is constantly evolving. My passion and curiosity for development drives me to adapt to those changes that keep me up-to-date with the most required technologies. I participate in various communities where I have found people willing to teach without any expectation of reward.",
    icon: web,
  },
  {
    title: "Teamwork",
    description: "In my previous jobs, I learned the importance of working in a team. This allowed us not only to share ideas and creative solutions, but also to work more efficiently to achieve our goals. I always try to communicate in the most effective way possible, as I consider it essential in a team.",
    icon: mobile,
  },
  {
    title: "Dedication and proactivity",
    description: "In my work as a developer, I aim to anticipate problems and take measures to prevent or solve them before they become major obstacles. When I set a goal, I focus on putting in the necessary effort to achieve it.",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Wordpress Developer",
    company_name: "Freelance",
    icon: wordpress,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web site using Wordpress and Divi Builder and other related technologies.",
      "Constant communication with the client in order to best meet the design requirements and any possible enhancements.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "By Pistacho",
    description:
      "This was my first freelance job. A website created with WordPress and Divi Builder for a product company. Based on the client's requirements, I am still providing maintenance and will add new features in the future.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "diviBuilder",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: pistacho,
    source_code_link: "https://github.com/",
  },
  {
    name: "Batatabit Crypto",
    description:
      "At Batatabit, you can find information about the top 50 cryptocurrencies by market capitalization. You can view their price, ranking, and 24-hour variation..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "restAPI",
        color: "pink-text-gradient",
      },
    ],
    image: batatabit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Clothify",
    description:
      "At Batatabit, you can find information about the top 50 cryptocurrencies by market capitalization. You can view their price, ranking, and 24-hour variation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: clothify,
    source_code_link: "https://github.com/",
  },
  {
    name: "GitHub Searcher",
    description:
      "Github profile finder developed with React. You can search for any user and their information. For example, description, number of repositories, followers, and following. I styled it with MaterialUI and consumed the Github Profiles API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styledComponents",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: githubsearcher,
    source_code_link: "https://github.com/",
  },
  {
    name: "Helix Eye",
    description:
      "At Helix Eye, you can see real information about outer space and its galaxies. The information is provided by NASA's official API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styledComponents",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: helix,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pokedux",
    description:
      "Using the pokeAPI, I created this React application where you can view 50 Pokemon, their types, and images. The global state of the application is managed with Redux. You can filter by name and choose your favorites.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "antDesing",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: pokedux,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };