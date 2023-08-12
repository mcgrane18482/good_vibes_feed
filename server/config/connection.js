const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/good_vibes_db');

module.exports = mongoose.connection;