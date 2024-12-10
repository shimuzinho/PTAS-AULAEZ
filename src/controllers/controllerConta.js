export default function controllerConta (req, res) {
    const valorA = parseFloat(req.params.valorA);
    const valorB = parseFloat(req.params.valorB);
    const sinal = req.params.sinal.toLowerCase();
    let result;
    if (sinal == 'adicao') {
        result = valorA + valorB;
    }
    if (sinal == 'subtracao') {
        result = valorA - valorB;
    }
    if (sinal == 'multiplicacao') {
        result = valorA * valorB;
    }
    if (sinal == 'divisao') {
        result = valorA / valorB;
    }
    
    if (result != undefined) {
        res.send(`<h1>Resultado: ${result}</h1>`);
    } else {
        res.send(`Operação inválida`);
    }
};  