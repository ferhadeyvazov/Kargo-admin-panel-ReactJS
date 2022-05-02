import React from "react";
import BalanceSystemTitle from "../../../components/BalanceSsytemTitleandOthers";
import homesvg from "../../../assets/sideBarIcons/home-svgrepo-com 2.svg";
import detal from "../../../assets/sideBarIcons/detal.svg";
import "./MainMenu.scss";
import MenuBox from "./MenuBox/MenuBox";
import Notification from "./svgs/Notification.svg";
import Amount from "./svgs/Amount.svg";
import Desi from "./svgs/Desi.svg";
import Kilo from "./svgs/Kilo.svg";
import Volume from "./svgs/Volume.svg";
import Weight from "./svgs/Weight.svg";
import Worth from "./svgs/Worth.svg";
import BellBlue from "./svgs/BellBlue.svg";
import Grafik from "./svgs/Grafik.svg";
import Frame from "./svgs/Frame.png";
import { mainPageConstantVariables } from "../../../constants/mainPageIcons";
import { useTranslation } from "react-i18next";

const MainMenu = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="main-menu system_main">
      <div className="main-menu-under system_container ">
        <BalanceSystemTitle SistemySvg={homesvg} title={"main-menu"} />
        <div className="menu">
          <div className="boxes">
            {mainPageConstantVariables.mainPageCarts.map((item) => {
              return <MenuBox {...item} key={item.id} />;
            })}
          </div>

          {/* Resimler olan yer sonradan duzenlenecek  */}
          <div className="main-graf">
            <div className="graf">
              <div className="title">
                <img src={Notification} alt="" />
                <span>{t("mainmenu:notifications")}</span>
                {/* <span className="link_name">{t(`${link.linkName}`)}</span> */}
              </div>
              <div className="body-bell">
                <div className="one-bell">
                  <img src={BellBlue} alt="" />
                  <span>
                    Packages of customers who choose the delivery tariff to the
                    address{" "}
                  </span>
                </div>
                <div className="one-bell">
                  <img src={BellBlue} alt="" />
                  <span>
                    Packages of customers who choose the delivery tariff to the
                    address{" "}
                  </span>
                </div>
                <div className="one-bell">
                  <img src={BellBlue} alt="" />
                  <span>
                    Packages of customers who choose the delivery tariff to the
                    address{" "}
                  </span>
                </div>
                <div className="one-bell">
                  <img src={BellBlue} alt="" />
                  <span>
                    Packages of customers who choose the delivery tariff to the
                    address{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="graf">
              <div className="title bez-padd">
                <img className="grafik-img" src={Grafik} alt="" />
                <span>{t("mainmenu:summaryof7days")}</span>
              </div>
              <div className="choices">
                <div className="choice">
                  <div className="ball blue "></div>
                  <span>New Shipping: 0</span>
                </div>
                <div className="choice">
                  <div className="ball green"></div>
                  <span>Waiting: 0</span>
                </div>
                <div className="choice">
                  <div className="ball pink"></div>
                  <span>Those at the facility: 0</span>
                </div>
              </div>

              <div className="main-grafik">
                <img src={Frame} alt="" />
              </div>
            </div>
          </div>

          <div className="price-calculator">
            <div className="title">
              <img src={Notification} alt="" />
              <span>{t("common:pricecalculation")}</span>
            </div>

            <div className="country">
              <label>
                {t("common:country")}: <sup>*</sup>
              </label>
              <select>
                <option>1</option>
                <option>2</option>
              </select>
            </div>

            <div className="info-all">
              <div className="info">
                <label>
                  {t("common:count")}: <sup>*</sup>
                </label>
                <input />
                <div className="text-info">
                  <img src={Amount} alt="" />
                  <div>
                    <p> {t("common:totalamount")}:</p>
                    <p>1 box</p>
                  </div>
                </div>
              </div>
              <div className="info">
                <label>
                  {t("common:type")}: <sup>*</sup>
                </label>
                <select>
                  <option>1</option>
                  <option>2</option>
                </select>
                <div className="text-info">
                  <img src={Volume} alt="" />
                  <div>
                    <p> {t("common:totalvolume")}:</p>
                    <p>0.003m</p>
                  </div>
                </div>
              </div>
              <div className="info">
                <label>
                  {t("common:length")}: <sup>*</sup>
                </label>
                <div className="box-input">
                  <input />
                  <span>cm</span>
                </div>
                <div className="text-info">
                  <img src={Weight} alt="" />
                  <div>
                    <p> {t("common:totalweight")}:</p>

                    <p>0.03kq</p>
                  </div>
                </div>
              </div>
              {/* <div className="info">
                <label>
                  Width: <sup>*</sup>
                </label>
                <div className="box-input">
                  <input />
                  <span>cm</span>
                </div>
                <div className="text-info">
                  <img src={Kilo} />
                  <div>
                    <p>Kilogramme:</p>
                    <p>0.03kq</p>
                  </div>
                </div>
              </div> */}
              <div className="info">
                <label>
                  {t("common:height")}: <sup>*</sup>
                </label>
                <div className="box-input">
                  <input />
                  <span>cm</span>
                </div>
                <div className="text-info">
                  <img src={Desi} alt="" />
                  <div>
                    <p> {t("common:desi")}:</p>

                    <p>0.003 kq</p>
                  </div>
                </div>
              </div>
              <div className="info">
                <label>
                  {t("common:weight")}: <sup>*</sup>
                </label>
                <div className="box-input">
                  <input />
                  <span>cm</span>
                </div>
                <div className="text-info">
                  <img src={Worth} alt="" />
                  <div>
                    <p> {t("common:totalworth")}:</p>
                    <p>0.003 kq</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="total">
              <div className="price">
                <p>
                  {t("common:price")}: <sup>*</sup>
                  <span>23</span>
                </p>
                <button> {t("common:pricecalculation")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
