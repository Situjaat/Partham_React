import React from 'react';
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './home';
import CustomHook from './CustomHook';
import SingleProduct from './singleProduct';
import Contact from './contact';
import Header from './Header';
import Login from './login';
import Search from './search';

import { Layout } from 'antd';
const { Content, Footer } = Layout;

const MainLayout = () => (
  <>
    <Layout>
      <Header />
      <Content style={{ padding: '48px', minHeight: 320 }}>
        {/* Renders matched child route */}
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  </>
);


function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<CustomHook />} />
          
          <Route path="/product/:id" element={<SingleProduct />} />
          {/* <Route path="/product" element={<SingleProduct />} /> */}
          <Route path="/products/:category" element={<CustomHook />} />
          <Route path="/search" element={<Search />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </>
  )
}

export default App