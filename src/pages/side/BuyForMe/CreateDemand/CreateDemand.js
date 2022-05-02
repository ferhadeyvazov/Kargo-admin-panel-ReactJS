import React from "react";
import "./CreateDemand.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CreateDemandTypes from "../../../../components/CreateDemandTypes";
import MyAdress from "./MyAdress/MyAdress";
import MyStock from "./MyStock/MyStock";
import { createDemandDataTypes } from "../../../../constants/createDemandDataTypes";
const CreateDemand = () => {
  const state = useSelector((state) => state.createDemandReducer);
  const {t} = useTranslation(["balancesystem","orders","orders/manorder","balancesystem/yuklemegecmisi"])

  return (
    <article>
      <div className="inner_content_80 create-demand">
        <div className="create-title">
          <div className="title">
            <div className="ball"></div>
            <p>{t("balancesystem/yuklemegecmisi:crtdemand")}</p>
          </div>
        </div>
        <div className="create-body">
          <CreateDemandTypes
            allTypes={createDemandDataTypes.buyformeCreateDemandOne}
            whichType={"buyformeCreateDemandOne"}
          />
          {state.myAdress && <MyAdress />}
          {state.myStock && <MyStock />}
        </div>
      </div>
      <div className="inner_content_80 create-demand last-create">
        <div class="address-groups">
          <div class="address-group">
            <label for="">
              {t("balancesystem/yuklemegecmisi:product")}<span>*</span>{" "}
            </label>
            <input type="text" placeholder="Clock" />
          </div>
          <div class="address-group">
            <label for="">
              {t("orders/manorder:count")} <span>*</span>{" "}
            </label>
            <input type="text" placeholder="2" />
          </div>
          <div class="address-group">
            <label for="">
              Link<span>*</span>{" "}
            </label>
            <input type="text" placeholder="johsas.com" />
          </div>
          <div class="address-group">
            <label for="">
              {t("orders/manorder:note")} <span>*</span>{" "}
            </label>
            <input type="text" placeholder="Notunu yaz" />
          </div>
        </div>
        <div className="btn">
          <button>
            <i class="far fa-check"></i>
            <p>{t("balancesystem/yuklemegecmisi:buyforme")}</p>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CreateDemand;
