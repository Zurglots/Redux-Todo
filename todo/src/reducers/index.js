import { ADD_TODO } from "../actions/index"; // does this need to be named?

const initalState = {
  todos: [{ id: 1, todo: "a task", completed: false }]
};

export const reducer = (state = initalState, action) => {
  console.log(state.todos);
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.todos[state.todos.length - 1].id + 1,
        todo: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};
