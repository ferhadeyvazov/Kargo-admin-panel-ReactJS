import React, {useEffect,useState} from "react";
import ShipmentDefImage from "../../assets/ordersIcons/shipmentdEFINATION.svg";
import fedEx from "../../assets/ordersIcons/fedex.svg";
import expres from "../../assets/ordersIcons/expres.svg";
import tnt from "../../assets/ordersIcons/tnt.svg";
import up from "../../assets/ordersIcons/ups.svg";
import axios from "axios";
import { useTranslation } from "react-i18next";
const ShipmentDefination = ({ shipment }) => {
  const {t}= useTranslation(["orders","orders/manorder"])
      const [toggle, setToggle] = useState([])

    useEffect(() => {
        axios.get("http://kargo.kendigetir.az/public/api/manuel-order")
            .then(res => {
                setToggle(res.data)
            })
            .then(res=>console.log(res))

    }, [])
  
  return (
    <div className="shipment-definition">
      {shipment && (
        <div className="shipment-head">
          <img src={ShipmentDefImage} alt="" />
          <h4>{t("orders/manorder:shipmentdef")}</h4>
        </div>
      )}
      <div className="shipment-body">
        <div className="shipment-body-content">
          <div className="shipment-body-top">
            <div className="select-cargo-head">
              <h4>{t("orders/manorder:cargo")}</h4>
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
          <div className="shipment-body-bottom">
            <div className="additional-service-head">
              <h4>{t("orders/manorder:additservice")}</h4>
            </div>
            <div className="additional-service-items">
              <div className="additional-service-item">
                <div className="additional-service-left">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">{t("orders/manorder:insure")}</label>
                </div>
                <div className="additional-service-right">
                  <p>15$</p>
                </div>
              </div>
              <div className="additional-service-item">
                <div className="additional-service-left">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">{t("orders/manorder:insure")}</label>
                </div>
                <div className="additional-service-right">
                  <p>15$</p>
                </div>
              </div>
              <div className="additional-service-item">
                <div className="additional-service-left">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">{t("orders/manorder:insure")}</label>
                </div>
                <div className="additional-service-right">
                  <p>15$</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDefination;
