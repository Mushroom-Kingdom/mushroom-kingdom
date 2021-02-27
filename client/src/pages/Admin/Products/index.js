import React, { useState, useEffect, useContext } from "react";
import Modal from "react-modal";
import {Link} from "react-router-dom";
import ProductCard from "../../../components/ProductCard/ProductCard";
import AuthenticationContext from "../../../contexts/AuthenticationContext";
import MushroomContext from "../../../contexts/MushroomContext";
import API from "../../../utils/API";
import './style.css';

function AdminProducts() {
  // Modal State variables
  const [modalIsOpen, setModalIsOpen] = useState(false); 

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
  const auth = useContext(AuthenticationContext);

  useEffect(() => {
    context.getMushrooms();
  }, []);

  const uploadImage = () => {
    console.log(imageSelected);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "iuzrd2er");

    API.uploadImage(formData).then(result => {
      setMushroomImage(result.data.secure_url);
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
    API.saveMushroom(newMushroom, auth.token)
      .then((res) => {
        context.getMushrooms();
        setModalIsOpen(false);
      })
      .catch((err) => console.log(err));
  }


  return (
    <section className="dashboard">
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <h2 className="navbar-brand col-sm-3 col-md-2 mr-0">Mushroom-Kingdom</h2>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button className="btn btn-dark" onClick={auth.logout}>Sign out</button>
          </li>
        </ul>
      </nav>

    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link"><i className="fas fa-home"></i> Dashboard</Link>               
              </li>
              <li className="nav-item">
                <Link to="/admin/orders" className="nav-link"><i className="fas fa-file"></i> Orders</Link>               
              </li>
              <li className="nav-item">
                <Link to="/admin/products" className="nav-link"><i className="fas fa-box"></i> Products</Link>                
              </li>             
            </ul>            
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Products</h1>           
          </div>  
          
         <section className="Product">
            <button className="btn btn-dark" onClick={() => setModalIsOpen(true)}>
                Add Mushroom
            </button>

            <Modal 
              isOpen={modalIsOpen} 
              ariaHideApp={false}
              className="AddModalClass"
              //overlayClassName="AddOverlay"
            >
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
      
         </section>

        </main>
      </div>
    </div>      
    </section>
  );
}

export default AdminProducts;
