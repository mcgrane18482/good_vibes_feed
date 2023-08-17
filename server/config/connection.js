const mongoose = require('mongoose');
const isProd = process.env.PORT;


mongoose.connect(isProd ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/good_vibes_db');

module.exports = mongoose.connection;