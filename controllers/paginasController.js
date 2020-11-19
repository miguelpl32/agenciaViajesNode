import { Viaje } from "../models/Viaje.js";
import { Comentarios } from "../models/Comentarios.js";

const paginaInicio = async (req, res) => {
  //Consultar 3 viajes

  const promiseDB = [];
  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Comentarios.findAll({ limit: 3 }));

  try {
    const resultado = await Promise.all(promiseDB);

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      comentarios: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  //Consultar BD
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Próximos Viajes",
    viajes,
  });
};

const paginaComentarios = async (req, res) => {
  try {
    const comentarios = await Comentarios.findAll();
    res.render("comentarios", {
      pagina: "Comentarios",
      comentarios,
    });
  } catch (error) {
    console.log(error);
  }
};

//Muestra detalle Viaje
const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where: { slug } });

    res.render("viaje", {
      pagina: "Información Viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaComentarios,
  paginaDetalleViaje,
};
