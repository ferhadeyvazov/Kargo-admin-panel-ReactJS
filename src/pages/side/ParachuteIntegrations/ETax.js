import React from 'react';
import Parachute from '../../../assets/parachuteImages/Parachute.svg';
import parachute from '../../../assets/parachuteImages/parachute.png';
import qnb from '../../../assets/parachuteImages/qnb.png';
import { useTranslation } from 'react-i18next';
const ETax = () => {
    const {t} = useTranslation(["specialoffer"])
  return (
    <div class="marketplace-integration">
      <div class="marketplace-content">
        <div class="marketplace-heading">
          <img src={Parachute} alt="" />
          <h4>{t("specialoffer:crtinvoice")}</h4>
        </div>
        <div class="create-invoice">
          <div class="create-invoice-items">
            <div class="create-invoice-item">
              <div class="create-invoice-images">
                <img src={parachute} alt="" />
              </div>
              <p>Parachute</p>
            </div>
            <div class="create-invoice-item">
              <div class="create-invoice-images">
                <img src={qnb} alt="" />
              </div>
              <p>QNB</p>
            </div>
          </div>
        </div>
        <div class="marketplace-bottom e-tax-bottom">
          <div class="marketplace-bottom-content">
            <div class="keys e-tax-keys">
              <div class="key">
                <h4>
                  API KEY<sup>*</sup>
                </h4>
                <div class="key-input">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div class="create-invoice-btn">
              <button>{t("specialoffer:crtinvoice")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ETax;
