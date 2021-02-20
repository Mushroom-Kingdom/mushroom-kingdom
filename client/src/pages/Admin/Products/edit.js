import React, { useState, useEffect,useContext } from "react";
import Modal from 'react-modal';
import ProductCard from "../../../components/ProductCard/ProductCard";
import mushroomcontext from "../../../contexts/mushroomcontext";
import API from "../../../utils/API";


function edit(props) {
    console.log(props)
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

export default edit;