import React from "react";
import "../../orders.scss";
import CommonInfoImage from "../../assets/ordersIcons/commonInfo.svg";
import { useTranslation } from "react-i18next";
const CommonInformation = ({com,Common}) => {
  const {t}=useTranslation(["orders","orders/manorder"])
//   const [com, setCom] = useState({
//       iosnum: "",
//       vattnum: "",
//       currency: "",
//       storage: "",
// });
// function Common(e){
// const newdata={...com}
// newdata[e.target.id] = e.target.value;
// setCom(newdata);
// console.log(newdata);
// } 


  return (
    <>
      <div className="common-information">
        <div className="common-info-content">
          <div className="common-info-top">
            <img src={CommonInfoImage} alt="" />
            <h1>{t("orders/manorder:commoninfo")}</h1>
          </div>
          <div className="common-info-bottom">
            <div className="common-info-bottom-content">
              <div className="info-groups">
                <div className="info-group">
                  <label htmlFor="">
                    {" "}
                    {t("orders/manorder:ios")}<span>*</span>
                  </label>{" "}
                  <br />
                  <input onChange={(e) => Common(e)}
                      id="iosnum" value={com.iosnum}
                      placeholder="IOS number" type="text" />
                </div>
                <div className="info-group">
                  <label htmlFor="">
                    {" "}
                    {t("orders/manorder:vatt")}<span>*</span>
                  </label>{" "}
                  <br />
                  <input onChange={(e) => Common(e)}
                      id="vattnum" value={com.vattnum}
                      placeholder="Vatt number" type="text" />
                </div>
                <div className="info-group">
                  <label htmlFor="">
                    {t("orders/manorder:currency")}<span>*</span>
                  </label>{" "}
                  <br />
                  <input onChange={(e) => Common(e)}
                      id="currency" value={com.currency} 
                      type="text" placeholder="USD" />
                </div>
                <div className="info-group">
                  <label htmlFor="">
                    {t("orders/manorder:tobestorage")}<span>*</span>
                  </label>{" "}
                  <br />
                  <select onChange={(e) => Common(e)}
                      id="storage" value={com.storage}
                      placeholder="Storage">
                    <option>Select something</option>
                    <option>Item 1</option>
                    <option>Item 2</option>
                    <option>Item 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonInformation;
