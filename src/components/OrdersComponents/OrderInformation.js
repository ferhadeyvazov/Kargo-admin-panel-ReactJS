import React from 'react';
import OrdeInfoImage from '../../assets//ordersIcons/orderInformation.svg';
import Fba from '../../assets/ordersIcons/fbaLoungList.svg';
import LocalListImage from '../../assets/ordersIcons/localStorageList.svg';
import '../../orders.scss';
import { useTranslation } from 'react-i18next';

const OrderInformation = () => {
  const {t} = useTranslation(["orders","orders/manorder"])

  return (
    <div className="order-information">
      <div className="order-info-content">
        <div className="order-info-top">
          <img src={OrdeInfoImage} alt="" />
          <h1>{t("orders/manorder:orderinfo")}</h1>
        </div>
        <div className="order-info-bottom">
          <div className="order-lists">
            <div className="order-list">
              <div className="order-list-content">
                <div className="order-list-left">
                  <img src={LocalListImage} alt="" />
                  <h4>{t("orders/manorder:locallist")}</h4>
                </div>
                <div className="order-list-right">
                  <input
                    type="radio"
                    className="answer"
                    id=""
                    name="check"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className="order-list">
              <div className="order-list-content">
                <div className="order-list-left">
                  <img src={Fba} alt="" />
                  <h4>{t("orders/manorder:FBAlist")}</h4>
                </div>
                <div className="order-list-right">
                  <input
                    type="radio"
                    className="answer"
                    id=""
                    name="check"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
