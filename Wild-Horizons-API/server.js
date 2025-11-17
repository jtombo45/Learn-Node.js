import http from 'node:http';

const PORT = 8000;


// Store the server instance in a variable
const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    res.writeHead(204); 
    res.write('This is some data \n');
    res.write('This is some more data \n');
    // End the response is required to send the data to the client
    res.end('Hello, Wild Horizons API!', 'utf-8', () => console.log('Response end') ); // This message appears in the browser
  }
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); // This message appears in the terminal
});
