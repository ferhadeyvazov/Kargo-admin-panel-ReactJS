import React from "react";
import "./cargoCompanies.scss";
import BalanceSystemTitle from "../../../components/BalanceSsytemTitleandOthers";
import crgSvg from "../../../assets/cargoCompanies/cargoCompSvg.svg";
import fedex from "../../../assets/cargoCompanies/fedexCargo.svg";
import ups from "../../../assets/cargoCompanies/ups.svg";
import tnt from "../../../assets/cargoCompanies/tnt.svg";
import dh from "../../../assets/cargoCompanies/dh.svg";
import { useTranslation } from "react-i18next";
const CargoCompanies = () => {
  const {t} = useTranslation(["inventory"])

  return (
    <div className="system_main">
      <div className="system_container">
        <BalanceSystemTitle SistemySvg={crgSvg} title={"cargo-companies"} />
        <div className="marketplace-integration">
          <div className="marketplace-content">
            <div className="all-cargo">
              <div className="cargo-items">
                <div className="cargo-item">
                  <div className="cargo-images">
                    <img src={fedex} alt="" />
                  </div>
                  <p>ETSY</p>
                </div>
                <div className="cargo-item">
                  <div className="cargo-images">
                    <img src={ups} alt="" />
                  </div>
                  <p>AMAZON</p>
                </div>
                <div className="cargo-item">
                  <div className="cargo-images">
                    <img src={tnt} alt="" />
                  </div>
                  <p>ALIEXPRESS</p>
                </div>
                <div className="cargo-item">
                  <div className="cargo-images">
                    <img src={dh} alt="" />
                  </div>
                  <p>EBAY</p>
                </div>
              </div>
            </div>
            <div className="cargo-companies-bottom">
              <div className="marketplace-bottom-content">
                <div className="keys">
                  <div className="key">
                    <h4>
                      {t("inventory:companyname")}<sup>*</sup>
                    </h4>
                    <div className="key-input">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="key">
                    <h4>
                      {t("inventory:privatekey")}<sup>*</sup>
                    </h4>
                    <div className="key-input">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="key">
                    <h4>
                      {t("inventory:privatekey")}<sup>*</sup>
                    </h4>
                    <div className="key-input">
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="create-btn">
                  <button>{t("inventory:create")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CargoCompanies;
