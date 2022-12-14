import React from 'react';
import { Link } from 'react-router-dom';
import { SiHomeassistant } from 'react-icons/si';

const Sidebar = () => {
  return (
    <aside className="w-64 h-full hidden lg:block " aria-label="Sidebar">
      <div className="overflow-y-auto h-full py-4 px-3 bg-white rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <SiHomeassistant className="w-7 h-7" />
              <span class="flex-1 text-lg font-semibold ml-3 whitespace-nowrap">Homepage</span>
            </Link>
          </li>
          <li>
            <Link to="/post" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap text-lg font-semibold">Add Karyawan</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
