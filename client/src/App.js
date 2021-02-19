import React, { useState, useCallback, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Import Contexts
import AuthenticationContext from "./contexts/AuthenticationContext";

// Import Components
import Navbar from "./components/Nav/Navbar";

// Import Page Views
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/Shop";
import Signup from "./pages/signup";
import Login from "./pages/login";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import Members from "./pages/Members";
import NoMatch from "./pages/NoMatch";
import Order from "./pages/Order";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [userID, setUserID] = useState(null); 

  const login = useCallback((userID, isAdmin, token) => {
    setIsAdmin(isAdmin);
    setUserID(userID);
    setToken(token);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setUserID(null);
    setIsAdmin(false);
    setToken(null);
    setIsAuthenticated(false);
  }, []);

  let routes;
  if (!isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin">
          <AdminLogin />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  if (isAuthenticated && !isAdmin) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/members">
          <Members />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Redirect to="/members" />
      </Switch>
    );
  }

  if (isAuthenticated && isAdmin) {
    routes = (
      <Switch>
        <Route path="/admin/dashboard">
          <AdminDashboard />
        </Route>
        <Route path="/admin/products">
          <AdminProducts />
        </Route>
        <Redirect to="/admin/dashboard" />
      </Switch>
    );
  }

  return (
    <AuthenticationContext.Provider
      value={{
        userID: userID,
        isAdmin: isAdmin,
        isAuthenticated: isAuthenticated,
        token: token,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Navbar />
        {routes}
      </Router>
    </AuthenticationContext.Provider>
  );
};

export default App;
