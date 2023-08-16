const jwt = require("jsonwebtoken");
require('dotenv').config();

async function createToken(userId) {
    const token = await jwt.sign({
        userId
    }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return token;
}

async function validateToken(token) {
    const isValid = await jwt.verify(token, process.env.JWT_SECRET, {
        maxAge: "1h"
    });

    return isValid;
}

module.exports = { createToken, validateToken };