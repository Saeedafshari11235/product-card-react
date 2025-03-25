import React from "react";
import productPic from "./product_pic.webp";
import "./card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="image-container">
        <img src={productPic} alt="product" />
      </div>
      <div className="title-container">
        <h4>headphone headphone headphone</h4>
      </div>
      <div className="num-container">
        <div className="score-container">
          <span>5⭐</span>
        </div>
        <div className="price-container">
          <span>{10_000_000} T</span>
        </div>
      </div>
      <div className="buttons-container">
        <button>Add to cart</button>
      </div>
    </div>
  );
}
