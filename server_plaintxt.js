/*
Creatig a server usin Nodejs
*/
const http = require('http')
const port = 3000


const server = http.createServer(function(req, res) {
  console.log('request was made:' + req.url)
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('welcome lil bitch ;*')
})

server.listen(port, '127.0.0.1', function(error){
  if (error) {
    console.log('something went wrong', error)
  }else{
    console.log('now listening to the port' + port)
  }
})
