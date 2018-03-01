var fs = require('fs');


fs.readFile('a_example.in', "utf8", function (err, data) {
  if (err) throw err;

  var lines = data.split("\n");
  var params = lines[0].split(" ");
  var R = params[0];
  var C = params[1];
  var F = params[2];
  var N = params[3];
  var B = params[4];
  var T = params[5];
  console.log(R, C, F, N, B, T);
  for (var i = 0; i < F; i++) {
    var ride = lines[i + 1].split(" ");
    var a = ride[0];
    var b = ride[1];
    var x = ride[2];
    var y = ride[3];
    var s = ride[4];
    var f = ride[5];
    console.log(a, b, x, y, s, f);
  }
});
fs.writeFile("a_example.out", "test", function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});