import dummyImage from "../../assets/windows.jpg";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";

import "./PortfolioCard.css";
const PortfolioCard = () => {
  return (
    <>
      <div className="card">
        <div>
          <img src={dummyImage} className="portfolio-image"></img>
        </div>
        <div className="portfolio-desc">
          <h4>Car Rental</h4>
          <p>
            A car rental website is an online platform that allows users to rent
            cars for personal or business use. The website provides an interface
            for searching, comparing, and reserving cars.
          </p>

          <div className="tech-container">
            <div className="tech">React</div>
            <div className="tech">SCSS</div>
          </div>
          <div className="portfolio-link">
            <div className="p-links">
              <h4>Code</h4>
              <FaGithubSquare />
            </div>
            <div className="p-links">
              <h4>Live Demo</h4>
              <FaShareSquare />
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="portfolio-desc">
          <h4>Car Rental</h4>
          <p>
            A car rental website is an online platform that allows users to rent
            cars for personal or business use. The website provides an interface
            for searching, comparing, and reserving cars.
          </p>

          <div className="tech-container">
            <div className="tech">React</div>
            <div className="tech">SCSS</div>
          </div>
          <div className="portfolio-link">
            <div className="p-links">
              <h4>Code</h4>
              <FaGithubSquare />
            </div>
            <div className="p-links">
              <h4>Live Demo</h4>
              <FaShareSquare />
            </div>
          </div>
        </div>
        <div>
          <img src={dummyImage} className="portfolio-image"></img>
        </div>
      </div>

      <div className="card">
        <div>
          <img src={dummyImage} className="portfolio-image"></img>
        </div>
        <div className="portfolio-desc">
          <h4>Car Rental</h4>
          <p>
            A car rental website is an online platform that allows users to rent
            cars for personal or business use. The website provides an interface
            for searching, comparing, and reserving cars.
          </p>

          <div className="tech-container">
            <div className="tech">React</div>
            <div className="tech">SCSS</div>
          </div>
          <div className="portfolio-link">
            <div className="p-links">
              <h4>Code</h4>
              <FaGithubSquare />
            </div>
            <div className="p-links">
              <h4>Live Demo</h4>
              <FaShareSquare />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
