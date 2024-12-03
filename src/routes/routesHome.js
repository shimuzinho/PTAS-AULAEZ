import express from 'express';
import { controllerHome, controllerHomeName, controllerHomeQuery } from '../controllers/controllerHome.js';

const routesHome = express.Router();

routesHome.get('/', controllerHome);
routesHome.get('/:name', controllerHomeName);
routesHome.get('/query', controllerHomeQuery);

export default routesHome;