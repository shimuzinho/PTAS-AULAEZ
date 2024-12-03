import controllerConta from '../controllers/controllerConta.js';

export default function routesContas (app) {
    app.get('/calculadora/:sinal/:valorA/:valorB', controllerConta);
};