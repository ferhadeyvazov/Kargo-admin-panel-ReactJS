import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CreateDemandTypes from '../../../components/CreateDemandTypes';
import { createDemandDataTypes } from '../../../constants/createDemandDataTypes';
// import MyStock from '../BuyForMe/CreateDemand/MyStock/MyStock';
import CreateStock from './CreateStock/CreateStock';
import MyStockForm from './MyStock/MyStockForm';
import Buy from '../../../assets/sideBarIcons/Buy.svg';
import BalanceSsytemTitleandOthers from '../../../components/BalanceSsytemTitleandOthers';
import { buttonsStock } from '../../../constants/stockButtons';
import StockImg from './StockImg.png';
import { useTranslation } from 'react-i18next';
const Stock = () => {
  const state = useSelector((state) => state.stockReducer);
  const [activeStockButtonName, setActiveStockButtonName] = useState('Stock');
  const setActiveBtn = (name) => {
    setActiveStockButtonName(name);
  };
  const {t}=useTranslation(["balancesystem","courierrequest","balancesystem/yuklemegecmisi"])
  return (
    <div className="balance_system_main system_main">
      <div className="balance_system_container system_container">
        {activeStockButtonName === 'Stock' && (
          <BalanceSsytemTitleandOthers SistemySvg={Buy} title={'Stock'} />
        )}
        {activeStockButtonName === 'Stock History' && (
          <BalanceSsytemTitleandOthers
            SistemySvg={Buy}
            title={'Stock History'}
          />
        )}
        <article>
          <div className="order_buttons">
            {buttonsStock.map((btn) => {
              return (
                <button
                  className={`${
                    btn.name === activeStockButtonName ? 'active' : ''
                  }`}
                  onClick={() => setActiveBtn(btn.name)}
                >
                  {btn.name}
                </button>
              );
            })}
          </div>
          {activeStockButtonName === 'Stock' && (
            <div className="bank_hesab_bilgileri_container create-demand ">
              <div className="create-body">
                <CreateDemandTypes
                  allTypes={createDemandDataTypes.stock}
                  whichType={'stock'}
                />
                {state.createStock && <CreateStock />}
                {state.myStock && <MyStockForm />}
              </div>
            </div>
          )}
          {activeStockButtonName === 'Stock History' && (
            <div className="table_container table_wrapper">
              <p>{t("balancesystem/yuklemegecmisi:product")}</p>
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
                        <span className="">{t("balancesystem/yuklemegecmisi:product")}</span>
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
                        <span>{t("balancesystem/yuklemegecmisi:country")}</span>
                        <span>
                          <i className="fad fa-filter"></i>
                        </span>
                      </div>
                    </th>
                    <th className="be_sent">
                      <div>
                        <span>{t("balancesystem/yuklemegecmisi:sentstorage")}</span>
                        <span>
                          <i className="fad fa-filter"></i>
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span>1</span></td>
                    <td>January</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td><span>2</span></td>
                    <td>January</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td><span>3</span></td>
                    <td>January</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td><span>4</span></td>
                    <td>January</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>$100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          <div className="image-example">
            <img src={StockImg} alt="" />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Stock;

// enventory
// {
//   /* <div className="inner_content_80 create-demand">
//                 <div className="create-title">
//                   <div className="title">
//                     <div className="ball"></div>
//                     <p>Create Demand</p>
//                   </div>
//                 </div>
//                 <div class="address-groups">
//           <div class="address-group">
//             <label for="">
//               Product<span>*</span>{" "}
//             </label>
//             <input type="text" placeholder="Clock" />
//           </div>
//           <div class="address-group">
//             <label for="">
//               Count<span>*</span>{" "}
//             </label>
//             <input type="text" placeholder="2" />
//           </div>
//           <div class="address-group">
//             <label for="">
//               Link<span>*</span>{" "}
//             </label>
//             <input type="text" placeholder="johsas.com" />
//           </div>
//           <div class="address-group">
//             <label for="">
//               Note<span>*</span>{" "}
//             </label>
//             <input type="text" placeholder="Notunu yaz" />
//           </div>
//         </div>
//         <div className="btn">
//           <button>
//             <i class="far fa-check"></i>
//             <p>Buy for me</p>
//           </button>
//         </div>
//               </div> */
// }
