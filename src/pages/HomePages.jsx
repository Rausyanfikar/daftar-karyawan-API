import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import swal from 'sweetalert';
import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';

const HomePages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  const searchText = (e) => {
    setFilter(e.target.value);
  };

  let dataSearch = data.filter((item) => {
    return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()));
  });

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios({
      url: `https://randomuser.me/api/?page=1&results=10&seed=abc`,

      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res.data);
        const results = res.data.results;
        setData(results);
        swal({
          title: 'Good job!',
          text: 'SUCCESS',
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      <div className="flex flex-row w-full ">
        <Sidebar />
        {/* search */}
        <div className="w-full text-center">
          <div className="h-24 bg-gray-300 md:mt-10 md:mr-10 md:ml-10 text-center justify-center text-lg ">
            <div className="md:ml-5 font mb-2">To Do list</div>

            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="input-group relative flex  items-stretch w-full ">
                  <input
                    type="search"
                    class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon3"
                    value={filter}
                    onChange={(e) => searchText(e)}
                  />
                  {/* <button
                    class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    type="button"
                    id="button-addon3"

                  >
                    Search
                  </button> */}
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-3">
              {dataSearch.map((item, index) => (
                <Card key={index} item={item} page={page} />
              ))}
            </div>
            <Pagination button={() => fetchData()} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePages;
