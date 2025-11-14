import http from 'node:http';

const PORT = 8000;


// Store the server instance in a variable
const server = http.createServer((req, res) => {
  res.end('Hello, Wild Horizons API!'); // This message appears in the browser
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); // This message appears in the terminal
});
