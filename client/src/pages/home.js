import React, { useContext } from "react";
import AuthenticationContext from "../contexts/AuthenticationContext";
import {Button, Carousel, Container, Row, Col, Image} from 'react-bootstrap';
import "./css/home.css";

var carousel1 = require("./images/carousel-img1.jpg");
var carousel2 = require("./images/carousel-img2.png");
var carousel3 = require("./images/carousel-img3.jpg");


function Home() {
  const auth = useContext(AuthenticationContext);

  return (
    <div className="home">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel1} width="" height="400" alt=""
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
<<<<<<< HEAD
              src={carousel2} width="" height="400" alt=""
              alt="Second slide"
=======
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
>>>>>>> develop
            />
            <Carousel.Caption>
              <h3>second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
<<<<<<< HEAD
              src={carousel3} width="" height="400" alt=""
              alt="Third slide"
=======
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
>>>>>>> develop
            />
            <Carousel.Caption>
              <h3>third slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
          <Row>
            <Col md={4} lg={4}>
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </Col>
            <Col md={4} lg={4}>
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </Col>
            <Col md={4} lg={4}>
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </Col>
          </Row>
          <hr className="features-divider"></hr>
          <Row className="left-row">
            <Col md={7} lg={7}>
              <h2>Heading</h2>
              <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
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
              <h2>Heading</h2>
              <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Home;
