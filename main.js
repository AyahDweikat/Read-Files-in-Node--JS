const fs = require("fs");

function readCSV(csvfile) {
  const data = fs.readFileSync(csvfile, "utf8");
  let arr = data.split("\r\n");
  let JSArrData = arr.map((item) => {
    return item.split(", ");
  });
  return JSArrData;
}
function ArrToJSON(arr){
  let [header, ...data] = arr;
  let users = data.map((item) => {
    [UserName,BirthDate,Address, MobileNumber, Gender] = item;
    return {
      UserName,
      BirthDate,
      Address,
      MobileNumber, 
      Gender
    }
  });
  return users;
}
function saveToFile(arrData, jsonFile) {
  let jsonData = JSON.stringify(arrData);
  fs.writeFileSync(jsonFile, jsonData);
}
function readJSONFile(jsonfile) {
  const data = fs.readFileSync(jsonfile, "utf8");
  console.log(JSON.parse(data))
}
function taskNodeJS(csvfile, jsonfile){
  let data = readCSV(csvfile);
  let arrData = ArrToJSON(data);
  saveToFile(arrData, jsonFile);
  readJSONFile(jsonfile)
}
let csvfile ='./users.csv';
let jsonFile = './jsonFile.json';
taskNodeJS(csvfile, jsonFile)