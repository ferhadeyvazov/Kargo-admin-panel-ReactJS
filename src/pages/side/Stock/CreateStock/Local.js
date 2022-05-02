import React from 'react';
import { useTranslation } from 'react-i18next';
const Local = () => {
  const {t}=useTranslation(["balancesystem","courierrequest","balancesystem/yuklemegecmisi"])
  return (
    <>
      <div class="address-groups-long">
        <div class="address-group ">
          <label for="">
            {t("balancesystem/yuklemegecmisi:stplace")} <span>*</span>{' '}
          </label>
          <input type="text" placeholder="New York" />
        </div>
      </div>
      <div class="address-groups-three">
        <div class="address-group ">
          <label for="">
            {t("balancesystem/yuklemegecmisi:stplace")} <span>*</span>{' '}
          </label>
          <input type="text" placeholder="New York" />
        </div>
        <div class="address-group ">
          <label for="">
            {t("balancesystem/yuklemegecmisi:stplace")} <span>*</span>{' '}
          </label>
          <input type="text" placeholder="New York" />
        </div>
        <div class="address-group ">
          <label for="">
            {t("balancesystem/yuklemegecmisi:stplace")} <span>*</span>{' '}
          </label>
          <input type="text" placeholder="New York" />
        </div>
      </div>
      <div class=" address-groups ">
        <div class="address-group ">
          <label for="">
            {t("balancesystem/yuklemegecmisi:stplace")} <span>*</span>{' '}
          </label>
          <input type="text" placeholder="New York" />
        </div>
        <div class="address-group ">
          <label for="">
            {t("balancesystem/yuklemegecmisi:stplace")} <span>*</span>{' '}
          </label>
          <input type="text" placeholder="New York" />
        </div>
      </div>
    </>
  );
};

export default Local;

