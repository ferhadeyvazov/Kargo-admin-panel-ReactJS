import React from "react";
import "./KuryeTalepOlusdur.scss";
import { useTranslation } from "react-i18next";
const KuryeTalepOlusdur = () => {
  const {t}= useTranslation(["orders/manorder","courierrequest","balancesystem/yuklemegecmisi"])
  return (
    <div className="talep_olusdur kurye_talep">
      <p>{t("courierrequest:courcreate")}</p>

      <div className="talep_olusdur_form form_kurye">
        <div className="form_flex">
          <div className="form_flex_column">
            <span>
              {t("balancesystem/yuklemegecmisi:callname")} <span className="red_span">*</span>
            </span>
            <div
              className="form_inp div_inp"
              type="text"
              placeholder="Deirvlon."
              name="name"
            >
              2344
              <i className="fal fa-chevron-down"></i>
            </div>
          </div>
          <div className="form_flex_column">
            <span>
              ID <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="number"
              placeholder="4683"
              name="ID"
            />
          </div>
        </div>
        <div className="form_flex">
          <div className="form_flex_column">
            <span>
              {t("balancesystem/yuklemegecmisi:country")} <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="text"
              placeholder="US"
              name="country"
            />
          </div>
          <div className="form_flex_column">
            <span>
              {t("courierrequest:delivname")} <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="text"
              placeholder="Deirvlon"
              name="delivery name"
            />
          </div>
        </div>
        <div className="form_flex">
          <div className="form_flex_column">
            <span>
              {t("orders/manorder:city")} <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="text"
              placeholder="New York"
              name="city"
            />
          </div>
          <div className="form_flex_column">
            <span>
              {t("orders/manorder:phone")} <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="number"
              placeholder="+994505445330135"
              name="phone number"
            />
          </div>
        </div>

        <div className="form_flex">
          <div className="form_flex_column">
            <span>
              {t("orders/manorder:city")} <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="text"
              placeholder="New York"
              name="city"
            />
          </div>
          <div className="form_flex_column">
            <span>
              {t("orders/manorder:phone")} <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="number"
              placeholder="+994505445330135"
              name="phone number"
            />
          </div>
        </div>

        <div className="form_flex">
          <div className="form_flex_column">
            <span>
              Adress <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="text"
              placeholder="sevimli baki"
              name="adress"
            />
          </div>
          <div className="form_flex_column">
            <span>
              {t("courierrequest:date")} <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="date"
              id="start"
              name="date"
              placeholder="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
          </div>
        </div>

        <div className="form_flex">
          <div className="form_flex_column">
            <span>
              {t("courierrequest:tracknum")} <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="number"
              placeholder="032115"
              name="tracking code"
            />
          </div>
          <div className="form_flex_column">
            <span>
              {t("courierrequest:textresp")} <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="date"
              name="text response"
              placeholder="response"
            />
          </div>
        </div>
      </div>
      <div className="confirm_box">
        <button className="taleb_olusdur_btn">
          <i className="far fa-check"></i>
          {t("courierrequest:condemand")}
        </button>
      </div>
    </div>
  );
};

export default KuryeTalepOlusdur;
