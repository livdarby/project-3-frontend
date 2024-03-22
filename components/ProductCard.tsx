import { Link } from "react-router-dom";
import { IProduct } from "../interfaces/productInterface";
import React from "react";

function Product({ _id, title, image, price }: IProduct) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/product/${_id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{title}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={image} alt={title} />
            </figure>
          </div>
          <div className="card-content">
            <h5>£{price}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
