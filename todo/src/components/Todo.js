import React, { Component } from "react";
import { connect } from "react-redux";

// import actions here

class Todo extends Component {
  state = {
    newTodo: ""
  };

  render() {
    return <div />;
  }
}

// this allows us to pull in state from store and give it to connect()
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// here we pass in mSTP and the action creators from actions. Now, state from mSTP and the action creators are available to this component via props.
export default connect(
  mapStateToProps,
  { addTodo }
)(Todo);
