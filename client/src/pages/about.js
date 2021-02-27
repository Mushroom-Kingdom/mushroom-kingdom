import React, { useState } from "react";
import Modal from "react-modal";
import "./css/about.css";
import FullList from "./FullList.js";

// import EditModal from '../components/Modal/EditModal.js';
// import { Button } from 'react-bootstrap';
var image1 = require("./images/blueOyster.jpg");
var lab = require("./images/lab.jpg");
var vision = require("./images/eye.png");

function About() {
  // until this line

  return (
    <div className="about">
      <div id="section">
        <h1>OUR MISSION</h1>
        <p id="statem">
          Our mission at the Mushroom Kingdom is simple: to provide high quality
          mushrooms for an affordable price.{" "}
        </p>
      </div>
      <br />
      <div id="section">
        <img src={image1} width="960" height="500" alt=""></img>
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-7">
            <h1 id="head">History</h1>
          </div>
        </div>
        <br />
        <div className="row">
          <br />
          <div className="col-md-4">
            <img
              id="paragraph-image"
              class="mr-3"
              src={image1}
              width="300"
              height="300"
              alt=""
            ></img>
          </div>
          <div className="col-md-8">
            <br />
            <p id="paragraph">
              The Mushroom Kingdom has modest beginnings with two friends from
              high school, Nick Pasch and Bryce Van Note, searching for their
              calling in a pandemic-stricken world. Nick had just dropped out of
              college and Bryce had just graduated high school, and the two were
              eager to begin working. What ensued was a period of informal
              research and experimentation with many different avenues of
              interest, one of which being mushrooms. After growing as hobbyists
              for some months and acquiring vast knowledge and experience
              growing mushrooms, we decided to begin this mushroom farm. Now we
              face the challenge of producing the highest quality fungus for
              affordable rates, an obstacle we hope to overcome with evermore
              success.
            </p>
          </div>
        </div>

        <br />
        <br />

        <div className="row">
          <div className="col-md-8">
            <h1 id="head">How We Grow</h1>
          </div>
        </div>
        <br />
        <div className="row">
          <br />

          <div className="col-md-8">
            <p id="paragraph">
              Our entirely organic mushroom farm operates using techniques that
              were popularized in the past few decades. We begin by using
              organic Wild Bird Seed, which we rinse clean and let soak for a
              period of 24 hours. Once this grain had soaked, we sterilize the
              grain by placing it into jars and pressure cooking it for 2 hours.
              Once this is complete and the jars have cooled off, we transfer
              mycelium into the sterile jar in a sterile working environment
              produced by an air filtration system we built called a laminar
              flow hood. Once a jar has had mycelium transferred into it, the
              mycelium grows to occupy the entire jar over a period of about 2
              weeks. Once it has fully colonized the jar, it can be used to
              produce more jars or combined with pasteurized straw to begin
              fruiting in our self-designed fruiting chamber. Given the optimal
              conditions that our fruiting room has been designed to maintain,
              we fruit beautiful mushrooms roughly 4 weeks after the start of
              the process.
            </p>
          </div>
          <div className="col-md-4">
            <img
              id="paragraph-image"
              class="mr-3"
              src={lab}
              width="300"
              height="300"
              alt=""
            ></img>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-7">
            <h1 id="head">Our Vision</h1>
          </div>
        </div>
        <br />
        <div className="row">
          <br />
          <div className="col-md-4">
            <img
              id="paragraph-image"
              class="mr-3"
              src={vision}
              width="300"
              height="300"
              alt=""
            ></img>
          </div>
          <div className="col-md-8">
            <br />
            <p id="paragraph">
              The Mushroom Kingdom has modest beginnings with two friends from
              high school, Nick Pasch and Bryce Van Note, searching for their
              calling in a pandemic-stricken world. Nick had just dropped out of
              college and Bryce had just graduated high school, and the two were
              eager to begin working. What ensued was a period of informal
              research and experimentation with many different avenues of
              interest, one of which being mushrooms. After growing as hobbyists
              for some months and acquiring vast knowledge and experience
              growing mushrooms, we decided to begin this mushroom farm. Now we
              face the challenge of producing the highest quality fungus for
              affordable rates, an obstacle we hope to overcome with evermore
              success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
