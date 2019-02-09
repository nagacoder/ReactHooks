import React from "react";

export  const TextInput = ({ name, placeholder, onChange,error,errMsg }) => (
    
  <div className="form-group">
    <div className="form-labelku text-bold">{name}</div>
    <input type="email" className="form-control" placeholder={placeholder} onChange={onChange} />
    {((error && <div className='form-labelku alert alert-danger'>{`Field ${name} is required` }</div>))}
  </div>
);
