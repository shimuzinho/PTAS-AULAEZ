export function controllerHome (req, res) {
    res.send('Olá mundo');
};

export function controllerHomeName (req, res) {
    res.send(`<h3> Olá ${req.params.name} </h3>`);
};

export function controllerHomeQuery (req, res) {
    res.send(req.query["name"]);
};