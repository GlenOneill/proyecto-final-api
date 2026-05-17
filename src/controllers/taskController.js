const db = require('../config/db');

exports.createTask = (req, res) => {
    // Recibimos los datos del Body de Postman
    const { title, description, status, due_date } = req.body;
    
    // Obtenemos el ID del usuario desde el Token (gracias al middleware)
    const userId = req.user.id; 

    const query = 'INSERT INTO tasks (title, description, status, due_date, user_id) VALUES (?, ?, ?, ?, ?)';
    
    db.query(query, [title, description, status, due_date, userId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ 
            message: 'Tarea creada con éxito', 
            taskId: result.insertId 
        });
    });
};

// Paso 9: Obtener todas las tareas del usuario logueado
exports.getTasks = (req, res) => {
    const userId = req.user.id;
    const query = 'SELECT * FROM tasks WHERE user_id = ?';

    db.query(query, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Paso 10: Actualizar una tarea por ID
exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status, due_date } = req.body;
    const query = 'UPDATE tasks SET title = ?, description = ?, status = ?, due_date = ? WHERE id = ? AND user_id = ?';

    db.query(query, [title, description, status, due_date, id, req.user.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Tarea actualizada con éxito' });
    });
};

// Paso 11: Eliminar una tarea
exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tasks WHERE id = ? AND user_id = ?';

    db.query(query, [id, req.user.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Tarea eliminada correctamente' });
    });
};