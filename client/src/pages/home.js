import React, { useContext } from "react";
import AuthenticationContext from "../contexts/AuthenticationContext";
import {Button, Carousel} from 'react-bootstrap';
import "./css/home.css";

var carousel1 = require("./images/carousel-img1.jpg");
var carousel2 = require("./images/carousel-img2.png");
var carousel3 = require("./images/carousel-img3.jpg");


function Home() {
  const auth = useContext(AuthenticationContext);

  return (
    <div className="home">
      <div id="header">
        <h1>
          Come one, come all! The MUSHROOM-KINGDOM has plenty of beautiful,
          healthy organic mushrooms for everyone!
        </h1>
        <br />
        <h1>
          THE MUSHROOM FARM SHOULD BE FULLY FUNCTIONING BEFORE THE END OF THE
          WEEK!
        </h1>
        <div className="options">

          <div>
          {!auth.isAuthenticated && <Button href="/signup" variant="primary" size="lg" >Become a Member</Button>}
          </div>
          <br/>
          <div>
          {!auth.isAuthenticated && <Button href="/login" variant="secondary" size="lg">Login</Button>}
          </div>
        </div>
      </div>
      <div className="carousel">
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
              src={carousel2} width="" height="400" alt=""
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel3} width="" height="400" alt=""
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      <div id="section">
        <h1>Section</h1>
        <br />
        <h1>Section</h1>
        <br />
        <h1>Section</h1>
      </div>
    </div>
  );
}

export default Home;
