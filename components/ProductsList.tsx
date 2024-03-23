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
      {/* Search Bar */}
      <div className="level-item ">
        <input
          className="input is-light is-rounded is-focused mr-2"
          placeholder="Search Product ⌚️"
          type="text"
          // value={searchPlant}
          // onChange={handleChange}
          id="eshopSearch"
          name="eshopSearch"
        />
        {/* Search Button*/}
        <button
          className="button is-light is-rounded"
          // onClick={handleSearchClick}
        >
          🔍
        </button>
      </div>
      {/* Full Product List */}
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
