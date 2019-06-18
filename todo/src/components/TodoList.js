import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";

const TodoList = props => {
  console.log(props.todos);
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.todos);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
