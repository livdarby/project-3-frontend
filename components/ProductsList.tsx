import React from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "../interfaces/productInterface";

type Products = null | Array<IProduct>;

function ProductsList() {
  // const [category, setCategory] = React.useState<any>([]);
  const [products, setProducts] = React.useState<Products>([]);
  const [search, setSearch] = React.useState("");
  const [value, setValue] = React.useState("");

  // FUNCTION TO RETURN ALL DATA
  React.useEffect(() => {
    async function fetchProducts() {
      const resp = await fetch("/api/products");
      const data = await resp.json();
      console.log("fetch 1", data);
      setProducts(data);
    }
    fetchProducts();
  }, []);
  console.log(products);
  console.log(
    "this is the products",
    products?.map((product) => {
      return product.category;
    })
  );

  function handleDropdownChange(e: any) {
    setValue(e.currentTarget.value);
  }
  function handleSearchBarChange(e: any) {
    setSearch(e.currentTarget.value);
  }

  const dropdownCategoryOptions = [
    { label: "Select Category", value: "" },
    { label: "Pastries", value: "pastries" },
    { label: "Cheese", value: "Cheese" },
    { label: "Meat", value: "meat" },
  ];

  function filterProducts() {
    return products?.filter((product: any) => {
      return (
        (search === "" ||
          product.title.toLowerCase().includes(search.toLowerCase())) &&
        (value === "" || product.category.includes(value))
      );
    });
  }
  console.log("value in drop down", value);
  return (
    <section className="section">
      {/* Full Product List */}
      <div className="container">
        {/* Search bar */}
        <input
          className="column is-two-third input mb-4 "
          placeholder="Search product.."
          onChange={handleSearchBarChange}
        />
        {/* Drop down */}
        <label className="column drop select is-info mb-4 p-0">
          <select value={value} onChange={handleDropdownChange}>
            {dropdownCategoryOptions.map((option: any) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </label>
        <div className="columns is-multiline">
          {filterProducts()?.map((product: any) => {
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
