import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
import "./Content.css";
 
import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";
 
const Content = props => (
  <main className="Content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content
 
