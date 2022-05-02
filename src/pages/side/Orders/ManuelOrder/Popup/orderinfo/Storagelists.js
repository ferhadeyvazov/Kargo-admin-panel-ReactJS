import React, { useState } from "react";
import MockData from "../orderinfo/MOCK_DATA.json";
import LocalIcon from "../../../../../../assets/Popupicons/local_svg.svg";
function Storagelists(props) {
  const [useData, setUseData] = useState(MockData);
  const [order, setOrder] = useState("ACS");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...useData].sort((a, b) =>
        a[col].toUppercase() > b[col].toUppercase() ? 1 : -1
      );
      setUseData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...useData].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setUseData(sorted);
      setOrder("ASC");
    }
  };

  return props.storList ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="header">
          <div>
            <img src={LocalIcon} alt="" />
          </div>
          <h2>Local storage list</h2>
        </div>
        <div className="search">
          <input placeholder="Search" type="search" name="" id="" />
        </div>
        <div className="cedvel">
          <table>
            <thead>
              <tr>
                <td onClick={() => sorting("skucode")}>SKU Code</td>
                <td onClick={() => sorting("product")}>Product</td>
                <td onClick={() => sorting("stock")}>Stock</td>
                <td onClick={() => sorting("weight")}>Weight</td>
                <td onClick={() => sorting("gtipcode")}>GTIP Code</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-close">
          <button
            onClick={() => props.setStorList(!props.storList)}
            className="closeup-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Storagelists;
