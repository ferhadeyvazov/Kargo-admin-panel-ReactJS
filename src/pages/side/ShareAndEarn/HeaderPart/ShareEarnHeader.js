import React from "react";
import "./shareEarnHeader.scss";
import { useTranslation } from "react-i18next";
const ShareEarnHeader = () => {
  const {t} = useTranslation(["balancesystem","orders","orders/manorder","balancesystem/yuklemegecmisi"])

  return (
    <div className="share_earn">
      <div className="share_earn_referance">
        <div className="share_earn_referance_content">
          <p className="share_earn_referance_content_title">{t("balancesystem/yuklemegecmisi:reference")}</p>
          <div className="share_earn_referance_content_links">
            <input
              type="text"
              placeholder="https///www.example.com/a.jnfjknjj/4857943754/efsjkkfskj.url"
              className="share_inp"
            />
            <button>{t("balancesystem/yuklemegecmisi:shareurl")}</button>
          </div>
          <p className="share_earn_referance_content_desc1">
            *{t("balancesystem/yuklemegecmisi:row1")}.
          </p>
          <div className="share_earn_referance_content_bottom">
            <p className="share_earn_referance_content_desc1 ">
              **{t("balancesystem/yuklemegecmisi:row1")}.
            </p>
            <button>{t("orders/manorder:verify")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareEarnHeader;
