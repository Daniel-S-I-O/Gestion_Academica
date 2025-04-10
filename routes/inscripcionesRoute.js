import { Router } from 'express';

import {
    listarTodosinscripciones,
    listarinscripcionesPorId,
    crearinscripciones,
    actualizarinscripciones,
    eliminarinscripciones
} from '../controllers/inscripcionesController.js';

const inscripcionesRouter = Router();

inscripcionesRouter.get('/', listarTodosinscripciones);
inscripcionesRouter.get('/:id_inscripcion', listarinscripcionesPorId);
inscripcionesRouter.post('/', crearinscripciones);
inscripcionesRouter.put('/:id_inscripcion', actualizarinscripciones);
inscripcionesRouter.delete('/:id_inscripcion', eliminarinscripciones);

export default inscripcionesRouter;