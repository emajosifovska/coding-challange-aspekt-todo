import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { v4 as uuid } from "uuid";
import Button from "../Button/Button";
import "./TodoModal.scss";
import { addTodo, updateTodo } from "../../redux/actions";

export default function TodoModal({
  openModal,
  setOpenModal,
  editModalForm,
  setEditModalForm,
  editTodo,
}) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [editName, setEditName] = useState("");

  const unique_id = uuid();

  useEffect(() => {
    setEditName(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let todoObj = {
      id: unique_id,
      todo: name,
      completed: false,
    };

    setName("");
    setOpenModal(false);
    dispatch(addTodo(todoObj));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    let editedTodoObj = {
      id: editTodo.id,
      todo: editName,
      completed: false,
    };

    setOpenModal(false);
    dispatch(updateTodo(editedTodoObj));
  };

  const closeModal = () => {
    setOpenModal(false);
    setEditModalForm(false);
    setName("");
  };

  if (openModal && editModalForm === false) {
    return (
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
    );
  } else if (openModal && editModalForm) {
    return (
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="close-button" onClick={() => closeModal()}>
            <MdOutlineClose />
          </div>
          <form onSubmit={(e) => handleEditSubmit(e)}>
            <h3 className="form-title">Update Task</h3>
            <label>Name</label>
            <input
              type="text"
              value={editName || ""}
              onChange={(e) => setEditName(e.target.value)}
            />
            <div className="button-container">
              <Button type="submit" variant="button-primary">
                Update
              </Button>
              <Button variant="button-secondary" onClick={() => closeModal()}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
