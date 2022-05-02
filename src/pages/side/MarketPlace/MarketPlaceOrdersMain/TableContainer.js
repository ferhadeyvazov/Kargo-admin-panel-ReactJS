import React from "react";
import MarketPlaceSvg from "../../../../assets/sideBarIcons/maketPlace.svg";
import { useTranslation } from "react-i18next";
const TableContainer = () => {
  const {t} = useTranslation(["orders/manorder","specialoffer"])
  return (
    <div className="table_container market_table_wrapper">
      <div className=" table-heading-icon">
        <img src={MarketPlaceSvg} alt="" />
        <h4>{t("specialoffer:marketorder")}</h4>
      </div>
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
                <span className="">{t("orders/manorder:product")}</span>
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
                <span>{t("orders/manorder:country")}</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
            <th className="be_sent">
              <div>
                <span>{t("orders/manorder:tobestorage")}</span>
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
          </tr>
          <tr>
            <td>2</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>3</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>4</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
