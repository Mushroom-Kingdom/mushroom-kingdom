import React, { useContext } from "react";
import AuthenticationContext from "../contexts/AuthenticationContext";
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
        <div>
          {!auth.isAuthenticated && <a href="/signup">Become a member</a>}
        </div>
        <div>{!auth.isAuthenticated && <a href="/login">Login</a>}</div>
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
