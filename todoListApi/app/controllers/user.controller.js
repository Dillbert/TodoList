const User = require("../models/user.model.js");

// Create and Save a new todo
exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
       }); 
    }
     
    User.create(new User(req.body), (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    else res.send(data);
  });
};

exports.auth = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
       }); 
    }
     
    User.login(new User(req.body), (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while loggin in."
      });
    else res.send(data);
  });
};


// Retrieve a customer from the database.
exports.findByUserEmail = (req, res) => {
   User.findByEmail(req.params.email, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user from user id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user from user id " + req.params.userId
        });
      }
    } else res.send(data);
  });
};
