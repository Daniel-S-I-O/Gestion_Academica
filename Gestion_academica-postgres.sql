- Database schema for gestion_academica in PostgreSQL
CREATE DATABASE IF NOT EXISTS `gestion_academica`
USE `gestion_academica`;

-- tabla gestion_academica.calificaciones
CREATE TABLE IF NOT EXISTS `calificaciones` (
  `id_calificacion` int(11) NOT NULL AUTO_INCREMENT,
  `id_inscripcion` int(11) DEFAULT NULL,
  `calificacion` decimal(5,2) NOT NULL,
  `fecha_calificacion` date NOT NULL,
  PRIMARY KEY (`id_calificacion`),
  KEY `id_inscripcion` (`id_inscripcion`),
  CONSTRAINT `calificaciones_ibfk_1` FOREIGN KEY (`id_inscripcion`) REFERENCES `inscripciones` (`id_inscripcion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- tabla gestion_academica.calificaciones
INSERT IGNORE INTO `calificaciones` (`id_calificacion`, `id_inscripcion`, `calificacion`, `fecha_calificacion`) VALUES
	(1, 1, 2.00, '2025-03-21'),
	(2, 2, 3.00, '2025-04-10'),
	(3, 3, 2.00, '2025-04-10');

-- tabla gestion_academica.cursos
CREATE TABLE IF NOT EXISTS `cursos` (
  `id_curso` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `id_profesor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_curso`),
  KEY `id_profesor` (`id_profesor`),
  CONSTRAINT `cursos_ibfk_1` FOREIGN KEY (`id_profesor`) REFERENCES `profesores` (`id_profesor`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- tabla gestion_academica.cursos:
INSERT IGNORE INTO `cursos` (`id_curso`, `nombre`, `descripcion`, `id_profesor`) VALUES
	(1, 'POO', 'Programacion orientada a objetos', 1),
	(2, 'enfermeria', 'enfermeria profesional', 2),
	(3, 'Derecho', 'Derecho Penal', 3);

-- tabla gestion_academica.estudiantes
CREATE TABLE IF NOT EXISTS `estudiantes` (
  `id_estudiante` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_estudiante`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- tabla gestion_academica.estudiantes: ~3 rows (aproximadamente)
INSERT IGNORE INTO `estudiantes` (`id_estudiante`, `nombre`, `apellido`, `fecha_nacimiento`, `email`, `telefono`) VALUES
	(1, 'Daniel', 'inestroza', '1994-03-21', 'lavidaesunalenteja@web.com', '12345678'),
	(2, 'maria', 'lopez', '2000-04-10', 'marialopez@web.com', '12341234'),
	(3, 'Marcos', 'Agurcia', '2001-04-10', 'MarcosAG@web.com', '98766789');

-- tabla gestion_academica.inscripciones
CREATE TABLE IF NOT EXISTS `inscripciones` (
  `id_inscripcion` int(11) NOT NULL AUTO_INCREMENT,
  `id_estudiante` int(11) DEFAULT NULL,
  `id_curso` int(11) DEFAULT NULL,
  `fecha_inscripcion` date NOT NULL,
  PRIMARY KEY (`id_inscripcion`),
  KEY `id_estudiante` (`id_estudiante`),
  KEY `id_curso` (`id_curso`),
  CONSTRAINT `inscripciones_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiantes` (`id_estudiante`),
  CONSTRAINT `inscripciones_ibfk_2` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- tabla gestion_academica.inscripciones: ~3 rows (aproximadamente)
INSERT IGNORE INTO `inscripciones` (`id_inscripcion`, `id_estudiante`, `id_curso`, `fecha_inscripcion`) VALUES
	(1, 1, 1, '2025-03-21'),
	(2, 2, 2, '2025-04-10'),
	(3, 3, 3, '2025-04-10');

-- tabla gestion_academica.profesores
CREATE TABLE IF NOT EXISTS `profesores` (
  `id_profesor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_profesor`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- tabla gestion_academica.profesores: ~3 rows (aproximadamente)
INSERT IGNORE INTO `profesores` (`id_profesor`, `nombre`, `apellido`, `email`, `telefono`) VALUES
	(1, 'Carlos', 'Ubeda', '123@web.com', '45674567'),
	(2, 'Jose', 'Perez', '1234@web.com', '87658765'),
	(3, 'Mario', 'Zapata', '555@web.com', '43258765');