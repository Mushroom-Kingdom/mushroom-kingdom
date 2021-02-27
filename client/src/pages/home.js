import React, { useContext } from "react";
import AuthenticationContext from "../contexts/AuthenticationContext";
import {Button, Carousel, Container, Row, Col, Image} from 'react-bootstrap';
import "./css/home.css";

var range = require("./images/rangeme.png");
var rail = require("./images/rail.png");
var sant = require("./images/sant.png");
var cham = require("./images/cham.jpg");
var king = require("./images/king.png");
var care = require("./images/care.jpg");

function Home() {
  const auth = useContext(AuthenticationContext);

  return (
    <div className="home">
        <Carousel>
          <Carousel.Item >
            <img
              // className="d-block w-100"
              src={king}
              alt="First slide"
              width="100%"
              height="100%"
            />
            <Carousel.Caption>
              <h1 id="front">Welcome to the Mushroom Kingdom</h1>
              <p id="front"></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img

              // className="d-block w-100"
              src={cham}
              alt="First slide"
              width="100%"
              height="100%"
            />
            <Carousel.Caption>
              <h3 id="care">Mushroom Farm Completed!</h3>
              <p id="care">As of 2/21/21, the mushroom farm is operating and can be seen in the image.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              // className="d-block w-100"
              src={care}
              alt="First slide"
              width="100%"
              height="100%"

            />
            <Carousel.Caption>
              <h1 id="q">Questions or Inquiries?</h1>
              <p id="q">Please let us know!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
        <h2>Where to find us!</h2>
          <Row>
            
            <Col md={4} lg={4}>
              {/* <h2>RangeMe</h2>
              <p>You can find our products on RangeMe </p> */}
              <br />
              <br />
              <img src={range} width="100%" />
            </Col>
            <Col md={4} lg={4}>
              {/* <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p> */}
              <img src={rail} width="100%" />
            </Col>
            <Col md={4} lg={4}>
              {/* <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p> */}
              <br />
              <img src={sant}  width="100%" />
            </Col>
          </Row>
          <hr className="features-divider"></hr>
          <Row className="left-row">
            <Col md={7} lg={7}>
              <h2>Local and Organic</h2>
              <p>Everything that we sell is organically produced by New Mexicans for New Mexicans.</p>
            </Col>
            <Col md={5} lg={5}>
              <Image fluid mx-auto style={{width:"500px", height:"500px"}}></Image>
            </Col>
          </Row>
          <hr className="features-divider"></hr>
          <Row className="right-row">
            <Col md={5} lg={5}>
              <Image fluid mx-auto style={{width:"500px", height:"500px"}}></Image>
            </Col>
            <Col md={7} lg={7}>
              <h2>We love mushrooms</h2>
              <p>Here at the Mushroom-Kingdom, we love mushrooms.</p>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Home;
