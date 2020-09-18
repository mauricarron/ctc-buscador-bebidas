import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const obtenerDatosReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            name="nombre"
            placeholder="Buscar por Ingrediente"
            className="form-control"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4 mb-2">
          <select
            name="categoria"
            className="form-control"
            onChange={obtenerDatosReceta}
          >
            <option value="">Seleccionar Categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4  mb-2">
          <input
            type="submit"
            value="Buscar"
            className="btn btn-primary btn-block"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
