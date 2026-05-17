require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes'); 

const express = require('express');
const app = express();

const taskRoutes = require('./src/routes/taskRoutes');

const cors = require('cors');


app.use(cors());
app.use(express.json()); 

app.use(express.static('public'));
app.get('/api/health', (req, res) => {
    res.json({ "status": "ok" });
});

app.use('/api/auth', authRoutes); 
app.use('/api/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});