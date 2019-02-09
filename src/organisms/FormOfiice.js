import React from "react";
import { TextInput } from "../organisms/input";
function FormOffice() {
  return (
    <div className="col item-left">
      <div className="title">Create Office</div>
      <div className="col-12 input-company-form">
        <TextInput name={"Name"} placeholder="name" />
        <div className="form-group">
          <div className="form-labelku text-bold">Location</div>
          <div className='row'>
          <div className='col'>
          <input
            type="email"
            className="form-control"
            placeholder='latitude'
            
          />
          {/* {error && (
            <div className="form-labelku alert alert-danger">{`Field ${name} is required`}</div>
          )} */}
          </div>
          <div className='col'>
          <input
            type="email"
            className="form-control"
            placeholder='longitude'
            
          />
          {/* {error && (
            <div className="form-labelku alert alert-danger">{`Field ${name} is required`}</div>
          )} */}
          </div>
          </div>
        </div>
        <TextInput name={"Address"} placeholder="address" />
        <TextInput name={"Revenue"} placeholder="revenue" />
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Create
        </button>
      </div>
    </div>
  );
}
export default FormOffice;
