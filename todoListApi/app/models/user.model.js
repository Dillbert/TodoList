const sql = require("./db.js");

// constructor
const User = function(user) {
  this.userId = user.id;
  this.username = user.username; 
  this.email = user.email;
  this.password = user.password;
  
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO planet SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, newUser });
    result(null, { id: res.insertId, newUser });
  });
};

User.findByEmail = (email, result) => {
  sql.query(`SELECT * FROM user WHERE email = ${email}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user");
      result(null, res[0]);
      return;
    }

    // not found Todo with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = User;
