import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import { Counter } from "./counter/Counter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


// As of React 18
export default function Customer() {
  return <Provider store={store}>
      <BrowserRouter>
            
            <Routes>
                
                <Route path='*' element={
                    <h1 className='m-5'>404 PAGE NOT FOUND</h1>
                }/>
                
            </Routes>
        </BrowserRouter>
  </Provider>;
}
