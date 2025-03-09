import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footerr from './Footerr';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footerr />
    </>
  );
};

export default Layout;