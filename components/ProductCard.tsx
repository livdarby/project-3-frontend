import { Link } from "react-router-dom";
import { IProduct } from "../interfaces/productInterface";

function Product({ _id, title, image, price, user }: IProduct) {
  return (
    <div className="card is-mobile mt-4 mb-3">
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
          <div className="content">£{price}</div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
