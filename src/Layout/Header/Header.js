import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";

function Header() {
  const auth = useContext(AuthContext);

  const handleSignOut = (e) => {
    e.preventDefault();
    // clearValue()
    console.log("Activated clearValue function");
  };

  if (auth) {
    return (
      <div className="flex justify-between items-center">
        <h1 className="ml-4 text-xl text-secondary">Blog CMS</h1>
        <nav className="flex justify-end p-4">
          <NavLink
            end
            to="/articles"
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "nav-link"
            }
          >
            Home
          </NavLink>

          <button
            onClick={(e) => handleSignOut(e)}
            className="nav-link bg-highlight text-white hover:text-white hover:bg-indigo-700"
          >
            Sign Out
          </button>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between items-center">
        <h1 className="ml-4 text-xl text-secondary">Blog CMS</h1>
        <nav className="flex justify-end p-4">
          <NavLink to="/signup" className="highlight-button">
            Sign In
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
