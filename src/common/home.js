import React from "react";
import FormCompany from "../organisms/FormCompany";
import FormOffice from "../organisms/FormOfiice";
import CompanyList from "../organisms/CompaniesList";
import {getState} from '../redux/store'

function Home(props) {
  const [state,dispatch] = getState()
  
  return (
    <div className="row row-centered">
      <div className="col-12 ">
        <div className="card">
          <div className="row">
            <FormCompany />
            <div className="line-center" />
            <FormOffice />
          </div>
          <div className="line-horizontal" />
          <div className="row">
            <div className="col item-left">
              <div className="title">Companies</div>
            </div>
          </div>
          <div className="row ">
          {state.companyData === undefined ? (
            <div className="col-6 ">
            
            <div className="item-company">
              <div className="col-12  ">
                <div className="card-title">
                  <div className="text-bold"> There is no companies created yet</div>
                </div>
              </div>
              
            </div>
          </div>
          ): state.companyData.list.length === 0 ?(<div className="col-6 ">
            
          <div className="item-company">
            <div className="col-12  ">
              <div className="card-title">
                <div className="text-bold"> There is no companies created yet</div>
              </div>
            </div>
            
          </div>
        </div>) :state.companyData.list.map((data,i)=>{
            return <CompanyList onViewDetail ={props.handleChange} data={data} key={i}/>
          })
            
          } 
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
