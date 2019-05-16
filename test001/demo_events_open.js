var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/demofile.txt');

/*Write to the console when the file is opened:*/
try {
    readStream.on('open', function () {
        console.log('The file is open');
      });    
} catch (error) {
    print(error);
}

