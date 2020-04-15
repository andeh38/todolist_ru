const Todo = require('../models/todosRu');

//GET all todos
// route GET/api/v1/todos
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();

    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'server error'
    });
  }
};

//add all todos
// route POST/api/v1/transactons
exports.addTodo = async (req, res, next) => {
  try {
    const { text, finishedAt } = req.body;
    const todo = await Todo.create(req.body);
    return res.status(201).json({ success: true, data: todo });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      console.log(err)
      return res.status(500).json({
        success: false,
        error: 'server error'
      });
    }
  }
};

//delete todos
// route DELETE/api/v1/transactons/:id
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'no todo file'
      });
    }
    await todo.remove();
    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'server error'
    });
  }
};

