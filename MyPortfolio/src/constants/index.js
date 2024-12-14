import {
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  devfolio,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
} from "../assets";
import infodartLogo from "../assets/infodartLogo.png";
import oasisLogo from "../assets/OasisLogo.jfif";
import EimpleLabLogo from "../assets/EimpleLabLogo.jfif";
import vbuLogo from "../assets/vbuLogo.png";
import cnLogo from "../assets/cnLogo.jfif";
import udemy from "../assets/udemy.png";
import bsLogo from "../assets/bsLogo.jfif";
import EausetLogo from "../assets/EausetLogo.jfif";
import webChatConnect from "../assets/webChatConnect.jfif";
import albumn from "../assets/albumn.png";
import ELearningLogo from "../assets/ELearningLogo.jfif";
import Proshop from "../assets/proshop.png";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiJquery,
  SiPostman,
  SiGit,
  SiVite,
  SiFigma,
  SiStyledcomponents,
  SiSass,
  SiTypescript,
  SiAxios,
  SiReactrouter,
  SiWebpack,
  SiHtml5,
  SiFirebase,
} from "react-icons/si";

import { MdIntegrationInstructions } from "react-icons/md";

import { DiCss3 } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/1L_5S3q1akgX5OSDc7jkpcwS1fH2Sl7Tw/view?usp=sharing";
export const repoLink = "https://github.com/Shristy1908/ShristyProfile";

export const callToAction =
  "https://www.linkedin.com/in/shristy-kumari-244203217/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  // {
  //   id: "achievements",
  //   title: "Achievements",
  // },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certification",
    title: "Certification",
  },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: vbuLogo,
    title: "Vinoba Bhave University ,Hazaribagh, Jharkhand",
    degree: "Master Of Computer Application (MCA)",
    duration: "July 2021 - August 2023",
    content1: "CGPA - 8.04",
    // content2: "Minor: Information Technology",
  },
  {
    id: "education-2",
    icon: vbuLogo,
    title: "Vinoba Bhave University ,Hazaribagh, Jharkhand",
    degree: "Bachelor Of Computer Application (BCA)",
    duration: "July 2018 - September 2021",
    content1: "CGPA - 8.45",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: ethglobal,
    event: "",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "",
    article: "",
    project: "",
    youtube: "",
  },
  {
    id: "a-2",
    icon: polkadot,
    event: "Polkadot Hackathon: Europe Edition",
    position: "2nd Runner Up in the ink! Smart Contract Category",
    content1:
      "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
    content2: "",
    content3: "",
    github: "https://github.com/pranav2305/GreenTrust",
  },
  {
    id: "a-3",
    icon: lightspeed,
    event: "Warpspeed by Lightspeed",
    position: "1st Runner Up",
    content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
    content2: "Top 3 projects using Replit",
    content3: "1st Runner Up by Amazon Web Services (AWS)",
    article: "https://shorturl.at/fhjsT",
  },
  {
    id: "a-4",
    icon: dennisivy,
    event: "September Hackathon by Dennis Ivy",
    position: "Winner",
    content1:
      "Rated the best portfolio website among 450+ participants across the globe.",
    content2: "",
    content3: "",
    youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
    project: "https://parthmittal.netlify.app/",
  },
  {
    id: "a-5",
    icon: manipal,
    event: "Manipal Hackathon'22",
    position: "Consolation Prize",
    content1: "Top 10 among 500+ teams across India",
    content2:
      "Developed a cross-platform mobile application to address the problem of social cohesion.",
    content3: "",
    article: "https://shorturl.at/exEIQ",
  },
  {
    id: "a-6",
    icon: icon,
    event: "HackerRank",
    position: "Gold Badge",
    content1:
      "I've received a Gold Badge 🥇 and a 5-star rating in Problem Solving on HackerRank! ⭐⭐⭐⭐⭐",
    content2: "",
    content3: "",
    project: "",
  },
  {
    id: "a-7",
    icon: ethforall,
    event: "ETHForAll 2023",
    position: "Top 3 Superfluid Projects",
    content1:
      "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
    content2: "",
    content3: "",
    project: "https://devfolio.co/projects/green-trust-ed14",
  },
];

