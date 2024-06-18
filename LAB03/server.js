//LAB-03 : Khushi Patel
//200539535

const connect = require('connect');
const url = require('url');

const app = connect();

// Defining the calculate function
function calculate(req, res) {
  const query = url.parse(req.url, true).query;
  const method = query.method;
  const x = parseFloat(query.x);
  const y = parseFloat(query.y);

  let result;

  switch (method) {
    case 'add':
      result = x + y;
      break;
    case 'subtract':
      result = x - y;
      break;
    case 'multiply':
      result = x * y;
      break;
    case 'divide':
      if (y === 0) {
        res.end('Error: Division by zero');
        return;
      }
      result = x / y;
      break;
    default:
      res.end('Error: Invalid method');
      return;
  }

  res.end(`${x} ${method} ${y} = ${result}`);
}

// Handle requests
app.use('/lab2', calculate);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
