import React, { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context//RecetasContext";
import ListaRecetas from "./components/ListaRecetas";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className="container">
          <div className="row mt-5">
            <Formulario />
          </div>
          <div className="row mt-5">
            <ListaRecetas />
          </div>
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
