import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Select from "../Selected/Select";
import AllCart from "../AllCart/AllCart";

const Main = ({
  selectedProduct,
  handleDelete,
  handleSelectedProduct,
  tab,
  setTab,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center p-4 flex-col lg:flex-row md:flex-row">
        <h1 className="text-2xl font-bold ">Available players</h1>
        <div className="space-x-4">
          <button
            onClick={() => setTab("available")}
            className={`${
              tab === "available"
                ? "px-4 py-2 text-gray-800 font-medium bg-[#e2f928] rounded-lg"
                : "btn"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setTab("selected")}
            className={`${
              tab === "selected"
                ? "px-4 py-2 text-gray-800 font-medium bg-[#e2f928] rounded-lg"
                : "btn"
            }`}
          >
            Selected:({selectedProduct.length})
          </button>
        </div>
      </div>
      {tab === "available" ? (
        <AllCart handleSelectedProduct={handleSelectedProduct}></AllCart>
      ) : (
        <Select
          handleDelete={handleDelete}
          selectedProduct={selectedProduct}
        ></Select>
      )}
    </div>
  );
};

export default Main;
