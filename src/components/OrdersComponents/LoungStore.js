import React from "react";
import AmazonImage from "../../assets/ordersIcons/iCustomer.svg";
import { useTranslation } from "react-i18next";
const LoungStore = () => {
  const{t} = useTranslation(["orders","orders/amazon","orders/manorder"])
  return (
    <div className="amozon-store">
      <div className="amazon-store-top">
        <div className="amazon-store-head">
          <div className="head-img">
            <img src={AmazonImage} alt="" />
          </div>
          <h4>
            {t("orders/amazon:custname")} <span>*</span>
          </h4>
        </div>
      </div>
      <div className="amazon-store-body">
        <div className="amazon-store-content">
          <div className="amazon-store-top">
            <div className="amazon-head">
              <h4>
                Lounge Storage <span>*</span>
              </h4>
            </div>
            <div className="amazon-body">
              <select name="" id="">
                <option value="">
                  Amazon.com Decd LLC - PITP5 - Pittsburgh - 2250 Roswell Drive
                  - 15205 - PA - US
                </option>
                <option value="">Lorem, ipsum dolor.</option>
                <option value="">Lorem ipsum dolor sit.</option>
              </select>
              <button className="select-smth">{t("orders/amazon:select")}</button>
            </div>
          </div>
          <div className="amazon-store-top">
            <div className="amazon-head">
              <h4>
                {t("orders/amazon:custname")} <span>*</span>
              </h4>
            </div>
            <div className="amazon-body">
              <input type="text" placeholder="Amazon.com Decd LLC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoungStore;
