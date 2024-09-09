import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import "./App.css";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" Component={Login}></Route>
          <Route exact path="/home" Component={Home}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
