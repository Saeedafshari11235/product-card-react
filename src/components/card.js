import React from "react";
import productPic from "./product_pic.webp";
import "./card.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
      buyClass: "show",
      quantityClass: "hidden",
    };

    this.increaseProduct = this.increaseProduct.bind(this);
    this.decreaseProduct = this.decreaseProduct.bind(this);
  }

  increaseProduct() {
    this.setState((prev) => {
      return {
        quantity: prev.quantity + 1,
        buyClass: "hidden",
        quantityClass: "show",
      };
    });
  }

  decreaseProduct() {
    this.setState((prev) => {
      return {
        quantity: prev.quantity - 1 >= 0 ? prev.quantity - 1 : 0,
        buyClass: prev.quantity === 1 ? "show" : "hidden",
        quantityClass: prev.quantity !== 1 ? "show" : "hidden",
      };
    });
  }

  render() {
    return (
      <div className="card">
        <div className="image-container">
          <img src={productPic} alt="product" />
        </div>
        <div className="title-container">
          <h4>{this.props.title}</h4>
        </div>
        <div className="num-container">
          <div className="score-container">
            <span>{this.props.score}⭐</span>
          </div>
          <div className="price-container">
            <span>{this.props.price} T</span>
          </div>
        </div>
        <div className="buttons-container">
          <button
            className={`buy ${this.state.buyClass}`}
            onClick={this.increaseProduct}
          >
            Add to cart
          </button>
          <button
            className={`quantity ${this.state.quantityClass}`}
            onClick={this.decreaseProduct}
          >
            -
          </button>
          <span className={`${this.state.quantityClass}`}>
            {this.state.quantity}
          </span>
          <button
            className={`quantity ${this.state.quantityClass}`}
            onClick={this.increaseProduct}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
