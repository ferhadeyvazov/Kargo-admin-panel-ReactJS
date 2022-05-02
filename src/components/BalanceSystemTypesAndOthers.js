import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SsytemTypes } from '../constants/balanceSystemIconsAndTypes';
import { setBakiyeSystemActive } from '../redux/bakiyeSistemi/bakiyeSystemAction';
import { setCourierActive } from '../redux/coruier/courierAction';
import { setSettingActive } from '../redux/setting/settingAction.js';
import { setBuyForMeActive } from '../redux/buyforme/byForMeAction';
const BalanceSystemTypes = ({ allTypes, whichType }) => {
  const { activeBakiyeSsytemName } = useSelector((state) => state.bakiyeSystem);
  const { activeCoruierName } = useSelector((state) => state.courier);
  const { activeSettingName } = useSelector((state) => state.settingReducer);
  const { activeBuyForMeName } = useSelector((state) => state.buyForMeReducer);
  const dispatch = useDispatch();

  const handleClick = (name) => {
    if (whichType === 'balance') {
      dispatch(setBakiyeSystemActive(name));
    }
    if (whichType === 'courier') {
      dispatch(setCourierActive(name));
    }
    if (whichType === 'setting') {
      dispatch(setSettingActive(name));
    }
    if (whichType === 'buyforme') {
      dispatch(setBuyForMeActive(name));
    }
  };

  return (
    <div className="system_types">
      {allTypes?.map((type) => {
        return (
          <div
            className={
              (whichType === 'balance' &&
                `${
                  type.typeName === activeBakiyeSsytemName
                    ? 'active each_type'
                    : 'each_type'
                }`) ||
              (whichType === 'courier' &&
                `${
                  type.typeName === activeCoruierName
                    ? 'active each_type'
                    : 'each_type'
                }`) ||
              (whichType === 'setting' &&
                `${
                  type.typeName === activeSettingName
                    ? 'active each_type'
                    : 'each_type'
                }`) ||
              (whichType === 'buyforme' &&
                `${
                  type.typeName === activeBuyForMeName
                    ? 'active each_type'
                    : 'each_type'
                }`)
            }
            key={type.id}
            onClick={() => handleClick(type.typeName)}
          >
            <div className={`${type.className} ${`each_type_icon`}`}>
              <img src={type.typeSvg} alt="" />
            </div>
            <h2 className="each_type_title">{type.typeName}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default BalanceSystemTypes;
/*
            onClick={() => setActive(type.typeName)}
  const [activeBalancySsytem, setAactiveBalanceSystem] =
    useState("Bakiye Yükle");

  const setActive = (name) => {
    setAactiveBalanceSystem(name);
  };
*/
