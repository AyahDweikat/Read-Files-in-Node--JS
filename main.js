// let objUser = {
//     name:'',
//     birthDay:'',
//     address:'',
//     mobileNum:'',
//     gender:''
// }

const fs = require("fs");

function readCVS(file) {
  // read from the plain users.csv file.
  const data = fs.readFileSync(file, "utf8");
  return data;
}

function saveToFile(csvFileData) {
  //  save the csv
  csvFileData.forEach(function (row) {
    csv += row.join(",");
    csv += "\n";
  });
  fs.writeFileSync("./users.csv");
}
function readJSONFile() {
  // read the previous file
  // and print it in console
  let file = "./users.csv";
  let data = readCVS(file);
  let arr = data.split("\r\n");
  let finalArr = arr.map((item) => {
    return item.split(", ");
  });
  let users = finalArr.map((item) => {
    return {
      name: item[0],
      birthDay: item[1],
      address: item[2],
      mobileNum: item[3],
      gender: item[4],
    };
  });
  users.shift();
  console.log(users);
}
readJSONFile();
