import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

/* 
TodoMVC
1. add todo (done)
2. display todos
3. cross off todo 
4. display/show number of active todos
5. filter all/active/complete
6. delete todo
7. delete all complete
    7.1 only display if at least on is complete
8. button to toggle all on/off
*/
export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToDisplay: "all",
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  updateTodoToDisplay = (s) => {
    this.setState({
      todoToDisplay: s,
    });
  };

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  removeAllTodosThatAreComplete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };
  render() {
    let todos = [];

    if (this.state.todoToDisplay === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToDisplay === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToDisplay === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
            onDelete={() => this.handleDelete(todo.id)}
            // passing in a key, a toggleComplete function to check if it is complete
            // and lastly passing in the todo parameter
          />
        ))}
        <div>
          todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToDisplay("all")}>all</button>
          <button onClick={() => this.updateTodoToDisplay("active")}>
            active
          </button>
          <button onClick={() => this.updateTodoToDisplay("complete")}>
            complete
          </button>
        </div>
        {this.state.todos.some((todo) => todo.complete) ? (
          <div>
            <button onClick={this.removeAllTodosThatAreComplete}>
              remove all complete todos
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
