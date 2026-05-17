const token = localStorage.getItem('token');
const tasksContainer = document.getElementById('tasks-container');


if (!token) {
    window.location.href = 'index.html';
}

// 2. Función para obtener y mostrar tareas (GET)
async function fetchTasks() {
    const res = await fetch('http://localhost:3000/api/tasks', {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    const tasks = await res.json();
    
    tasksContainer.innerHTML = ''; // Limpiar antes de mostrar
    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-card';
        taskDiv.innerHTML = `
            <h4>${task.title}</h4>
            <p>${task.description}</p>
            <p>Estado: <strong>${task.status}</strong></p>
            <button onclick="deleteTask(${task.id})">Eliminar</button>
            <button onclick="updateStatus(${task.id})">Completar</button>
        `;
        tasksContainer.appendChild(taskDiv);
    });
}

// 3. Función para Crear Tarea (POST)
document.getElementById('create-task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;

    await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
            title, 
            description, 
            status: 'pending',
            due_date: new Date().toISOString().split('T')[0] // Fecha de hoy
        })
    });
    
    e.target.reset(); // Limpiar formulario
    fetchTasks(); // Refrescar lista
});

// 4. Función para Eliminar (DELETE)
async function deleteTask(id) {
    if(confirm('¿Seguro que quieres borrar esta tarea?')) {
  await fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
});
        fetchTasks();
    }
}

// 5. Función para Actualizar a "done" (PUT)
async function updateStatus(id) {
    await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: 'done' })
    });
    fetchTasks();
}

// Botón de cerrar sesión
document.getElementById('logout-btn').onclick = () => {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
};

// Cargar tareas al iniciar
fetchTasks();