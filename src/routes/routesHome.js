import { controllerHome, controllerHomeName, controllerHomeQuery } from '../controllers/controllerHome.js';

export default function routes (app) {
    app.get('/', controllerHome);
    app.get('/home/:name', controllerHomeName);
    app.get('/query', controllerHomeQuery);
};