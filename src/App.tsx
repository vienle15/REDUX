import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux"; // Importing useDispatch from react-redux
import { addNewProduct } from "./pages/redux/slice/productSlice";
import { Route, Routes } from "react-router-dom";
import { I_ProductState } from "./pages/redux/slice/productSlice";

function App() {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: { products: I_ProductState }) => state.products.products
  );

  const handleAdd = () => {
    dispatch(addNewProduct("AQ"));
  };

  return (
    <Fragment>
      <button onClick={handleAdd}>Add</button>
      {products.map((products) => (
        <p>{products}</p>
      ))}
    </Fragment>
  );
}

export default App;
