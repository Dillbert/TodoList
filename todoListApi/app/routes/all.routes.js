module.exports = app => {
  const todos = require("../controllers/todo.controller.js");
  app.get("/getTodo", todos.findAllByUserId);
  app.post("/updateTodo", todos.update);
  app.post("/createTodo", todos.create);



  const users = require("../controllers/user.controller.js");
  app.post("/createUser", users.create);
  app.get("/createUser", users.findByUserEmail);

};
