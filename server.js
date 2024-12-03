import express from 'express';
import routesHome from './src/routes/routesHome.js'
import routesContas from './src/routes/routesConta.js';
const app = express();
const port = 3000;

app.use(routesContas);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});