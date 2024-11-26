import { controllerHome, controllerHomeUser, controllerHomePost } from '../controllers/controllerHome.js'

export default function routes (app) {
    app.get('/', controllerHome);
    app.get('/:user', controllerHomeUser);
    app.post('/', controllerHomePost);
};