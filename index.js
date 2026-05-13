const { faker } = require("@faker-js/faker");

const mysql = require("mysql2");

const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "sqlnode",
  password: "waxiran990@",
  database: "sqlnode",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),

    faker.internet.password(),
  ];
};

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q,  (err, result) => {
      if (err) throw err;
      console.log(result[0]["count(*)"]);
      res.send("Success")
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB")
  }
});

app.listen("8080", () => {
  console.log("port is listen on 8080...");
});

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();
