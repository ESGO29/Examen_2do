/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ searchProduct }) => {
  const [valor, setValor] = useState("");

  const searchValor = (e) => {
    setValor(e.target.value);

    searchProduct(valor);
  };

  return (
    <div
      className="container-fluid text-align-center"
      style={{
        backgroundColor: "#e5e8e8",
      }}
    >
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="/src/assets/bolsa-de-la-compra.png"
            alt="Store Bazar"
            style={{ width: "150px" }}
            className="mb-2"
          />
          <h1>Bazar Online</h1>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="search..."
            value={valor}
            onChange={searchValor}
          />
          <button className="btn btn-dark">
            <Link
              to={`/items?search=${encodeURIComponent(valor)}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              BUSCAR
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
