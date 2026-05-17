
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware'); 
const taskController = require('../controllers/taskController');


router.use(auth); 

router.get('/', taskController.getTasks);          
router.post('/', taskController.createTask);      
router.put('/:id', taskController.updateTask);    
router.delete('/:id', taskController.deleteTask); 

module.exports = router;

router.get('/', auth, (req, res) => {
    res.json({ 
        message: "¡Felicidades! Lograste entrar a la ruta protegida.",
        user: req.user 
    });
});

router.post('/', auth, taskController.createTask);

module.exports = router;