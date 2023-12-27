import hero_logo from '../assets/img/hero-logo.png';
import '../Footer/Footer.css';

import Container from 'react-bootstrap/Container';



// /////////////////////
export default function Footer_Web() {
  return (
    <footer>
      <a href="#"><img src={hero_logo} alt="" srcset="" /></a>
      <div className="title">
        <h2>Knight</h2>
        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>

      </div>

      <Container>
        <div className="icon">
          <ul>
          <li ><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
          <li ><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
          <li ><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
          <li ><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
          <li ><a href="#"><i class="fa-brands fa-skype"></i></a></li>
          </ul>

        </div>

        <div className="End_Footer">
          <span>© Copyright Knight. All Rights Reserved</span>
          <span>Designed by BootstrapMade</span>
        </div>

      

      </Container>
    </footer>
  )
}


