import { toast } from "react-toastify";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      toast.success("A todo was added successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.todo.data, ...state];
    case "GET_TODO":
      return action.todos.data;
    case "UPDATE_TODO":
      toast.success("A todo was updated successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) => {
        return todo._id === action.todo.data._id ? action.todo.data : todo;
      });
    case "CHECK_TODO":
      toast.success("A todo status was changed successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) => {
        return todo._id === action.todo.data._id ? action.todo.data : todo;
      });
    case "DELETE_TODO":
      toast.success("A todo was deleted successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.filter((todo) => {
        return todo._id !== action.id;
      });
    default:
      return state;
  }
};

export default todoReducer;
