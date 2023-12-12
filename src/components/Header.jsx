import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const NavBarLink = ({ href, onClick, children }) => {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="font-bold transition-all duration-300 hover:bg-gray-100 hover:text-red-500"
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const { handleLogOut, isLogged } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <nav class="border-gray-200 bg-white dark:bg-gray-900">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white ">
              My Blog.
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
              {isLogged ? (
                <li>
                  <NavBarLink onClick={handleLogOut}>Log Out</NavBarLink>
                </li>
              ) : (
                <Link
                  to="/login"
                  className="font-bold transition-all duration-300 hover:bg-gray-100 hover:text-red-500"
                >
                  Log In
                </Link>
              )}

              <li>
                <Link
                  to="/"
                  class="block rounded bg-blue-700 px-3 py-2 text-gray-900 dark:text-white md:bg-transparent md:p-0 md:hover:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  class="flex w-full transform items-center justify-between rounded px-3 py-2 text-gray-900 transition duration-150 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-700"
                  type="button"
                >
                  Posts
                  <svg
                    class="ms-2.5 h-2.5 w-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  id="dropdownHover"
                  class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <Link
                        to="/posts"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        All Posts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/add-new-post"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Add New Post
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/about"
                  class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
