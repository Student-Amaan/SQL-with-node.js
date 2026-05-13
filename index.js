const { faker } = require("@faker-js/faker");

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "sqlnode",
  password: "waxiran990@",
  database: "sqlnode",
});

let q = "INSERT INTO user (id, username , email, passwor) VALUES ? ";
let users = [
  ["1001", "ali_khan", "ali@gmail.com", "pass123"],
  ["1002", "sara_ahmed", "sara@gmail.com", "sara@2024"],
  ["1003", "usman_dev", "usman@gmail.com", "dev456"],
  ["1004", "hira_jan", "hira@gmail.com", "hira789"],
  ["1005", "bilal_tech", "bilal@gmail.com", "bilal321"],
  ["1006", "amna_code", "amna@gmail.com", "code999"],
  ["1007", "zain_ali", "zain@gmail.com", "zain@pass"],
  ["1008", "fatima_js", "fatima@gmail.com", "js2025"],
  ["1009", "rehman_node", "rehman@gmail.com", "node007"],
];

try {
  connection.query(q, [users], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),

    password: faker.internet.password(),
  };
};

console.log(getRandomUser());
