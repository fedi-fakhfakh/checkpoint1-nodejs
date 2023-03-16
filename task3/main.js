const fs = require('fs');

fs.writeFile('write.txt', 'Hello, world!', function (err) {
  if (err) throw err;
  console.log('File created and data written!');
});
fs.readFile('hello.txt', 'utf8', function (err, data) {
   if (err) throw err;
   console.log(data);
 });
 