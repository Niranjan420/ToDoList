let todoList = {
  todos: [],
  // todos: [{todoText: ..., completed: false}, {todoText: ..., completed: false}]

  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log("Your To-Do list is empty!");
    } else {
      console.log("My Todos:");
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          console.log("(X)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function (todoInput) {
    this.todos.push({
      todoText: todoInput,
      completed: false,
    });
    this.displayTodos();
  },

  changeTodo: function (position, newTodo) {
    this.todos[position].todoText = newTodo;
    this.displayTodos();
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function () {
    let totalTodos = this.todos.length;
    completedTodos = 0;
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed) {
        completedTodos++;
      }
    }
    //if everything true, turn everything false
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    }
    //otherwise, turn everything true
    else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  },
};
