import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { handleResponse } from './utils/sendJSONResponse.js'
import { url } from 'node:inspector'
import { applyFilters } from './utils/applyFilters.js'

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

  // Parse the URL and query parameters
  const urlObj = new URL(req.url, `http://${req.headers.host}`)
  const queryObj = Object.fromEntries(urlObj.searchParams)

  // Fetch data from the database
  const destinations = await getDataFromDB()
  const filteredDestinations = null;

  // Route: GET /api
  if (urlObj.pathname === '/api' && req.method === 'GET') {
    const filteredDestinations = applyFilters(destinations, queryObj)
    handleResponse(res,{statusCode: 200, data: filteredDestinations})
  } 
  // Route: GET /api/continent/:continent
  else if (urlObj.pathname.startsWith('/api/continent/') && req.method === 'GET') {
      // Get the continent from the URL
      const continent = req.url.split('/').pop() 
      const queryWithPath = {...queryObj, continent: continent}

      // Log the requested continent
      console.log(`Requested continent: ${continent}`)

      // Filter destinations by continent, query parameters, and handle response
      const filteredDestinations = applyFilters(destinations, queryWithPath)
      handleResponse(res, {statusCode: 200, data: filteredDestinations, })
    } 
    // Route: GET /api/country/:country
    else if (urlObj.pathname.startsWith('/api/country/') && req.method === 'GET') {
      
      // Get the country from the URL
      const country = req.url.split('/').pop()  
      const queryWithPath = {...queryObj, country: country}

      // Log the requested country
      console.log(`Requested country: ${country}`)

      // Filter destinations by country, query parameters, and handle response
      const filteredDestinations = applyFilters(destinations, queryWithPath)
      handleResponse(res, {statusCode: 200, data: filteredDestinations, })
    }
    // Route: error response 
    else {
      handleResponse(res, {statusCode: 404, isError: true, message: 'The requested route does not exist'})
    }
})

// Start the server
server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))