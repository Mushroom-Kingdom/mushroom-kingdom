import React, {useContext} from "react";
import AuthenticationContext from "../../contexts/AuthenticationContext";
import MushroomContext from "../../contexts/MushroomContext";
import API from "../../utils/API";
import "./productcard.css";

var blue = require("../../pages/images/blueOyster.jpg");

function ProductCard(props) {

  const auth = useContext(AuthenticationContext);
  const mushroom = useContext(MushroomContext);

  function handleDelete() {
    const mushroomID = props.id;
    console.log(mushroomID);
    API.deleteMushroom(mushroomID).then(res => {
      mushroom.getMushrooms();
    });
  }
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img src={blue} width="100%" />
        </div>
        <div className="col-md-9">
          <div className="card text-center">
            <div className="card-header">{props.name}{auth.isAdmin && (<button onClick={handleDelete} className="btn btn-danger float-right"><i className="fas fa-trash-alt"></i></button>)}{auth.isAdmin && (<button className="btn btn-info float-right"><i className="fas fa-edit"></i></button>)}</div>
            <div className="card-body">
              <div className="card-title"></div>
              <p className="card-text">{props.description}</p>
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
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default ProductCard;
