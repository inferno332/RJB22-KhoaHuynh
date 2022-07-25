import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CustomerForm from './pages/CustomerForm';
import CustomerList from './pages/CustomerList';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import ProductForm from './pages/ProductForm';
import ProductList from './pages/ProductList';
export default function Session8() {
  return (
    <div className='gradientBg'>
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/customerForm' element={<CustomerForm/>}/>
                <Route path='/customerForm/edit/:id' element={<CustomerForm/>}/>
                <Route path='/customerList' element={<CustomerList/>}/>
                <Route path='/productList' element={<ProductList/>}/>
                <Route path='/productForm/edit/:id' element={<ProductForm/>}/>
                <Route path='/productForm' element={<ProductForm/>}/>
                <Route path='*' element={
                    <h1 className='m-5'>404 PAGE NOT FOUND</h1>
                }/>
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}
