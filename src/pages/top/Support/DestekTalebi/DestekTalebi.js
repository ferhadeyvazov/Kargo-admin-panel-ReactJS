import React from "react";
import "./destekTalebi.scss";
const DestekTalebi = () => {
  return (
    <div className="destek_talebi table_wrapper">
      <p>Destek Talebi</p>
      <table>
        <thead>
          <tr className="table_header_row">
            <th>
              <div>
                <span className="hastag">#</span>
              </div>
            </th>
            <th className="product_name">
              <div>
                <span className="">Product</span>
              </div>
            </th>
            <th className="product_id">
              <div>
                <span>ID</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
            <th className="country">
              <div>
                <span>Country</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
            <th className="be_sent">
              <div>
                <span>Topic Title</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
            <th className="be_sent">
              <div>
                <span>Height</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
            <th className="be_sent">
              <div>
                <span>Weight</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
            <th className="be_sent">
              <div>
                <span>Massive</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>1</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>1</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>1</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DestekTalebi;
