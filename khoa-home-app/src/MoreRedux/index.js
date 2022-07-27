import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Navigation from "./components/Navigation";
import Form from "./pages/Form";
import List from "./pages/List";
export default function Ss9() {
  return (
    <Provider store={store}>
      <div className="">
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path="/form" element={<Form/>}></Route>
            <Route path="/list" element={<List/>}></Route>
            <Route
              path="*"
              element={<h1 className="m-5">404 PAGE NOT FOUND</h1>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}
