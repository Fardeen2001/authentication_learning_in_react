import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("loginId");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;
  const logInHandler = (token) => {
    localStorage.setItem("loginId", token);
    setToken(token);
  };
  const logoutHandler = () => {
    localStorage.removeItem("loginId");
    setToken(null);
  };
  setInterval(() => {
    logoutHandler();
  }, [5000]);
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
