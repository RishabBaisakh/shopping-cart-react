import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";
import { menu } from "./Menu";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>

      <div className="app__body">
        <Sidebar menu={menu} />
        <Body menu={menu} />
      </div>
    </div>
  );
}

export default App;
