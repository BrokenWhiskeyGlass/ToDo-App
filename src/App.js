import React, { Component } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'ToDo App',
      newTodo: '',
      todos: []
    };
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmited(event) {
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; //copy the array
    todos[index] = {...todos[index]}; //copy the todo
    todos[index].done = event.target.checked; //update done property on copied todo
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <TodoForm 
          formSubmited={this.formSubmited.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)}
          newTodo={this.state.newTodo} />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
