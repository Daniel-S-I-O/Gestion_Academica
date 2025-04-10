import { Router } from 'express';

import {
    listarTodoscursos,
    listarcursosPorId,
    crearcursos,
    actualizarcursos,
    eliminarcursos
} from '../controllers/cursosController.js';

const cursosRouter = Router();

cursosRouter.get('/', listarTodoscursos);
cursosRouter.get('/:id', listarcursosPorId);

cursosRouter.post('/', crearcursos);
cursosRouter.put('/:id', actualizarcursos);
cursosRouter.delete('/:id', eliminarcursos);

export default cursosRouter;