import React from "react";

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import file from "../assets/icons/file.svg";
import mail from "../assets/icons/mail.svg";
import profile from "../assets/icons/profile.jpg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

import "./Sidebar.css";
const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:afif0071997@gmail.com");
  };
  const sidebar_variant = {
    hidden: {
      x: "-20vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={profile} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Afif <span>Wijaya</span>
      </div>
      <div className="sidebar__item sidebar__title">Web Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={file} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="/#">
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a href="/#">
          <img src={instagram} alt="instagram" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="/#">
            <img src={github} alt="github" className="sidebar__icon mr-3" />{" "}
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img
            src={pin}
            alt="locataion"
            className="sidebar__item sidebar__icon mr-3"
          />
          Lampung, Indonesia
        </div>
        <div className="sidebar__item">Afif0071997@gmail.com</div>
        <div className="sidebar__item">+6281273663077</div>
      </div>
      <div className="siderbar__item sidebar__email" onClick={handleEmailMe}>
        <img src={mail} alt="main" className="sidebar__icon mr-3" />
        Email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
