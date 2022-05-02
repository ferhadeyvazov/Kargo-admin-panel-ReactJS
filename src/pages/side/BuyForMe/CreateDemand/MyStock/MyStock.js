import React from "react";
import "./mystock.scss";
import { useTranslation } from "react-i18next";
const MyStock = () => {
  const {t} = useTranslation(["balancesystem","orders","orders/manorder","balancesystem/yuklemegecmisi"])

  return (
    <div className="customer-info">
      <div class="customer-info-content two-create">
        <div class="address-groups">
          <div class="address-group">
            <label for="">
              {t("balancesystem/yuklemegecmisi:mystock")}<span>*</span>{" "}
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
  );
};

export default MyStock;
