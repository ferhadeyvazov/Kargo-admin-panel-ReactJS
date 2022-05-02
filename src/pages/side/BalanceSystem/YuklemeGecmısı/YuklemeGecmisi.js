import React from "react";
import "./yuklemeGecmisi.scss";
import { useTranslation } from "react-i18next";
const YuklemeGecmisi = () => {
  const {t} = useTranslation(["balancesystem","balancesystem/yuklemegecmisi"])
  return (
    <>
      <div className="yukleme_gecmisi">
        <div className="yukleme_gecmisi_title">
          <p className="title_left">{t("balancesystem/yuklemegecmisi:yuklgecmisi")}</p>
          <p className="title_right">{t("balancesystem/bakiyeyukle:americandolar")} 13,7591</p>
        </div>
        <div className="yukleme_gecmisi_accordion_types">
          <div className="each_type">
            <div className="each_type_title">{t("balancesystem/yuklemegecmisi:bakiye")} 0.00$</div>
          </div>
        </div>
      </div>

      {/* //table */}

      <div className="table_container table_wrapper">
        <p>{t("balancesystem/yuklemegecmisi:yuklgecmisi")}</p>
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
              <td><span>1</span></td>
              <td>January</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
            </tr>
            <tr>
              <td><span>2</span></td>
              <td>January</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
            </tr>
            <tr>
              <td><span>3</span></td>
              <td>January</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
            </tr>
            <tr>
              <td><span>4</span></td>
              <td>January</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default YuklemeGecmisi;
/*

*/
