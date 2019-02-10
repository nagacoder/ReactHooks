import React, { useState } from "react";
import { getState } from "../redux/store";
import { deleteOffice } from "../redux/action/office";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from 'moment'
function OfficeLists(props) {
  console.log(props)
  const [state, dispatch] = getState();
  const [modal, openModal] = useState(false);

  function _handleDelete() {
    dispatch(deleteOffice(props.data.office_id));
    openModal(!modal)
  }

  return (
    <div className="col-6 ">
      <Modal isOpen={modal}>
        <ModalHeader>Confirm</ModalHeader>
        <ModalBody>Are you sure to remove Office ?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => openModal(!modal)}>
            No !
          </Button>{" "}
          <Button color="danger" onClick={() => _handleDelete()}>
            Yes !
          </Button>
        </ModalFooter>
      </Modal>
      <div className="card item-company">
        <div className="col-12  ">
          <div className="card-title">
            <div className="sub-title">{props.data.name}</div>
            <div>
              <i
                className="fas fa-times icon"
                onClick={() => openModal(!modal)}
              />
            </div>
          </div>
        </div>
        <div className="col-12 ">
          <div className="line-c" />
        </div>
        <div className="col-12 ">
          <div className="text-bold">Location</div>
          <div>latitude - {props.data.lat}</div>
          <div>longitude - {props.data.log}</div>
        </div>
        <div className="col-12 ">
          <div className="text-bold">Office Start Date</div>
          <div>{moment(props.data.date).format("DD/MM/YYYY")}</div>
        </div>
      </div>
    </div>
  );
}
export default OfficeLists;
