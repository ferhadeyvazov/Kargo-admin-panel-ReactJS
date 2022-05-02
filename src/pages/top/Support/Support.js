import React from "react";
import "./support.scss";
import { useSelector } from "react-redux";
//asseets
import { SsytemTypes } from "../../../constants/balanceSystemIconsAndTypes";
import ConfigImage from "../../../assets/supportImages/config.svg";

//comps
import BalanceSystemTitle from "../../../components/BalanceSsytemTitleandOthers";
import BalanceSystemTypes from "../../../components/BalanceSystemTypesAndOthers";

//in comps
import DestekTalebi from "./DestekTalebi/DestekTalebi";
import DestekTalebiOlusdur from "./DestekTalebiOlusdur/DestekTalebiOLusdur";
import SistemMesaji from "./SistemMesaji/SistemMesaji";
const Support = () => {
  const state = useSelector((state) => state.settingReducer);

  return (
    <div className="system_main">
      <div className="system_container">
        <BalanceSystemTitle SistemySvg={ConfigImage} title={"Destek"} />
        <BalanceSystemTypes
          allTypes={SsytemTypes.settings}
          whichType={"setting"}
        />
        {state.DestekTalebi && <DestekTalebi />}
        {state.DestekTalebiOluştur && <DestekTalebiOlusdur />}
        {state.SistemMesajı && <SistemMesaji />}
      </div>
    </div>
  );
};

export default Support;
