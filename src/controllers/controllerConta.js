export default function controllerConta (req, res) {
    const valorA = parseFloat(req.params.valorA);
    const valorB = parseFloat(req.params.valorB);
    let result;
    if (req.params.sinal.toLowerCase() == 'adicao') {
        result = valorA + valorB;
    }
    if (req.params.sinal.toLowerCase() == 'subtracao') {
        result = valorA - valorB;
    }
    if (req.params.sinal.toLowerCase() == 'multiplicacao') {
        result = valorA * valorB;
    }
    if (req.params.sinal.toLowerCase() == 'divisao') {
        result = valorA / valorB;
    }
    if (result != undefined) {
        res.send(`<h1>Resultado: ${result}</h1>`);
    } else {
        res.send(`Operação inválida`);
    }
};  