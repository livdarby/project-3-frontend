import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserSignup() {
  const navigate = useNavigate();
  //we have to set state for the user. here we can set the state for all 4 inputs. the state should start with an empty string.
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorData, setErrorData] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e: any) {
    setErrorData({
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    });
    // we can store the input from the desired target through the name. which we defined in the actual input
    const fieldName = e.target.name;
    //to mutate this we have to clone because react will cry
    const newFormData = structuredClone(formData);
    //here we can set the form data to what in the e.target.name
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
  }

  console.log(formData);

  async function handleSubmit(e: SyntheticEvent) {
    try {
      e.preventDefault();
      const resp = await axios.post("/api/signup", formData);
      console.log(resp.data);
      navigate("/login");
    } catch (e: any) {
      setErrorData(e.response.data.errors);
      console.log(errorData);
    }
  }

  console.log("errors:", errorData);

  return (
    <div className="section">
      <div className="container">
        {/* As its a form we have to do an onsubmit rather than on onclick */}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name={"userName"}
                // call the handle change function on an onchange
                onChange={handleChange}
                // here is where we target the user in the state
                value={formData.userName}
              />
              {errorData.userName && (
                <small className="has-text-danger">{errorData.userName}</small>
              )}
            </div>
          </div>
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
              {errorData.email && (
                <small className="has-text-danger">{errorData.email}</small>
              )}
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
              {errorData.password && (
                <small className="has-text-danger">{errorData.password}</small>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name={"confirmPassword"}
                onChange={handleChange}
                value={formData.confirmPassword}
              />
              {errorData.confirmPassword && (
                <small className="has-text-danger">
                  {errorData.confirmPassword}
                </small>
              )}
            </div>
          </div>
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
}
