import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Home from "./components/Home";
import Num from "./components/Num";
import Hello from "./components/Hello";
import Nav from "./components/Nav";
import Finale from "./components/Finale";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
    
function App() {

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Num/:a/" element={<Num />} />
        <Route path="/Hello/:a/" element={<Hello />} />
        <Route path="/Finale/:a/:b/:c" element={<Finale />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App
