import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../store/auth-context";

import "./Nav.css";

function Navigation() {
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;
  const history = useHistory();

  const logoutHandler = () =>{
    authCtx.logout()
    history.replace('/login')
  }

  return (
    <div className="nav-root">
      <div className="nav-header">
        <h1>Welcome</h1>
      </div>
      <div className="nav-main">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          {loggedIn && (
            <li>
              <Link to="/profile" className="link">
                Profile
              </Link>
            </li> 
          )}
          {loggedIn && (
            <li>
              <button className='nav-button' onClick={logoutHandler}>
                Sign Out
              </button>
            </li> 
          )}
          { !loggedIn && (<li>
            <Link to="/login" className="link">
              Sign in/up
            </Link>
          </li>)}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
