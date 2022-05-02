import aliexpressCargo from "../../../assets/marketPlaceImg/aliexpress-cargo.png";
import amazonCargo from "../../../assets/marketPlaceImg/amazon-cargo.png";
import Cargo1 from "../../../assets/marketPlaceImg/cargo-img-1.png";
import ebayCargo from "../../../assets/marketPlaceImg/ebay-cargo.png";
import MarketPlaceSvg from "../../../assets/sideBarIcons/maketPlace.svg";
import { useTranslation } from "react-i18next";
const MarketPlaceIntegration = () => {
  const {t} = useTranslation(["specialoffer"])

  return (
    <div className="manual-order-section">
      <div className="container">
        <div className="marketplace-integration">
          <div className="marketplace-content">
            <div className="marketplace-heading">
              <img src={MarketPlaceSvg} alt="" />
              <h4>{t("specialoffer:marketintegration")}</h4>
            </div>
            <div className="all-cargo">
              <div className="cargo-items">
                <div className="cargo-item">
                  <div className="cargo-images">
                    <img src={Cargo1} alt="" />
                  </div>
                  <p>ETSY</p>
                </div>
                <div className="cargo-item">
                  <div className="cargo-images">
                    <img src={amazonCargo} alt="" />
                  </div>
                  <p>AMAZON</p>
                </div>
                <div className="cargo-item">
                  <div className="cargo-images">
                    <img src={aliexpressCargo} alt="" />
                  </div>
                  <p>ALIEXPRESS</p>
                </div>
                <div className="cargo-item">
                  <div className="cargo-images">
                    <img src={ebayCargo} alt="" />
                  </div>
                  <p>EBAY</p>
                </div>
              </div>
            </div>
            <div className="marketplace-bottom">
              <div className="marketplace-bottom-content">
                <div className="keys">
                  <div className="key">
                    <h4>
                      API KEY<sup>*</sup>
                    </h4>
                    <div className="key-input">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="key">
                    <h4>
                      Private KEY<sup>*</sup>
                    </h4>
                    <div className="key-input">
                      <input type="text" />
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

export default MarketPlaceIntegration;
