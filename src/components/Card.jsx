import React from 'react';

function Card({ item, page }) {
  return (
    <div className=" max-w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center px-4 pt-4"></div>
      <div className="flex justify-center items-center w-full">
        <div class=" text-center items-center pb-10 w-full">
          <img className=" m-auto  mb-3 w-24 h-24 rounded-full shadow-lg text-center" src={item.picture.medium} alt={item.picture.medium} />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name.first}</h5>
          <p className="mb-1 text-xl sm:text-sm  font-medium text-gray-900 dark:text-white">{item.email}</p>
          <span class="text-sm text-gray-500 dark:text-gray-400">{item.gender}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
