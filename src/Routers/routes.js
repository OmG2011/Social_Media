import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Components/HomePage';
import Login from '../Components/Login';
import PageNotFound from '../Components/PageNotFound';
import Header from '../Components/Header';

function routes(props) {
  return (
    <div>
      <Routes>
        <Route path="/Social_Media" element={
          <>
            <Header />
            <HomePage />
          </>
        } />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default routes;