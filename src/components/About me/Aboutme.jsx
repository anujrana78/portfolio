import "./Aboutme.css";
import aboutImage from "../../assets/windows.jpg";


const Aboutme = () => {
  return (
    <>
      <div className="about container">
        <div className="about-image__container">
          <img src={aboutImage} className="about-image"></img>
        </div>
        <div className="about-desc">
          <h4 className="top-heading">ABOUT ME</h4>
          <h3>A dedicated Front-end Developer based in Kathmandu, Nepal 📍</h3>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
      
    </>
  );
};

export default Aboutme;
