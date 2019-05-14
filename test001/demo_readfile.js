var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    try {
        res.write(data);    
    } catch (error) {
        console.log(err);z
    }
    res.end();
  });
}).listen(9000);