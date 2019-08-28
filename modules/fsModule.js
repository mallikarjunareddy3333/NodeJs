// var fs = require('fs');

// fs.readFile('input.txt', function(err, data){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Async data is " + data.toString());
//     }
// });

// var data = fs.readFileSync('input.txt');
// console.log("Sync data is : " + data.toString());
// console.log('This is the end')

var fs = require('fs');
var readableStream = fs.createReadStream('input.txt');
var data = '';

readableStream.setEncoding('UTF-8');
readableStream.on('data', function(chunk){
    data += chunk;
});

readableStream.on('end', function(){
    console.log(data);
});

writeData = "Hello World";
var writableStream = fs.createWriteStream('output.txt');
writableStream.write(writeData, 'UTF-8');
writableStream.end();

writableStream.on('finish', function(){
    console.log('Write completed');
});

var readableStream1 = fs.createReadStream("in.txt");
var writableStream1 = fs.createWriteStream('out.txt');
readableStream1.pipe(writableStream1);
