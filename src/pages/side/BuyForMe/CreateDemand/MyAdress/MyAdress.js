import React from 'react';
import { useTranslation } from 'react-i18next';
const MyAdress = () => {
  const {t} = useTranslation(["balancesystem","orders","orders/manorder","balancesystem/yuklemegecmisi"])

  return (
    <div className="customer-info ">
      <div class="customer-info-content">
        <div class="customer-info-top">
          <select name="" id="">
            <option value="">{t("orders/manorder:addressbook")}</option>
          </select>
        </div>

        <div class="customer-info-bottom">
          <div class="address-info">
            <div class="address-info-head">
              <h1>{t("orders/manorder:addressinfo")}</h1>
            </div>
            <div class="address-groups">
              <div class="address-group">
                <label for="">
                  {t("orders/manorder:country")}<span>*</span>{' '}
                </label>
                <select name="" id="">
                  <option value="">US</option>
                  <option value="">UK</option>
                  <option value="">Norway</option>
                </select>
              </div>
              <div class="address-group">
                <label for="">
                  {t("orders/manorder:city")}<span>*</span>{' '}
                </label>
                <select name="" id="">
                  <option value="">New York</option>
                  <option value="">UK</option>
                  <option value="">Norway</option>
                </select>
              </div>
              <div class="address-group">
                <label for="">
                  {t("orders/manorder:state")}<span>*</span>{' '}
                </label>
                <select name="" id="">
                  <option value="">Californiya</option>
                  <option value="">UK</option>
                  <option value="">Norway</option>
                </select>
              </div>
              <div class="address-group">
                <label for="">
                  {t("orders/manorder:adres")}<span>*</span>{' '}
                </label>
                <input type="text" placeholder="Bergen street 57" />
              </div>
              <div class="address-group">
                <label for="">
                  {t("orders/manorder:zip")} <span>*</span>{' '}
                </label>
                <input type="text" placeholder="745844" />
              </div>
            </div>
          </div>
          <div class="contact-info">
            <div class="address-info-head">
              <h1>{t("orders/manorder:contactinfo")}</h1>
            </div>
            <div class="address-groups">
              <div class="address-group">
                <label for="">
                  {t("orders/manorder:fullname")}<span>*</span>{' '}
                </label>
                <input type="text" placeholder="Emma John" />
              </div>
              <div class="address-group">
                <label for="">
                  {t("orders/manorder:phone")}<span>*</span>{' '}
                </label>
                <input type="text" placeholder="+9383830834" />
              </div>
              <div class="address-group">
                <label for="">
                  Email<span>*</span>{' '}
                </label>
                <input type="text" placeholder="john@example.com" />
              </div>
            </div>
            <div class="save-btn">
              <div class="save-btn-content">
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-1"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-1">{t("orders/manorder:save")}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAdress;
