export const url = "https://aman-todoapp.herokuapp.com/api";
// export const url = "http://localhost:5000/api";

export const setHeaders = () => {
  const header = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return header;
};
