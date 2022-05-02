import PriceS from "../../../../assets/calculatorIcons/priceCalculation.svg";
import React from "react";

const CallculatorHeader = () => {
  return (
    <div className="price-calculation-head">
      <img src={PriceS} alt="" />
      <h4>Price Calculation</h4>
    </div>
  );
};

export default CallculatorHeader;
