import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import AirCargo from "../../../../assets/GetSpecialOfferIcons/AirCargo.svg";
import FclSVG from "../../../../assets/GetSpecialOfferIcons/fcl.svg";
import { BiAbacus } from "react-icons/bi";
import { useTranslation } from "react-i18next";
const SeaRainTruck = () => {
  const {t} = useTranslation(["specialoffer"])

  return (
    <form>
      <div class="address-groups">
        <div class="address-group">
          <label for="">{t("specialoffer:origin")}</label> <br />
          <select name="" id="">
            <option value="">City</option>
            <option value="">UK</option>
            <option value="">Norway</option>
          </select>
        </div>
        <div class="address-group">
          <label for="">{t("specialoffer:destination")}</label> <br />
          <select name="" id="">
            <option value="">Rayon</option>
            <option value="">UK</option>
            <option value="">Norway</option>
          </select>
        </div>
      </div>
      <p>{t("specialoffer:shiptype")}</p>
      <div className="orders-under">
        <label htmlFor="fcl" className="air-cargo">
          <input
            type="radio"
            className="answer"
            id="fcl"
            name="fcllcl"
            checked
          />
          <img className="orders-svg" src={FclSVG} alt="" />

          <span>FCL</span>
        </label>
        <label htmlFor="lcl" className="air-cargo">
          <input type="radio" className="answer" id="lcl" name="fcllcl" />
          <img className="orders-svg" src={AirCargo} alt="" />

          <span>LCL</span>
        </label>
      </div>
      <p>Box/Pallet</p>
      <div className="local-global">
        <div class="address-groups">
          <div class=" get-offer-group">
            <label>{t("specialoffer:type")}</label>
            <select name="" id="">
              <option value="">Rayon</option>
              <option value="">UK</option>
              <option value="">Norway</option>
            </select>
          </div>
          <div class=" get-offer-group">
            <label>{t("specialoffer:cargoweight")}</label>
            <div className="box-input">
              <input type="text" placeholder="0" />
              <span>kq</span>
            </div>
          </div>
          <div class=" get-offer-group">
            <label>{t("specialoffer:quantity")}</label>
            <div className="box-input amount-box">
              <button>
                <AiOutlineMinus />
              </button>
              <div className="amount">1</div>
              <button>
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div class=" get-offer-group">
            <div className="add-button">
              <button>
                <i class="far fa-plus"></i>
                <span>{t("specialoffer:add")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="local-global">
        <div class="address-groups">
          <div class=" get-offer-group">
            <label>{t("specialoffer:totalvol")}</label>
            <div className="box-input">
              <input type="text" placeholder="0.0" />
              <span>
                m<sup>3</sup>
              </span>
            </div>
          </div>
          <div class=" get-offer-group">
            <label>{t("specialoffer:totalweight")}</label>

            <div className="box-input">
              <input type="text" placeholder="0" />
              <span>kq</span>
            </div>
          </div>
        </div>
      </div>
      <div class="address-groups">
        <div class="address-group">
          <label for="cargo">{t("specialoffer:cargo")}</label> <br />
          <input
            id="cargo"
            type="text"
            placeholder="Description + (HS/HTS Code of the product if available)"
          />
        </div>
        <div class="address-group">
          <label for="date">{t("specialoffer:gooddate")}</label> <br />
          <input id="date" type="date" />
        </div>
        <div class="address-group">
          <label for="cargo">{t("specialoffer:incoterms")}</label> <br />
          <select name="" id="">
            <option value="">{t("specialoffer:select")} {t("specialoffer:incoterms")}</option>
            <option value="">UK</option>
            <option value="">Norway</option>
          </select>
        </div>
        <div class="address-group">
          <label for="address">{t("specialoffer:delivery")}</label> <br />
          <input
            id="address"
            type="text"
            placeholder={t("specialoffer:deliverycode")}
          />
        </div>
        <div class="address-group">
          <label for="information">{t("specialoffer:addinfo")}</label> <br />
          <input
            id="information"
            type="text"
            placeholder={t("specialoffer:adddetail")}
          />
        </div>
      </div>
      <p>{t("specialoffer:msds")}</p>
      <div className="upload_file">
        <div className="upload_file_up">
          <p>(PDF,Maks. 5.0 MB) </p>
        </div>
        <div className="upload_file_down">
          <div class="file-input">
            <input
              type="file"
              name="file-input"
              id="file-input"
              class="file-input__input"
            />
            <label class="file-input__label" for="file-input">
              <span>{t("specialoffer:selfile")}</span>
            </label>
          </div>
          <p>{t("specialoffer:linkname")}</p>
        </div>
      </div>
    </form>
  );
};

export default SeaRainTruck;
