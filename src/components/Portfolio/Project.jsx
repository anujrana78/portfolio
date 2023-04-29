import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const Project = () => {
  return (
    <div className="portfolio-background " id="portfolio">
      <div className="portfolio-container container">
        <div>
          <h4 className="top-heading">PORTFOLIO</h4>
          <h3 className="desc">Each project is a unique piece of development 🧩</h3>
        </div>
        <div className="portfolio-container">
          <PortfolioCard />
        </div>
      </div>
    </div>
  );
};

export default Project;
