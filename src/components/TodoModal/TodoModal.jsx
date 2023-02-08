import React from "react";
import { MdOutlineClose } from "react-icons/md";
import "./TodoModal.scss";
import Button from "../Button/Button";

export default function TodoModal({ openModal, setOpenModal }) {
  return (
    openModal && (
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="close-button" onClick={() => setOpenModal(false)}>
            <MdOutlineClose />
          </div>
          <form>
            <h3 className="form-title">Add Task</h3>
            <label>Name</label>
            <input type="text" />
            <div className="button-container">
              <Button type="submit" variant="button-primary">
                Add
              </Button>
              <Button
                variant="button-secondary"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
