/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Detail from "./pages/Detail";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);

  const searchProduct = useCallback(async (search) => {
    try {
      const response = await fetch(
        `http://localhost/api/items/?title=${search}`
      );
      const data = await response.json();
      setProducts((prevProducts) => {
        return data;
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const idProduct = async () => {
    try {
      const response = await fetch(`http://localhost/api/item`);
      const data = await response.json();
      setSearch(data);
    } catch (error) {
      console.log(error);
    }
  };

  idProduct();

  return (
    <Routes>
      <Route path="/" element={<Home searchProduct={searchProduct} />} />
      <Route
        path="/items"
        element={<Products products={products} searchProduct={searchProduct} />}
      />
      <Route path="/item/:id" element={<Detail search={search} />} />
    </Routes>
  );
}

export default App;
