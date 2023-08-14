const router = require('express').Router();
const User = require('../models/User')

// Login, registration, etc

// Check if user is logged in
router.get('/authenticated', async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) return res.send({ user: null });

        const data = await validateToken(token);

        const user = await User.findById(data.user_id);

        res.send({ user });
    }
    catch (err) {
        res.send({
            user: null
        });
    }
});

module.exports = router;