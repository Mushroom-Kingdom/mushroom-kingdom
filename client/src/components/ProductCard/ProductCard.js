import React from 'react'
import './productcard.css'
import { Card, Button } from 'react-bootstrap';
var blue = require('../../pages/images/blueOyster.jpg');

var array = {
    
        name: "Blue Oyster", //name of mushroom
        image_url: "placeholderURL.com", //image of mushroom
        description:
          "Blue Oyster mushrooms are part of the Pleurotaceae family along with their siblings, the Gold and Pink Oyster mushrooms! They are very healthy, containing high amounts of niacin, riboflavin and pantothenic acid. On top of this, they are nearly fat free and high in protein. These mushrooms, being the superfood that they are, are very fortunately highly dynamic with regard to their uses in the kitchen.", //description of mushroom
        family: "Pleurotaceae", //family of mushroom
        genus: "Pleurotus", //genus of mushroom
        species: "Columbinus", //species of mushroom
        price: 10, //price of mushroom -> integer
        available: true, //quantity of -> boolean true / false
        toxic: false, //toxic of mushroom -> boolean true / false
      
}


function ProductCard() {
    return (
        <div>
            <div className='container'>
                <div className="row">
                <div className="col-md-3">
                    <img src={blue} width="100%" />
                </div>
            <div className="col-md-9">
            <Card className="text-center">
              <Card.Header>Blue Oyster</Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                Blue Oyster mushrooms are part of the Pleurotaceae family along with their siblings, the Gold and Pink Oyster mushrooms! They are very healthy, containing high amounts of niacin, riboflavin and pantothenic acid. On top of this, they are nearly fat free and high in protein. These mushrooms, being the superfood that they are, are very fortunately highly dynamic with regard to their uses in the kitchen.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              <Card.Footer className="text-muted">
                  <div className="row">
                        <div className="col-md-3">
                        Toxic | NO
                        </div>
                        <div className="col-md-3">
                        Family | Pleurotaceae
                        </div>
                        <div className="col-md-3">
                        Genus | Pleurotus 
                        </div>
                        <div className="col-md-3">
                        Species | Columbinus 
                        </div>
                  </div>
              </Card.Footer>
            </Card>
            </div>
            </div>



            </div>
        </div>
    )
}

export default ProductCard;
