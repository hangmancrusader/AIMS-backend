const express = require('express')
const jwt = require('jsonwebtoken');
const app =express();
app.use(express.json());
//invoked by authenticateusecase to generate jwt token
class verifyTokenService {
    verifyToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.status(401).json({ message: 'JWT token is required' });

        jwt.verify(token, 'secret', (err, user) => {
            if (err) return res.status(403).json({ message: 'Invalid JWT token' });
            req.user = user;
            next();
        });
    }
}
module.exports = verifyTokenService;