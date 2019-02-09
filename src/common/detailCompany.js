import React from "react";
import logo from "../logo.svg";
import FormCompany from "../organisms/FormCompany";
import FormOffice from "../organisms/FormOfiice";
import CompanyList from "../organisms/CompaniesList";
import OfficeLists from "../organisms/OfficesList";

function DetailCompany() {
  return (
    <div className="row row-centered">
      <div className="col-12 ">
        <div className="card">
          <div className="row">
            <div className="col item-left">
              <div className="title">Alibaba</div>
            </div>
          </div>

          <div className="line-horizontal" />
          <div className="row">
          <div className="col detail-info">
            <div className="col-12 ">
              <div className="text-bold">Address</div>
              <div>160 Amphiteahtre Parkway Mountain View,</div>
              <div>CA 0987568 united States</div>
            </div>
            <div className="col-12 ">
              <div className="text-bold">Revenue</div>
              <div>65780876</div>
            </div>
            <div className="col-12 ">
              <div className="text-bold">Phone</div>
              <div>(24)65780876</div>
            </div>
            </div>
            </div>
          <div className="row">
            <div className="col item-left">
              <div className="title">Offices</div>
            </div>
          </div>
          <div className="line-horizontal" />
          <div className="row ">
            <OfficeLists/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailCompany;
