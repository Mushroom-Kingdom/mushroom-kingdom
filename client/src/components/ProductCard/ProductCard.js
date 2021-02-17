import React from "react";
import "./productcard.css";
import { Card, Button } from "react-bootstrap";
var blue = require("../../pages/images/blueOyster.jpg");

function ProductCard(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={props.image_url} width="100%" />
          </div>
          <div className="col-md-9">
            <Card className="text-center">
              <Card.Header>{props.name}</Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>{props.description}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              <Card.Footer className="text-muted">
                <div className="row">
                  <div className="col-md-3">
                    Toxic | {props.toxic ? "Yes" : "No"}
                  </div>
                  <div className="col-md-3">Family | {props.family}</div>
                  <div className="col-md-3">Genus | {props.genus}</div>
                  <div className="col-md-3">Species | {props.species}</div>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
