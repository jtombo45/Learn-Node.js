3 ways users can get data:
1. /api
2. /api/country/india
3. /api?country=turkey&is_open_to_public=true

What we will learn
- Core HTTP module
    - creating a server
    - sending response codes (200, 400, etc.)
    - setting headers
    - handling requests/responses
    - filtering data
    - extracting query params

Scrimba Network Tool and Related Cocnepts
- client and server
    - client: client is the part of a web app that user interact with directly
        - Browser
        - Mobile App
        - Smart Watch
    - server: server is a remote machine which handles data and sends back information (e.g: html/css) or content to the client in response to requests
- Visual
            request
    Client --------> Server
            response
           <--------
- REST (Representation State Transfer (REST):
    - REST API: allows a client to talk to a server to get access (and possible edit or add to) some data stored remotely.
    

Package.json is the blueprint (like prod.config, .csproj, pom.xml)
- package.json: provides a high level overview of what the project is and what it needs to run
    - Contains metadata (name, ersion, author, description, etc.)
    - Simplifies collaboration
        - Manages dependencies
        - Defining start script: automates the task of running the app
- package.json is just a file, we have 2 options
    - create it manually 
    - leverage npm init

HTTP Module
    Think of your Node app like a tiny restaurant:
        •	Browser = customer
        •	Request = their order
        •	Response = the food you serve
        •	http module = the kitchen equipment that lets you open the restaurant

    The http module is Node’s built-in tool for creating web servers. No installs, no setup. It just lets your program listen for requests and send back responses.

    ⸻

    Why and When You Use It

    Use it when you want to understand how servers work at a low level or build something without a framework like Express.

    ⸻

    Modern Minimal Example

    import http from "node:http";

    const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({
        message: "Hello from a Node server!"
    }));
    });

    server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
    });

    What’s happening
        •	createServer opens your “restaurant”
        •	req is the incoming request
        •	res is what you send back
        •	JSON response is now the modern standard

    ⸻

    TL;DR

    The http module is the basic engine behind web servers in Node. It listens for requests and sends back responses—just like taking and serving orders in a restaurant. Perfect for learning the fundamentals.

The response object
- Has method which allow us to:
    - specify content-type
    - set status codes (200, 400 etc.)
    - provide content (html, JSON, images)

Request-Response Cycle
- REQUEST
    - Method: Get/POST/DELETE/PUT/PATCH/ETC
    - Request Path: /api, etc
    - Data: query string/path params
- HANDLE REQUEST
    - Filtering data
    - Throwing an error
    - Generate a response
- RESPONSE 
    - Resource (JSON)
    - Content-Type (application/json)
- Visual
            HTTP request
    Client ------------------> Server (handles request(s))
            HTTP response
           <------------------

API:
- If scrimba had an api the url wouldnt be scrimba.com
    - It would be scrimba.com/api
        - And have endpoint such as such as courses, lessons or etc
            - ex:
                - scrimba.com/api/courses
                - scrimba.com/api/topics
        - And query strings
            - ex:
                - scrimba.com/api?topics=node&price=free
                    - & is used to add more parameters
The Request Object
- Gives us access to the incoming request
    - The url the client used
    - The headers
    - Any data sent
    - The method (GET, POST, DELETE)
- This allows us understand what the client want to achieve, what they want to give us, what they want from us in return


HTTP
- HTTP is a text-based protocol. All data transferred between the client and the server must be in the forms of strings.

JSON (JavaScript Object Notation)
- JSON is a lightweight format for storing and transporting data
- We use JSON.stringify to convert json object to string
    - JSON.stringify(data-to-convert>)

Content-Types (actually Mime types)
- application/json
- text/html
- text/css
- application/javascript
- image formats

Route Note Found
```
else {
      console.log('invalid route')
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 404
      res.end(JSON.stringify({
        error: 'not found',
        message: 'The requested route does not exist'
      }))
```

Calling our endpoint
- Start the server
    - cd <targerFolder>
    - node server.js
- Call the endpoint
    - open new terminal
    - make the api call
        - CURL option
            - curl http://localhost:<serverPort>/api
        - POSTMAN
            - tbd
        - Browser
            - tbd

Add Path Parameters
- Allow user filter data by content
- e.g:
    - /api/continent/spain
- code:
```
else if (req.url.startsWith('/api/continent/') && req.method === 'GET') {
      const continent = req.url.split('/').pop() // Get the continent from the URL
      console.log(continent)
      const filteredDestinations = destinations.filter((detination) => {
        return detination.continent.toLowerCase() === continent.toLowerCase()
      })
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 200
      res.end(JSON.stringify(filteredDestinations))
    } 
```

