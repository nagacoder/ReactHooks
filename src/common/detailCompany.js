import React from "react";
import OfficeLists from "../organisms/OfficesList";
import { getState } from "../redux/store";


function DetailCompany(props) {
  const [state, dispacth] = getState();
  const office =
    state.officeData !== undefined
      ? state.officeData.list.length !== 0
        ? state.officeData.list.filter(function(item) {
            return Number(item.companyId) == props.data.id;
          })
        : []
      : null;
  function _backOverView() {
    props.handleChange("home");
  }

  return (
    <div className="row row-centered">
      <div className="col-md-12 col-sm-12 ">
        <div className="card">
          <div className="row">
            <div className="col item-left">
              <div className="title">{props.data.name}</div>
            </div>
          </div>

          <div className="line-horizontal" />
          <div className="row">
            <div className="col detail-info">
              <div className="col-12 ">
                <div className="text-bold">Address</div>
                <div>{props.data.address}</div>
  
              </div>
              <div className="col-12 ">
                <div className="text-bold">Revenue</div>
                <div>{props.data.revenue}</div>
              </div>
              <div className="col-12 ">
                <div className="row">
                  <div className="col ">
                    <div className="text-bold">Phone</div>
                    <div>{props.data.phone}</div>
                  </div>
                  <div className="col-md-5  col-sm-5">
                    <button
                      type="button"
                      onClick={() => _backOverView()}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Back to Overview
                    </button>
                  </div>
                </div>
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
            {office.length === 0 ? (
              <div className="col-md-6  col-sm-12">
                <div className="item-company">
                  <div className="col-12  ">
                    <div className="card-title">
                      <div className="text-bold">
                        {" "}
                        There is no companies created yet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              office.map((data, i) => {
                return <OfficeLists data={data} key={i} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailCompany;
