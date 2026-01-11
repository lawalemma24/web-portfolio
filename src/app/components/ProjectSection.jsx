"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Name It App",
    description: "A web app to generate names for your projects",
    image: "/images/namie-it.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lawalemma24/nameItApp",
    previewUrl: "https://name-it-app-nbev.vercel.app",
  },
  {
    id: 2,
    title: "Shortify Web App",
    description: "A URL shortening web application",
    image: "/images/shortify-app.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lawalemma24/UrlWebsite.git",
    previewUrl: "https://url-website-p59k.vercel.app",
  },
  {
    id: 3,
    title: "Donjay autos website",
    description: "A car dealership website",
    image: "/images/donjayautos.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lawalemma24/donjaysite.git",
    previewUrl: "https://donjayautoswebsite.netlify.app",
  },
  {
    id: 4,
    title: "Shopping Cart Mobile App",
    description: "A mobile application for shopping cart functionality",
    image: "/images/cart.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/lawalemma24/ShoppingCart",
    previewUrl: "https://shopping-cart-blond-five-85.vercel.app",
  },
  {
    id: 5,
    title: "NOTE APP",
    description: "A simple note taking application",
    image: "/images/noteApp.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lawalemma24/Note-App",
    previewUrl: "https://note-app-front-end-git-url-jaytechs-projects-e325c32a.vercel.app",
  },
  {
    id: 6,
    title: "sample project",
    description: "Project 5 description",
    image: "/images/namie-it.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;