import React, { useState } from "react";
import { TextInput, Select } from "../organisms/input";
import { getState } from "../redux/store";
import { createOffice } from "../redux/action/office";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function FormOffice() {
  const [state, dispacth] = getState();

  const [name, setName] = useState("");
  const [lat, setLat] = useState("");
  const [log, setLog] = useState("");
  const [date, setDate] = useState(null);
  const [company, setCompany] = useState("");

  const [name_error, setNameError] = useState(false);
  const [lat_error, setlatError] = useState(false);
  const [log_error, setLogError] = useState(false);
  const [date_error, setDateError] = useState(false);
  const [company_error, setCompanyError] = useState(false);
  const [success,setSuccess]=useState(false)

  function _handleSubmit() {
    const data = {
      office_id: Math.floor(Math.random() * 100) + 1,
      name: name,
      lat: lat,
      log: log,
      date: date,
      companyId: company
    };

    if (name.length === 0) {
      setNameError(true);
      setTimeout(() => {
        setNameError(false);
      }, 2000);
    } else if (lat.length === 0) {
      setlatError(true);
      setTimeout(() => {
        setlatError(false);
      }, 2000);
    } else if (log.length === 0) {
      setLogError(true);
      setTimeout(() => {
        setLogError(false);
      }, 2000);
    } else if (date.length === 0) {
      setDateError(true);
      setTimeout(() => {
        setDateError(false);
      }, 2000);
    } else if (company.length === 0) {
      setCompanyError(true);
      setTimeout(() => {
        setCompanyError(false);
      }, 2000);
    } else {
      dispacth(createOffice(data));
      setName('')
      setLat('')
      setLog('')
      setDate('')
      setCompany('')
      setSuccess(true)
      setTimeout(()=>{
        setSuccess(false)
      },2000)
    }
  }

  return (
    <div className="col item-left">
      <div className="title">Create Office</div>
      <div className="col-12 input-company-form">
        <TextInput
          name={"Name"}
          error={name_error}
          value={name}
          placeholder="name"
          onChange={e => setName(e.target.value)}
        />
        <div className="form-group">
          <div className="form-labelku text-bold">Location</div>
          <div className="row">
            <div className="col">
              <input
                type="number"
                value={lat}
                className="form-control"
                placeholder="latitude"
                onChange={e => setLat(e.target.value)}
              />
              {lat_error && (
                <div className="form-labelku alert alert-danger">{`Field latitude is required`}</div>
              )}
            </div>
            <div className="col">
              <input
                type="number"
                value={log}
                className="form-control"
                placeholder="longitude"
                onChange={e => setLog(e.target.value)}
              />
              {log_error && (
                <div className="form-labelku alert alert-danger">{`Field Longitude is required`}</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-labelku text-bold">Office Start Date </div>
        <DatePicker selected={date} onChange={date => setDate(date)} />
        {date_error && (
          <div className="form-labelku alert alert-danger">{`Field Date is required`}</div>
        )}
        <Select
          name={"Company"}
          option={
            state.company === undefined ? state.companyData.list : state.company
          }
          value={company}
          placeholder="company"
          onChange={e => setCompany(e.target.value)}
        />
        {company_error && (
          <div className="form-labelku alert alert-danger">{`Not company available`}</div>
        )}
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={() => _handleSubmit()}
        >
          Create
        </button>
        {success && (
          <div className="form-labelku alert alert-success">{`Office created Successfully !`}</div>
        )}
      </div>
    </div>
  );
}
export default FormOffice;
