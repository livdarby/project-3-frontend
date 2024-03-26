import { Link } from "react-router-dom";
import React from "react";

interface SellerProductCardProps {
  title: string;
  image: string;
  unitsSold: number;
  _id: number;
}

function SellerProductCard({
  title,
  image,
  unitsSold,
  _id,
}: SellerProductCardProps) {
  console.log(title, image, unitsSold, _id);

  return (
    <div className="card is-mobile">
      <Link to={`/product/${_id}`}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">Units Sold: {unitsSold}</div>
        </div>
      </Link>
    </div>
  );
}

export default SellerProductCard;
