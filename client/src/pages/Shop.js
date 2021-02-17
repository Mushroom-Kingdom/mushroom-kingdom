import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import "./css/shop.css";
import API from "../utils/API";

async function Shop() {
  const [mushrooms, setMushrooms] = useState([]);

  // Load all mushrooms and store them with setMushrooms
  useEffect(() => {
    API.getMushroom()
      .then((res) => {
        setMushrooms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="shop">
      <div className="container">
        {mushrooms.map((mushroom) => {
          <ProductCard
            key={mushroom._id}
            name={mushroom.name}
            description={mushroom.description}
            imageUrl={mushroom.image_url}
            toxic={mushroom.toxic}
            family={mushroom.family}
            genus={mushroom.genus}
            species={mushroom.species}
            available={mushroom.available}
            price={mushroom.price}
          ></ProductCard>;
        })}
      </div>
    </div>
  );
}

export default Shop;
