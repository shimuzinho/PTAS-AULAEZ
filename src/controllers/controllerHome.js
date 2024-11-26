export function controllerHome (req, res) {
    res.send('Olá mundo');
};

export function controllerHomeUser (req, res) {
    res.send(`Olá ${req.params.user}`);
};

export function controllerHomePost (req, res) {
    res.send('Não sei usar');
};