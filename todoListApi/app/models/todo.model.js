const sql = require("./db.js");

// constructor
const Todo = function(value) {
  this.todoId = value.todoId;
  this.todoName = value.todoName;
  this.todoDescription = value.todoDescription;
  this.userId = value.userId;
  this.todoSeverity = value.todoSeverity;
};

Todo.create = (newTodo, result) => {
  sql.query("INSERT INTO todo SET ?", newTodo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created todo: ", { id: res.insertId, newTodo });
    result(null, { id: res.insertId, newTodo });
  });
};

Todo.findById = (userId, result) => {
  sql.query(`SELECT * FROM todo WHERE userId = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found todos");
      result(null, res);
      return;
    }

    // not found Todo with the id
    result({ kind: "not_found" }, null);
  });
};

Todo.updateById = (todoId, todo, result) => {
  sql.query(
    "UPDATE todo SET todoName = ?, todoDescription = ?, todoSeverity = ? WHERE id = ?",
    [todo.todoName.name, todo.todoDescription, todo.todoSeverity, todoId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Todo with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated todo: ", { id: todoId, todo });
      result(null, { id: todoId, todo });
    }
  );
};

Todo.remove = (todoId, result) => {
  sql.query("DELETE FROM todo WHERE id = ?", todoId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Todo with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted todo with id: ", todoId);
    result(null, res);
  });
};


module.exports = Todo;