import React, { useState, useEffect,useContext } from "react";
import Modal from 'react-modal';
import ProductCard from "../../../components/ProductCard/ProductCard";
import MushroomContext from "../../../contexts/MushroomContext";
import API from "../../../utils/API";
import './style.css';

function edit(props) {
    console.log(props)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const mushroom = useContext(MushroomContext);

    useEffect(() => {
        context.getMushrooms();
      }, []);

    function handleEditSave(event) {
        event.preventDefault();

        const mushroomID = props.id;
        console.log(mushroomID);
  
        API.editMushroom(mushroomID).then(res => {
          mushroom.getMushrooms();
        });
      }    

    return (
    <>
        <button onClick={() => setModalIsOpen(true)}>Add Mushroom</button>

        <Modal isOpen={modalIsOpen}>          
          <h3>Enter Mushroom Details</h3>
          <br />
          <br />
          <input defaultValue={props.name} onChange={(event) => setMushroomName(event.target.value)}></input>
          <br />
          <br />
          <textarea id="desc" defaultValue={props.description} onChange={(event) => setMushroomDescription(event.target.value)}></textarea>
          <br />
          <br />
          <select placeholder="Toxicity" onChange={(event) => setMushroomIsToxic(event.target.value)}>
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
          <input defaultValue={props.family} onChange={(event) => setMushroomFamily(event.target.value)}></input>
          <br />
          <br />
          <input defaultValue={props.genus} onChange={(event) => setMushroomGenus(event.target.value)}></input>
          <br />
          <br />
          <input defaultValue={props.species} onChange={(event) => setMushroomSpecies(event.target.value)}></input>
          <br />
          <br />
          <button onClick={() => setModalIsOpen(false)}>Close</button>
          <button onClick={handleEditSave}>Save Changes</button>
          <br />
          <br />
        </Modal >
        <div className="shop">
          <div className="container">
            {context.mushrooms.map((mushroom) => {
              return (
                <ProductCard
                  id={mushroom._id}
                  key={mushroom._id}
                  name={mushroom.name}
                  description={mushroom.description}
                  family={mushroom.family}
                  genus={mushroom.genus}
                  species={mushroom.species}
                  toxic={mushroom.toxic}
                ></ProductCard>

              );
            })}
          </div>
        </div>     
    </>
    )
}

export default edit;