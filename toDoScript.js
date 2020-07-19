let todoList = {
  todos: [],
  // todos: [{todoText: ..., completed: false}, {todoText: ..., completed: false}]
  addTodo: function (todoInput) {
    this.todos.push({
      todoText: todoInput,
      completed: false,
    });
  },

  changeTodo: function (position, newTodo) {
    this.todos[position].todoText = newTodo;
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },

  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },

  toggleAll: function () {
    let totalTodos = this.todos.length;
    completedTodos = 0;
    this.todos.forEach(function (todo) {
      if (todo.completed) {
        completedTodos++;
      }
    });
    //if everything true, turn everything false
    if (completedTodos === totalTodos) {
      this.todos.forEach(function (todo) {
        todo.completed = false;
      });
    }
    //otherwise, turn everything true
    else {
      this.todos.forEach(function (todo) {
        todo.completed = true;
      });
    }
  },
};

//add todo text
const addTodoTextButton = document.getElementById("addTodoTextButton");
const addTodoTextInput = document.getElementById("addTodoTextInput");
addTodoTextButton.addEventListener("click", function () {
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput.value = "";
  view.displayTodos();
});
addTodoTextInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  }
}); //pressing enter

//change todo
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
  view.displayTodos();
});
changeTodoTextInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    todoList.changeTodo(
      changeTodoPositionInput.value,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  }
}); //pressing enter

//delete Todo
const deleteTodoButton = document.getElementById("deleteTodoButton");
const deleteTodoPositionInput = document.getElementById(
  "deleteTodoPositionInput"
);

//toggle completed
const toggleCompletedButton = document.getElementById("toggleCompletedButton");
const toggleCompletedPositionInput = document.getElementById(
  "toggleCompletedPositionInput"
);

toggleCompletedButton.addEventListener("click", function () {
  todoList.toggleCompleted(toggleCompletedPositionInput.value);
  toggleCompletedPositionInput.value = "";
  view.displayTodos();
});

//Toggle All button toggles all todos
const toggleAllButton = document.getElementById("toggleAllButton");
toggleAllButton.addEventListener("click", function () {
  todoList.toggleAll();
  view.displayTodos();
});

let view = {
  displayTodos: function () {
    const todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";

    todoList.todos.forEach(function (todo, position) {
      const todoLi = document.createElement("li");
      let todoTextWithCompleted = "";
      if (todo.completed) {
        todoTextWithCompleted = "(X) " + todo.todoText;
      } else {
        todoTextWithCompleted = "( ) " + todo.todoText;
      }

      todoLi.id = position;
      todoLi.textContent = todoTextWithCompleted;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function () {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function () {
    let todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function (event) {
      let elementClicked = event.target;
      if (elementClicked.className === "deleteButton") {
        console.log(parseInt(elementClicked.parentNode.id));
        todoList.deleteTodo(parseInt(elementClicked.parentNode.id));
        view.displayTodos();
      }
    });
  },
};
view.setUpEventListeners();
