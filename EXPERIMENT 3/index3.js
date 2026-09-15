/*write a Node.js program to create a basic http server that handles different url routes the server should:
display"home page" when the user visits/.
display "about page" when the user visits/about.
return a 404 status code and display "page not found" for any invalid url
provide a link to return to the home page on the 404 page
run the server on port 3000*/

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.write("Home Page");
        res.end();
    }

    else if (req.url == "/about") {
        res.write("About Page");
        res.end();
    }

    else {
        res.write("Page Not Found");
        res.end();
    }

});

server.listen(8000);

console.log("Server started on port 3000");