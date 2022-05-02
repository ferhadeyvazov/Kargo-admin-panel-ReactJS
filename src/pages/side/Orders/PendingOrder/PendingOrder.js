import React from "react";
import { useTranslation } from "react-i18next";
const PendingOrder = () => {
  const{t} = useTranslation(["orders","balancesystem","balancesystem/yuklemegecmisi",
  "orders/amazon","orders/manorder","orders/pending"])
  return (
    <div className="table_container table_wrapper">
      <p>{t("orders/pending:pending")}</p>
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
                <span className="">ID</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
            <th className="product_id">
              <div>
                <span>{t("orders/manorder:customer")}</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
            <th className="country">
              <div>
                <span>{t("balancesystem/yuklemegecmisi:product")}</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
            <th className="be_sent">
              <div>
                <span>{t("orders/pending:tracknum")}</span>
                <span>
                  <i className="fad fa-filter"></i>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>1</span></td>
            <td>324324932</td>
            <td>@mail.ru</td>
            <td>sana ne la </td>
            <td>hadi ordan </td>
          </tr>
          <tr>
            <td><span>2</span></td>
            <td>9696522</td>
            <td>bide bana sor</td>
            <td>yok la </td>
            <td>seni seni</td>
          </tr>
          <tr>
            <td><span>3</span></td>
            <td>farz et </td>
            <td>tamam dur</td>
            <td>dersem</td>
            <td>durma</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrder;
