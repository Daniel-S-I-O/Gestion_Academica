import {
    listarTodosprofesoresQuery,
    listarprofesoresPorIdQuery,
    crearprofesoresQuery,
    actualizarprofesoresQuery,
    eliminarprofesoresQuery
  } from "../db/profesoresQuery.js";
  
  /**
   * Obtener todos los profesores de la base de datos
   */
  const listarTodosprofesores = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const profesores = await listarTodosprofesoresQuery();
      res.json(profesores);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el profesores con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarprofesoresPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const profesores = await listarprofesoresPorIdQuery(req.params.id_profesor);
      res.json(profesores);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un profesores
   */
  const crearprofesores = async (req, res) => {
    console.log(req.body)
    try {
        const datosprofesores = req.body;
        const resultado = await crearprofesoresQuery(datosprofesores);
        res.json({ mensaje: 'profesor creado con éxito', id_profesor: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un profesores
   */
  const actualizarprofesores = async (req, res) => {
    try {
        const id_profesor = req.params.id_profesor;
        const datosprofesores = req.body;
        const resultado = await actualizarprofesoresQuery(id_profesor, datosprofesores);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'profesor actualizado con éxito', id: id_profesor });
        } else {
            res.status(404).json({ mensaje: 'profesor no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un profesores
   */
  const eliminarprofesores = async (req, res) => {
    try {
        const id_profesor = req.params.id;
        const resultado = await eliminarprofesoresQuery(id_profesor);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'profesor eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'profesor no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el profesor', error: error.message });
    }
  };
  
  export {
    listarTodosprofesores,
    listarprofesoresPorId,
    crearprofesores,
    actualizarprofesores,
    eliminarprofesores,
  };