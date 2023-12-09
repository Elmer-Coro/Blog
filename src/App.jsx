import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./sections/Nav";
import Inicio from "./pages/Inicio";
import Articulos from "./pages/Articulos";
import SobreMi from "./pages/SobreMi";
import ArticuloUno from "./articles/ArticuloUno";
import ArticuloDos from "./articles/ArticuloDos";
import ArticuloTres from "./articles/ArticuloTres";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={<Inicio />}
        />
        <Route
          path='/articulos'
          element={<Articulos />}
        />
        <Route
          path='/sobre-mi'
          element={<SobreMi />}
        />
        <Route
          path='/articulo-uno'
          element={<ArticuloUno />}
        />
        <Route
          path='/articulo-dos'
          element={<ArticuloDos />}
        />
        <Route
          path='/articulo-tres'
          element={<ArticuloTres />}
        />
      </Routes>
    </>
  );
}

export default App;
