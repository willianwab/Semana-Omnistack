const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());//Informando o express que estarei utilizando json 
//para requisição ,transforma em javascript 
app.use(routes);
app.use(errors());
module.exports = app;

