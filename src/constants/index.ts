// const words=[
//         {text:'Ideas',url:'/images/ideas.svg'},
//         {text:'Concepts',url:'/images/concepts.svg'},
//         {text:'code',url:'/images/code.svg'},
//         {text:'Design',url:'/images/design.svg'},
//     ]

// export default words;


const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", url: "/images/ideas.svg" },
  { text: "Concepts", url: "/images/concepts.svg" },
  { text: "Designs", url: "/images/designs.svg" },
  { text: "Code", url: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {url: "/images/logos/company-logo-1.png",},
  {url: "/images/logos/company-logo-2.png",},
  {url: "/images/logos/company-logo-3.png",},
  {url: "/images/logos/company-logo-4.png",},
  {url: "/images/logos/company-logo-5.png",},
  {url: "/images/logos/company-logo-6.png",},
  {url: "/images/logos/company-logo-7.png",},
  {url: "/images/logos/company-logo-8.png",},
  {url: "/images/logos/company-logo-9.png",},
  {url: "/images/logos/company-logo-10.png",},
  {url: "/images/logos/company-logo-11.png",},
];

const abilities = [
  {
    url: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    url: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    url: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    url: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    url: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    url: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    url: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    url: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "nice work",
    url: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "nice work",
    url: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "nice work",
    url: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    url: "/images/logo1.png",
  },
  {
    name: "logo2",
    url: "/images/logo2.png",
  },
  {
    name: "logo3",
    url: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "person1",
    mentions: "@person1",
    review:
      "review",
    url: "/images/client1.png",
  },
  {
    name: "person2",
    mentions: "@person2",
    review:
      "review",
    url: "/images/client1.png",
  },
  {
    name: "person3",
    mentions: "@person3",
    review:
      "review",
    url: "/images/client1.png",
  },
  {
    name: "person4",
    mentions: "@person4",
    review:
      "review",
    url: "/images/client1.png",
  },
  {
    name: "person5",
    mentions: "@person5",
    review:
      "review",
    url: "/images/client1.png",
  },
  {
    name: "person6",
    mentions: "@person6",
    review:
      "review",
    url: "/images/client1.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "/images/insta.png",
  },
  {
    name: "fb",
    url: "/images/fb.png",
  },
  {
    name: "x",
    url: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
