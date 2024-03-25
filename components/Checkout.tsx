import React from "react";
import { IProduct } from "../interfaces/productInterface";

function Checkout({ price, title }: IProduct) {
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [selectTermsAndConditions, setSelectTermsAndConditions] =
    React.useState(false);

  function selectCountry(e: any) {
    const country = e.currentTarget.value;
    setSelectedCountry(country);
    console.log(country);
  }

  const deliveryCost =
    selectedCountry === "united-kingdom" ? 0 : selectedCountry ? 10.99 : 0;
  const totalPrice = (price + deliveryCost).toFixed(2);
  console.log(totalPrice);

  function conditions() {
    if (!selectTermsAndConditions) {
      setSelectTermsAndConditions(true);
    } else {
      setSelectTermsAndConditions(false);
    }
  }

  return (
    <>
      <hr></hr>
      <div className="field mt-5">
        <label className="label">Name</label>
        <div className="control">
          <input type="text" placeholder="Enter name here" className="input" />
        </div>
      </div>

      <div className="field mt-5">
        <label className="label">Email</label>
        <div className="control">
          <input type="text" placeholder="Enter name here" className="input" />
        </div>
      </div>

      <div className="field mt-5">
        <label className="label">Card Number</label>
        <div className="control">
          <input
            type="text"
            placeholder="16 digit card number"
            className="input"
          />
        </div>
      </div>

      <div className="field mt-5 is-grouped">
        <div className="control">
          <label className="label">Expiry Date</label>
          <div className="control">
            <input type="text" placeholder="DD/MM/YY" className="input" />
          </div>
        </div>
        <div className="control">
          <label className="label">CVC</label>
          <div className="control">
            <input type="text" placeholder="123" className="input" />
          </div>
        </div>
      </div>

      <div className="field mt-5">
        <label className="label">Delivery Address</label>
        <div className="control">
          <input
            type="text"
            placeholder="House name/number"
            className="input mt-1"
          />
          <input type="text" placeholder="Street" className="input mt-1" />
          <input type="text" placeholder="Town/city" className="input mt-1" />
          <input type="text" placeholder="Postcode" className="input mt-1" />
        </div>
      </div>
      <div className="field mt-1">
        <p className="control has-icons-left">
          <span className="select">
            <select onChange={selectCountry}>
              <option value="" selected disabled>
                Country
              </option>
              <option value="andorra">Andorra</option>
              <option value="austria">Austria</option>
              <option value="Belarus">Belarus</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Croatia">Croatia</option>
              <option value="Cyprus">Cyprus</option>
              <option value="czech-republic">Czech Republic</option>
              <option value="denmark">Denmark</option>
              <option value="estonia">Estonia</option>
              <option value="finland">Finland</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Greece">Greece</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle-of-Man">Isle of Man</option>
              <option value="Italy">Italy</option>
              <option value="Latvia">Latvia</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Norway">Norway</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="south-africa">South Africa</option>
              <option value="spain">Spain</option>
              <option value="sweden">Sweden</option>
              <option value="switzerland">Switzerland</option>
              <option value="turkey">Turkey</option>
              <option value="united-kingdom">United Kingdom</option>
              <option value="united-states">United States</option>
            </select>
          </span>
          <span className="icon is-small is-left">🌐</span>
        </p>
      </div>
      <hr />
      <p className="subtitle is-3 mt-5">Total</p>
      <p className="mt-2">
        <strong>{title}: </strong>£<span>{price.toLocaleString()}</span>
      </p>
      <p>
        <strong>Delivery: </strong>£<span>{deliveryCost.toLocaleString()}</span>
      </p>
      <p>
        <strong>Total: </strong>£
        <span>{Number(totalPrice).toLocaleString()}</span>
      </p>

      <div className="field mt-5">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" onClick={conditions} /> I agree to the{" "}
            <a className="terms-and-conditions" href="#">
              terms and conditions
            </a>
          </label>
        </div>
      </div>
      {selectTermsAndConditions && (
        <button className="button is-link mt-5">Complete Purchase</button>
      )}
    </>
  );
}

export default Checkout;
