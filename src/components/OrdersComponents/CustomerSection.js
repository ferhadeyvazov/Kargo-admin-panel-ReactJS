import React, {useState} from "react";
import axios from "axios";
import CustomerHeaderImage from "../../assets/ordersIcons/iCustomer.svg";
import "../../orders.scss";
import { useTranslation } from "react-i18next";
import Popup from "../../pages/side/Orders/ManuelOrder/Popup/Popup.js"
const CustomerSection = ({handle,data}) => {
  const{t} = useTranslation(["orders","orders/manorder"])
const [buttonpop, setButtonpop] = useState(false);
const [subbuton, setSubbuton]= useState(false);
function Submit() {
    let userinfo = localStorage.getItem('adress_information');
    let send = JSON.parse(userinfo);
    setSubbuton(!subbuton);
    console.log(subbuton);
    // axios.post('http://kargo.kendigetir.az/public/api/address/create', send)
    //   .then(res => console.log(res))
    //   .catch((error) => {
    //     if (error.response) {
    //       console.log(error.response.data);
    //     }})
    // EN SONDA AXIOS ILE APILER POST OLUNMALIDIR BACKENDE.....
  }

  return (
    <div className="customer-section">
      <div className="customer-items">
        <div className="customer-head">
          <div className="customer-head-content">
            <img src={CustomerHeaderImage} alt="" />
            <h1>{t("orders/manorder:customer")}</h1>
          </div>
        </div>
        <div className="customer-info">
          <div className="customer-info-content">
            <div className="customer-info-top">
              <button onClick={()=>setButtonpop(!buttonpop)}>{t("orders/manorder:addressbook")}</button>
            </div>
            <Popup setTrigger={setButtonpop} trigger={buttonpop} Submit={Submit} 
              subbuton={subbuton} />

            <div className="customer-info-bottom">
              <div className="address-info">
                <div className="address-info-head">
                  <h1>{t("orders/manorder:addressinfo")}</h1>
                </div>
                <div className="address-groups">
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:country")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <select onChange={(e) => handle(e)}
                    id="country" value={data.country}
                    placeholder="country">
                      <option >US</option>
                      <option >UK</option>
                      <option >Norway</option>
                    </select>
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:city")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <select onChange={(e) => handle(e)}
                      id="city" value={data.city}
                      placeholder="city">
                      <option>New York</option>
                      <option>UK</option>
                      <option>Norway</option>
                    </select>
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:state")}{" "}
                    </label>{" "}
                    <br />
                    <select onChange={(e) => handle(e)}
                      id="state" value={data.state}
                      placeholder="state">
                      <option>Californiya</option>
                      <option>UK</option>
                      <option>Norway</option>
                    </select>
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:adres")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    
                    <input
                      onChange={(e) => handle(e)}
                      id="address" value={data.address}
                      placeholder="address"
                    type="text"/>
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:zip")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <input
                    onChange={(e) => handle(e)}
                    id="zipcode" value={data.zipcode}
                    placeholder="zipcode"
                    type="text" />
                  </div>
                </div>
              </div>
              <div className="contact-info">
                <div className="address-info-head">
                  <h1>{t("orders/manorder:contactinfo")}</h1>
                </div>
                <div className="address-groups">
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:fullname")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <input onChange={(e) => handle(e)}
                      id="name" value={data.name}
                      placeholder={t("orders/manorder:fullname")}/>
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      {t("orders/manorder:phone")}<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <input onChange={(e) => handle(e)}
                      id="phone" value={data.phone}
                      placeholder="phone" type="text"/>
                  </div>
                  <div className="address-group">
                    <label htmlFor="">
                      Email<span>*</span>{" "}
                    </label>{" "}
                    <br />
                    <input onChange={(e) => handle(e)}
                      id="email" value={data.email}
                      placeholder="email" type="text"/>
                  </div>
                </div>
                <div className="save-btn">
                  <div className="save-btn-content">
                    
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-1"
                      type="checkbox"
                      value="value1"
                      onChange={()=>Submit()}
                      
                      
                      
                    />
                    <label htmlFor="styled-checkbox-1">
                      {t("orders/manorder:save")}
                    </label>
                    
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
export default CustomerSection;
