import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import css from "../src/App.css";
import API from "./utils/API";


// Import Contexts
import AuthenticationContext from "./contexts/AuthenticationContext";
import MushroomContext from "./contexts/MushroomContext";


// Import Components
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";

// Import Page Views
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/Shop";
import Signup from "./pages/Authentication/Signup";
import Login from "./pages/Authentication/Login";
import AdminLogin from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminOrders from "./pages/Admin/Orders";
import AdminProducts from "./pages/Admin/Products";
import NoMatch from "./pages/NoMatch";
import Order from "./pages/Order";

const App = () => {
  // Authentication State Variables
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [userID, setUserID] = useState(null);

  // Mushroom State Variables
  const [mushrooms, setMushrooms] = useState([]);

  // Mushroom Functions for use with MushroomContext
  function getMushrooms(){
    API.getMushrooms().then((res) => {
      setMushrooms(res.data);
    });
  }

  // Authentication Functions for use with AuthenticationContext
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
        <Route path="/about">
          <About />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Redirect to="/shop" />
      </Switch>
    );
  }

  if (isAuthenticated && isAdmin) {
    routes = (
      <Switch>
        <Route exact path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/admin/dashboard">
          <AdminDashboard />
        </Route>
        <Route path="/admin/products">
          <AdminProducts />
        </Route>
        <Route path="/admin/orders">
          <AdminOrders />
        </Route>
        <Redirect to="/admin/dashboard" />
      </Switch>
    );
  }

  return (
    <>
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
    
       <MushroomContext.Provider value={{mushrooms: mushrooms, getMushrooms: getMushrooms}}>
      <div className="Content">
      <Router>
        {!isAdmin && <Navbar />}
        {routes}
      </Router>
      </div>
      <Footer className='Footer' />
      </MushroomContext.Provider>
      {/* <Footer /> */}
    </AuthenticationContext.Provider>
    
    
    </>
  );
};

export default App;
