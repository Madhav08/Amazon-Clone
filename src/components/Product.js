import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Basket >>>", basket)
  const addToBasket = () => {
    
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                
                <span role="img">⭐</span>
              
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
