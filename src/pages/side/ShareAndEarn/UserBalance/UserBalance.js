import React from "react";
import "./userBalance.scss";
import userImage from "../../../../assets/shareEarnIcons/userImg.svg";
import DollarImg from "../../../../assets/shareEarnIcons/dolarImage.svg";
import { useTranslation } from "react-i18next";
const UserBalance = () => {
  const {t} = useTranslation(["balancesystem","orders","orders/manorder","balancesystem/yuklemegecmisi"])

  return (
    <div className="user_balance">
      <div className="left user_balance_box">
        <div className="img_box">
          <img src={userImage} alt="" />
        </div>
        <p className="user_balance_box_title">{t("orders/manorder:earntodate")}:</p>
        <p className="user_balance_box_number">0</p>
      </div>
      <div className="right user_balance_box">
        <div className="img_box">
          <img src={DollarImg} alt="" />
        </div>
        <p className="user_balance_box_title">{t("orders/manorder:userrefer")}: </p>
        <p className="user_balance_box_number">0</p>
      </div>
    </div>
  );
};

export default UserBalance;
