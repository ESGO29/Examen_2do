/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";

const Detail = ({ idProduct, search }) => {
  const { id } = useParams();
  const producto = search.find((p) => p.id.toString() === id);

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#e5e8e8",
      }}
    >
      <div className="row mt-10">
        <div className="col">
          <div className="col-md-4 m-2">
            <img
              src={producto.thumbnail}
              className="img-fluid rounded"
              alt={producto.title}
            />
          </div>
          <div className="row text-center">
            <div className="col-auto">
              <h1 style={{ fontWeight: "bold" }}>{producto.title}</h1>
            </div>
            <div className="col">
              <span>{producto.category}</span>
            </div>
          </div>
          <div className="row">
            <p className="card-text" style={{ textAlign: "justify" }}>
              {producto.description}{" "}
            </p>
            <p className="card-text">
              <div className="row" style={{ textAlign: "end" }}>
                <div className="col-auto">
                  <h6 className="card-title" style={{ fontWeight: "bold" }}>
                    ${producto.discountPercentage}{" "}
                  </h6>
                </div>
                <div className="col">
                  <StarRating rating={producto.rating} />
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-dark m-5" style={{ width: "250px" }}>
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default Detail;
