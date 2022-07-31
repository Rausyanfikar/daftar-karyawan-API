import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Loading } from '../components/Loading';

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
      url: `https://randomuser.me/api/?page=1&results=8&seed=abc`,

      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res.data);
        const results = res.data.results;
        setData(results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Layout>
        <div className="flex flex-row ">
          <Sidebar />
          {/* search */}
          <div className="w-full h-full  text-center bg-slate-300  ">
            <div className="  text-center justify-center text-lg  ">
              <div className="bg-white  text-center flex justify-around items-center md:mx-10 rounded-md  p-5 mt-10 ">
                <div className="text-emerald-400 font-bold text-2xl ">List Karyawan</div>

                <div class="flex justify-center items-center">
                  <div class="mb-3 xl:w-96">
                    <div className="input-group relative flex justify-center items-center ">
                      <input
                        type="search"
                        className="form-control relative flex-auto min-w-0  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon3"
                        value={filter}
                        onChange={(e) => searchText(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-3 md:ml-5 md:mr-5 p-5 ">
                {dataSearch.map((item, index) => (
                  <Card key={index} item={item} page={page} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default HomePages;
