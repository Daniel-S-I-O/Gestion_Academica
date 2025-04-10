import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load env variables
dotenv.config()

const app = express()

// Importar las rutas de los estudiantes
import estudiantesRouter from './routes/estudiantesRoute.js';
// Importar las rutas de los profesores
import profesoresRoute from './routes/profesoresRoute.js';
// Importar las rutas de los cursos
import cursosRoute from './routes/cursosRoute.js';
// Importar las rutas de inscripciones
import inscripcionesRoute from './routes/inscripcionesRoute.js'
// Importar las rutas de calificaciones
import calificacionesRoute from './routes/CalificacionesRoute.js'


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//Usar las rutas
app.use('/estudiantes', estudiantesRouter); 
app.use('/profesores', profesoresRoute); 
app.use('/cursos', cursosRoute); 
app.use('/inscripciones', inscripcionesRoute); 
app.use('/calificaciones', calificacionesRoute);
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`)
})