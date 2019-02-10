import React from "react";

export  const TextInput = ({type, name, placeholder, onChange,error,value }) => (
    
  <div className="form-group">
    <div className="form-labelku text-bold">{name}</div>
    <input type={type} className="form-control" value={value} placeholder={placeholder} onChange={onChange} />
    {((error && <div className='form-labelku alert alert-danger'>{`Field ${name} is required` }</div>))}
  </div>
);

export const Select = ({name,placeholder,onChange,error,errMsg,value,option}) =>(
 
  <div className="form-group">
    <div className="form-labelku text-bold">{name}</div>
    <select type="email" className="form-control" disabled={option.length === 0 ?true :false}  value={value}  placeholder={placeholder} onChange={onChange} >
    <option value="id"   hidden>Select Company</option>
    {option.map((data,i)=>{
       
       return <option key={i} value={data.id}>{data.name}</option>
     })}
    </select>
  </div>
)
