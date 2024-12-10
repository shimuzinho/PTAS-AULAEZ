import express from 'express';
const app = express();
const port = 3000;

let users = [
    {
        id: 1,
        name: 'Pedro',
        age: 16
    },
    {
        id: 2,
        name: 'Rubens',
        age: 16
    },
    {
        id: 3,
        name: 'Guilherme',
        age: 17
    },
    {
        id: 4,
        name: 'Enzo',
        age: 16
    }
];

app.use(express.json());

app.get('/users', (req, res) => {
    const { id } = req.body;
    
    if (id) {
        const user = users.find(user => user.id == id);
        if (user) {
            res.json({
                error: false,
                data: user
            });
        } else {
            res.json({
                error: true,
                message: 'Usuário não encontrado.'
            });
        }
    } else {
        res.json({
            error: false,
            data: users
        });
    }
});

app.post('/users', (req, res) => {
    const { name, age } = req.body;
    if (name && age) {
        const newUser = {
            id: users.length + 1,
            name,
            age
        };
        users = [...users, newUser];
        res.json({
            error: false,
            message: 'Usuário cadastrado.',
            data: newUser
        });
    } else {
        res.json({
            error: true,
            message: 'Nome ou idade não informados.'
        });
    }
});

app.get('/calculadora/:sinal/:valorA/:valorB', (req, res) => {
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
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});