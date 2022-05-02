import React from "react";
import Price from "../../assets/ordersIcons/PriceSvg.svg";
import "../../orders.scss";
import { useTranslation } from "react-i18next";

const TotalPriceOrder = () => {
  const {t} = useTranslation(["orders","orders/manorder"])

  return (
    <>
      <div className="total-price">
        <button>
          <img src={Price} alt="" />
          {t("orders/manorder:total")}: 200$
        </button>
      </div>
    </>
  );
};

export default TotalPriceOrder;
