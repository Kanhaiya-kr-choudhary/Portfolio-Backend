import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "https://kanhaiyakumarchoudhary.netlify.app",
  }),
);
app.use(express.json());
const port = process.env.PORT || 3000;
dotenv.config({
  path: "./.env",
});

// database connection
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("MONGODB CONNECTION FAILED ", Error);
  });

// home section
app.get("/api/user", (req, res) => {
  const user = {
    name: "Kanhaiya",
    role: "Full Stack Developer",
    description:
      "Passionate developer building scalable, user-friendly web applications using modern technologies.",
  };

  res.json(user);
});

// about
app.get("/api/about", (req, res) => {
  const about = {
    name: "Kanhaiya",
    role: "Full Stack Developer",
    intro:
      " a passionate Full-Stack Web Developer currently pursuing a B.Tech in Computer Science and Engineering.I have hands-on experience with technologies such as MERN Stack. I completed a 3-month internship as a Frontend Developer at Mudarabah Infotech and Full Stack Developer at codeTrex infotech pvt. ltd.  where I worked on real-world projects and strengthened my development skills.",
    description:
      "I have built several projects  and I am currently working on building more full-stack applications to strengthen my development skills. I enjoy learning new technologies and solving problems, and currently I am also improving my Data Structures and Algorithms in Java.",
    highlight:
      "My goal is to start my career as a software developer where I can contribute to real-world projects, continuously learn, and grow as a professional.",
  };
  res.json(about);
});

//education
app.get("/api/education", (req, res) => {
  const education = {
    gradution: {
      courseName: " B.Tech in Computer Science",
      collageName: " Galgotias University | 2022 – 2026",
      description:
        "Focused on Data Structures, Web Development, Cloud Computing.",
    },
    higherSchool: {
      courseName: "Senior Secondary (12th)",
      collageName: " CBSE Board | 2021 – 2022",
      description:
        "Focused on Data Structures, Web Development, Cloud Computing.",
    },
    SecondarySchool: {
      courseName: "Secondary School (10th)",
      collageName: "CBSE Board | 2019",
      description: "Techno Mission International School",
    },
  };
  res.json(education);
});
//services
app.get("/api/services", (req, res) => {
  const services = [
    {
      title: "Web Development",
      desc: "Responsive and scalable web solutions.",
    },
    {
      title: "App Development",
      desc: "Reliable and smooth applications.",
    },
    {
      title: "Backend & APIs",
      desc: "Secure and scalable backend systems.",
    },
    {
      title: "Performance Optimization",
      desc: "Fast and optimized applications.",
    },
    {
      title: "SEO Optimization",
      desc: "Search engine friendly websites.",
    },
    {
      title: "Maintenance & Support",
      desc: "Long-term product support.",
    },
  ];

  res.json(services);
});

