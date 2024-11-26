import express from 'express';
import routesHome from './src/routes/routesHome.js'
const app = express();
const port = 3000;

routesHome(app);
app.use(express.json());

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});