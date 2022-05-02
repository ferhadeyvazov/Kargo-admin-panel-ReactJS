import React from "react";
import BalanceSystemTitleAndOthers from "../../../components/BalanceSsytemTitleandOthers";
import SharImage from "../../../assets/shareEarnIcons/shareAndEarn.svg";
import ShareEarnHeader from "./HeaderPart/ShareEarnHeader";
import UserBalance from "./UserBalance/UserBalance";
import TypesCards from "./TypesCards/TypesCards";
import "./share.scss";
import TermsCondition from "./TermsCondition/TermsCondition";
const ShareAndEarn = () => {
  return (
    <div className="system_main share">
      <div className="system_container">
        <BalanceSystemTitleAndOthers
          SistemySvg={SharImage}
          title={"share-and-earn"}
        />
        <ShareEarnHeader />
        <UserBalance />
        <TypesCards />
        <TermsCondition />
      </div>
    </div>
  );
};

export default ShareAndEarn;
