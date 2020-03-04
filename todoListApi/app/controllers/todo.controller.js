const Todo = require("../models/todo.model.js");

// Create and Save a new todo
exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
       }); 
    }
     
    Todo.create(todo, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Planet."
      });
    else res.send(data);
  });
};

// Retrieve a customer from the database.
exports.findAllByUserId = (req, res) => {
   Todo.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found todos from user id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving todos from user id " + req.params.userId
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
       }); 
    }
     
    Todo.updateById(
    req.params.todoId,
    new Todo(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Todo with id ${req.params.todoId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Todo with id " + req.params.todoId
          });
        }
      } else res.send(data);
    }
  );
};
