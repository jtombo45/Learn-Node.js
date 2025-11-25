import http from 'node:http'
import { getDataFromDB } from './database/db.js'

const PORT = 8000

/* Repetitive code:
  - request url and method checking
  - response header setting
  - status code setting
  - response ending
*/

function statusCodeToErrorMessage(statusCode) {
  const statusMessages = {
    400: 'Bad Request', 
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found', 
    500: 'Internal Server Error'
  }
  return statusMessages[statusCode] || 'Unknown Error'
}

function handleResponse(res, statusCode, contentType = 'application/json', data, isError = false, message = '') {
  res.setHeader('Content-Type', contentType)
  res.statusCode = statusCode
  if (isError) {
    res.end(JSON.stringify({
      error: statusCodeToErrorMessage(statusCode),
      message: message
    }))
  } else {
    res.end(JSON.stringify(data))
  }
}

/* Create server and define routes */
const server = http.createServer(async (req, res) => {

  // Log the request URL and method
  console.log(`Request URL: ${req.url}, Method: ${req.method}`)

  // Fetch data from the database
  const destinations = await getDataFromDB()

  // Route: GET /api
  if (req.url === '/api' && req.method === 'GET') {
    handleResponse(res, 200, destinations)
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
      
      handleResponse(res, 200, filteredDestinations)
    } 
    // Route: error response 
    else {
      handleResponse(res, 404, null, true, 'The requested route does not exist'
    )
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))

