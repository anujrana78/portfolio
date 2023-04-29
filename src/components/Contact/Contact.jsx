import "./Contact.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="contact-background">
      <div className="contact container">
        <h4 className="contact-title top-heading">CONTACT</h4>
        <h3>Don't be shy! Hit me up! 👇</h3>

    <div className="contact-details__container">
        <div className="contact-details">
          <div className="rounded">
            <FaMapMarkedAlt />
          </div>
          <div>
            <h4>Location</h4>
            <p>Kathmandu,Nepal</p>
          </div>
        </div>
        <div className="contact-details"> 
          <div className="rounded">
            <MdEmail />
          </div>
          <div>
            <h4>Mail</h4>
            <p>anizrana78@gmail.com</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
