import React from "react";
import "./Invoices.scss";
import BalanceSsytemTitleandOthers from "../../../components/BalanceSsytemTitleandOthers";
import InvoicesSvg from "../../../assets/sideBarIcons/Invoices.svg";
const Invoices = () => {
  return (
    <div className="system_main">
      <div className="system_container invoices_container">
        <BalanceSsytemTitleandOthers
          SistemySvg={InvoicesSvg}
          title={"invocies"}
        />

        <div className="flex_container">
          <div className="topic">
            <div></div>
            <p>Invoices</p>
          </div>
          <div className="table-container-responce">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>
                    Invoice No
                    <i class="fas fa-filter"></i>
                  </th>
                  <th>
                    Tax İnvoice
                    <i class="fas fa-filter"></i>
                  </th>
                  <th colSpan={2}>Buttons</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>132432</td>
                  <td>23231</td>
                  <td>Tax</td>
                  <td>
                    <button>See Invoice</button>
                  </td>
                  <td>
                    <button>Resmileshdir</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>132432</td>
                  <td>23231</td>
                  <td>Tax</td>
                  <td>
                    <button>See Invoice</button>
                  </td>
                  <td>
                    <button>Resmileshdir</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>132432</td>
                  <td>23231</td>
                  <td>Tax</td>
                  <td>
                    <button>See Invoice</button>
                  </td>
                  <td>
                    <button>Resmileshdir</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>132432</td>
                  <td>23231</td>
                  <td>Tax</td>
                  <td>
                    <button>See Invoice</button>
                  </td>
                  <td>
                    <button>Resmileshdir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
