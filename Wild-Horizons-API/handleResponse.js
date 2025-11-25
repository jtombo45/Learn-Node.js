export const handleResponse = (
    res, 
      {
        statusCode = 200, 
        data = null, 
        contentType = 'application/json', 
        isError = false,
        message = ''
      }) =>
    {
        // Set response headers and status code
        res.setHeader('Content-Type', contentType)
        res.statusCode = statusCode

        // Send error or data response
        if (isError) {
        res.end(JSON.stringify({
            error: statusCodeToErrorMessage(statusCode),
            message: message
        }))
        } 
        else {
            res.end(JSON.stringify(data))
        }
    }

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