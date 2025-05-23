CREATE TABLE estudiantes(
	id SERIAL PRIMARY KEY,
	numero_identificacion INT NOT NULL UNIQUE,
	nombre VARCHAR(75) NOT NULL,
	apellido VARCHAR(75) NOT NULL,
	fecha_nacimiento DATE NOT NULL,
	genero VARCHAR(10) NOT NULL CHECK (genero IN ('Hombre', 'Mujer')),
	telefono INT NOT NULL,
	correo VARCHAR(254) NOT NULL,
);