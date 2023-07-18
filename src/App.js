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
      <Routes>
        {/* <Route path="/about" element={<About />} /> */}
        <Route exact path="/contact" element={<Contact />} />
        {/* <Route path="/account" element={<Account />} /> */}
        <Route exact path="/" element={<Home />} />
        {/* <Route path="*" element={<h1>404 not found</h1>} /> */}
      </Routes>
    </div>
  );
}

export default App;
