/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const Products = ({ products, searchProduct }) => {
  const [valor, setValor] = useState("");

  const searchValor = (e) => {
    setValor(e.target.value);
    searchProduct(valor);
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#e5e8e8" }}>
      <div className="row mt-2">
        <div className="col-auto">
          <Link to="/">
            <img
              src="/src/assets/bolsa-de-la-compra.png"
              alt="Bazar Online"
              style={{ width: "35px" }}
            />
          </Link>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="search..."
            onChange={searchValor}
          />
        </div>
        <span style={{ textAlign: "end", fontWeight: "bold" }}>
          Resultados de la búsqueda: {products.length}
        </span>
      </div>

      {products.map((product) => (
        <Link
          key={product.id}
          to={`/item/${product.id}`}
          className="text-decoration-none"
        >
          <div
            className="card text-white bg-dark mb-3"
            style={{ maxWidth: "100vw" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.thumbnail}
                  className="img-fluid rounded-start"
                  alt={product.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="row">
                    <div className="col-auto">
                      <h5 className="card-title" style={{ fontWeight: "bold" }}>
                        {product.title}{" "}
                      </h5>
                    </div>
                    <div className="col">
                      <small className="text-secondary">
                        {product.category}
                      </small>{" "}
                    </div>
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    {product.description}{" "}
                  </p>
                  <p className="card-text">
                    <div className="row" style={{ textAlign: "end" }}>
                      <div className="col-auto">
                        <h6
                          className="card-title"
                          style={{ fontWeight: "bold" }}
                        >
                          ${product.discountPercentage}{" "}
                        </h6>
                      </div>
                      <div className="col">
                        <StarRating rating={product.rating} />
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
