import React, { useState, useEffect, useContext } from "react";
import Modal from "react-modal";
import ProductCard from "../../../components/ProductCard/ProductCard";
import MushroomContext from "../../../contexts/MushroomContext";
import API from "../../../utils/API"; //just add
// import Cloudinary from "../../../components/CloudinaryContext/index";
import "./style.css";

// var image1 = require("../../images/blueOyster.jpg");

function AdminProducts(props) {
  // Modal State variables
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const mushroom = useContext(MushroomContext);

  // Mushroom State variables
  const [imageSelected, setImageSelected] = useState("");
  const [mushroomName, setMushroomName] = useState("");
  const [mushroomDescription, setMushroomDescription] = useState("");
  const [mushroomImage, setMushroomImage] = useState("");
  const [mushroomFamily, setMushroomFamily] = useState("");
  const [mushroomGenus, setMushroomGenus] = useState("");
  const [mushroomSpecies, setMushroomSpecies] = useState("");
  const [mushroomIsToxic, setMushroomIsToxic] = useState(false);

  // Context variables
  const context = useContext(MushroomContext);

  useEffect(() => {
    context.getMushrooms();
  }, []);

  const uploadImage = () => {
    console.log(imageSelected);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "iuzrd2er");

    API.uploadImage(formData).then((result) => {
      console.log(result.data.secure_url);
      setMushroomImage(
        "https://res.cloudinary.com/djdhvwysz/image/upload/v1614315492/b6zw8q7mg4tjchrplyed.jpg"
      );
      console.log(mushroomImage);
    });
  };

  function handleMushroomSubmit(event) {
    event.preventDefault();
    const newMushroom = {
      name: mushroomName,
      image_url: mushroomImage,
      description: mushroomDescription,
      family: mushroomFamily,
      genus: mushroomGenus,
      species: mushroomSpecies,
    };
    API.saveMushroom(newMushroom)
      .then((res) => {
        context.getMushrooms();
        setModalIsOpen(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="Product">
      <button className="add" onClick={() => setModalIsOpen(true)}>
        Add Mushroom
      </button>

      <Modal isOpen={modalIsOpen} ariaHideApp={false}>
        <h3>Enter Mushroom Details</h3>
        <br />
        <br />
        <input
          type="file"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload Image</button>
        <br />
        <br />
        <input
          placeholder="Name"
          onChange={(event) => setMushroomName(event.target.value)}
        ></input>
        <br />
        <br />
        <textarea
          id="desc"
          placeholder="Description"
          onChange={(event) => setMushroomDescription(event.target.value)}
        ></textarea>
        <br />
        <br />
        <select
          placeholder="Toxicity"
          onChange={(event) => setMushroomIsToxic(event.target.value)}
        >
          <option>Toxic?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <br />
        <br />
        <input
          placeholder="Family"
          onChange={(event) => setMushroomFamily(event.target.value)}
        ></input>
        <br />
        <br />
        <input
          placeholder="Genus"
          onChange={(event) => setMushroomGenus(event.target.value)}
        ></input>
        <br />
        <br />
        <input
          placeholder="Species"
          onChange={(event) => setMushroomSpecies(event.target.value)}
        ></input>
        <br />
        <br />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
        <button onClick={handleMushroomSubmit}>Save Changes</button>
        <br />
        <br />
      </Modal>
      <div className="shop">
        <div className="container">
          {context.mushrooms.map((mushroom) => {
            return (
              <ProductCard
                id={mushroom._id}
                key={mushroom._id}
                image_url={mushroom.image_url}
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
    </div>
  );
}

export default AdminProducts;
