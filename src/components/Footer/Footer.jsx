import "./Footer.css"
import {FaGithubSquare,FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <>
        <div className="footer">
        <p>Copyright © 2023. All rights are reserved</p>
        <div className="footer-icon__holder">
            <FaGithubSquare className="footer-icon"/>
            <FaLinkedin className="footer-icon"/>
        </div>
        </div>   
    </>
  )
}

export default Footer