import React from 'react';

const TodoForm = (props) => {
    return (
        <form onSubmit={props.formSubmited}>
        <label htmlFor="newTodo">New Todo</label>
        <input id="newTodo" onChange={props.newTodoChanged} name="newTodo" value={props.newTodo} />
        <button type="submit">Add Todo</button>
      </form>
    )
};

export default TodoForm;