import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
