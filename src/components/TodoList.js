import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToDisplay: "all",
    toggleAllComplete: true,
  };

  addTodo = (todo) => {
    this.setState((state) => ({
      todos: [todo, ...state.todos],
    }));
  };

  toggleComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  updateTodoToDisplay = (s) => {
    this.setState({
      todoToDisplay: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  removeAllTodosThatAreComplete = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
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
            onDelete={() => this.handleDeleteTodo(todo.id)}
            // passing in a key, a toggleComplete function to check if it is complete
            // and lastly passing in the todo parameter
          />
        ))}
        <div className="divTaskRemaining">
          Tasks remaining:{" "}
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button
            className="otherBtns"
            onClick={() => this.updateTodoToDisplay("all")}
          >
            Display all tasks
          </button>
          <button
            className="otherBtns"
            onClick={() => this.updateTodoToDisplay("active")}
          >
            Display active tasks
          </button>
          <button
            className="otherBtns"
            onClick={() => this.updateTodoToDisplay("complete")}
          >
            Display completed tasks
          </button>
        </div>
        {this.state.todos.some((todo) => todo.complete) ? (
          <div>
            <button
              className="otherBtns"
              onClick={this.removeAllTodosThatAreComplete}
            >
              Remove all completed tasks
            </button>
          </div>
        ) : null}
        <div>
          <button
            className="otherBtns"
            onClick={() =>
              this.setState((state) => ({
                todos: state.todos.map((todo) => ({
                  ...todo,
                  complete: state.toggleAllComplete,
                  toggleAllComplete: !state.toggleAllComplete,
                })),
              }))
            }
          >
            Toggle all complete: {`${this.state.toggleAllComplete}`}
          </button>
        </div>
      </div>
    );
  }
}
