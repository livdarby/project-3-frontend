import { SyntheticEvent, useState } from "react";
import axios from "axios";
// ! This will navigate the page when the user logs in
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Login({ fetchUser }: { fetchUser: Function }) {
  // ! navigate is a function to call to take the user to another page.
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
  }

  console.log(formData);

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault(); // prevent the page from refreshing

    // ! We're going to use axios to post instead of fetch, just because its a bit nicer.
    const resp = await axios.post("/api/login", formData);
    //here we are storing the token in local storage
    localStorage.setItem("token", resp.data.token);
    console.log(resp.data);
    // ! resp.data always contains the data in an axios request.
    //we need to fetch the user inside here to fix the bug of when you log in it should automatically show you the routes available to you
    fetchUser();
    navigate("/");
  }

  return (
    <div className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name={"email"}
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name={"password"}
                onChange={handleChange}
                value={formData.password}
              />
            </div>
          </div>
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
}
