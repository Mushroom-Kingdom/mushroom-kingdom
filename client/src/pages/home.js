import React from 'react';
import './css/home.css';

function Home() {
    return (
        <div className="home">
            <div id="header">
                <h1>BIG THING</h1>
                <div>
                    <a href="/signup">Become a member</a>
                </div>
                <div>
                    <a href="/login">Login</a>
                </div>               
            </div>
            <div id="section">
                <h1>Section</h1>
                <br/>
                <h1>Section</h1>
                <br/>
                <h1>Section</h1>
            </div>
        </div>
    )
}

export default Home;

