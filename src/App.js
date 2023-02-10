import { useState } from "react";
import Header from "./components/Header/Header";
import PageTitle from "./components/PageTitle/PageTitle";
import TodoModal from "./components/TodoModal/TodoModal";
import TodoList from "./components/TodoList/TodoList";
import "./styles/globalStyles.scss";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [editModalForm, setEditModalForm] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const handleEdit = (todo) => {
    setOpenModal(true);
    setEditModalForm(true);
    setEditTodo(todo);
  };

  return (
    <div className="container">
      <PageTitle>ToDo List</PageTitle>
      <div className="wrapper">
        <Header setOpenModal={setOpenModal} />
        <TodoModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          editModalForm={editModalForm}
          setEditModalForm={setEditModalForm}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodoList editModalForm={editModalForm} handleEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
