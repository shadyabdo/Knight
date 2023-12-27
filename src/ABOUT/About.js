import './About.css';
import image from '../assets/img/about.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function About() {
  return (
    <section className="aboutMain" id="ABOUT">
      <Container>
        <div className="text">
          <div className="title">
            <h3>ABOUT US</h3>
            <p>Magnam dolores commodi suscipit eius consequatur</p>
          </div>
        </div>

        <Row className="d-flex justify-content-between" >
          <Col lg={6} sm={12}><img  srcSet={image} alt="" /></Col>

          {/* /////////////////////////////// */}
          <Col lg={6} sm={12}>

            <div className="About-Content">
              <div className="header-About">
                <h4>Voluptatem dignissimos provident quasi corporis</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>

              <div className="content-About">
                <div className="check">
                  <i class="fa-solid fa-check-double"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="check">
                  <i class="fa-solid fa-check-double"></i>Duis aute irure dolor in reprehenderit in voluptate velit.
                </div>
                <div className="check">
                  <i class="fa-solid fa-check-double"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </div>

              </div>
              <p className='FooterAbout'>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </Col>
        </Row>

      

      </Container>
    </section>

  );
}