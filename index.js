var fs = require('fs');


fs.readFile('a_example.in',"utf8", function (err, data) {
  if (err) throw err;
 
  var firstline=data.split("\n")[0];
  var params=firstline.split(" ");
  console.log(firstline);
});
fs.writeFile("a_example.out", "test", function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});