export const skills = [
  {
    title: "Frontend",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "React.Js",
      },
      {
        id: "f-2",
        icon: SiRedux,
        name: "Redux",
      },
      {
        id: "f-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "f-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "f-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "f-6",
        icon: SiStyledcomponents,
        name: "Styled Component",
      },
      {
        id: "f-7",
        icon: SiSass,
        name: "SASS",
      },
      {
        id: "f-8",
        icon: SiTypescript,
        name: "TypeScript",
      },
    ],
  },
  {
    title: "Tools & Libraries",
    items: [
      {
        id: "t-1",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "t-2",
        icon: SiAxios,
        name: "Axios",
      },
      {
        id: "t-3",
        icon: SiReactrouter,
        name: "React Router",
      },
      {
        id: "t-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "t-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "t-6",
        icon: SiJquery,
        name: "Material-UI",
      },
      {
        id: "t-7",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-8",
        icon: SiWebpack,
        name: "Webpack",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "Vite",
      },
      {
        id: "t-10",
        icon: SiFigma,
        name: "Figma",
      },
    ],
  },
  {
    title: "APIs",
    items: [
      {
        id: "t-5",
        icon: MdIntegrationInstructions,
        name: "RESTapi",
      },
    ],
  },
  {
    title: "Version Control",
    items: [
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Infodart Technologies Ltd, India",
    logo: infodartLogo,
    link: "https://www.infodartglobal.com/",
    positions: [
      {
        title: "Software Engineer",
        duration: "July 2024 - Present",
        content: [
          {
            text: "Developed responsive user interfaces using React.js for efficient and intuitive web applications.",
            link: "",
          },
          {
            text: "Implemented state management with Redux for centralized data flow and enhanced application performance.",
            link: "",
          },
          {
            text: " Integrated RESTful APIs to fetch and display data dynamically, ensuring seamless user interactions.",
            link: "",
          },
          {
            text: "Utilized Git for version control, managing code repositories, and facilitating team collaboration.",
            link: "",
          },
          {
            text: " Actively engaged in learning and implementing new technologies to enhance development efficiency and stay updated with industry trends.",
            link: "",
          },
        ],
      },
      {
        title: "Software Engineer Trainee",
        duration: "November 2023 - June 2024",
        content: [
          {
            text: "Collaborated with senior developers to design and implement responsive web interfaces using HTML, CSS, JavaScript, and React, ensuring optimal performance across devices and browsers.",
            link: "",
          },
          {
            text: "Assisted in debugging and testing applications, optimizing code for enhanced user experience while adhering to industry best practices and coding standards.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Oasis Infobyte",
    logo: oasisLogo,
    link: "https://oasisinfobyte.com/",
    positions: [
      {
        title: "Web Development and Designing Intern",
        duration: "August 2023 - September 2023",
        content: [
          {
            text: "•Demonstrated proficiency in web development and design by creating visually appealing and responsive landing pages using HTML, CSS, and JavaScript.",
            link: "",
          },
          {
            text: "Successfully developed a personal portfolio website showcasing projects and skills, incorporating interactive elements and animations. Built a functional temperature converter application using JavaScript, allowing users to convert temperatures between different units.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Eimple Labs",
    logo: EimpleLabLogo,
    link: "https://eimple.com/",
    positions: [
      {
        title: "Summer Intern",
        duration: "July 2023 - July 2023",
        content: [
          {
            text: "Gained valuable experience in coding and building functional applications using HTML, CSS, JavaScript, and ReactJs. Contributed effectively to team projects, fostering a collaborative and productive work environment link",
          },
        ],
      },
    ],
  },
];

export const certification = [
  {
    organisation: "Coding Ninja",
    title: "React",
    icon: cnLogo,
    link: "https://www.infodartglobal.com/",
    duration: "January 2023",
    content1: "Redux, React hooks, styled-component",
  },
  {
    organisation: "Coding Ninjas",
    title: "Frontend",
    icon: cnLogo,
    link: "https://oasisinfobyte.com/",
    duration: "Sep 2023",
    content1:
      "HTML, CSS3, JavaScript, Bootstrap, Ajax, jQuery, APIs, Material-UI, Git, Github",
  },
  {
    organisation: "Udemy",
    title: "Complete JAVASCRIPT with HTML5 CSS3 from zero to Expert-2021",
    icon: udemy,
    link: "https://eimple.com/",
    duration: "Nov-2021",
    content1: "HTML, CSS, JavaScript",
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "BharatSeats CRM Portal",
    github: "https://github.com/Shristy1908/Bharatseats_CRM/tree/master",
    link: "",
    image: bsLogo,
    content:
      "Developed an admin portal using React to facilitate efficient management of multiple business operations, including User, Profile, Supplier, and Delivery Management.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
    ],
  },
  {
    id: "project-2",
    title: "Eauset CRM Portal",
    github: "https://github.com/Shristy1908/Eauset_CRM/tree/master",
    link: "",
    image: EausetLogo,
    content:
      "Developed an admin portal using React to facilitate efficient management of multiple business operations, including User, Profile, Supplier, and Delivery Management",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
    ],
  },
  {
    id: "project-7",
    title: "Proshop - An E-Commerce Web App",
    github: "https://github.com/Shristy1908/Proshop_WebApp",
    link: "https://proshop-vwkm.onrender.com/",
    image: Proshop,
    content:
      "Implemented a full-featured shopping cart, admin management for projects, users, and orders, along with product pagination and search functionalities.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
    ],
  },
  {
    id: "project-3",
    title: "Real Time Chat Connect",
    github: "https://github.com/Shristy1908/ReactChatConnect",
    link: "https://react-chat-connect.vercel.app/",
    image: webChatConnect,
    content:
      "This project involved creating a real-time chat application similar to WhatsApp. The application provides instant messaging capabilities and user authentication.",
    stack: [
      {
        id: "icon-1",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "icon-2",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Flask",
      },
      {
        id: "icon-4",
        icon: SiHtml5,
        name: "OpenAI",
      },
      {
        id: "icon-5",
        icon: DiCss3,
        name: "Google Cloud Platform",
      },
      {
        id: "icon-6",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
    ],
  },
  {
    id: "project-4",
    title: "Albums List React App",
    github: "https://github.com/Shristy1908/AlbumnList-React-App",
    link: "https://albumn-list-react-app.vercel.app/",
    image: albumn,
    content:
      "React app where you can add, delete and update the existing album and also app already containing some album by fetching data from API",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
    ],
  },
  {
    id: "project-5",
    title: "E-Learning App",
    github: "https://github.com/Shristy1908/E-learning-App",
    link: "https://e-learning-app-tau.vercel.app/",
    image: ELearningLogo,
    content:
      "Developed an interactive eLearning application using React, enhancing user engagement through dynamic content delivery and responsive design",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
    ],
  },
  {
    id: "project-6",
    title: "Portfolio",
    github: "https://github.com/Shristy1908/My_Personal_Portfolio/tree/master",
    link: "https://bespoke-faloodeh-fc0ba8.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/shristy-kumari-244203217/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Shristy1908",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:shristykumari1908@gmail.com",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/iits_shristy/",
  },
];

export const aboutMe = {
  name: "Shristy Kumari",
  tagLine:
    "Software Engineer @Infodart Technology Ltd | Frontend Developer | React Specialist",
  intro:
    "Dedicated Frontend Developer with expertise in React, focused on building responsive, user-centric web applications.",
};
