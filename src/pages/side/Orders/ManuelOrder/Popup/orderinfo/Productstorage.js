import React from "react";
import ProductSvg from "../../../../../../assets/Popupicons/product.svg";
import "./Productstorage.css";
function Productstorage(props) {
  return props.locallist ? (
    <div className="productstorage">
      <div className="productstorage-inner">
        <div className="header">
          <div>
            <img src={ProductSvg} alt="" />
          </div>
          <h2>From my product list</h2>
        </div>
        <div className="search">
          <input placeholder="Search" type="search" name="" id="" />
        </div>
        <div className="cedvel">
          <table>
            <thead>
              <tr>
                <td>SKU Code</td>
                <td>Product</td>
                <td>Weight</td>
                <td>GTIP Code</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-close">
          <button
            onClick={() => props.setLocallist(!props.locallist)}
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

export default Productstorage;
