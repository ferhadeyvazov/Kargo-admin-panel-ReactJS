import "./BalanceSystem.scss";
import { useSelector } from "react-redux";
import BakiyeSistemySvg from "../../../assets/balance-system-icons/bakiyeSistemi.svg";
import { SsytemTypes } from "../../../constants/balanceSystemIconsAndTypes";
//inmner components

import BakiyeYukle from "./BakıyeYukle/BakiyeYukleMain";
import ParaIadeIslemleri from "./Paraİadeİşlemlerı/ParaIadeIslemleri";
import YuklemeGecmisi from "./YuklemeGecmısı/YuklemeGecmisi";

//outside components
import BalanceSystemTitleAndOthers from "../../../components/BalanceSsytemTitleandOthers";

import BalanceSystemTypesAndOthers from "../../../components/BalanceSystemTypesAndOthers";
const BalanceSystem = () => {
  // balance system sidebar da secirik... icerisinde ise bakiye sistemi var
  const state = useSelector((state) => state.bakiyeSystem);

  return (
    <div className=" system_main">
      <div className="system_container">
        <BalanceSystemTitleAndOthers
          SistemySvg={BakiyeSistemySvg}
          title={"balance-system"}
        />

        {/* //types  her typesin ozunu props seklinde gonderirik*/}
        <BalanceSystemTypesAndOthers
          allTypes={SsytemTypes.balance}
          whichType={"balance"}
        />
        {state.bakiyeYukle && <BakiyeYukle />}
        {state.yuklemeGecmisi && <YuklemeGecmisi />}
        {state.paraIadeIslemleri && <ParaIadeIslemleri />}
      </div>
    </div>
  );
};

export default BalanceSystem;
/*
        <div className="balance_system_types">
          {balanceSsytemTypes.map((type) => {
            return (
              <Link
                to={`/balance-system/${type.link}`}
                className={`${
                  type.typeName === activeBalancySsytem
                    ? "active each_type"
                    : "each_type"
                }`}
                key={type.id}
                onClick={() => setActive(type.typeName)}
              >
                <div className={`${type.className} ${`each_type_icon`}`}>
                  <img src={type.typeSvg} alt="" />
                </div>
                <h2 className="each_type_title">{type.typeName}</h2>
              </Link>
            );
          // })}
        </div>
*/
