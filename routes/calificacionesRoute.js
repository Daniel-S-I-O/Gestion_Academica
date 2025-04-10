import { Router } from 'express';

import {
    listarTodoscalificaciones,
    listarcalificacionesPorId,
    crearcalificaciones,
    actualizarcalificaciones,
    eliminarcalificaciones
} from '../controllers/calificacionesController.js';

const calificacionesRouter = Router();

calificacionesRouter.get('/', listarTodoscalificaciones);
calificacionesRouter.get('/:id_calificacion', listarcalificacionesPorId);
calificacionesRouter.post('/', crearcalificaciones);
calificacionesRouter.put('/:id_calificacion', actualizarcalificaciones);
calificacionesRouter.delete('/:id_calificacion', eliminarcalificaciones);

export default calificacionesRouter;