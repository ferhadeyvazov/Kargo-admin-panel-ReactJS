import React from "react";
import "./typesCards.scss";
import { useTranslation } from "react-i18next";
const TypesCards = () => {
  const {t} = useTranslation(["balancesystem","orders","orders/manorder","balancesystem/yuklemegecmisi","earnandshare"])

  return (
    <div className="types_cards ">
      <div className="types_cards_flex_box types_cards_top">
        <div className="title_box  left">
          <div className="title_box_title">
            <div className="blue_box"></div>
            <p>{t("earnandshare:condition")}</p>
          </div>

          <div className="title_box_desc">
            <div className="title_box_desc_left">
              {t("earnandshare:row1")}
            </div>{" "}
            <div className="title_box_desc_right">
              {t("earnandshare:row2")}
            </div>
          </div>
        </div>
        <div className="title_box right">
          <div className="title_box_title">
            <div className="blue_box"></div>
            <p>{t("earnandshare:earning")}</p>
          </div>

          <div className="title_box_desc">
            <div className="title_box_desc_left">25% {t("earnandshare:row3")}</div>{" "}
            <div className="title_box_desc_right">** 2.5% {t("earnandshare:row4")}</div>
          </div>
        </div>
      </div>
      <div className="types_cards_flex_box types_cards_middle">
        <div className="title_box left">
          <div className="title_box_title">
            <div className="blue_box"></div>
            <p>{t("earnandshare:balance")}</p>
          </div>

          <div className="title_box_desc">
            <div className="title_box_desc_left">
              {t("earnandshare:row5")}
            </div>
            <div className="title_box_desc_right"> {t("earnandshare:row6")}</div>
          </div>
        </div>
        <div className="title_box right">
          <div className="title_box_title">
            <div className="blue_box"></div>
            <p>{t("earnandshare:usage")}</p>
          </div>

          <div className="title_box_desc">
            <div className="title_box_desc_left">60 {t("earnandshare:days")}</div>{" "}
            <div className="title_box_desc_right">60 {t("earnandshare:days")}</div>
          </div>
        </div>
      </div>

      {/* ****************** */}
      <div className="types_cards_bottom">
        <div className="title_box  left">
          * 5 USD {t("earnandshare:row7")}.
        </div>
        <div className="title_box right">
          ** {t("earnandshare:row8")}.
        </div>
      </div>
      {/* <div className="types_cards_flex types_cards_middle">middle</div>
      <div className="types_cards_flex types_cards_bottom">bottom</div> */}
    </div>
  );
};

export default TypesCards;
