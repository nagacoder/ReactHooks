import React, { useState } from "react";
import { TextInput } from "../organisms/input";
import { createCompany } from "../redux/action/company";
import { getState } from "../redux/store";
import 'react-phone-number-input/style.css'
import PhoneInput,{formatPhoneNumber, formatPhoneNumberIntl} from 'react-phone-number-input'
function FormCompany() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [revenue, setRevenue] = useState("");
  const [phone, setPhone] = useState("");
  const [state, dispatch] = getState();

  function _handeSubmit() {
    const data = {
      id: Math.floor(Math.random() * 100) + 1,
      name: name,
      address: address,
      revenue: revenue,
      phone:phone
    };
    dispatch(createCompany(data));
    
  }
  return (
    <div className="col item-left">
      <div className="title">Create Company</div>
      <div className="col-12 input-company-form">
        <TextInput
          name={"Name"}
          placeholder="name"
          onChange={e => setName(e.target.value)}
        />
        <TextInput
          name={"Address"}
          placeholder="address"
          onChange={e => setAddress(e.target.value)}
        />
        <TextInput
          name={"Revenue"}
          placeholder="revenue"
          onChange={e => setRevenue(e.target.value)}
        />
        <div className="form-labelku text-bold">Phone</div>
        <PhoneInput
         placeholder="phone"
         value={phone}
         autoComplete
         onChange={ phone => setPhone(phone) } 
        /> 
        <div className='form-labelku'>
          {/* {error && (
            <div className="form-labelku alert alert-danger">{`Field ${name} is required`}</div>
          )} */}
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={() => _handeSubmit()}
        >
          Create
        </button>
      </div>
    </div>
  );
}
export default FormCompany;
