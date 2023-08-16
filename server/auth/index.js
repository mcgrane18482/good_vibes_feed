const jwt = require("jsonwebtoken");

async function createToken(user_id) {
    const token = await jwt.sign({
        user_id
    }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log(process.env.JWT_SECRET);
    return token;
}

async function validateToken(token) {
    const isValid = await jwt.verify(token, process.env.JWT_SECRET, {
        maxAge: "1h"
    });

    return isValid;
}

module.exports = { createToken, validateToken };