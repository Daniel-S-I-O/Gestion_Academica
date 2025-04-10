import {
    listarTodosinscripcionesQuery,
    listarinscripcionesPorIdQuery,
    crearinscripcionesQuery,
    actualizarinscripcionesQuery,
    eliminarinscripcionesQuery
  } from "../db/inscripcionesQuery.js";
  
  /**
   * Obtener todos los inscripciones de la base de datos
   */
  const listarTodosinscripciones = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const inscripciones = await listarTodosinscripcionesQuery();
      res.json(inscripciones);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el inscripciones con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarinscripcionesPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const inscripciones = await listarinscripcionesPorIdQuery(req.params.id_inscripcion);
      res.json(inscripciones);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un inscripciones
   */
  const crearinscripciones = async (req, res) => {
    console.log(req.body)
    try {
        const datosinscripciones = req.body;
        const resultado = await crearinscripcionesQuery(datosinscripciones);
        res.json({ mensaje: 'inscripciones creado con éxito', id_inscripcion: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un inscripciones
   */
  const actualizarinscripciones = async (req, res) => {
    try {
        const id = req.params.id_inscripcion;
        const datosinscripciones = req.body;
        const resultado = await actualizarinscripcionesQuery(id_inscripcion, datosinscripciones);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'inscripciones actualizado con éxito', id: id_inscripcion });
        } else {
            res.status(404).json({ mensaje: 'inscripciones no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un inscripciones
   */
  const eliminarinscripciones = async (req, res) => {
    try {
        const id_inscripcion = req.params.id;
        const resultado = await eliminarinscripcionesQuery(id_inscripcion);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'inscripciones eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'inscripciones no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el inscripciones', error: error.message });
    }
  };
  
  export {
    listarTodosinscripciones,
    listarinscripcionesPorId,
    crearinscripciones,
    actualizarinscripciones,
    eliminarinscripciones,
  };