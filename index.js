var fs = require('fs');
var readLine = require('readline');
var HashMap = require('hashmap');
var readStream = fs.createReadStream('a_example.in');

var lineReader = readLine.createInterface({
  input: readStream
});

var lineNumber = 1;
var numRows;
var numColumns;
var numVehicles;
var numRides;
var numBonusPts;
var numSteps;
var rides = [];

lineReader.on('line', function (line) {

  const lineArray = line.split(" ");

  if (lineNumber === 1) {

    for (var i=0; i < lineArray.length; i++) {
      switch(i) {
        case 0:
          numRows = lineArray[i];
          break;
        case 1:
          numColumns = lineArray[i];
          break;
        case 2:
          numVehicles = lineArray[i];
          break;
        case 3:
          numRides = lineArray[i];
          break;
        case 4:
          numBonusPts = lineArray[i];
          break;
        case 5:
          numSteps = lineArray[i];
          break;
        default:

      }
    }
  } else {

    const indexToKeyHashMap = new HashMap();
    indexToKeyHashMap.set(0, 'startPointX');
    indexToKeyHashMap.set(1, 'startPointY');
    indexToKeyHashMap.set(2, 'finishPointX');
    indexToKeyHashMap.set(3, 'finishPointY');
    indexToKeyHashMap.set(4, 'earliestStart');
    indexToKeyHashMap.set(5, 'latestFinish');

    const ride = {};

    for (var i=0; i < lineArray.length; i++) {
      ride[indexToKeyHashMap.get(i)] = lineArray[i];
    }

    rides.push(ride);
  }

  lineNumber++;
})

lineReader.on('close', function(){

    console.log(" Num Rows: " + numRows);
    console.log(" Num Columns: " + numColumns);
    console.log(" Num Vehicles: " + numVehicles);
    console.log(" Num Rides: " + numRides);
    console.log(" Num Bonus Points: " + numBonusPts);
    console.log(" Num Steps: " + numSteps);
    console.log("About to spit out list of rides...");
    console.log(rides);

    lineReader.close();
});



//calculate steps between distance