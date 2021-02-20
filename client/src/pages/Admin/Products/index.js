import React, { useState, useEffect,useContext } from "react";
import Modal from 'react-modal';
import ProductCard from "../../../components/ProductCard/ProductCard";
import mushroomContext from "../../../contexts/MushroomContext";
import API from "../../../utils/API"; //just add

var image1 = require("../../images/blueOyster.jpg");

function AdminProducts() {  
    // Modal State variables
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Mushroom State variables
    const [mushroomName, setMushroomName] = useState("");
    const [mushroomDescription, setMushroomDescription] = useState("");
    const [mushroomImage, setMushroomImage] = useState(image1); // change this later
    const [mushroomFamily, setMushroomFamily] = useState("");
    const [mushroomGenus, setMushroomGenus] = useState("");
    const [mushroomSpecies, setMushroomSpecies] = useState("");
    const [mushroomIsToxic, setMushroomIsToxic] = useState(false);  
    
    // Context variables
    const context = useContext(mushroomContext);   

    useEffect(() => {
        context.getMushrooms();
      }, []);

    function handleMushroomSubmit(event) {
        event.preventDefault();
        const newMushroom = {
            name: mushroomName,
            image_url: mushroomImage,
            description: mushroomDescription,
            family: mushroomFamily,
            genus: mushroomGenus,
            species: mushroomSpecies,
        }
        API.saveMushroom(newMushroom).then(res => {
            context.getMushrooms();
            setModalIsOpen(false);                      
          }).catch(err => console.log(err));
    }   

    return (            
          <>
            <button onClick={() => setModalIsOpen(true)}>Add Mushroom</button>

            <Modal isOpen={modalIsOpen}>          
              <h3>Enter Mushroom Details</h3>
              <br />
              <br />
              <input placeholder="Name" onChange={(event) => setMushroomName(event.target.value)}></input>
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
              <button onClick={handleMushroomSubmit}>Save Changes</button>
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

export default AdminProducts;