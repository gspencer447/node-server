const http = require("http");
const PORT = 5001;

http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  response.write("Hello fellow!");
  response.end();
}).listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});