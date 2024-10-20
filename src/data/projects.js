import img1 from "../assets/ss.png";
import img2 from "../assets/ss1.png";
import img3 from "../assets/cms.png";
import img4 from "../assets/cal1.png";
import note from "../assets/noteapp.png";
import manga from "../assets/mangaverse.png";
import personalPorfolio from "../assets/personalPorfolio.png";

const projects = [
  {
    heading: "Complaint Management System:",
    desc: "This project uses React and Tailwind CSS for the frontend, Node.js and Express.js for the backend, and MySQL for the database.",
    image: img3,
    link: "https://student-cms.netlify.app/",
    gitLink: "https://github.com/Milap-Magar/CMS-.git",
  },

  {
    heading: "Manga-Verse:",
    desc: "The React, NodeJs and Postgres Database powered Note App create to store notes and read notes",
    image: manga,
    link: "https://mangaversify.netlify.app/",
    GitLink: "https://github.com/Milap-Magar/Manga-Verse.git",
  },
  {
    heading: "Figma Design of personal Portfolio:",
    desc: "This is my personal portfolio design. Which includes various protypings and animations.",
    image: personalPorfolio,
    link: "https://www.figma.com/design/HMbqE6toslKWOuLqlL0omz/Milap-Magar---Portfolio?node-id=0-1&t=TtE6vqPkXMVIcVzU-1",
    gitLink:
      "https://www.figma.com/design/HMbqE6toslKWOuLqlL0omz/Milap-Magar---Portfolio?node-id=0-1&t=TtE6vqPkXMVIcVzU-1",
  },
  {
    heading: "Note App:",
    desc: "The React, NodeJs and Postgres Database powered Note App create to store notes and read notes",
    image: note,
    link: "https://nikestore12.netlify.app/",
    GitLink: "https://github.com/Milap-Magar/Note-Management.git",
  },
  {
    heading: "Shoes Show-Case Website:",
    desc: "The React and Tailwind CSS-powered shoe web app presents a curated collection of footwear with images, names, and brief descriptions.",
    image: img1,
    link: "https://nikestore12.netlify.app/",
    GitLink: "https://github.com/Milap-Magar/NikeStore.git",
  },
  {
    heading: "Travel & Tour Website:",
    desc: "Wanderlust is a travel app crafted with Tailwind CSS and React, providing a seamless travel experience.",
    image: img2,
    link: "https://tours-travel12.netlify.app/",
  },
  {
    heading: "My first basic calculator",
    desc: "This project uses React and Tailwind CSS.",
    image: img4,
    link: "https://calculator2025.netlify.app/",
  },
];
export default projects;
