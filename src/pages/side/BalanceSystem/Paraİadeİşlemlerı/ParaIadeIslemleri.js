import React from "react";
import "../paraIadeIslemleri.scss";
import { useTranslation } from "react-i18next";
const ParaIadeIslemleri = () => {
  const {t} = useTranslation(["balancesystem","balancesystem/paraiadeislem","balancesystem/yuklemegecmisi"])
  return (
    <>
      <div className="para_iade">
        <div className="para_iade_title">
          <p className="title_left">{t("balancesystem/paraiadeislem:paraiade")}</p>
          <p className="title_right">{t("balancesystem/bakiyeyukle:americandolar")} 13,7591</p>
        </div>
        <div className="para_iade_accordion_types">
          <div className="each_type">
            <div className="each_type_title">{t("balancesystem/yuklemegecmisi:bakiye")} 0.00$</div>
          </div>
        </div>
      </div>

      {/* inam numarasi  */}
      <div className="para_iade_info inner_content_80">
        <div className="inputs">
          <div className="unvan kutu">
            <p>{t("balancesystem/paraiadeislem:hesabadi")}/{t("balancesystem/paraiadeislem:adress")}</p>
            <input type="text" />
          </div>

          <div className="iban kutu">
            <p>{t("balancesystem/paraiadeislem:iban")}</p>
            <input type="number" />
          </div>
        </div>
        <button className="kaydet_btn">{t("balancesystem/paraiadeislem:save")}</button>
      </div>
    </>
  );
};

export default ParaIadeIslemleri;
