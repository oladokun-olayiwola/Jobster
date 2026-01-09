export const addUserToLocalStorage = (user, token) => {
  localStorage.setItem("user", JSON.stringify({user, token}));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
