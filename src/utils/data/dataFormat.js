const dataFun = require("./data");
var fs = require("fs");

const data = dataFun.getData();

const data_formatted = {};
data.forEach((cur) => {
  if (!data_formatted[cur.category]) {
    data_formatted[cur.category] = [cur];
  } else {
    data_formatted[cur.category].push(cur);
  }
});

// Object.keys(data_formatted).forEach((cur) => {
//   console.log(cur);
// });

fs.writeFile("data.json", JSON.stringify(data_formatted), function (err) {
  if (err) throw err;
  console.log("complete");
});
