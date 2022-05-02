import React from "react";
import AmazonImage from "../../assets/ordersIcons/iCustomer.svg";
import { useTranslation } from "react-i18next";
const AmazonStore = () => {
  const{t} = useTranslation(["orders","orders/amazon","orders/manorder"])
  return (
    <div class="amozon-store">
      <div class="amazon-store-top">
        <div class="amazon-store-head">
          <div class="head-img">
            <img src={AmazonImage} alt="" />
          </div>
          <h4>
            Amazon Store <span>*</span>
          </h4>
        </div>
      </div>
      <div class="amazon-store-body">
        <div class="amazon-store-content">
          <div class="amazon-store-top">
            <div class="amazon-head">
              <h4>
                Amazon Store <span>*</span>
              </h4>
            </div>
            <div class="amazon-body">
              <select name="" id="">
                <option value="">
                  Amazon.com Decd LLC - PITP5 - Pittsburgh - 2250 Roswell Drive
                  - 15205 - PA - US
                </option>
                <option value="">Lorem, ipsum dolor.</option>
                <option value="">Lorem ipsum dolor sit.</option>
              </select>
              <button class="select-smth">{t("orders/amazon:select")}</button>
            </div>
          </div>
          <div class="amazon-store-top">
            <div class="amazon-head">
              <h4>
                {t("orders/amazon:custname")} <span>*</span>
              </h4>
            </div>
            <div class="amazon-body">
              <input type="text" placeholder="Amazon.com Decd LLC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonStore;
