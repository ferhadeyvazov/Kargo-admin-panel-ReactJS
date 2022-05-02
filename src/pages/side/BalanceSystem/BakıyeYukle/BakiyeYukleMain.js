import React from "react";
import { useSelector } from "react-redux";
import "./BakiyeYukle.scss";
import BakiyeYukleTypes from "./BakiyeYukleTypes";
import BankHesabiOdeme from "./BankHesabiOdeme/BankHesabiOdeme";
import BankHesapBilgileri from "./BankHesapBilgiler/BankHesapBilgileri";
import OnlineOdeme from "./OnlineOdeme/OnlineOdeme.";
import { useTranslation } from "react-i18next";


const BakiyeYukle = () => {
  const state = useSelector((state) => state.bakiyeYukle);
  const {t} = useTranslation(["balancesystem", "balancesystem/bakiyeyukle"])
  return (
    <>
      <div className="bakiye_yukle">
        <div className="bakiye_yukle_title">
          <p className="title_left">{t("balancesystem/bakiyeyukle:bakiye")}</p>
          <p className="title_right">{t("balancesystem/bakiyeyukle:americandolar")} 13,7591 </p>
        </div>

        <BakiyeYukleTypes />
      </div>
      {state.bankHesapBilgiler && <BankHesapBilgileri />}
      {state.bankHesabinaOdeme && <BankHesabiOdeme />}
      {state.onlineOdeme && <OnlineOdeme />}
    </>
  );
};

export default BakiyeYukle;
