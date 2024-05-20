import nepalwonders from "../assets/projects/nepalwonders.png";
import crm from "../assets/projects/crm.png";
import portfolio from "../assets/projects/portfolio.png";
import yoraa from "../assets/projects/yoraa.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like JavaScript and React, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including JavaScript, React, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 Feb - Present",
    role: "ReactJs Intern",
    company: "Devsign Technologies",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js"],
  },
  {
    year: "2022 - Present",
    role: "Full Stack Developer",
    company: "Upwork",
    description: `Designed and developed user interfaces for web applications using Javascript and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance. Worked closely on React Native for building cross platfrom mobile applications.`,
    technologies: ["HTML", "CSS","Javascript", "React.js", "mySQL","MongoDB", "React Native"],
  },
];

export const PROJECTS = [
  {
    title: "Tours and Travels Booking Website",
    image: nepalwonders,
    description:
      "A fully functional tours and travels Booking Website with features like tours listing, tours cart, login, signup and user authentication.",
    technologies: [ "React", "Node.js", "MongoDB","Express","Tailwind CSS"],
  },
  {
    title: "CRM",
    image: crm,
    description:
      "An webapp for handling customers, with features such as customer details and addition of deletion of customers.",
    technologies: ["HTML", "CSS", "React", ],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind CSS", "React", "Framer Motion"],
  },
  {
    title: "Yoraa Landing Page Design",
    image: yoraa,
    description:
      "A beautiful and eyecatching landing page for Yoraa. Built using latest features of React and core CSS.",
    technologies: ["HTML", "CSS", "React.js"],
  },
];

export const CONTACT = {
  address: "Bharatpur-7 , Chitwan , 44200 ",
  phoneNo: "+977 9845951305 ",
  email: "mail.ashishbhusal@gmail.com",
};
