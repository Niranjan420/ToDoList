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

//Display Todos button will display todos
const displayTodosButton = document.getElementById("displayTodosButton");
displayTodosButton.addEventListener("click", function () {
  todoList.displayTodos();
});
//Toggle All button toggles all todos
const toggleAllButton = document.getElementById("toggleAllButton");
toggleAllButton.addEventListener("click", function () {
  todoList.toggleAll();
});

//add todo text
const addTodoTextButton = document.getElementById("addTodoTextButton");
const addTodoTextInput = document.getElementById("addTodoTextInput");
addTodoTextButton.addEventListener("click", function () {
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput.value = "";
});
addTodoTextInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  }
}); //pressing enter

//changing todos
const changeTodoButton = document.getElementById("changeTodoButton");
const changeTodoPositionInput = document.getElementById(
  "changeTodoPositionInput"
);
const changeTodoTextInput = document.getElementById("changeTodoTextInput");
changeTodoButton.addEventListener("click", function () {
  todoList.changeTodo(
    changeTodoPositionInput.valueAsNumber,
    changeTodoTextInput.value
  );
  changeTodoPositionInput.value = "";
  changeTodoTextInput.value = "";
});
changeTodoTextInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    todoList.changeTodo(
      changeTodoPositionInput.value,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
  }
}); //pressing enter

//delete Todo
const deleteTodoButton = document.getElementById("deleteTodoButton");
const deleteTodoPositionInput = document.getElementById(
  "deleteTodoPositionInput"
);
deleteTodoButton.addEventListener("click", function () {
  todoList.deleteTodo(deleteTodoPositionInput.value);
  deleteTodoPositionInput.value = "";
});
deleteTodoPositionInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    todoList.deleteTodo(deleteTodoPositionInput.value);
    deleteTodoPositionInput.value = "";
  }
}); //pressing enter
