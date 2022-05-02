import React, { useState } from "react";
import "./GetOffer.scss";
import BalanceSsytemTitleandOthers from "../../../components/BalanceSsytemTitleandOthers";
import Air from "./Air/Air";
import SeaRainTruck from "./SeaRainTruck/SeaRainTruck";
import AirSvg from "../../../assets/GetSpecialOfferIcons/Air.svg";
import SeaSvg from "../../../assets/GetSpecialOfferIcons/Sea.svg";
import RailSvg from "../../../assets/GetSpecialOfferIcons/Rail.svg";
import TruckSvg from "../../../assets/GetSpecialOfferIcons/Truck.svg";
import Faiz from "../../../assets/sideBarIcons/Faiz.svg";
import { useTranslation } from "react-i18next";
const GetOffer = () => {
  const [value, setValue] = useState("sea");

  function chengeValue(event) {
    setValue(event.target.value);
    console.log(event.target.value);
  }
  const {t} = useTranslation(["specialoffer"])

  return (
    <div className="system_main">
      <div className="system_container ">
        <BalanceSsytemTitleandOthers
          SistemySvg={Faiz}
          title={"get-special-offer"}
        />
        <div className="get-offer">
          <p>{t("specialoffer:shipmode")}</p>
          <div className="radios">
            <label htmlFor="sea">
              <input
                type="radio"
                className="answer"
                id="sea"
                name="check"
                value="sea"
                checked={value === "sea" ? true : false}
                onChange={chengeValue}
              />
              <img src={SeaSvg} alt="" />
              <span>{t("specialoffer:sea")}</span>
            </label>
            <label htmlFor="rail">
              <input
                type="radio"
                className="answer"
                id="rail"
                name="check"
                value="rail"
                checked={value === "rail" ? true : false}
                onChange={chengeValue}
              />
              <img src={RailSvg} alt="" /> 
              <span>{t("specialoffer:rail")}</span>
            </label>
            <label htmlFor="air">
              <input
                type="radio"
                className="answer"
                id="air"
                name="check"
                value="air"
                checked={value == "air" ? true : false}
                onChange={chengeValue}
              />
              <img src={AirSvg} alt="" />
              <span>{t("specialoffer:air")}</span>
            </label>
            <label htmlFor="truck">
              <input
                type="radio"
                className="answer"
                id="truck"
                name="check"
                value="truck"
                checked={value == "truck" ? true : false}
                onChange={chengeValue}
              />
              <img src={TruckSvg} alt="" />
              <span>{t("specialoffer:truck")}</span>
            </label>
          </div>
          {(value === "sea" || value === "rail" || value === "truck") && (
            <SeaRainTruck />
          )}
          {value === "air" && <Air />}
        </div>
      </div>
    </div>
  );
};

export default GetOffer;
