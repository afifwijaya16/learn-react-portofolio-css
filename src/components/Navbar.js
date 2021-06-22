import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
const Navbar = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    let currentURL = window.location.href;
    if (currentURL.endsWith("/")) {
      setActive("About");
    } else if (currentURL.endsWith("/resume")) {
      setActive("Resume");
    } else if (currentURL.endsWith("/project")) {
      setActive("Project");
    }
  }, [active]);
  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="navbar"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        {active !== "About" && (
          <Link to="/">
            <div className="navbar__item" onClick={() => setActive("About")}>
              About
            </div>
          </Link>
        )}
        {active !== "Resume" ? (
          <Link to="/resume">
            <div className="navbar__item" onClick={() => setActive("Resume")}>
              Resume
            </div>
          </Link>
        ) : null}
        {active !== "Project" && (
          <Link to="/project">
            <div className="navbar__item" onClick={() => setActive("Project")}>
              Project
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
