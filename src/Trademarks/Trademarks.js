import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import clients_1 from '../assets/img/clients/client-1.png';
import clients_2 from '../assets/img/clients/client-2.png';
import clients_3 from '../assets/img/clients/client-3.png';
import clients_4 from '../assets/img/clients/client-4.png';
import clients_5 from '../assets/img/clients/client-5.png';
import clients_6 from '../assets/img/clients/client-6.png';
import '../Trademarks/Trademarks.css';
export default function Trademarks() {
  return (
    <section className='Trademarks_Section'>
      <Container>

        <Row>
          <Col className='image_Trademark' lg={2} md={4} sm={6}><img src={clients_1} alt="clients_1" srcset="" /></Col>
          <Col className='image_Trademark' lg={2} md={4} sm={6}><img src={clients_2} alt="clients_2" srcset="" /></Col>
          <Col className='image_Trademark' lg={2} md={4} sm={6}><img src={clients_3} alt="clients_3" srcset="" /></Col>
          <Col className='image_Trademark' lg={2} md={4} sm={6}><img src={clients_4} alt="clients_4" srcset="" /></Col>
          <Col className='image_Trademark' lg={2} md={4} sm={6}><img src={clients_5} alt="clients_5" srcset="" /></Col>
          <Col className='image_Trademark' lg={2} md={4} sm={6}><img src={clients_6} alt="clients_6" srcset="" /></Col>
        </Row>
      </Container>
    </section>

  );
}

