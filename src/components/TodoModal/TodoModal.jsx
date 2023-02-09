import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import "./TodoModal.scss";
import { addTodo } from "../../redux/actions";

export default function TodoModal({ openModal, setOpenModal }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let todoObj = {
      id: uuidv4,
      todo: name,
      complited: false,
      active: true,
    };

    setName("");
    setOpenModal(false);
    dispatch(addTodo(todoObj));
  };

  const closeModal = () => {
    setOpenModal(false);
    setName("");
  };

  return (
    openModal && (
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="close-button" onClick={() => closeModal()}>
            <MdOutlineClose />
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <h3 className="form-title">Add Task</h3>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="button-container">
              <Button type="submit" variant="button-primary">
                Add
              </Button>
              <Button variant="button-secondary" onClick={() => closeModal()}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
