import {config} from '../config.js';

/**
 * Carga la lista de los cursos
 */
const listarTodoscursosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM cursos', (err, filas) => {
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
 * Buscar un cursos por su ID (llave primaria)
 */
const listarcursosPorIdQuery = (id_curso) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM cursos WHERE id_curso = ? LIMIT 1', [id_curso], (err, filas) => {
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
 * Guardar cursos
 */
const crearcursosQuery = async (cursos) => {
    const { nombres } = cursos;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO cursos (nombres) VALUES (?)';
        config.query(sql, [nombres], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un cursos por su ID
 */
const actualizarcursosQuery = (id_curso, cursos) => {
    const { nombres } = cursos;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE cursos SET nombres = ?, WHERE id_curso = ?';
        config.query(sql, [nombres, id_curso], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un cursos por su ID
 */
const eliminarcursosQuery = (id_curso) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM cursos WHERE id = ?';
        config.query(sql, [id_curso], (err, resultado) => {
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
    listarTodoscursosQuery,
    listarcursosPorIdQuery,
    crearcursosQuery,
    actualizarcursosQuery,
    eliminarcursosQuery   
}