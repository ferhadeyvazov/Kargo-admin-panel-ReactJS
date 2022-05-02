import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelector } from '../../../../redux/createstock/createStockAction';
import Global from './Global';
import Local from './Local';
import '../Stock.scss';
import { useTranslation } from 'react-i18next';
const CreateStock = () => {
  const state = useSelector((state) => state.selectorReducer);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSelector(e.target.value));
  };
  const {t}=useTranslation(["balancesystem","courierrequest","balancesystem/yuklemegecmisi"])
  return (
    <div className="customer-info">
      <div class="customer-info-content local-global">
        <div class="address-groups">
          <div class="address-group">
            <label for="">
              {t("balancesystem/yuklemegecmisi:sttype")} <span>*</span>{' '}
            </label>
            <select onChange={handleChange}>
              <option value={'global'}>Global</option>
              <option value={'local'}>Local</option>
            </select>
          </div>
          {state.local && (
            <div class="address-group">
              <label for="">
                {t("balancesystem/yuklemegecmisi:sttype")} <span>*</span>{' '}
              </label>
              <input type="text" placeholder="Local" />
            </div>
          )}
          {state.global && (
            <div class="address-group">
              <label for="">
                {t("balancesystem/yuklemegecmisi:stock")} <span>*</span>{' '}
              </label>
              <select>
                <option>Amazon FBA</option>
                <option>Alakas</option>
              </select>
            </div>
          )}
        </div>
        {state.local && <Local />}
        {state.global && <Global />}
        <div className="btn">
          <button>
            <i class="far fa-plus"></i>
            <p>{t("balancesystem/yuklemegecmisi:add")}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateStock;
