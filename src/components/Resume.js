import React from "react";
import Bar from "./Bar";
import { motion } from "framer-motion";
import { tools, languages } from "../components/data/resume_data";
import "./Resume.css";
const resume_variant = {
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
const Resume = () => {
  return (
    <motion.div
      className="container resume"
      variants={resume_variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Sistem Informasi</h5>
            <p className="resume-card__name">
              Universitas Teknokrat Indonesia (2015-2019)
            </p>
            <p className="resume-card__details"></p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Intern</h5>
            <p className="resume-card__name">Pustik (2020)</p>
            <p className="resume-card__details">
              Saya bekerja di Universitas Teknokrat Indonesia sebagai web
              developer
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} key={language._id} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} key={tool._id} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
