import React, { useContext, useState } from "react";
import AuthenticationContext from "../../contexts/AuthenticationContext";
import MushroomContext from "../../contexts/MushroomContext";
import API from "../../utils/API";
import "./productcard.css";
import Modal from "react-modal";

// var blue = require("../../pages/images/blueOyster.jpg");
let existingMushroom = {};

function ProductCard(props) {  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [mushroomName, setMushroomName] = useState("");
  const [mushroomDescription, setMushroomDescription] = useState("");
  const [mushroomImage, setMushroomImage] = useState(""); // change this later
  const [mushroomFamily, setMushroomFamily] = useState("");
  const [mushroomGenus, setMushroomGenus] = useState("");
  const [mushroomSpecies, setMushroomSpecies] = useState("");
  const [mushroomIsToxic, setMushroomIsToxic] = useState(false);

  // Context state variables
  const auth = useContext(AuthenticationContext);
  const context = useContext(MushroomContext);

  function handleDelete() {
    const mushroomID = props.id;
    API.deleteMushroom(mushroomID, auth.token).then((res) => {
      context.getMushrooms();
    });
  }

  function handleEditButton() {
    setModalIsOpen(true);
    const mushroomID = props.id;
    existingMushroom = context.mushrooms.filter((mushroom) => {
      return mushroom._id === mushroomID;
    });
  }

  function handleEditSave() {
    if (mushroomName !== "") {
      existingMushroom[0].name = mushroomName;
    }
    if (mushroomDescription !== "") {
      existingMushroom[0].description = mushroomDescription;
    }
    if (mushroomFamily !== "") {
      existingMushroom[0].family = mushroomFamily;
    }
    if (mushroomGenus !== "") {
      existingMushroom[0].genus = mushroomGenus;
    }
    if (mushroomSpecies !== "") {
      existingMushroom[0].species = mushroomSpecies;
    }

    API.editMushroom(existingMushroom[0], auth.token)
      .then((res) => {
        setModalIsOpen(false);
        context.getMushrooms();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <Modal isOpen={modalIsOpen} ariaHideApp={false}>
        <h3>Enter Mushroom Details</h3>
        <br />
        <br />
        <input
          defaultValue={props.name}
          onChange={(event) => setMushroomName(event.target.value)}
        ></input>
        <br />
        <br />
        <textarea
          defaultValue={props.description}
          onChange={(event) => setMushroomDescription(event.target.value)}
        ></textarea>
        <br />
        <br />
        <select
          defaultValue={props.toxic}
          onChange={(event) => setMushroomIsToxic(event.target.value)}
        >
          <option>Toxic?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <br />
        <input
          defaultValue={props.family}
          onChange={(event) => setMushroomFamily(event.target.value)}
        ></input>
        <br />
        <br />
        <input
          defaultValue={props.genus}
          onChange={(event) => setMushroomGenus(event.target.value)}
        ></input>
        <br />
        <br />
        <input
          defaultValue={props.species}
          onChange={(event) => setMushroomSpecies(event.target.value)}
        ></input>
        <br />
        <br />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
        <button onClick={handleEditSave}>Save Changes</button>
        <br />
        <br />
      </Modal>
      <div className="row">
        <div className="col-md-3">
          <img src={props.image_url} width="250px" height="200px" />
        </div>
        <div className="col-md-9">
          <div className="card text-center">
            <h3 className="card-header">
              {props.name}
              {auth.isAdmin && (
                <button
                  onClick={handleDelete}
                  className="btn btn-danger float-right"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              )}
              {auth.isAdmin && (
                <button
                  onClick={handleEditButton}
                  className="btn btn-dark float-right"
                >
                  <i className="fas fa-edit"></i>
                </button>
              )}
            </h3>
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
      <br />
      <br />
    </div>
  );
}

export default ProductCard;
