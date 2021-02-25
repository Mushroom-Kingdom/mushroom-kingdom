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

    //   function handleMushroomSubmit(event) {
    //     event.preventDefault();
    //     const newMushroom = {
    //         name: mushroomName,
    //         image_url: mushroomImage,
    //         description: mushroomDescription,
    //         family: mushroomFamily,
    //         genus: mushroomGenus,
    //         species: mushroomSpecies,
    //     }
    //     API.saveMushroom(newMushroom).then(res => {
    //         context.getMushrooms();
    //         setModalIsOpen(false);                      
    //       }).catch(err => console.log(err));
    // }

    return (
    <>
        <button onClick={() => setModalIsOpen(true)}>Add Mushroom</button>

        <Modal isOpen={modalIsOpen}>          
          <h3>Enter Mushroom Details</h3>
          <br />
          <br />
          <input placeholder={props.name} onChange={(event) => setMushroomName(event.target.value)}></input>
          <br />
          <br />
          <textarea id="desc" placeholder="Description" onChange={(event) => setMushroomDescription(event.target.value)}></textarea>
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
          <input placeholder="Family" onChange={(event) => setMushroomFamily(event.target.value)}></input>
          <br />
          <br />
          <input placeholder="Genus" onChange={(event) => setMushroomGenus(event.target.value)}></input>
          <br />
          <br />
          <input placeholder="Species" onChange={(event) => setMushroomSpecies(event.target.value)}></input>
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