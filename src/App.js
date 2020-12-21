import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Cart";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__header">
          <Header />
        </div>

        <div className="app__body">
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Sidebar />

              <Body />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
