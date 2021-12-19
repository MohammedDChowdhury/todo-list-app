import React from "react";
import TodoForm from "./TodoForm";

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

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {JSON.stringify(this.state.todos)}
      </div>
    );
  }
}
