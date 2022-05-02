import React, { useEffect, useState } from 'react';
import './OnlineOdeme.scss';
import { arrayOfCountries } from '../../../../../constants/paraBirimiOnlineOdemeIcin';
import { useTranslation } from 'react-i18next';
import imgKart from '../../../../../assets/creditCartImages/Vector.png';
const OnlineOdeme = () => {
  const [openCurrenciesList, setOpenCurrenciesList] = useState(false);
  const [currency, setCurrency] = useState(null);

  const handleCurrency = (list) => {
    setCurrency(list[0].currency);
    setOpenCurrenciesList(false);
  };

  const {t} = useTranslation(["balancesystem","balancesystem/bakiyeyukle"])

  return (
    <div className="online_odeme inner_content_80">
      <p className="online_odeme_title">{t("balancesystem/bakiyeyukle:onlineodeme")}</p>

      {/* steps */}
      <ul class="steps">
        <li class="step is-complete" data-step="1">
          {t("balancesystem/bakiyeyukle:odkart")}
        </li>
        <li class="step is-complete" data-step="2">
          {t("balancesystem/bakiyeyukle:oddetay")}
        </li>
        <li class="step is-active" data-step="3">
          {t("balancesystem/bakiyeyukle:odtamamla")}
        </li>
      </ul>

      <div className="pay">
        <div>
          <label htmlFor="amount-charged">
            {t("balancesystem/bakiyeyukle:yuklenentutar")}
          </label>
          <input id="amount-charged" type="text" placeholder="Orn:400" />
        </div>
        <div>
          <label htmlFor="currency-unit">
            {t("balancesystem/bakiyeyukle:currency")}
          </label>
          <select name="" id="currency-unit">
            <option value="">Euro</option>
            <option value="">Dollar</option>
            <option value="">Manat</option>
          </select>
        </div>
        <div className="pay-button">
          <button>{t("balancesystem/bakiyeyukle:ode")}</button>
        </div>
      </div>

      {/* odeme terminali */}

      <div className="odeme_terminali">
        <div className="sol_teref_container">
          {/* 1 */}
          <div className="sol_teref_kart_hissesi">
            <div className="input_box">
              <input type="radio" checked />
            </div>

            {/* buraya gelen veriLER BANK HESABINA ODEME HISSESINNEN GELIR    */}
            <div className="img_box">
              <img src={imgKart} alt="" />
            </div>
            <p className="text">{t("balancesystem/bakiyeyukle:krkart")}</p>
          </div>
          {/* 2 */}

          <div className="sol_teref_kart_bilgileri">
            <div className="kredi_kart_numarasi_kutusu kutu">
              <p className="text">{t("balancesystem/bakiyeyukle:krkartnum")}</p>
              <input type="number" />
            </div>
            <div className="kullanma_tarihi kutu_3">
              <p className="text">{t("balancesystem/bakiyeyukle:expdate")}</p>
              <input type="number" />
              <input type="number" />
            </div>

            <div className="guvenlik_kodu kutu">
              <p className="text">{t("balancesystem/bakiyeyukle:seccode")}</p>
              <input type="number" />
            </div>
          </div>
          {/* 3 */}
          <div className="sol_teref_kart_sahibi">
            <div className="kredi_kart_sahibi kutu_sahib">
              <span className="text">{t("balancesystem/bakiyeyukle:krkartnum")}</span>
              <input type="number" />
            </div>

            <div className="email_adress kutu_sahib">
              <span className="text">Email</span>
              <input type="text" />
            </div>
          </div>
        </div>

        {/* sag teref       miktar tl */}
        {/* //// */}
        <div className="sag_teref_container">
          {/* right part */}
          <div className="sag_teref_bilgiler">
            <p className="sag_teref_bilgiler_text">{t("balancesystem/bakiyeyukle:info")}</p>

            <div className="sag_teref_bilgiler_currency">
              <p className="sag_teref_bilgiler_currency_text">{t("balancesystem/bakiyeyukle:currency")}</p>
              <div
                className="sag_teref_bilgiler_currency_dropdown dropdown_select"
                onClick={() => setOpenCurrenciesList(!openCurrenciesList)}
              >
                <label htmlFor="">{currency ? currency : 'TRY'}</label>
                <i className="fas fa-sort-down"></i>
              </div>
              {/* dropdown click eliyende acilan currency list */}

              {openCurrenciesList && (
                <div className="currency_list dropdown_select_list">
                  {arrayOfCountries().map((list) => {
                    return (
                      <p
                        value={list[0].country}
                        onClick={() => handleCurrency(list)}
                      >
                        {list[0].currency}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="sag_teref_miktar">
            <p className="sag_teref_miktar_text">{t("balancesystem/bakiyeyukle:yuktutar")}</p>
            <p className="sag_teref_miktar_deger">10TL</p>
          </div>
        </div>
      </div>

      <button className="odeme_btn_green">{t("balancesystem/bakiyeyukle:ode")}</button>
    </div>
  );
};

export default OnlineOdeme;
