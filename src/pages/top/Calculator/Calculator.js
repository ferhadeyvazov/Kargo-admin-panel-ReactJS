import React from "react";
import "./Calculator.scss";
import CalcSvg from "../../../assets/calculatorIcons/calculatorSvg.svg";
import BalanceSystemTitle from "../../../components/BalanceSsytemTitleandOthers";
import CallculatorHeader from "./CallculatorHeader/CallculatorHeader";
import PackageInputGroups from "../../../components/OrdersComponents/Package/PackageInputGroups";
import PackageBottom from "../../../components/OrdersComponents/Package/PackageBottom";
import CalculatorDefination from "./CalculatorDefination/CalcDefination";
const Calculator = () => {
  return (
    <div className="system_main">
      <div className="system_container">
        <BalanceSystemTitle SistemySvg={CalcSvg} title={"Calculator"} />
        <div className="price-calculation">
          <div className="price-calculation-content">
            <CallculatorHeader />

            <div className="price-country">
              {/* select Country */}
              <div className="select-country">
                <label htmlFor="">
                  Country <sup>*</sup>
                </label>{" "}
                <br />
                <select name="" id="">
                  <option value="">US</option>
                  <option value="">UK</option>
                  <option value="">Azerbaijan</option>
                </select>
              </div>
              {/* package inputs  bunun cssi hem ordersdedi hemde calculatro cssde*/}
              <PackageInputGroups />
              {/* bottom items */}
              <PackageBottom />
              {/* calculator definations */}
              <CalculatorDefination />
              {/* price calculator btn  */}
              <div className="price-calculation-btn">
                <p>Price: 200$</p>
                <button>Price Calculation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
