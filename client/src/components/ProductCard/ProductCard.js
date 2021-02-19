import React from "react";
import "./productcard.css";
import { Button } from "react-bootstrap";
var blue = require("../../pages/images/blueOyster.jpg");

function ProductCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img src={blue} width="100%" />
        </div>
        <div className="col-md-9">
          <div className="card text-center">
            <div className="card-header">{props.name}</div>
            <div className="card-body">
              <div className="card-title"></div>
              <p className="card-text">{props.description}</p>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </div>
            <div className="card-footer text-muted">
              <div className="row">
                <div className="col-md-3">
                  Toxic | {props.toxic ? "YES" : "NO"}
                </div>
                <div className="col-md-3">Family | {props.family}</div>
                <div className="col-md-3">Genus | {props.genus}</div>
                <div className="col-md-3">Species | {props.species}</div>
              </div>
            </div>
<<<<<<< HEAD
            </div>
            </div>



            </div>
        
    )
};
=======
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> develop

export default ProductCard;
