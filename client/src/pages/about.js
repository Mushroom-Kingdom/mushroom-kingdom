import React from 'react'
import aboutcss from './css/about.css'
var image1 = require('./images/blueOyster.jpg');

function About() {
    return (
        <div className="about">
            <div id="header">
                <h1>OUR MISSION</h1>
                <div class="row">
                    <div class="col-md-4">
                        <img src={image1} width="400" height="400" ></img>
                    </div>
                    <div class="col-md-6">
                        <p>Our mission at the mushroom kingdom is simple: to provide high quality mushrooms for an affordable price.</p>
                    </div>
                </div>
            </div>
            <div id="section">
                <h1>Section</h1>
                <p>

                </p>
                <br/>
                <h1>Section</h1>
                <p>
                    
                </p>
                <br/>
                <h1>Section</h1>
                <p>
                    
                </p>
            </div>
        </div>
    )
}

export default About;

