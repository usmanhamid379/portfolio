"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Bazaar",
    description: "Online E-commerce Store",
    // image: "/images/projects/1.png",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.bazaar.ky/home",
  },
  {
    id: 2,
    // title: "Kitchen Sync & Strategies",
    title: "FBA Academy",
    description: "Online course seller",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    // previewUrl: "https://admin.kitchensyncstrategies.com",
    previewUrl: "https://fba-academy-frontend-two.vercel.app/",
  },
  {
    id: 3,
    title: "Learning Management System",
    description: "An LMS for a unversity",
    // image: "/images/projects/3.png",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://learna-web.vercel.app/en",
  },
  {
    id: 4,
    title: "Audomate",
    description: "An Auditing system for client",
    image: "/images/projects/4.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "https://www.audomate.co.uk/",
  },
  {
    id: 5,
    // title: "Online PASS CMFAS",
    title: 'Code Experts',
    // description: "Online Cources management system",
    description: "Company website",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    // previewUrl: "https://passcmfas.online/",
    previewUrl: "https://codeexperts.co.uk/",
  },
  {
    id: 6,
    title: "Onmine",
    description: "A cryoto related website",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://onmine-landing-page.vercel.app/",
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
            key={index}
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
