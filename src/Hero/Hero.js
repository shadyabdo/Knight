import Button from "react-bootstrap/Button";
import "../Hero/Hero.css";
import logo from "../assets/img/hero-logo.png";
export default function Home() {
  return (
    <div className="Home" id="Home">
      <div className="container">
        <a href="#" className="logoHome">
          <img src={logo} alt="" srcset="" />
        </a>
        <div className="text">
          <h3>Welcome To Knight Studios</h3>
          <p>
            WE ARE TEAM OF TALENTED DESIGNERS MAKING WEBSITES WITH BOOTSTRAP REACT
          </p>
          <Button
            variant="link"
            href="#ABOUT"
            className="LinkHome text-light bg-secondary"
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
}
