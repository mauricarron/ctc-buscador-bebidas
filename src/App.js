import React, { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context//RecetasContext";
import ListaRecetas from "./components/ListaRecetas";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container">
            <div className="row mt-5">
              <Formulario />
            </div>
            <div className="row mt-5">
              <ListaRecetas />
            </div>
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
