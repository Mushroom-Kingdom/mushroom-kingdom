import React, { useContext } from "react";
import AuthenticationContext from "../contexts/AuthenticationContext";
import {Button, Carousel} from 'react-bootstrap';
import "./css/home.css";

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
              src="holder.js/800x400?text=First slide&bg=373940"
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
              src="holder.js/800x400?text=Second slide&bg=282c34"
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
              src="holder.js/800x400?text=Third slide&bg=20232a"
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
