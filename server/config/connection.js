const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://emcgrane:${process.env.MONGO_ATLAS}@cluster0.fxnbj0s.mongodb.net/good_vibes_db`);

module.exports = mongoose.connection;