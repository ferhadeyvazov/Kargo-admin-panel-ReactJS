import React from 'react';
import '../Stock.scss';
import { useTranslation } from 'react-i18next';
const MyStockForm = () => {
  const {t}=useTranslation(["balancesystem","balancesystem/yuklemegecmisi","courierrequest"])

  return (
    <div className="stockform">
      <div className="customer-info">
        <div class="customer-info-content two-create">
          <div class="address-groups">
            <div class="address-group">
              <label for="">
                {t("balancesystem/yuklemegecmisi:mystock")}<span>*</span>{' '}
              </label>
              <select name="" id="">
                <option value="">US</option>
                <option value="">UK</option>
                <option value="">Norway</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="table_container table_wrapper">
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
      <div className="btn">
        <span>2 {t("balancesystem/yuklemegecmisi:shipment")}</span>
        <button>
          <i class="far fa-check"></i>
          {t("balancesystem/yuklemegecmisi:send")}
        </button>{' '}
      </div>
    </div>
  );
};

export default MyStockForm;
