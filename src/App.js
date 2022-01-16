import React from "react";
import { Route } from "react-router";
import { useContext } from "react";
import AuthContext from "./components/store/auth-context";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Nav";
import Profile from "./components/Profile/Profile";

import "./App.css";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Navigation />
      <Route path="/" exact>
        <Home />
      </Route>
      {authCtx.isLoggedIn && (
        <Route path="/profile">
          <Profile />
        </Route>
      )}
      {!authCtx.isLoggedIn && (
        <Route path="/login">
          <Login />
        </Route>
      )}
    </div>
  );
}

export default App;
