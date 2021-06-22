import React, { useState } from "react";
import data_projects from "./data/project_data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import "./Project.css";
const Project = () => {
  const [projects, setProjects] = useState(data_projects);

  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
  };

  const project_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="container projects"
      variants={project_variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="projects__navbar">
        <div onClick={() => setProjects(data_projects)}>All</div>
        <div onClick={() => handleFilterCategory("codeigniter")}>
          Codeigniter
        </div>
        <div onClick={() => handleFilterCategory("laravel")}>Laravel</div>
        <div onClick={() => handleFilterCategory("mongoDB")}>MongoDB</div>
        <div onClick={() => handleFilterCategory("node.js")}>Node</div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
