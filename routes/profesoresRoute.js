import { Router } from 'express';

import {
    listarTodosprofesores,
    listarprofesoresPorId,
    crearprofesores,
    actualizarprofesores,
    eliminarprofesores
} from '../controllers/profesoresController.js';

const profesoresRouter = Router();

profesoresRouter.get('/', listarTodosprofesores);
profesoresRouter.get('/:id_profesor', listarprofesoresPorId);
profesoresRouter.post('/', crearprofesores);
profesoresRouter.put('/:id_profesor', actualizarprofesores);
profesoresRouter.delete('/:id_profesor', eliminarprofesores);

export default profesoresRouter;