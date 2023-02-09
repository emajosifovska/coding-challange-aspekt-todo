import Header from "./components/Header/Header";
import PageTitle from "./components/PageTitle/PageTitle";
import TodoList from "./components/TodoList/TodoList";
import "./styles/globalStyles.scss";

function App() {
  return (
    <div className="container">
      <PageTitle>ToDo List</PageTitle>
      <div className="wrapper">
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
