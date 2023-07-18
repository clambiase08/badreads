import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./Main/About";
import Main from "./Main/Main";
import Account from "./Main/Account";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
