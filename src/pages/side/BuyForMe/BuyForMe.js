import React from "react";
import { useSelector } from "react-redux";
import BalanceSystemTypesAndOthers from "../../../components/BalanceSystemTypesAndOthers";
import BalanceSsytemTitleandOthers from "../../../components/BalanceSsytemTitleandOthers";
import { SsytemTypes } from "../../../constants/balanceSystemIconsAndTypes";
import CreateBatch from "./CreateBatch/CreateBatch";
import CreateDemand from "./CreateDemand/CreateDemand";
import MyRequest from "./MyRequest/MyRequest";
import Buy from "../../../assets/sideBarIcons/Buy.svg";

const BuyForMe = () => {
  const state = useSelector((state) => state.buyForMeReducer);
  return (
    <div className="system_main">
      <div className="system_container">
        <BalanceSsytemTitleandOthers SistemySvg={Buy} title={"buy-for-me"} />
        <BalanceSystemTypesAndOthers
          allTypes={SsytemTypes.buyforme}
          whichType={"buyforme"}
        />

        {state.myReguest && <MyRequest />}
        {state.createBatch && <CreateBatch />}
        {state.createDemand && <CreateDemand />}
      </div>
    </div>
  );
};

export default BuyForMe;
