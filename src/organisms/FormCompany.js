import React, { useState } from "react";
import { TextInput } from "../organisms/input";
import { createCompany } from "../redux/action/company";
import { getState } from "../redux/store";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
function FormCompany() {
  const [state, dispatch] = getState();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [revenue, setRevenue] = useState("");
  const [phone, setPhone] = useState("");

  const [name_error, setNameError] = useState(false);
  const [add_error, setAddError] = useState(false);
  const [rev_error, setRevError] = useState(false);
  const [phone_error, setPhoneError] = useState(false);

  const [success, setSuccess] = useState(false);

  function _handeSubmit() {
    const data = {
      id: Math.floor(Math.random() * 100) + 1,
      name: name,
      address: address,
      revenue: revenue,
      phone: phone
    };
    if (name.length === 0) {
      setNameError(true);
      setTimeout(() => {
        setNameError(false);
      }, 1000);
    } else if (address.length === 0) {
      setAddError(true);
      setTimeout(() => {
        setAddError(false);
      }, 1000);
    } else if (revenue.length === 0) {
      setRevError(true);
      setTimeout(() => {
        setRevError(false);
      }, 1000);
    } else if (phone.length === 0) {
      setPhoneError(true);
      setTimeout(() => {
        setPhoneError(false);
      }, 1000);
    } else {
      dispatch(createCompany(data));
      setName("");
      setAddress("");
      setPhone("");
      setRevenue("");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  }

  return (
    <div className="col item-left">
      <div className="title">Create Company</div>
      <div className="col-12 input-company-form">
        <TextInput
          name={"Name"}
          placeholder="name"
          type={"email"}
          value={name}
          error={name_error}
          onChange={e => setName(e.target.value)}
        />
        <TextInput
          name={"Address"}
          type={"email"}
          value={address}
          placeholder="address"
          error={add_error}
          onChange={e => setAddress(e.target.value)}
        />
        <TextInput
          name={"Revenue"}
          type={"number"}
          error={rev_error}
          value={revenue}
          placeholder="revenue"
          onChange={e => setRevenue(e.target.value)}
        />
        <div className="form-labelku text-bold">Phone</div>
        <PhoneInput
          placeholder="phone"
          value={phone}
          autoComplete="true"
          onChange={phone => setPhone(phone)}
        />
        <div className="form-labelku">
          {phone_error && (
            <div className="form-labelku alert alert-danger">{`Field phone is required`}</div>
          )}
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={() => _handeSubmit()}
        >
          Create
        </button>
        {success && (
          <div className="form-labelku alert alert-success">{`Company created Successfully !`}</div>
        )}
      </div>
    </div>
  );
}
export default FormCompany;
