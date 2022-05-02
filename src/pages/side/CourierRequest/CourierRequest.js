import React from "react";

//asssets
import myRequest from "../../../assets/CourierSystemIcons/myRequest.svg";
import { SsytemTypes } from "../../../constants/balanceSystemIconsAndTypes";
//comps
import BalanceSystemTitleAndOthers from "../../../components/BalanceSsytemTitleandOthers";
import BalanceSystemTypesAndOthers from "../../../components/BalanceSystemTypesAndOthers";
import { useSelector } from "react-redux";
import KuryeTalep from "./KuryeTalep/KuryeTalep";
import KuryeTalepOlusdur from "./KuryeTalepOlusdur/KuryeTalepOlusdur";
import KuryeGecmisi from "./KuryeGecmisi/KuryeGecmisi";
const CourierRequest = () => {
  const state = useSelector((state) => state.courier);
  return (
    <div className="balance_system_main system_main">
      <div className="system_container">
        <BalanceSystemTitleAndOthers
          SistemySvg={myRequest}
          title={"courier-request"}
        />
        {/* //types  her typesin ozunu props seklinde gonderirik*/}
        <BalanceSystemTypesAndOthers
          allTypes={SsytemTypes.courier}
          whichType={"courier"}
        />
        {state.kuryeTalep && <KuryeTalep />}
        {state.talepOlusdur && <KuryeTalepOlusdur />}
        {state.kuryeGecmisi && <KuryeGecmisi />}
      </div>
    </div>
  );
};
export default CourierRequest;

/*
   <div className="table_container table_wrapper">
        <table>
          <thead>
            <tr className="table_header_row">
              <th>
                <div>
                  <span className="hastag">#</span>
                </div>
              </th>
              <th className="product_name">
                <div>
                  <span className="">Product</span>
                </div>
              </th>
              <th className="product_id">
                <div>
                  <span>ID</span>
                  <span>
                    <i className="fad fa-filter"></i>
                  </span>
                </div>
              </th>
              <th className="country">
                <div>
                  <span>Country</span>
                  <span>
                    <i className="fad fa-filter"></i>
                  </span>
                </div>
              </th>
              <th className="be_sent">
                <div>
                  <span>To be sent srotage</span>
                  <span>
                    <i className="fad fa-filter"></i>
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>January</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>2</td>
              <td>January</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>3</td>
              <td>January</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>4</td>
              <td>January</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
            </tr>
          </tbody>
        </table>
      </div>
*/
