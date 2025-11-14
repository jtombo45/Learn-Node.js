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