//skills
app.get("/api/skills", (req, res) => {
  const skills = [
    { name: "HTML", icon: "FaHtml5", color: "text-orange-500" },
    { name: "CSS", icon: "FaCss3Alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "FaJs", color: "text-yellow-400" },
    { name: "TypeScript", icon: "SiTypescript", color: "text-blue-600" },

    { name: "React", icon: "FaReact", color: "text-cyan-400" },
    { name: "React Native", icon: "FaReact", color: "text-sky-400" },

    { name: "Node.js", icon: "FaNodeJs", color: "text-green-600" },
    { name: "Express.js", icon: "SiExpress", color: "text-gray-400" },

    { name: "MongoDB", icon: "SiMongodb", color: "text-green-500" },
    { name: "MySQL", icon: "SiMysql", color: "text-blue-500" },

    { name: "Bootstrap", icon: "FaBootstrap", color: "text-purple-600" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-sky-500" },

    { name: "GitHub", icon: "FaGithub", color: "text-slate-200" },
    { name: "WordPress", icon: "FaWordpress", color: "text-blue-700" },
  ];

  res.json(skills);
});

//myProjects
app.get("/api/projects", (req, res) => {
  const projects = [
    {
      title: "Medical Website",
      desc: "A responsive web app that connects users with doctors and enables online appointment booking. Built using React, Node.js, Express, and MongoDB, it offers a seamless and secure healthcare experience.",
      img: "https://res.cloudinary.com/dixd43eq9/image/upload/v1772963994/project1_svpea4.png",
      link: "https://github.com/Kanhaiya-kr-choudhary/Medical-Website",
    },
    {
      title: "Currency Convertor",
      desc: "A simple and intuitive web application that allows users to convert between multiple currencies in real-time using live exchange rates. Built with React.js.",
      img: "https://res.cloudinary.com/dixd43eq9/image/upload/v1772965705/project2_iq4r62.png",
      link: "https://github.com/Kanhaiya-kr-choudhary/Currency-Convertor",
    },
    {
      title: "Youtube Clone Website",
      desc: "A front-end clone of YouTube built using HTML, CSS, and JavaScript, replicating the layout, video thumbnails, sidebar, and responsive design. This project demonstrates strong skills in UI development and modern web layout techniques.",
      img: "https://res.cloudinary.com/dixd43eq9/image/upload/v1773234693/project4_j5tlit.png",
      link: "https://github.com/Kanhaiya-kr-choudhary/Youtube-Clone",
    },

    {
      title: "Calculator",
      desc: "A front-end clone of YouTube with responsive layout and video preview interactions.",
      img: "https://res.cloudinary.com/dixd43eq9/image/upload/v1773236537/project5_e8u3jo.png",
      link: "https://github.com/Kanhaiya-kr-choudhary/Calculator",
    },
    {
      title: "Business consultent website",
      desc: "Full-stack note-taking application with user authentication and cloud database.",
      img: "https://res.cloudinary.com/dixd43eq9/image/upload/v1773236629/project6_ccenen.png",
      link: "https://github.com/Kanhaiya-kr-choudhary/Business-consultent-website",
    },
    {
      title: "Task Manager",
      desc: "Personal portfolio showcasing my skills, projects, and experience with smooth animations.",
      img: "https://res.cloudinary.com/dixd43eq9/image/upload/v1773236403/project3_gdoyoi.png",
      link: "",
    },
  ];

  res.json(projects);
});

// certificate
app.get("/api/certificate", (req, res) => {
  const certificate = [
    {
      title: "Postman API Fundamentals",
      desc: "Completed the Postman API Fundamentals certification, gaining hands-on experience with API requests, responses, environments, variables, and test automation using Postman. Demonstrated understanding of RESTful APIs and how to design, test, and document them effectively",
      img: "https://res.cloudinary.com/dixd43eq9/image/upload/v1773300079/postman_API_certificate_page-0001_feu396.jpg",
    },
    {
      title: "Cisco Networking Academy",
      desc: "Completed foundational training in networking concepts through Cisco’s globally recognized program. Gained hands-on knowledge of network protocols, IP addressing, routing, switching, and cybersecurity basics, preparing for real-world IT infrastructure and network management tasks.",
      img: "https://res.cloudinary.com/dixd43eq9/image/upload/v1773300426/KanhaiyaChoudhary-GU-BTech-CSE-IV_-_certificate_page-0001_h23tsc.jpg",
    },
    {
      title: "Certificate Of Virtual Internship",
      desc: "Successfully completed a virtual internship focused on Data Engineering, gaining hands-on experience with tools and technologies like AWS Glue, Amazon S3, AWS Lambda, and SQL. Developed real-world data processing and ETL pipeline skills through project-based learning in a remote setup.",
      img: "https://res.cloudinary.com/dixd43eq9/image/upload/v1773300914/Kanhaiya_kumar_choudhary_602910_certificate_page-0001_lia5kz.jpg",
    },
    {
      title: "Full Stack Developer Intern",
      desc: "Full Stack Developer Intern at Codetrex Infotech Pvt. Ltd., where I built MERN-based web modules, implemented APIs, developed responsive UIs, and performed integration testing using Git, Postman, and MongoDB.",
      img: "https://res.cloudinary.com/dixd43eq9/image/upload/v1773305103/Kanhiya_Kumar_Experience_Letter_page-0001_mm4tre.jpg",
    },
  ];

  res.json(certificate);
});
// contact
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: subject || `New message from ${name}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Subject:</b> ${subject}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});
