import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <ul>
        {props.todos.map((todo, index) => {
          return (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleTodoDone={props.toggleTodoDone}
            removeTodo={this.removeTodo}
          />)
        })}
      </ul>
    )
};

export default TodoList;