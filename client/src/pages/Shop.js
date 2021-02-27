import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import "./css/shop.css";
import { Link } from "react-router-dom";
import API from "../utils/API";
import MushroomContext from "../contexts/MushroomContext";
import {Button} from 'react-bootstrap';

function Shop() {
  const [mushrooms, setMushrooms] = useState([]);

  useEffect(() => {
    API.getMushrooms().then((res) => {
      setMushrooms(res.data);
    });
  }, []);

  return (
    <div className="shop">
      <div className="row">
      <div className="col-md-2"></div>
        <div className="col-md-8">
          <Link to="/order"><Button id="but" variant="success">Order</Button></Link>
        </div>
        </div>
      <div className="container theList">
        {mushrooms.map((mushroom) => {
          return (
            <ProductCard
              key={mushroom._id}
              name={mushroom.name}
              description={mushroom.description}
              image_url={mushroom.image_url}
              family={mushroom.family}
              genus={mushroom.genus}
              species={mushroom.species}
              toxic={mushroom.toxic}
            ></ProductCard>

          );
        })}
      </div>
    </div>
  );
}

export default Shop;
