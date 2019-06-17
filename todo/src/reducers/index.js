import { ADD_TODO } from "../actions/index"; // does this need to be named?

const initalState = {
  todos: []
};

export const reducer = (state = initalState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};
