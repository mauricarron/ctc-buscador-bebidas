import React, { Fragment, useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "./Receta";

const ListaRecetas = () => {
  const { recetas } = useContext(RecetasContext);
  return (
    <Fragment>
      {!recetas ? <h2 className="text-center col-12">Recetas</h2> : null}
      {recetas.map((receta) => (
        <Receta key={receta.idDrink} receta={receta} />
      ))}
    </Fragment>
  );
};

export default ListaRecetas;
