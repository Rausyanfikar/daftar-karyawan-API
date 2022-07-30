import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from '../pages/HomePages';
import Post from '../pages/Post';

function Rot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/post" element={<Post />} />

        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rot;
