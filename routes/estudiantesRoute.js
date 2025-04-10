import { Router } from 'express';

import {
    listarTodosestudiantes,
    listarestudiantesPorId,
    crearestudiantes,
    actualizarestudiantes,
    eliminarestudiantes
} from '../controllers/estudiantesController.js';

const estudiantesRouter = Router();

estudiantesRouter.get('/', listarTodosestudiantes);
estudiantesRouter.get('/:id_estudiante', listarestudiantesPorId);
estudiantesRouter.post('/', crearestudiantes);
estudiantesRouter.put('/:id_estudiante', actualizarestudiantes);
estudiantesRouter.delete('/:id_estudiante', eliminarestudiantes);

export default estudiantesRouter;