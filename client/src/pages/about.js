import React, { useState } from "react";
import Modal from "react-modal";
import "./css/about.css";
import FullList from "./FullList.js";

// import EditModal from '../components/Modal/EditModal.js';
// import { Button } from 'react-bootstrap';
var image1 = require("./images/blueOyster.jpg");
var missionImage = require("./images/mario.webp");
var history = require("./images/history.jpg");

function About() {
  // until this line

  return (
    <div className="about">
      <div id="section">
        <h1>OUR MISSION</h1>
        <p id="statem">
          Our mission at the mushroom kingdom is to uplift humanity to the best of our ability, which means doing anything and everything we can. We believe that there are major problems in the world and that many of these problems have solutions that are simpler than most would make their solutions out to be. Understanding our inexcusable obligation to make both our immediate and entire environment as perfect as we possibly can has lead us to ensure that these remain our core values regardless of how big the kingdom grows. 
        </p>
      </div>
      <br />
      <div id="section">
        <img src={history} width="50%" height="50%" alt=""></img>
        <br />
        <br />
        <br />

        <div className="row">
        <div className="col-md-4">
          </div>
          <div className="col-md-7">
        <h1 id="head">History</h1>
        </div>
        </div>
        <br/>
        <div className="row">
        <br/>
        <div className="col-md-4">
        
        <img
          id="paragraph-image"
          class="mr-3"
          src={missionImage}
          width="80%"
          height="100%"
          alt=""
        ></img>
        </div>
        <div className="col-md-8">
          <br/>
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
        </div>
        </div>

        <br />
        <br />


        <div className="row">
        <div className="col-md-8">
        <h1 id="head">How We Grow</h1>
          </div>
        </div>
        <br/>
        <div className="row">
        <br/>
        
        <div className="col-md-8">
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

        </div>
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
        </div>

        <br />
        <br />

        <div className="row">
        <div className="col-md-4">
          </div>
          <div className="col-md-7">
        <h1 id="head">Our Vision</h1>
        </div>
        </div>
        <br/>
        <div className="row">
        <br/>
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
          <br/>
        <p id="paragraph">
          With the glimpse of our values provided above, it should serve as no surprise that we have a very optimistic vision and that we are quite excited for the future and all of the progress that we are privileged to contribute to. We want to begin by expanding our repertoire to comprise of virtually all edible mushrooms. Once we have achieved this, we intend to begin researching all the possible applications mushrooms have with regard to helping humanity (hunger, ecosystems, climate). Long term, we have a vision of installing massive fungal networks throughout the world that would hopefully be multi-faceted in their utility, the benefits of which would hopefully extend at the very least to hunger and the environment.
        </p>
        </div>
        </div>


        
      </div>
    </div>
  );
}

export default About;
