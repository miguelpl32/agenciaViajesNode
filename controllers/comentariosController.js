import { Comentarios } from "../models/Comentarios.js";

const guardarComentarios = async (req, res) => {
  //Validar formulario

  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El Nombre esta vacio" });
  }

  if (correo.trim() === "") {
    errores.push({ mensaje: "El Correo esta vacio" });
  }

  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El Mensaje esta vacio" });
  }

  if (errores.length > 0) {
    //Consultar Comentarios existentes
    const comentarios = await Comentarios.findAll();
    //Mostrar la vista con errores

    res.render("comentarios", {
      pagina: "Comentarios",
      errores,
      nombre,
      correo,
      mensaje,
      comentarios,
    });
  } else {
    //Almacenarlo en la base de datos

    try {
      await Comentarios.create({
        nombre,
        correo,
        mensaje,
      });

      res.redirect("/comentarios");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarComentarios };
