import React,{useEffect} from "react";
import logo from "../logo.svg";
import FormCompany from "../organisms/FormCompany";
import FormOffice from "../organisms/FormOfiice";
import CompanyList from "../organisms/CompaniesList";
import {getState} from '../redux/store'

function Home() {
  const [state,dispatch] = getState()
  useEffect(()=>{
    console.log('ini')
    console.log(state)
  })
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
          {state.companyData === undefined ? null:state.companyData.list.map((data,i)=>{
            return <CompanyList data={data} key={i}/>
          })
            
          }
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
