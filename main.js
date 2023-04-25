const fs = require("fs");

function readCVS(file) {
  const data = fs.readFileSync(file, "utf8");
  let arr = data.split("\r\n");
  let JSArrData = arr.map((item) => {
    return item.split(", ");
  });
  return JSArrData;
}
function ArrToJSON(arr){
  let [header, ...data] = arr;
  let users = data.map((item) => {
    return {
      "name":item[0],
      "BirthDate": item[1],
      "Address": item[2],
      "MobileNumber": item[3],
      "Gender": item[4],
    };
  });
  return JSON.stringify(users)
}
function saveToFile(jsonData, jsonFile) {
  fs.writeFileSync(jsonFile, jsonData);
}
function readJSONFile(file) {
  const data = fs.readFileSync(file, "utf8");
  console.log(JSON.parse(data))
}
function taskNodeJS(){
  let file ='./users.csv';
  let data = readCVS(file);
  let jsonData = ArrToJSON(data);
  let jsonFile = 'jsonFile.json'
  saveToFile(jsonData, jsonFile);
  readJSONFile(`./${jsonFile}`)
}
taskNodeJS()