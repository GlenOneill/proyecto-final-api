const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Buscamos el header "Authorization"
    const authHeader = req.header('Authorization');
    
    // Si no enviaste nada, no entras
    if (!authHeader) return res.status(401).json({ message: 'Acceso denegado. Token faltante.' });

    try {
        // Separamos la palabra "Bearer" del código largo
        const token = authHeader.split(' ')[1];
        const verified = jwt.verify(token, 'mi_password_secreto'); // Verificamos el token con la misma clave secreta
        req.user = verified;
        next(); 
    } catch (error) {
        res.status(400).json({ message: 'Token no válido' });
    }
};