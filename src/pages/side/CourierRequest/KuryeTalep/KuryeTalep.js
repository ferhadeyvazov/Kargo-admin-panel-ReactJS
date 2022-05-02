import React from "react";
import { useTranslation } from "react-i18next";
const KuryeTalep = () => {
const {t}=useTranslation(["balancesystem","courierrequest","balancesystem/yuklemegecmisi"])
  return (
    <div className="table_container table_wrapper">
      <p>{t("courierrequest:courreguest")}</p>
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
                <span className="">{t("balancesystem/yuklemegecmisi:product")}</span>
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
                <span>{t("balancesystem/yuklemegecmisi:country")}</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
            <th className="be_sent">
              <div>
                <span>{t("balancesystem/yuklemegecmisi:sentstorage")}</span>
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

export default KuryeTalep;
