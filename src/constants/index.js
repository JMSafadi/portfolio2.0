import {
  mobile,
  backend,
  // creator,
  web,
  // javascript,
  // typescript,
  // html,
  // css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  // git,
  // figma,
  // docker,
  wordpress,
  epb,
  sbx,
  // threejs,
  pistacho,
  promptastic,
  batatabit,
  helix,
  clothify,
  pokedux,
  githubsearcher
} from "../assets"

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

]

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
// ]

const experiences = [
  {
    title: "Wordpress Developer",
    company_name: "Freelance",
    icon: wordpress,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web site using Wordpress and Divi Builder and other related technologies.",
      "Constant communication with the client in order to best meet the design requirements and any possible enhancements.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Debt Collector",
    company_name: "Estudio Palmero de Belizan",
    icon: epb,
    iconBg: "#fff",
    date: "August 2019 - Septembre 2021",
    points: [
      "Managing high-debt collections for banks, companies, and SMEs.",
      "Locating and negotiating with debtors.",
      "Meeting monthly objectives.",
    ],
  },
  {
    title: "Barista",
    company_name: "Starbucks Coffee",
    icon: sbx,
    iconBg: "#383E56",
    date: "June 2018 - August 2019",
    points: [
      "Assist and connect with the customer, store opening and closing, stock control.",
      "Manage cash register and closure.",
      "Prepare beverages and orders.",
    ],
  },
]

// const testimonials = [
//   {
//     testimonial:"",
//     name: "",
//     designation: "",
//     company: "",
//     image: "",
//   }
// ]

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
        name: "jQuery",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    image: pistacho,
    source_code_link: "https://github.com/",
    deploy_link: "https://www.bypistacho.com/",
  },
  {
    name: "Promptastic",
    description:
      "Discover and share captivating prompts to enhance the power of IA on this new social network. Join a passionate community where you can uncover unlimited inspiration, exchange creative ideas!",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "nextAuth",
        color: "yellow-text-gradient",
      },
    ],
    image: promptastic,
    source_code_link: "https://github.com/JMSafadi/promptastic",
    deploy_link: "https://promptastic-nine.vercel.app/",
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
        color: "yellow-text-gradient",
      },
    ],
    image: batatabit,
    source_code_link: "https://github.com/JMSafadi/crypto-exchange-batatabit",
    deploy_link: "https://batatabitcrypto.web.app/",
  },
  {
    name: "Clothify",
    description:
      "Clothify is an e-commerce website built with React and styled with TailwindCSS. You can add as many items as you want to your shopping cart and view each product in detail on a separate route. It is responsive for any device.",
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
    source_code_link: "https://github.com/JMSafadi/clothify",
    deploy_link: "https://shop-clothify.web.app/",
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
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "webpack",
        color: "pink-text-gradient",
      },
    ],
    image: githubsearcher,
    source_code_link: "https://github.com/JMSafadi/gh-users-searcher",
    deploy_link: "https://jmsafadi.github.io/gh-users-searcher/",
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
    source_code_link: "https://github.com/JMSafadi/helix-eye",
    deploy_link: "https://helix-eye.web.app/",
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
        color: "yellow-text-gradient",
      },
    ],
    image: pokedux,
    source_code_link: "https://github.com/JMSafadi/pokedux",
    deploy_link: "https://pokedux-app.web.app/",
  },
]

export {
  services, 
  experiences, 
  projects 
}