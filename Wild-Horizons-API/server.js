import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { handleResponse } from './handleResponse.js'

const PORT = 8000

/* Repetitive code:
  - request url and method checking
  - response header setting
  - status code setting
  - response ending
*/

/* Create server and define routes */
const server = http.createServer(async (req, res) => {

  // Log the request URL and method
  console.log(`Request URL: ${req.url}, Method: ${req.method}`)

  // Fetch data from the database
  const destinations = await getDataFromDB()

  // Route: GET /api
  if (req.url === '/api' && req.method === 'GET') {
    handleResponse(res,{statusCode: 200, data: destinations})
  } 
  // Route: GET /api/continent/:continent
  else if (req.url.startsWith('/api/continent/') && req.method === 'GET') {
      // Get the continent from the URL
      const continent = req.url.split('/').pop() 

      // Log the requested continent
      console.log(`Requested continent: ${continent}`)

      // Filter destinations by continent
      const filteredDestinations = destinations.filter((detination) => {
        return detination.continent.toLowerCase() === continent.toLowerCase()
      })
      
      handleResponse(res, {statusCode: 200, data: filteredDestinations, })
    } 
    // Route: error response 
    else {
      handleResponse(res, {statusCode: 404, isError: true, message: 'The requested route does not exist'})
    }
})

// Start the server
server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))