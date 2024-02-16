require('dotenv').config();
const express = require('express');

//servidor de express
const app = express();
const port = process.env.PORT;

//cors
const cors = require('cors');
app.use(cors());

app.use(express.json());

//Base de datos
const { dbConnection } = require('./database/config');
dbConnection();

//Rutas api
app.use('/api/products', require('./routes/products'));

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
