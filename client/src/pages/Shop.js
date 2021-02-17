import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import "./css/shop.css";
import API from "../utils/API";
import mushroomContext from "../contexts/mushroomContext";

async function Shop() {
  const [mushrooms, setMushrooms] = useState([]);
  const mushContext = useContext(mushroomContext);

  // Load all mushrooms and store them with setMushrooms
  useEffect(() => {
    API.getMushroom()
      .then((res) => {
        console.log(res);
        setMushrooms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <mushroomContext.Provider
      value={{
        mushrooms: mushrooms
      }}
    >
    <div className="shop">
      <div className="container">
        {mushContext.mushrooms.map((mushroom) => {
          return(
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
            ></ProductCard>
            )
        })}
      </div>
    </div>
    </mushroomContext.Provider>
  );
}

export default Shop;
