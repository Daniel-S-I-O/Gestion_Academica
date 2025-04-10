import {config} from '../config.js';

/**
 * Carga la lista de los inscripciones
 */
const listarTodosinscripcionesQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM inscripciones', (err, filas) => {
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
 * Buscar un inscripciones por su ID (llave primaria)
 */
const listarinscripcionesPorIdQuery = (id_inscripcion) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM inscripciones WHERE id = ? LIMIT 1', [id_inscripcion], (err, filas) => {
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
 * Guardar inscripciones
 */
const crearinscripcionesQuery = async (inscripciones) => {
    const { nombres } = inscripciones;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO inscripciones (nombres) VALUES (?)';
        config.query(sql, [nombres ], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un inscripciones por su ID
 */
const actualizarinscripcionesQuery = (id_inscripcion, inscripciones) => {
    const { nombres } = inscripciones;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE inscripciones SET nombres = ? WHERE id_inscripcion = ?';
        config.query(sql, [nombres, id_inscripcion], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un inscripciones por su ID
 */
const eliminarinscripcionesQuery = (id_inscripcion) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM inscripciones WHERE id_inscripcion = ?';
        config.query(sql, [id_inscripcion], (err, resultado) => {
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
    listarTodosinscripcionesQuery,
    listarinscripcionesPorIdQuery,
    crearinscripcionesQuery,
    actualizarinscripcionesQuery,
    eliminarinscripcionesQuery   
}