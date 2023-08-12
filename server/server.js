const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3333;
const isProd = process.env.PORT;

// Middleware
if (isProd) {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
app.use(express.json());
app.use(cookieParser());

// Load routes here
app.use(routes);

// Start express server
db.once('open', () => {
    app.listen(PORT, () => console.log('Server started on port %s, PORT'));
});