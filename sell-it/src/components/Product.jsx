import React from "react";
import "../components/Product.css";

function Product({ title, image, price, rating }) {

  const addToBasket = () => {
    //Test
  }

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
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="The Lean Startup" />
 
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

// ⭐
