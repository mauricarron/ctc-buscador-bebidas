import React, { Fragment, useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "./Receta";

const ListaRecetas = () => {
  const { recetas } = useContext(RecetasContext);
  console.log(recetas);
  return (
    <Fragment>
      <h2 className="text-center col-12">Recetas</h2>
      {recetas.map((receta) => (
        <Receta key={receta.idDrink} receta={receta} />
      ))}
    </Fragment>
  );
};

export default ListaRecetas;
