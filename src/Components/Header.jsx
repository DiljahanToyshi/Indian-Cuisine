import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { FaBeer,FaUserCircle } from "react-icons/fa";
import { signOut } from 'firebase/auth';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import logo from '../assets/logo.png'

const Header = () => {
  const {user,logOut} =useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const hanldeLogOut =() =>{
    logOut () 
    .then(result =>{} )
    .catch(error =>console.log(error))
  }
  
    return (
      <div className="px-3 py-5 sm:max-w-xl lg:max-w-screen-2xl">
        <div className="hidden lg:inline-flex navbar bg-yellow-50 mx-auto">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case font-serif text-3xl">
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
                      ? "font-medium tracking-wide text-yellow-400 transition-colors duration-200"
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
                      ? "font-medium tracking-wide text-yellow-400 transition-colors duration-200"
                      : "default"
                  }
                >
                  BLog
                </NavLink>{" "}
            </li>
            { user ? 
            <li>
                {user && (
                  <div>
                    <img className='h-14 rounded-full'
                      src={user?.photoURL}
                      alt=""
                      title={user?.displayName}
                    />{" "} <button className='pl-4' onClick={hanldeLogOut} >SignOut</button>
                  </div>
                )}
              </li>:<li>
              <NavLink
                to="/login"
                aria-label="Home"
                title="login"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-yellow-400 transition-colors duration-200"
                    : "default"
                }
              >
                Login
              </NavLink>
            </li> }
           
            </ul>
          </div>
        </div>
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute z-10 top-0 left-0 w-full'>
              <div className='p-5 bg-yellow-50 border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link
                      to='/'
                    
                      className='inline-flex items-center'
                    >
                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-cyan-200'>
                      <img  src={logo} alt="logo" />
                      </div>
                    
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2  transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                  <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide text-yellow-400 transition-colors duration-200"
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
                      ? "font-medium tracking-wide text-yellow-400 transition-colors duration-200"
                      : "default"
                  }
                >
                  BLog
                </NavLink>{" "}
            </li>
            { user ? 
            <li>
                                  <button  onClick={hanldeLogOut} >SignOut</button>

              </li>:<li>
              <NavLink
                to="/login"
                aria-label="Home"
                title="login"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-yellow-400 transition-colors duration-200"
                    : "default"
                }
              >
                Login
              </NavLink>
            </li> }
              
                  </ul>
                </nav>
              </div>
            </div>  )}
        </div>
      </div>
    );
};

export default Header;