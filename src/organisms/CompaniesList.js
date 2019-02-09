import React from 'react'
import {deleteCompany} from '../redux/action/company'
import { getState } from "../redux/store";

function CompanyList(props){
  console.log(props)
  console.log('list company')
  const [state,dispatch] = getState()
  function _handleDelete(){
    dispatch(deleteCompany(props.data.id))
  }
    return (
        <div className="col-6 ">
              <div className="card item-company">
                <div className="col-12  ">
                  <div className="card-title">
                    <div className='sub-title'>{props.data.name}</div>
                    <div>
                    <i className="fas fa-times icon" onClick={()=>_handleDelete()}></i>
                    
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                <div className='line-c'></div>
                </div>
                <div className="col-12 ">
                  <div className='text-bold'>Address</div>
                  <div>{props.data.address}</div>
                  <div>CA 0987568 united States</div>
                </div>
                <div className="col-12 ">
                  <div className='text-bold'>Revenue</div>
                  <div>{props.data.revenue}</div>
                </div>
                <div className="col-12 ">
                  <div className='text-bold'>Phone</div>
                  <div>{props.data.phone}</div>
                </div>
              </div>
            </div>
    )
}
export default CompanyList