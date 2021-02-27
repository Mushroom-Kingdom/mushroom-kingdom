import React, { useState } from "react";
import Modal from "react-modal";
import "./css/about.css";
import FullList from "./FullList.js";

// import EditModal from '../components/Modal/EditModal.js';
// import { Button } from 'react-bootstrap';
var image1 = require("./images/blueOyster.jpg");

function About() {
  // until this line

  return (
    <div className="about">
      <div id="section">
        <h1>OUR MISSION</h1>
        <p id="paragraph">
          Our mission at the Mushroom Kingdom is simple: to provide high
              quality mushrooms for an affordable price.{" "}
        </p>

      </div>
      <div id="section">

        <img src={image1} width="960" height="500" alt=""></img>

        <br />
        
        <h1>History</h1>
        <img id="paragraph-image" src={image1} width="300" height="300" alt=""></img>
        <p id="paragraph">
          The Mushroom Kingdom has modest beginnings with two friends from high
          school, Nick Pasch and Bryce Van Note, searching for their calling in
          a pandemic-stricken world. Nick had just dropped out of college and
          Bryce had just graduated high school, and the two were eager to begin
          working. What ensued was a period of informal research and
          experimentation with many different avenues of interest, one of which
          being mushrooms. After growing as hobbyists for some months and
          acquiring vast knowledge and experience growing mushrooms, we decided
          to begin this mushroom farm. Now we face the challenge of producing
          the highest quality fungus for affordable rates, an obstacle we hope
          to overcome with evermore success.
        </p>
        
        <br />
        <br />
        <br />
        <br />

        <h1 class="center">How We Grow</h1>
        <img id="paragraph-image" src="https://www.carlsonstockart.com/images/xl/Mushroom-Life-Cycle-1.jpg" width="300" height="300" alt=""></img>
        <p id="paragraph">
          Our entirely organic mushroom farm operates using techniques that were
          popularized in the past few decades. We begin by using organic Wild
          Bird Seed, which we rinse clean and let soak for a period of 24 hours.
          Once this grain had soaked, we sterilize the grain by placing it into
          jars and pressure cooking it for 2 hours. Once this is complete and
          the jars have cooled off, we transfer mycelium into the sterile jar in
          a sterile working environment produced by an air filtration system we
          built called a laminar flow hood. Once a jar has had mycelium
          transferred into it, the mycelium grows to occupy the entire jar over
          a period of about 2 weeks. Once it has fully colonized the jar, it can
          be used to produce more jars or combined with pasteurized straw to
          begin fruiting in our self-designed fruiting chamber. Given the
          optimal conditions that our fruiting room has been designed to
          maintain, we fruit beautiful mushrooms roughly 4 weeks after the start
          of the process.
        </p>
        <br />
        <h1>Section</h1>
        <p id="paragraph">
          Comming soon!
        </p>
      </div>
    </div>
  );
}

export default About;
