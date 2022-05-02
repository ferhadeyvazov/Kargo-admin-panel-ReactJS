import React from "react";
import svgCustomer from "../../../../assets/ProfileIconImages/customer.svg";
import { FiSearch } from "react-icons/fi";
import "./CustomerAdress.scss";
const CustomerAdress = () => {
  return (
    <div className="profile_container customer-adress">
      <div className="profile_title">
        <div className="left">
          <img src={svgCustomer} alt="" />
          <span>Customer Adress</span>
        </div>
      </div>
      <div className="main-table">
        <div className="adress-search">
          <input type="text" placeholder="Ara..." />
          <FiSearch className="img" />
        </div>
        <div className="tablediv ">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Location</th>
                <th>Adress</th>
                <th>Customer Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Company name</td>
                <td>Location name</td>
                <td>Adress name</td>
                <td>Customer Name</td>
              </tr>
              <tr>
                <td>Company name</td>
                <td>Location name</td>
                <td>Adress name</td>
                <td>Customer Name</td>
              </tr>
              <tr>
                <td>Company name</td>
                <td>Location name</td>
                <td>Adress name</td>
                <td>Customer Name</td>
              </tr>
              <tr>
                <td>Company name</td>
                <td>Location name</td>
                <td>Adress name</td>
                <td>Customer Name</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerAdress;
