const http = require('node:http');
const PORT = 8000
const fs = require('fs');
// Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!'
//   }));
// });
const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/'){
    res.end(JSON.stringify({
      data: 'Hello world'
    }));
    return res.end();
  }else if(url === '/hero' && method === 'GET'){
    res.end(JSON.stringify({
      data: 'Hello I am super hero!'
    }));
    return res.end();
  }else if(url === '/best' && method === 'POST'){
    res.end(JSON.stringify({
      data: 'Hello I am the best!'
    }));
    return res.end();
  }else {
    res.end(JSON.stringify({
      data: '404 Page not found'
    }));
    return res.end();
  }
});
console.log(`http://localhost:${PORT}`)
server.listen(PORT);

