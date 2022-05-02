import React, { useState } from "react";
import "./MarketPlace.scss";
import { marketButtons } from "../../../constants/marketPlaceButtons";
import MarketPlaceSvg from "../../../assets/sideBarIcons/marketIconWhite.svg";
import BalanceSsytemTitleandOthers from "../../../components/BalanceSsytemTitleandOthers";
import MarketPlaceOrders from "./MarketPlaceOrdersMain/MarketPlaceOrders";
import MarketPlaceIntegration from "./MarketPlaceIntegration";
const MarketPlace = () => {
  const [activeMarketPlace, setActiveMarketPlace] =
    useState("Marketplace Orders");

  return (
    <div className="balance_system_main system_main">
      <div className="balance_system_container system_container">
        {activeMarketPlace === "Marketplace Orders" && (
          <BalanceSsytemTitleandOthers
            SistemySvg={MarketPlaceSvg}
            title={"marketplace-integration"}
          />
        )}
        <article>
          <div className="order_buttons">
            {marketButtons.map((btn) => {
              return (
                <button
                  className={`${
                    btn.name === activeMarketPlace ? "active" : ""
                  }`}
                  onClick={() => setActiveMarketPlace(btn.name)}
                >
                  {btn.name}
                </button>
              );
            })}
          </div>
        </article>
        {activeMarketPlace === "Marketplace Orders" && <MarketPlaceOrders />}
        {activeMarketPlace === "Marketplace Integration" && (
          <MarketPlaceIntegration />
        )}
      </div>
    </div>
  );
};

export default MarketPlace;
