var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //var file_name = "." + req.url
  fs.readFile(__dirname + '/demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    try {
        res.write(data);    
    } catch (error) {
        console.log(err);
    }
    res.end();
  });
}).listen(9000);