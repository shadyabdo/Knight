import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Pricing/Pricing.css';
export default function Price_Card() {
  return (
    <div className="PriceCardSection" id="PRICING">
      <Container>
      <div className="text">
          <div className="title">
            <h3>PRICING</h3>
            <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p>
          </div>
          </div>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card className='Crad-Price'>
              <Card.Body className='card-body'>
                <Card.Title className="Card-title"><h5>Free</h5> </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex text-center justify-content-center price"> <h4>$0</h4> <span>/month</span></Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li className="text-muted" style={{ textDecoration: 'line-through' }}>Pharetra massa</li>
                    <li className="text-muted" style={{ textDecoration: 'line-through' }}>Massa ultricies mi</li>
                  </ul>
                </Card.Text>
                <Card.Link href="#"> <Button variant="success">Buy Now</Button></Card.Link>

              </Card.Body>
            </Card>
          </Col>
          {/* //////////// */}
          <Col lg={4} md={6} sm={12}>
            <Card style={{border:'2px solid rgb(124, 197, 118)'}} className='Crad-Price Crad-Price-RECOMMENDED'>
              <Card.Body className='card-body'>
              <Card.Text className='RECOMMENDED'> RECOMMENDED</Card.Text>
                <Card.Title className="Card-title"> <h5>Free</h5></Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex text-center justify-content-center price"> <h4>$0</h4> <span>/month</span></Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li className="text-muted" >Pharetra massa</li>
                    <li className="text-muted" style={{ textDecoration: 'line-through' }}>Massa ultricies mi</li>
                  </ul>
                </Card.Text>
                <Card.Link href="#"> <Button variant="success">Buy Now</Button></Card.Link>

              </Card.Body>
            </Card>
          </Col>
          {/* ///////////// */}
          <Col lg={4} md={6} sm={12}>
            <Card className='Crad-Price price-RECOMMENDED'>
              <Card.Body className='card-body'>
              
                <Card.Title className="Card-title"><h5>Free</h5></Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex text-center justify-content-center price"> <h4>$0</h4> <span>/month</span></Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li className="text-muted" >Pharetra massa</li>
                    <li className="text-muted" >Massa ultricies mi</li>
                  </ul>
                </Card.Text>
                <Card.Link href="#"> <Button variant="success">Buy Now</Button></Card.Link>

              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>
    </div>

  );
}