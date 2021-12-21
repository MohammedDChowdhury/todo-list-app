import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

/* 
TodoMVC
1. add todo (done)
2. display todos
3. cross off todo 
4. show number of active todos
5. filter all/active/complete
6. delete todo
7. delete all complete
    7.1 only display if at least on is complete
8. button to toggle all on/off
*/
export default class TodoList extends React.Component {
  state = {
    todos: [],
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

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
            // passing in a key, a toggleComplete function to check if it is complete
            // and lastly passing in the todo parameter
          />
        ))}
        <div>
          todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
      </div>
    );
  }
}
