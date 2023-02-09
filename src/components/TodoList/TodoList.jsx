import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import "./TodoList.scss";

export default function TodoList() {
  const todos = useSelector((state) => state.todoReducer);

  const handleChange = (e) => {
    if (e.target.checked) {
    }
  };

  return todos.map((todo) => (
    <div key={todo.id} className="todo-container">
      <div className="todo-content">
        <input type="checkbox" checked={todo.complited} />
        <div className="todo-name-date">
          <p className="todo-name">{todo.todo}</p>
          <span className="todo-date">
            {format(new Date(), "p, MM/dd/yyyy")}
          </span>
        </div>
      </div>
      <div className="todo-actions">
        <div className="delete-button">
          <MdDelete />
        </div>
        <div className="edit-button">
          <MdEdit />
        </div>
      </div>
    </div>
  ));
}
