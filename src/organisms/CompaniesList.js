import React, { useState } from "react";
import { deleteCompany } from "../redux/action/company";
import { getState } from "../redux/store";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CompanyList(props) {
  const [state, dispatch] = getState();
  const [modal, openModal] = useState(false);

  function _handleDelete() {
    dispatch(deleteCompany(props.data.id));
    openModal(!modal)
  }

  function _viewDetail() {
    props.onViewDetail("detail-company",props.data);
  }
  return (
    <div className="col-md-6  col-sm-12">
      <Modal isOpen={modal}>
        <ModalHeader>Confirm</ModalHeader>
        <ModalBody>Are you sure to remove company?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => openModal(!modal)}>
            No !
          </Button>{" "}
          <Button color="danger" onClick={() => _handleDelete()}>
            Yes !
          </Button>
        </ModalFooter>
      </Modal>
      <div
        style={{
          position: "absolute",
          right: 20,
          width: "20%",
          top: 23,
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: 8
        }}
      >
        <i className="fas fa-times icon" onClick={() => openModal(!modal)} />
      </div>
      <div className="card item-company" onClick={() => _viewDetail()}>
        <div className="col-md-12  col-sm-12">
          <div className="card-title">
            <div className="sub-title">{props.data.name}</div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="line-c" />
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="text-bold">Address</div>
          <div>{props.data.address}</div>
          <div>CA 0987568 united States</div>
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="text-bold">Revenue</div>
          <div>{props.data.revenue}</div>
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="text-bold">Phone</div>
          <div>{props.data.phone}</div>
        </div>
      </div>
    </div>
  );
}
export default CompanyList;
