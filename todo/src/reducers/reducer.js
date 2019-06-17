const initalState = {
  todos: []
};

export const reducer = (state = initalState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
};
