// Imports
const helmet= require('helmet')
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const path = require('path');

require("dotenv").config();
const port = process.env.PORT || 3000
const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404


// Starting the server
app.listen(45635, () => console.log(`Server on port ${port}`));