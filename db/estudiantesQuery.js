import {config} from '../config.js';

/**
 * Carga la lista de los estudiantes
 */
const listarTodosestudiantesQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM estudiantes', (err, filas) => {
            // Si genera error, mostramos en la consola que es lo que falla
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // Si no hay error, devolvemos los datos de la tabla 
                resolve(filas);
            }
        });
    });
};

/**
 * Buscar un estudiante por su ID (llave primaria)
 */
const listarestudiantesPorIdQuery = (id_estudiante) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM estudiantes WHERE id = ? LIMIT 1', [id_estudiante], (err, filas) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(filas);
            }
        });
    });
};


/**
 * Guardar estudiantes
 */
const crearestudiantesQuery = async (estudiantes) => {
    const { nombres, apellido } = estudiantes;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO estudiantes (nombres) VALUES (?, ?)';
        config.query(sql, [nombres, apellido ], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un estudiantes por su ID
 */
const actualizarestudiantesQuery = (id_estudiante, estudiante) => {
    const { nombres, apellido } = estudiante;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE estudiantes SET nombres = ?, apellido = ?, WHERE id_estudiante = ?';
        config.query(sql, [nombres, apellido, id_estudiante], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un estudiante por su ID
 */
const eliminarestudiantesQuery = (id_estudiante) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM estudiantes WHERE id_estudiante = ?';
        config.query(sql, [id_estudiante], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosestudiantesQuery,
    listarestudiantesPorIdQuery,
    crearestudiantesQuery,
    actualizarestudiantesQuery,
    eliminarestudiantesQuery   
}