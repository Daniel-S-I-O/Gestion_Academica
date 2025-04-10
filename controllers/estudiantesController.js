import {
    listarTodosestudiantesQuery,
    listarestudiantesPorIdQuery,
    crearestudiantesQuery,
    actualizarestudiantesQuery,
    eliminarestudiantesQuery
  } from "../db/estudiantesQuery.js";
  
  /**
   * Obtener todos los estudiantes de la base de datos
   */
  const listarTodosestudiantes = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const estudiantes = await listarTodosestudiantesQuery();
      res.json(estudiantes);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el estudiantes con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarestudiantesPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const estudiantes = await listarestudiantesPorIdQuery(req.params.id);
      res.json(estudiantes);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un estudiantes
   */
  const crearestudiantes = async (req, res) => {
    console.log(req.body)
    try {
        const datosestudiantes = req.body;
        const resultado = await crearestudiantesQuery(datosestudiantes);
        res.json({ mensaje: 'estudiantes creado con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un estudiantes
   */
  const actualizarestudiantes = async (req, res) => {
    try {
        const id = req.params.id_estudiante;
        const datosestudiantes = req.body;
        const resultado = await actualizarestudiantesQuery(id_estudiante, datosestudiantes);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'estudiantes actualizado con éxito', id: id_estudiante });
        } else {
            res.status(404).json({ mensaje: 'estudiantes no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un estudiantes
   */
  const eliminarestudiantes = async (req, res) => {
    try {
        const id_estudiante = req.params.id_estudiante;
        const resultado = await eliminarestudiantesQuery(id_estudiante);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'estudiantes eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'estudiantes no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el estudiantes', error: error.message });
    }
  };
  
  export {
    listarTodosestudiantes,
    listarestudiantesPorId,
    crearestudiantes,
    actualizarestudiantes,
    eliminarestudiantes,
  };