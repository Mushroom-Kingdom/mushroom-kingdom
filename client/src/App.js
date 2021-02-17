import React, { useState, useCallback} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Import Contexts
import AuthenticationContext from "./contexts/AuthenticationContext";

// Import Components
import Navbar from "./components/Nav/Navbar";

// Import Page Views
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import Members from "./pages/Members";
import NoMatch from "./pages/NoMatch";


const App = props => {  
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(null);  
  const[userID, setUserID] = useState(null);
  
  const login = useCallback((userID, isAdmin, token) => {
    setIsAdmin(isAdmin);
    setUserID(userID);
    setToken(token);
  }, []);

  const logout = useCallback(() => {
    setUserID(null);
    setIsAdmin(false);
    setToken(null);
  }, []);

  let routes;
  if(!token){
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

  if(token && !isAdmin){
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
        <Redirect to="/members" />
      </Switch>
    );
  }

  if(token && isAdmin){
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
    <AuthenticationContext.Provider value={{userID: userID, isAdmin: isAdmin, isAuthenticated: !!token, token: token, login: login, logout: logout}}>
      <Router>
        <Navbar />
        {routes}
      </Router>
    </AuthenticationContext.Provider>
  )
};

export default App;
