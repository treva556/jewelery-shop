
///

import React from 'react';

function Nav() {
  return (
    <div className="App">
      <nav className="border-gray-200 ">
        <div className="max-w-screen-xl mx-auto flex justify-end">
          <ul className="flex space-x-4 p-1 md:p-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white rounded hover:bg-gray-700 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="block py-2 px-3 text-white rounded hover:bg-gray-700 dark:text-white"
              >
                Shop
              </a>
            </li>
            {/* <li>
              {/* <a
                href="drinks"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-black"
              > */}
                {/* Drinks */}
              {/* </a> 
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

