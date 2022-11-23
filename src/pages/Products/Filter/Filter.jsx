import React, { useContext } from "react";
import { FilterDispath } from "../../../components/Context/ContextFilter";
import "./Filter.css";

export default function Filter() {
  const { dispath } = useContext(FilterDispath);
  return (
    <div className="filter_container">
      <div className="filter_btnBox">
        <button onClick={() => dispath({ type: "ALL" })} className="filter_btn">
          All
        </button>
        <button
          onClick={() => dispath({ type: "Vegetables" })}
          className="filter_btn"
        >
          VEGETABLE
        </button>
        <button
          onClick={() => dispath({ type: "Fruits" })}
          className="filter_btn"
        >
          FRUIT
        </button>
        <button
          onClick={() => dispath({ type: "NUTS" })}
          className="filter_btn"
        >
          NUTS
        </button>
        <button
          onClick={() => dispath({ type: "BEANS" })}
          className="filter_btn"
        >
          BEANS
        </button>
      </div>
    </div>
  );
}
