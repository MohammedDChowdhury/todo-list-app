import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

/* 
TodoMVC
1. add todo (done)
2. display todos (done)
3. cross off todo (done)
4. show number of active todos (done)
5. filter all/active/complete (done)
6. delete todo (done)
7. delete all the completed todos (done)
    7.1 only display if at least one is complete (done)
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
