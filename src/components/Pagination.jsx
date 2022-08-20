import React from 'react';

const Pagination = ({ previous, next }) => {
  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item">
            <div
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
              onClick={previous}
            >
              Previous
            </div>
          </li>

          <li className="page-item">
            <div
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
              onClick={next}
            >
              Next
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
