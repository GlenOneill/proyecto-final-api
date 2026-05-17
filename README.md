# Proyecto Final: API REST de Gestión de Tareas

1. Descripción del Proyecto
Este proyecto es una aplicación Full-Stack para la gestión de tareas (CRUD) que cuenta con un sistema de autenticación de usuarios seguro mediante JSON Web Tokens (JWT). El backend está desarrollado con Node.js y Express, conectándose a una base de datos MySQL corriendo en un contenedor de Docker. El frontend está construido con tecnologías web estándar (HTML, CSS y JavaScript) utilizando Fetch API para consumir los endpoints.

2. Estructura del Proyecto
* `server.js`: Archivo principal de configuración e inicio del servidor Express.
* `public/`: Carpeta que contiene los archivos estáticos del Frontend (`index.html`, `tasks.html`, `login.js`, `tasks.js`, `style.css`).
* `src/`: Estructura del Backend organizada por controladores, rutas, middlewares y configuraciones.
* `bases-de-datos.sql`: Script de base de datos para la creación de las tablas de usuarios y tareas.

3. Tecnologías Utilizadas
* **Backend:** Node.js, Express.js
* **Autenticación:** JWT (JSON Web Tokens), Bcrypt (encriptación de contraseñas)
* **Base de Datos:** MySQL ejecutado en un contenedor Docker
* **Frontend:** HTML5, CSS3, JavaScript Moderno (Fetch API, LocalStorage)

4. Requisitos Previos
Antes de ejecutar la aplicación, asegúrese de tener instalado:
* [Node.js](https://nodejs.org/) (versión v14 o superior)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (para levantar la base de datos)

## Instrucciones de Instalación y Ejecución

5. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/GlenOneill/proyecto-final-api.git
