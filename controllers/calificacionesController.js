import {
    listarTodoscalificacionesQuery,
    listarcalificacionesPorIdQuery,
    crearcalificacionesQuery,
    actualizarcalificacionesQuery,
    eliminarcalificacionesQuery
  } from "../db/calificacionesQuery.js";
  
  /**
   * Obtener todos los calificaciones de la base de datos
   */
  const listarTodoscalificaciones = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const calificaciones = await listarTodoscalificacionesQuery();
      res.json(calificaciones);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el calificaciones con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarcalificacionesPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const calificaciones = await listarcalificacionesPorIdQuery(req.params.id_calificacion);
      res.json(calificaciones);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un calificaciones
   */
  const crearcalificaciones = async (req, res) => {
    console.log(req.body)
    try {
        const datoscalificaciones = req.body;
        const resultado = await crearcalificacionesQuery(datoscalificaciones);
        res.json({ mensaje: 'calificaciones creado con éxito', id_calificacion: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un calificaciones
   */
  const actualizarcalificaciones = async (req, res) => {
    try {
        const id_calificacion = req.params.id;
        const datoscalificaciones = req.body;
        const resultado = await actualizarcalificacionesQuery(id_calificacion, datoscalificaciones);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'calificaciones actualizado con éxito', id: id_calificacion });
        } else {
            res.status(404).json({ mensaje: 'calificaciones no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un calificaciones
   */
  const eliminarcalificaciones = async (req, res) => {
    try {
        const id = req.params.id_calificacion;
        const resultado = await eliminarcalificacionesQuery(id_calificacion);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'calificaciones eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'calificaciones no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el calificaciones', error: error.message });
    }
  };
  
  export {
    listarTodoscalificaciones,
    listarcalificacionesPorId,
    crearcalificaciones,
    actualizarcalificaciones,
    eliminarcalificaciones,
  };