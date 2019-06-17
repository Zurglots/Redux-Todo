export const ADDTODO = "ADD_TODO";

export const addTodo = todo => {
  return {
    type: ADDTODO,
    payload: todo
  };
};
