import Accordion from 'react-bootstrap/Accordion';
import '../QUESTIONS_Accordion/Accordion.css'
export default function QUESTIONS_Accordion() {
  return (
    <section className="QUESTIONS_Accordion_Section">
      <div className="container">

        <div className="text">
          <div className="title">
            <h3>FREQUENTLY ASKED QUESTIONS</h3>
            
          </div>
        </div>

        <Accordion className='QUESTIONS' defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header  className='QUESTIONS_Accordion'>Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
            <Accordion.Body>
            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
            </Accordion.Body>
          </Accordion.Item>
          {/* ///////////////// */}
          <Accordion.Item eventKey="1">
            <Accordion.Header  className='QUESTIONS_Accordion'>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</Accordion.Header>
            <Accordion.Body>
            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
            </Accordion.Body>
          </Accordion.Item>
          {/* /////////////////// */}
          <Accordion.Item eventKey="2">
            <Accordion.Header  className='QUESTIONS_Accordion'>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</Accordion.Header>
            <Accordion.Body>
            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
            </Accordion.Body>
          </Accordion.Item>
          {/* //////////////////// */}
          <Accordion.Item eventKey="3">
            <Accordion.Header  className='QUESTIONS_Accordion'>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</Accordion.Header>
            <Accordion.Body>
            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
            </Accordion.Body>
          </Accordion.Item>
          {/* //////////////////// */}
          <Accordion.Item eventKey="4">
            <Accordion.Header  className='QUESTIONS_Accordion'>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</Accordion.Header>
            <Accordion.Body>
            Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
            </Accordion.Body>
          </Accordion.Item>
          {/* //////////////////// */}
          <Accordion.Item eventKey="5">
            <Accordion.Header  className='QUESTIONS_Accordion'>Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?</Accordion.Header>
            <Accordion.Body>
            Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>


  );
}

