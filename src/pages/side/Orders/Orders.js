import React, { useState } from "react";
import "./ordersComponent.scss";
import { buttonsForOrder } from "../../../constants/ordersButtons";
import ManuelSvg from "../../../assets/ordersIcons/manuel.svg";
import BulkSvg from "../../../assets/ordersIcons/PriceSvg.svg";
import BalanceSystemTitle from "../../../components/BalanceSsytemTitleandOthers";

//innerComponents
import ManuelOrder from "./ManuelOrder/ManuelOrder";
import BulkOrder from "./BulkOrder/BulkOrder";
import LoungeShip from "./LoungeShip/LoungeShip";
import AmazonFBA from "./AmazonFBA/AmazonFBA";
import PendingOrder from "./PendingOrder/PendingOrder";
const Orders = () => {
  const [activeOrderButtonName, setActiveOrderButtonName] =
    useState("Manuel Order");

  const setActiveBtnFunction = (name) => {
    setActiveOrderButtonName(name);
  };
  return (
    <div className="manuel_order system_main">
      <div className="manuel_order_container system_container">
        {activeOrderButtonName === ("Manuel Order" || "Manuel Sifariş") && (
          <BalanceSystemTitle SistemySvg={ManuelSvg} title={"Manuel Sipariş"} />
        )}
        {activeOrderButtonName === ("Bulk Order" || "Toplu Sifariş") && (
          <BalanceSystemTitle SistemySvg={BulkSvg} title={"Bulk Order"} />
        )}

        {activeOrderButtonName === ("Amazon FBA" || "Amazon FBA") && (
          <BalanceSystemTitle SistemySvg={BulkSvg} title={"Amazon FBA"} />
        )}
        {activeOrderButtonName === ("Lounge Ship" || "Dinlenme Gemisi") && (
          <BalanceSystemTitle SistemySvg={BulkSvg} title={"Lounge Ship"} />
        )}
        {activeOrderButtonName === ("Pending Order" || "Bekleyen Sıfariş") && (
          <BalanceSystemTitle SistemySvg={BulkSvg} title={"Pending Order"} />
        )}
        <div className="order_buttons">
          {buttonsForOrder.map((btn) => {
            return (
              <button
                className={`${
                  btn.name === activeOrderButtonName ? "active" : ""
                }`}
                key={btn.name}
                onClick={() => setActiveBtnFunction(btn.name)}
              >
                {btn.name}
              </button>
            );
          })}
        </div>

        {/* sections */}

        {activeOrderButtonName === ("Manuel Order" || "Manuel Sifariş") && (
          <ManuelOrder />
        )}
        {activeOrderButtonName === ("Bulk Order" || "Toplu Sifariş") && (
          <BulkOrder />
        )}

        {activeOrderButtonName === ("Amazon FBA" || "Amazon FBA") && (
          <AmazonFBA />
        )}

        {activeOrderButtonName === ("Lounge Ship" || "Dinlenme Gemisi") && (
          <LoungeShip />
        )}

        {activeOrderButtonName === ("Pending Order" || "Bekleyen Sıfariş") && (
          <PendingOrder />
        )}
      </div>
    </div>
  );
};

export default Orders;
