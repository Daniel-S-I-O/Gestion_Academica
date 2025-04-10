import {config} from '../config.js';

/**
 * Carga la lista de profesores
 */
const listarTodosprofesoresQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM profesores', (err, filas) => {
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
 * Buscar un profesores por su ID (llave primaria)
 */
const listarprofesoresPorIdQuery = (id_profesor) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM profesores WHERE id_profesor = ? LIMIT 1', [id_profesor], (err, filas) => {
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
 * Guardar un nuevo profesores
 */
const crearprofesoresQuery = async (profesores) => {
    const { nombre, apellido } = profesores;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO profesores (nombre, apellido) VALUES (?, ?)';
        config.query(sql, [nombre, apellido], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un profesores por su ID
 */
const actualizarprofesoresQuery = (id_profesor, profesores) => {
    const { nombre, apellido } = profesores;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE profesores SET nombre = ?, apellido = ? WHERE id_profesor = ?';
        config.query(sql, [nombre, apellido, id_profesor], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un profesores por su ID
 */
const eliminarprofesoresQuery = (id_profesor) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM profesores WHERE id_profesor = ?';
        config.query(sql, [id_profesor], (err, resultado) => {
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
    listarTodosprofesoresQuery,
    listarprofesoresPorIdQuery,
    crearprofesoresQuery,
    actualizarprofesoresQuery,
    eliminarprofesoresQuery   
}