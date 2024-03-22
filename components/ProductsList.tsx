import React from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "../interfaces/productInterface";

type Products = null | Array<IProduct>;

function ProductsList() {
  const [products, setProducts] = React.useState<Products>(null);

  React.useEffect(() => {
    async function fetchProducts() {
      const resp = await fetch("/api/products");
      const data = await resp.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {products?.map((product) => {
            return (
              <ProductCard
                key={product._id}
                // ! Pass all properties, don't have to declar them individually.
                {...product}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
