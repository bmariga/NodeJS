const http = require("http");

// Create Server object
http
  .createServer((req, res) => {
    // Response
    res.write("Hello World");
    res.end();
  })
  .listen(5000),
  () => console.log("Server running");
