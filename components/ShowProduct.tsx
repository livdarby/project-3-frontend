import React, { SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../interfaces/productInterface";
import Product from "./ProductCard";
import { IUser } from "../interfaces/userInterface";
import axios from "axios";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";

function ShowProduct({ user }: { user: null | IUser }) {
  const [product, setProducts] = React.useState<IProduct | null>(null);
  const [purchasedProduct, setPurchasedProduct] = React.useState<string | null>(
    null
  );
  const { productId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log("An individual product Page has mounted");
  }, []);

  React.useEffect(() => {
    async function fetchProducts() {
      const resp = await fetch(`/api/products/${productId}`);
      const productData = await resp.json();
      setProducts(productData);
    }
    fetchProducts();
  }, []);

  async function deleteMovie(e: SyntheticEvent) {
    try {
      const token = localStorage.getItem("token");
      await axios.delete("/api/products/" + productId, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/sellerhome");
    } catch (e: any) {
      console.log(e.response.data);
    }
  }

  function editProduct() {
    <Link to="/edit"></Link>;
  }

  function buyButton() {
    if (productId) {
      setPurchasedProduct(productId);
    }
  }

  console.log(user);

  const [sellerName, setSellerName] = React.useState(null);

  async function fetchSeller() {
    const res = await fetch(`/api/findSellerName/${productId}`);
    const userData = await res.json();
    console.log(userData);
    setSellerName(userData.userName);
  }

  React.useEffect(() => {
    fetchSeller();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {product && <Product key={product._id} {...product} />}
        </div>
        <div className="mb-3">Seller: {sellerName}</div>
        {product && user?._id === product.user && (
          <button onClick={deleteMovie} className="button is-danger">
            Delete
          </button>
        )}
        {product && user?._id === product.user && (
          <Link to={`/editproduct/${productId}`}>
            <button className="button is-info">Edit</button>
          </Link>
        )}
        <button onClick={buyButton} className="button is-primary">
          Buy Now!
        </button>
        {purchasedProduct && product && <Checkout {...product} />}
      </div>
    </section>
  );
}

export default ShowProduct;
