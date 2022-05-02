import React from "react";
import { useTranslation } from "react-i18next";
import "../MainMenu.scss";
const MenuBox = ({
  id,
  svg,
  number,
  text,
  color_className,
  num_color_className,
  hasInput,
}) => {
  const { t } = useTranslation(["mainmenu"]);

  return (
    <div className="box" key={id}>
      <div className={`icon ${color_className}`}>
        <img src={svg} alt="text" />
      </div>
      <div className="text-box">
        {!hasInput ? <p className={num_color_className}>{number}</p> : null}
        <p>{t(`mainmenu:${text}`)}</p>
      </div>
      {!hasInput ? <span>{t("mainmenu:weeklywaiting")}</span> : <input />}
      <button className={color_className}>{t("mainmenu:preparepost")}</button>
    </div>
  );
};

export default MenuBox;
