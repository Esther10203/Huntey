import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
