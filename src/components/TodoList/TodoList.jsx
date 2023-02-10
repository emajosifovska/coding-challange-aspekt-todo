import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { removeTodo, updateStatus } from "../../redux/actions";
import "./TodoList.scss";

export default function TodoList({ handleEdit }) {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todoReducer);

  return todos.map((todo) => (
    <div key={todo.id} className="todo-container">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(updateStatus(todo.id))}
        />
        <div className="todo-name-date">
          <p className={`todo-name ${todo.completed && "line-through"}`}>
            {todo.todo}
          </p>
          <span className="todo-date">
            {format(new Date(), "p, MM/dd/yyyy")}
          </span>
        </div>
      </div>
      <div className="todo-actions">
        <button
          className="delete-button"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          <MdDelete />
        </button>
        <button className="edit-button" onClick={() => handleEdit(todo)}>
          <MdEdit />
        </button>
      </div>
    </div>
  ));
}
