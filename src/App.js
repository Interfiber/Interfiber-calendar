import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      message: "Hunter is soooo attarctive!",
      newTodo: '',
      todos: [{


        title: 'todos:',
        done: false

      }, {
        title: "example todo",
        done: false


      }]

    };
    this.formSubmitted = this.formSubmitted.bind(this);
  }
  formSubmitted(event){

  console.log(event);
  event.preventDefault();
  this.setState({
  todos: [...this.state.todos, {

    title: this.state.newTodo,
    done: false

  }]



  });


}
newTodoChanged(event){
this.setState({
newTodo: event.target.value



});


}
  render() {
    return (
      <div className="App">
        <h1>Interfibers amazing TODO APP!</h1>
        <form onSubmit={this.formSubmitted}>
        <ul>


        {this.state.todos.map(todo => {

          return <li key={todo.title}>{todo.title}</li>
        })}
        </ul>

        <label htmlFor="newTodo">new Item</label>
        <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo"/>

        <button type="submit">Add TODO</button>
        </form>
      </div>
    );
  }
}

export default App;
