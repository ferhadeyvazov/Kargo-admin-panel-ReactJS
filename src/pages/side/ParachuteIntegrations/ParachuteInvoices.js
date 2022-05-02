import React from 'react';
import Parachute from '../../../assets/parachuteImages/Parachute.svg';
import { useTranslation } from 'react-i18next';
const ParachuteInvoices = () => {
  const {t} = useTranslation(["specialoffer"])
  return (
    <div class="marketplace-integration">
      <div class="marketplace-content">
        <div class="marketplace-heading">
          <img src={Parachute} alt="" />
          <h4>{t("specialoffer:crtinvoice")}</h4>
        </div>
        <div class="create-invoice-section">
          <div class="create-invoice-content">
            <div class="create-invoice-left">
              <div class="select-invoice">
                <button>{t("specialoffer:invintegration")}</button>
              </div>
              <div class="select-invoice-link">
                <a href="#">link.pdfnnnvfkv</a>
              </div>
            </div>
            <div class="create-invoice-right">
              <div class="key">
                <h4>
                  API KEY<sup>*</sup>
                </h4>
                <div class="key-input">
                  <input type="text" placeholder="4385905" />
                </div>
              </div>
            </div>
          </div>
          <div class="create-invoice-btn">
            <button>{t("specialoffer:forward")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParachuteInvoices;
