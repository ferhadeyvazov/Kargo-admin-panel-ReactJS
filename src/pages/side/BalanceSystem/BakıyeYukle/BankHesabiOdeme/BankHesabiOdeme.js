import React, { useState } from "react";
import "./BankHesabOdeme.scss";
import { creditCarts } from "../../../../../constants/creditKarts";
import { useTranslation } from "react-i18next";
const BankHesabiOdeme = () => {
  //changing active checkbox
  const [activeCheckBox, setActiveCheckBox] = useState("Kredit");
  const {t} = useTranslation(["balancesystem","balancesystem/bakiyeyukle"])
  return (
    <div className="bank_odeme_container inner_content_80">
      <p className="bank_odeme_title">{t("balancesystem/bakiyeyukle:bhodeme")}</p>
      <p className="bank_kur_farklari">
        {t("balancesystem/bakiyeyukle:bank_kur_farklari")}
      </p>

      {/* steps */}
      <ul class="steps">
        <li class="step is-complete" data-step="1">
          {t("balancesystem/bakiyeyukle:odkart")}
        </li>
        <li class="step is-active" data-step="2">
          {t("balancesystem/bakiyeyukle:oddetay")}
        </li>
        <li class="step" data-step="3">
          {t("balancesystem/bakiyeyukle:odtamamla")}
        </li>
      </ul>

      <p className="musteri_numarasi">{t("balancesystem/bakiyeyukle:usernumber")}: EB1Z</p>

      {/* cart sections */}

      <div className="odeme_usulu cartlar">
        {creditCarts.map((cart) => {
          return (
            <div className={`${cart.className} cart`}>
              <div className="checkbox_div">
                <input
                  type="radio"
                  onClick={() => {
                    setActiveCheckBox(cart.text);
                  }}
                  checked={cart.text === activeCheckBox ? true : false}
                />
              </div>
              <div>
                <img src={cart.img} alt="" />
              </div>
              <p>{cart.text}</p>
            </div>
          );
        })}
      </div>

      <div className="blue-box">
        <div className="three-variant">
          <div>{t("balancesystem/bakiyeyukle:yuklenentutar")}</div>
          <div>{t("balancesystem/bakiyeyukle:currency")}</div>
          <div>{t("balancesystem/bakiyeyukle:komisyonhesablama")}</div>
        </div>
      </div>
      <div className="white-box">
        <div className="three-variant">
          <div>
            <input placeholder={t("balancesystem/bakiyeyukle:ornek")} />
          </div>
          <div>
            <select>
              <option>Turk lirasi</option>
              <option>Az Manat</option>
            </select>
          </div>
          <div>
            <input />
          </div>
        </div>
      </div>

      <div className="textarea">
        <p>{t("balancesystem/bakiyeyukle:aciklama")}</p>
        <textarea placeholder={t("balancesystem/bakiyeyukle:ornek")}></textarea>
        <button>{t("balancesystem/bakiyeyukle:ileri")}</button>
      </div>
    </div>
  );
};

export default BankHesabiOdeme;
/*
        <div className="table_header ">
          <p className="table_start_text">Yüklenilen Tutar </p>
          <p className="table_middle_text">Para Birimi</p>
          <p className="table_end_text">Komisyon Hesaplama</p>
        </div>

        <div className="table_inputs">
          <div className="start_div">
            <input type="text" className="input_start" />
          </div>
          <div className="middle_div">
            <input type="text" className="input_middle" />
          </div>
          <div className="end_div">
            <input type="text" className="input_end" />
          </div>
        </div>
*/
