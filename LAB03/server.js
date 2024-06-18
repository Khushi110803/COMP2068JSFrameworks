const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(req, res, next) {
    const query = url.parse(req.url, true).query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);
    let result;
    let operation;

    switch (method) {
        case 'add':
            result = x + y;
            operation = '+';
            break;
        case 'subtract':
            result = x - y;
            operation = '-';
            break;
        case 'multiply':
            result = x * y;
            operation = '*';
            break;
        case 'divide':
            result = x / y;
            operation = '/';
            break;
        default:
            res.end('Error: Invalid method');
            return;
    }

    res.end(`${x} ${operation} ${y} = ${result}`);
}

app.use('/lab2', calculate);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
