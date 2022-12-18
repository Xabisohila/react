import "./App.css";
import React from "react";
import Gallery from "./Components/Gallery";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
function App() {
  /*
  const handleClick = () => {
    let docStyle = document.body.style;
    if (docStyle.backgroundColor === "black") {
      docStyle.backgroundColor = "white";
    }
    docStyle.backgroundColor = "black";
  };
  */
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
