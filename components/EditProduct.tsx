import axios from "axios";
import React, { SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../interfaces/productInterface";

function EditProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();
  console.log(productId);

  const [formData, setFormData] = React.useState<IProduct>({
    title: "",
    price: Number(""),
    image: "",
    description: "",
    category: "",
    user: "",
    unitsSold: Number(""),
    _id: "",
    reviews: [],
  });

  console.log(formData);

  React.useEffect(() => {
    async function fetchProducts() {
      const resp = await fetch(`/api/products/${productId}`);
      const productData = await resp.json();
      setFormData(productData);
    }
    fetchProducts();
  }, []);

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const resp = await axios.put(`/api/products/${productId}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    navigate(`/product/${productId}`);
  }

  function handleChange(e: any) {
    const fieldName = e.currentTarget.name;
    const newFormData: any = structuredClone(formData);
    if (newFormData)
      newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
  }

  return (
    <div className="section has-background-link">
      <p className="title has-text-centered mb-5"> Edit your product here ✍️</p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                className="input is-rounded"
                type="text"
                name={"title"} // ! Updating name field to the right name
                onChange={handleChange}
                value={formData.title} // ! Updating the value to the right bit of formData
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                className="input is-rounded"
                type="text"
                name={"price"} // ! Updating name field to the right name
                onChange={handleChange}
                value={formData.price} // ! Updating the value to the right bit of formData
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image URL</label>
            <div className="control">
              <input
                className="input is-rounded"
                type="text" // ! No longer a password field
                name={"image"} // ! Updating name field to the right name
                onChange={handleChange}
                value={formData.image} // !  Updating the value to the right bit of formData
              />
            </div>
          </div>
          <div className="field is-rounded">
            <label className="label">Description</label>
            <div className="control">
              <input
                className="input is-rounded"
                type="text" // ! No longer a password field
                name={"description"} // ! Updating name field to the right name
                onChange={handleChange}
                value={formData.description} // !  Updating the value to the right bit of formData
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Category</label>
            <div className="control">
              <input
                className="input is-rounded"
                type="text"
                name={"category"} // ! Updating name field to the right name
                onChange={handleChange}
                value={formData.category} // ! Updating the value to the right bit of formData
              />
            </div>
          </div>
          <button className="button is-rounded is-light mt-5">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
