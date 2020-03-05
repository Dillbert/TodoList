module.exports = app => {
  const todos = require("../controllers/todo.controller.js");
  app.get("/getTodo/:userId", todos.findAllByUserId);
  app.post("/updateTodo", todos.update);
  app.post("/createTodo", todos.create);

  const users = require("../controllers/user.controller.js");
  app.post("/createUser", users.create);
  app.get("/getUser/:email", users.findByUserEmail);
  app.post("/login", users.auth);

};
