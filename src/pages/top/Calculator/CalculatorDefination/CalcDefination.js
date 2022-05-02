import React from "react";
import img from "../../../../assets/calculatorIcons/selectCargo.svg";
import fedEx from "../../../../assets/ordersIcons/fedex.svg";
import expres from "../../../../assets/ordersIcons/expres.svg";
import tnt from "../../../../assets/ordersIcons/tnt.svg";
import up from "../../../../assets/ordersIcons/ups.svg";
const CalculatorDefination = () => {
  return (
    <div className="shipment-definition  calculator-definition">
      <div className="shipment-body calculator-body">
        <div className="shipment-body-content calculator-body-content">
          <div className="shipment-body-top calculator-shipment">
            <div className="select-cargo-head">
              <h4>Select the cargo</h4>
            </div>
            <div className="select-cargo-items">
              <div className="select-cargo-item">
                <div className="cargo-item-content">
                  <div className="cargo-img">
                    <img src={fedEx} alt="" />
                  </div>
                  <div className="cargo-name">
                    <p>Deirvlon</p>
                  </div>
                  <div className="cargo-price">
                    <label htmlFor="">69$</label>
                    <input type="radio" name="select-cargo" id="" />
                  </div>
                </div>
              </div>
              <div className="select-cargo-item">
                <div className="cargo-item-content">
                  <div className="cargo-img">
                    <img src={expres} alt="" />
                  </div>
                  <div className="cargo-name">
                    <p>Deirvlon</p>
                  </div>
                  <div className="cargo-price">
                    <label htmlFor="">69$</label>
                    <input type="radio" name="select-cargo" id="" />
                  </div>
                </div>
              </div>
              <div className="select-cargo-item">
                <div className="cargo-item-content">
                  <div className="cargo-img">
                    <img src={tnt} alt="" />
                  </div>
                  <div className="cargo-name">
                    <p>Deirvlon</p>
                  </div>
                  <div className="cargo-price">
                    <label htmlFor="">69$</label>
                    <input type="radio" name="select-cargo" id="" />
                  </div>
                </div>
              </div>
              <div className="select-cargo-item">
                <div className="cargo-item-content">
                  <div className="cargo-img">
                    <img src={up} alt="" />
                  </div>
                  <div className="cargo-name">
                    <p>Deirvlon</p>
                  </div>
                  <div className="cargo-price">
                    <label htmlFor="">69$</label>
                    <input type="radio" name="select-cargo" id="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorDefination;

//   <div className="shipment-body-bottom">
//     <div className="additional-service-head">
//       <h4>Additional Services</h4>
//     </div>
//     <div className="additional-service-items">
//       <div className="additional-service-item">
//         <div className="additional-service-left">
//           <input type="checkbox" name="" id="" />
//           <label htmlFor="">Insure my order</label>
//         </div>
//         <div className="additional-service-right">
//           <p>15$</p>
//         </div>
//       </div>
//       <div className="additional-service-item">
//         <div className="additional-service-left">
//           <input type="checkbox" name="" id="" />
//           <label htmlFor="">Insure my order</label>
//         </div>
//         <div className="additional-service-right">
//           <p>15$</p>
//         </div>
//       </div>
//       <div className="additional-service-item">
//         <div className="additional-service-left">
//           <input type="checkbox" name="" id="" />
//           <label htmlFor="">Insure my order</label>
//         </div>
//         <div className="additional-service-right">
//           <p>15$</p>
//         </div>
//       </div>
//     </div>
//   </div>
