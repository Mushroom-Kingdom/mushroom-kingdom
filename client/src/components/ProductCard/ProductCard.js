import React, {useContext, useState} from "react";
import AuthenticationContext from "../../contexts/AuthenticationContext";
import MushroomContext from "../../contexts/MushroomContext";
import API from "../../utils/API";
import "./productcard.css";
import Modal from 'react-modal';

var blue = require("../../pages/images/blueOyster.jpg");

function ProductCard(props) {

  const auth = useContext(AuthenticationContext);
  const mushroom = useContext(MushroomContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [mushroomName, setMushroomName] = useState("");
  const [mushroomDescription, setMushroomDescription] = useState("");
  const [mushroomImage, setMushroomImage] = useState(blue); // change this later
  const [mushroomFamily, setMushroomFamily] = useState("");
  const [mushroomGenus, setMushroomGenus] = useState("");
  const [mushroomSpecies, setMushroomSpecies] = useState("");
  const [mushroomIsToxic, setMushroomIsToxic] = useState(false);  

  function handleDelete() {
    const mushroomID = props.id;
    console.log(mushroomID);
    API.deleteMushroom(mushroomID).then(res => {
      mushroom.getMushrooms();
    });
  }

  function handleEditButton() {
    setModalIsOpen(true)
    const mushroomID = props.id;
    const existingMushroom = mushroom.mushrooms.filter(mushroom => {
      return (
        mushroom._id === mushroomID
      )
      
    })
    console.log(existingMushroom[0])
    console.log(mushroomID);
    API.getMushrooms(mushroomID).then(res => {

    })
  }
  function handleEditSave() {
    const mushroomID = props.id;
    console.log(mushroomID);

    API.editMushroom(mushroomID).then(res => {
      mushroom.getMushrooms();
    });
  }
  // name: mushroomName,
  // image_url: mushroomImage,
  // description: mushroomDescription,
  // family: mushroomFamily,
  // genus: mushroomGenus,
  // species: mushroomSpecies,
  return (
    <div className="container">
      <Modal isOpen={modalIsOpen}>          
        <h3>Enter Mushroom Details</h3>
        <br />
        <br />
        <input value={props.name} onChange={(event) => setMushroomName(event.target.value)}></input>
        <br />
        <br />
        <textarea id="desc" value={props.description} onChange={(event) => setMushroomDescription(event.target.value)}></textarea>
        <br />
        <br />
        <select value={props.toxic} onChange={(event) => setMushroomIsToxic(event.target.value)}>
            <option>
                Toxic?
            </option>
            <option value="true">
                Yes
            </option>
            <option value="false">
                No
            </option>
        </select>
        <br />
        <br />
        <input value={props.family} onChange={(event) => setMushroomFamily(event.target.value)}></input>
        <br />
        <br />
        <input value={props.genus} onChange={(event) => setMushroomGenus(event.target.value)}></input>
        <br />
        <br />
        <input value={props.species} onChange={(event) => setMushroomSpecies(event.target.value)}></input>
        <br />
        <br />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
        <button onClick={handleEditSave}>Save Changes</button>
        <br />
        <br />
      </Modal >
      <div className="row">
        <div className="col-md-3">
          <img src={blue} width="100%" />
        </div>
        <div className="col-md-9">
          <div className="card text-center">
            <div className="card-header">{props.name}{auth.isAdmin && (<button onClick={handleDelete} className="btn btn-danger float-right"><i className="fas fa-trash-alt"></i></button>)}{auth.isAdmin && (<button onClick={handleEditButton} className="btn btn-info float-right"><i className="fas fa-edit"></i></button>)}</div>
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
