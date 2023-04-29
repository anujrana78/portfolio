import { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import {RxCross1, RxHamburgerMenu} from "react-icons/rx"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
    console.log(showMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Anuj.dev</div>
        {showMenu && <RxCross1 className="cross" onClick={toggleMenu}/>}
         <ul className={showMenu ? "nav-links" : "nav-links hidden"}>
            <li>
              <Link to="home" spy={true} smooth={true} duration={500} onClick={showMenu && toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} duration={500} onClick={ showMenu && toggleMenu}>
                About
              </Link>
            </li>
            <li >
              <Link to="portfolio" spy={true} smooth={true} duration={500} onClick={showMenu && toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={500} onClick={showMenu && toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>

        <div className="hamburger-menu" onClick={toggleMenu}>
        <RxHamburgerMenu className="hamburger-icon"/>
        </div>
      </nav>
    </>
  );
};

export default Header;
