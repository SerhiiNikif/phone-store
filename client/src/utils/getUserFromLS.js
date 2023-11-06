export const getUserFromLS = () => {
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  return {
    email: user?.email,
    isAuth: user?.isAuth
  }
}