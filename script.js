const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");

fs.createReadStream(path.resolve(__dirname, "data.csv"))
  .pipe(csv.parse({ headers: false }))
  .on("error", (error) => console.error(error))
  .on("data", (row) => {
    let string = row[0].replace(/[^\w\s]/gi, "");
    string = string.replace(/[^a-z\s]/g, "");
    console.log(string);
  })
  .on("end", (rowCount) => console.log(`Parsed ${rowCount} rows`));
