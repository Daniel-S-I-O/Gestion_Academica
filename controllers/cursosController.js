import {
    listarTodoscursosQuery,
    listarcursosPorIdQuery,
    crearcursosQuery,
    actualizarcursosQuery,
    eliminarcursosQuery
  } from "../db/cursosQuery.js";
  
  /**
   * Obtener todos los cursos de la base de datos
   */
  const listarTodoscursos = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const cursos = await listarTodoscursosQuery();
      res.json(cursos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el cursos con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarcursosPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const cursos = await listarcursosPorIdQuery(req.params.id);
      res.json(cursos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un cursos
   */
  const crearcursos = async (req, res) => {
    console.log(req.body)
    try {
        const datoscursos = req.body;
        const resultado = await crearcursosQuery(datoscursos);
        res.json({ mensaje: 'cursos creado con éxito', id_curso: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un cursos
   */
  const actualizarcursos = async (req, res) => {
    try {
        const id = req.params.id_curso;
        const datoscursos = req.body;
        const resultado = await actualizarcursosQuery(id_curso, datoscursos);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'cursos actualizado con éxito', id: id_curso });
        } else {
            res.status(404).json({ mensaje: 'cursos no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un cursos
   */
  const eliminarcursos = async (req, res) => {
    try {
        const id_curso = req.params.id_curso;
        const resultado = await eliminarcursosQuery(id_curso);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'cursos eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'cursos no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el cursos', error: error.message });
    }
  };
  
  export {
    listarTodoscursos,
    listarcursosPorId,
    crearcursos,
    actualizarcursos,
    eliminarcursos,
  };