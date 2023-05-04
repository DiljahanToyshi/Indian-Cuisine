import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { FaBeer,FaUserCircle } from "react-icons/fa";


const Header = () => {
  const {user} =useContext(AuthContext)

    return (
      <div className="px-3 py-5 sm:max-w-xl lg:max-w-screen-2xl">
        <div className="navbar bg-indigo-50 mx-auto">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-3xl">
              Delicious Indian Cuisine
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-2xl">
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide text-cyan-600 transition-colors duration-200"
                      : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  aria-label="Home"
                  title="Blog"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide text-cyan-600 transition-colors duration-200"
                      : "default"
                  }
                >
                  BLog
                </NavLink>{" "}
              </li>
              <li>
              
                  <NavLink to='/login'
                    aria-label="Home"
                    title="login"
                    className={({ isActive }) =>
                      isActive
                        ? "font-medium tracking-wide text-cyan-600 transition-colors duration-200"
                        : "default"
                    }
                  >
                    Login
                  </NavLink>
             
              </li>
              <li>
                {user && (
                  <NavLink aria-label="Home" title="profile">
                    <FaUserCircle style={{ fontSize: "2rem" }} />
                  </NavLink>
                )}
              </li>
              <li>
                <NavLink
                  to="/register"
                  aria-label="Home"
                  title="Register"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide text-cyan-600 transition-colors duration-200"
                      : "default"
                  }
                >
                  Register
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;