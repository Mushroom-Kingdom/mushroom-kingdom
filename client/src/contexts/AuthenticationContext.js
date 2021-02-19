import { createContext } from "react";

const AuthenticationContext = createContext({
    userID: null,
    token: null,
    isAdmin: false,
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
});

export default AuthenticationContext;
