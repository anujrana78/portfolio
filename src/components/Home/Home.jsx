import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import profileImage from "../../assets/profile.png";
import "./Home.css";
import htmlLogo from "../../assets/stack logos/html-1.svg";
import cssLogo from "../../assets/stack logos/css.svg";
import jsLogo from "../../assets/stack logos/js.svg";
import reactLogo from "../../assets/stack logos/react-2.svg";
import tailwindLogo from "../../assets/stack logos/tailwind.svg";
import bootstrapLogo from "../../assets/stack logos/bootstrap.svg";
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="home-container">
      <div className="home container">
        <div className="hero">
          <div className="hero-text">
            <h2 className="title ">Front-End React Developer</h2>
            <p>
              Hi, I'm Anuj Rana. A passionate Front-end React Developer based in
              Kathmandu, Nepal. 📍
            </p>
            
            <div>
              <FaGithubSquare className="hero-links"/>
              <FaLinkedin className="hero-links"/>
            </div>
          </div>
          <div className="hero-image">
            <div className="profileImage__container">
            <motion.div
      className="box"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
              <img src={profileImage} className="profileImage" />
     </motion.div>         
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className="tech-stack">
          <p>Tech Stack</p>
          <ul>
            <li>
              <div className="rounded-logo">
                <img src={htmlLogo} className="logo" />
              </div>
            </li>
            <li>
              <div className="rounded-logo">
                <img src={cssLogo} className="logo" />
              </div>
            </li>
            <li>
              <div className="rounded-logo">
                <img src={jsLogo} className="logo" />
              </div>
            </li>
            <li>
              <div className="rounded-logo">
                <img src={bootstrapLogo} className="logo" />
              </div>
            </li>
            <li>
              <div className="rounded-logo">
                <img src={reactLogo} className="logo" />
              </div>
            </li>
            <li>
              <div className="rounded-logo">
                <img src={tailwindLogo} className="logo" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
