const http = require('http');
const file_system = require('fs');
const port = 8000;

//handling the server
function onRequest(req, res){
  res.writeHead(200,{'Content-Type':'text/html'});
  file_system.readFile('./index.html',null, function(error, data){

    if (error){
      res.writeHead(404);
      res.writeHead('Page not found !');
    }else {
      res.write(data);
    }
    res.end();
  });
}
console.log('server is running on port ' + port);

// calling the onRequest function to spin the server on port 8000

http.createServer(onRequest).listen(port);
