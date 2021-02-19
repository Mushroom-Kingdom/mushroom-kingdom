import API from "../utils/API";
import React, {useState, useEffect} from "react"
import ProductCard from "../components/ProductCard/ProductCard";
import './css/shop.css';



function Shop() {
    const [mushrooms, setMushrooms] = useState([]);

    useEffect(() => {
      API.getMushrooms().then(res => {
        setMushrooms(res.data);
      });

    }, []);

    

    return (
        <div className="shop">       
            <div className="container">
                {mushrooms.map(mushroom => {
                    return (
                        <ProductCard
                            key={mushroom._id}
                            name={mushroom.name}
                            description={mushroom.description}
                            family={mushroom.family} 
                            genus={mushroom.genus} 
                            species={mushroom.species} 
                            toxic={mushroom.toxic}>
                        </ProductCard>                    
                     )
                })}                
            </div>
        </div>            
    )
}

export default Shop;