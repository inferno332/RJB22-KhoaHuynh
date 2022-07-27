import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {store} from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CustomerList from "./components/CustomerList";

// As of React 18
export default function CustomerView() {
  
    return (
    <div className="gradientBg">
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          
          <Routes>
            <Route path="/customerList" element={<CustomerList/>}></Route>
            <Route
              path="*"
              element={<h1 className="m-5">404 PAGE NOT FOUND</h1>}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
