import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import { Main } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar/>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
