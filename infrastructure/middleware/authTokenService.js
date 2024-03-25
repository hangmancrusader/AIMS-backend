const express = require('express')
const jwt = require('jsonwebtoken');
const app =express();
app.use(express.json());
//invoked by authenticateusecase to generate jwt token
class authTokenService {
    createToken(id, email) {
        const maxage = 3 * 24 * 60 * 60; // 3 days
        return jwt.sign({ id, email }, 'secret', { expiresIn: maxage });
    }
}
module.exports = authTokenService;