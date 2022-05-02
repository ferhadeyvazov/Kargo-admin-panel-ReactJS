import React from "react";
import "./Inventory.scss";
import arrow from "../../../assets/inventoryImage/arrow.svg";
import barcode from "../../../assets/inventoryImage/barcode.png";
import editBtn from "../../../assets/inventoryImage/edit-btn.svg";
import inventoryIcon from "../../../assets/inventoryImage/inventory-icon.svg";
import inventory from "../../../assets/sideBarIcons/InventoryIcon.svg";
import inventoryStatictics from "../../../assets/inventoryImage/inventory-statictics.svg";
import orderCountIcon from "../../../assets/inventoryImage/order-count-icon.svg";
import inventoryStatistic from "../../../assets/inventoryImage/inventory-statistic.png";
import mouse from "../../../assets/inventoryImage/mouse.png";
import soldFilter from "../../../assets/inventoryImage/sold-filter.svg";
import soldIcon from "../../../assets/inventoryImage/sold-icon.svg";
import statistics from "../../../assets/inventoryImage/statistics.svg";
import BalanceSystemTitleandOther from "../../../components/BalanceSsytemTitleandOthers";
import { useTranslation } from "react-i18next";
const Inventory = () => {
  const {t} = useTranslation(["inventory","orders/manorder"])

  return (
    <div className=" system_main">
      <div className="system_container">
        <BalanceSystemTitleandOther
          SistemySvg={inventory}
          title={"inventory"}
        />
        <div class="manual-order-section">
          <div class="container">
            <div class="inventory-edit-button">
              <div class="edit-button">
                <button>
                  <img src={editBtn} alt="" />
                </button>
                <p>{t("inventory:edit")}</p>
              </div>
            </div>
            <div class="inventory-items">
              <div class="invetory-item">
                <div class="inventory-item-content">
                  <div class="inventory-item-top">
                    <div class="inventory-item-left">
                      <img src={mouse} alt="" />
                    </div>
                    <div class="inventory-item-right">
                      <div class="inventory-item-heading">
                        <img src={inventoryIcon} alt="" />
                        <h4>{t("inventory:instatus")}</h4>
                      </div>
                      <div class="inventory-item-body">
                        <div class="inventory-inputs">
                          <div class="inventory-input">
                            <p>{t("inventory:name")}: Mouse</p>
                          </div>
                          <div class="inventory-input">
                            <p>{t("orders/manorder:skucode")}: 357750705 </p>
                          </div>
                          <div class="inventory-input">
                            <p>{t("inventory:gtipcode")}: 38468939</p>
                          </div>
                          <div class="inventory-input">
                            <p>{t("inventory:protype")}: Electronic</p>
                          </div>
                          <div class="inventory-input">
                            <p>{t("inventory:parent")}: Mouse Xs 79i Red</p>
                          </div>
                          <div class="inventory-input">
                            <p>{t("orders/manorder:weight")}: 1kq</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="inventory-item-bottom">
                    <div class="inventory-bottom-content">
                      <p>{t("inventory:about")}: Loren Ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="invetory-item">
                <div class="inventory-item-content">
                  <div class="inventory-item-top">
                    <div class="inventory-top-heading">
                      <img src={inventoryStatictics} alt="" />
                      <h4>{t("inventory:instatistic")}</h4>
                    </div>
                  </div>
                  <div class="inventory-item-bottom">
                    <img src={inventoryStatistic} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="order-items">
              <div class="order-item">
                <div class="order-item-content">
                  <div class="order-item-top">
                    <img src={orderCountIcon} alt="" />
                    <h4>{t("inventory:ordercount")}</h4>
                  </div>
                  <div class="order-item-body">
                    <div class="order-body-left">
                      <div class="order-body-top">
                        <p>1500</p>
                        <div class="order-count">
                          <img src={arrow} alt="" />
                          <p>220</p>
                        </div>
                      </div>
                      <div class="order-body-bottom">
                        <p>{t("inventory:passtime")}</p>
                        <div class="range">
                          <input type="range" name="" width="100px" />
                        </div>
                      </div>
                    </div>
                    <div class="order-body-right">
                      <img src={statistics} alt="" />
                      <p>1280 {t("inventory:piecesleft")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-item">
                <div class="order-item-content">
                  <div class="order-item-top">
                    <img src={soldIcon} alt="" />
                    <h4>{t("inventory:sold")}</h4>
                  </div>
                  <div class="sold-item-body">
                    <div class="sold-filter">
                      <img src={soldFilter} alt="" />
                    </div>
                    <div class="sold-bottom-items">
                      <div class="sold-heading">
                        <h4>{t("inventory:sold")}: 975</h4>
                      </div>
                      <div class="sold-date">
                        <p>1 Feb</p>
                        <p>28 Feb</p>
                      </div>
                      <div class="inventory-inputs">
                        <div class="inventory-input">
                          <p>{t("inventory:soldplace")}: Amazon</p>
                        </div>
                        <div class="inventory-input">
                          <p>{t("orders/manorder:country")}: US</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-item">
                <div class="order-item-content">
                  <div class="order-item-top">
                    <img src={soldIcon} alt="" />
                    <h4>{t("orders/manorder:product")} {t("inventory:barcode")}</h4>
                  </div>
                  <div class="barcode-item-body">
                    <div class="barcode-img">
                      <img src={barcode} alt="" />
                    </div>
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

export default Inventory;
