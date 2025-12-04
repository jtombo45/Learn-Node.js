import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { getData } from './utils/getData.js'

// 1. Port used by the server
const PORT = 8000

// 2. Get current directory of the this file (like __dirname in CommonJS)
const __dirname = import.meta.dirname 

// Test getData()
console.log('Data from getData():', await getData(__dirname))

// 3. Create the HTTP server
const server = http.createServer(async (req, res) => {
    // For *every* request, delegate to serveStatic()
    await serveStatic(req, res, __dirname)
})

// 4. Start listening
server.listen(PORT, () => console.log(`connected on port ${PORT}`))