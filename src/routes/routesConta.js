import express from 'express';
import controllerConta from '../controllers/controllerConta.js';
const routesConta = express.Router();

routesConta.get('/calculadora/:sinal/:valorA/:valorB', controllerConta);

export default routesConta;