import Header from "./components/Header/Header";
import PageTitle from "./components/PageTitle/PageTitle";
import "./styles/globalStyles.scss";

function App() {
  return (
    <div className="container">
      <PageTitle>ToDo List</PageTitle>
      <div className="wrapper">
        <Header />
      </div>
    </div>
  );
}

export default App;
