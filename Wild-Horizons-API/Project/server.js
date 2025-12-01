/*
Challenge: 

1.Set up a server that serves the string 
    '<html><h1>The server is working</h1></html>'.
    
    What should the content type be? 
    What status code should you send?

2. Listen on port 8000 and log a connection message to the console.

3. Open the browser to see your first served HTML.

*/

import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { relativePathFunc, absolutePathFunc } from './utils/testPath.js'

const PORT = 8000

const __dirname = import.meta.dirname


const server = http.createServer((req, res)=> {

  const absPathToResource =  path.join(__dirname, 'public', 'index.html')
  const relativePath = path.relative(process.cwd(), absPathToResource)
  console.log('absolute path to resource:', absPathToResource)
  console.log('relative path to resource:', relativePath)

  absolutePathFunc(__dirname)
  relativePathFunc(__dirname)

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end()
})

server.listen(PORT, () => console.log('connected on port 8000'))

