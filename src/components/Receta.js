import React, { useState, useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ receta }) => {
  const [modalStyle, setModalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { informacion, guardarIdReceta, guardarInformacion } = useContext(
    ModalContext
  );

  const mostrarIngredientes = () => {
    let ingredientes = [];
    for (let i = 1; i <= 15; i++) {
      if (informacion[`strIngredient${i}`])
        ingredientes.push(
          <li key={informacion[`strIngredient${i}`]}>
            {informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}
          </li>
        );
    }
    return ingredientes;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              guardarIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              guardarIdReceta(null);
              guardarInformacion({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{informacion.srtDrink}</h2>
              <h3 className="mt-4">Instrucciones de Preparación</h3>
              <p>{informacion.strInstructions}</p>
              <img className="img-fluid my-4" src={informacion.strDrinkThumb} />
              <h3>Ingredientes y Cantidades</h3>
              <ul>{mostrarIngredientes()}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
