import React from "react";
import BalanceSystemTitle from "../../../components/BalanceSsytemTitleandOthers";
import Usage from "../../../assets/sideBarIcons/usage.svg";
import png from "./cargo-video.png";
import "./siteUsage.scss";
import { useTranslation } from "react-i18next";
const SiteUsage = () => {
  const{t} = useTranslation(["balancesystem","balancesystem/yuklemegecmisi"])

  return (
    <div className="system_main">
      <div className="system_container">
        <BalanceSystemTitle SistemySvg={Usage} title={"site-usage"} />

        <div className="container">
          <div className="site-usage">
            <div className="site-usage-items">
              <div className="site-usage-item">
                <div className="site-usage-content">
                  <a href="site-usage-video.html">
                    <div className="site-usage-top">
                      <img src={png} alt="" />
                    </div>
                    <div className="site-usage-bottom">
                      <div className="site-bottom-head">
                        <h3>Choose your description!</h3>
                        <p>
                          Packages of customers who choose the delivery tariff
                          to the address will be delivered directly from the
                          external warehouse to the address specified by the
                          customer. That is, our customers who regularly use our
                          courier service will be able to receive ...
                        </p>
                      </div>
                      <div className="watch-btn">
                        <button>
                          {" "}
                          <a href="site-usage-video.html">{t("balancesystem/yuklemegecmisi:watch")}</a>{" "}
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="site-usage-item">
                <div className="site-usage-content">
                  <a href="site-usage-video.html">
                    <div className="site-usage-top">
                      {/* <!-- <video width="320" height="240" controls>
                                            <source src="movie.mp4" type="video/mp4">
                                          </video> --> */}
                      <img src={png} alt="" />
                    </div>
                    <div className="site-usage-bottom">
                      <div className="site-bottom-head">
                        <h3>Choose your description!</h3>
                        <p>
                          Packages of customers who choose the delivery tariff
                          to the address will be delivered directly from the
                          external warehouse to the address specified by the
                          customer. That is, our customers who regularly use our
                          courier service will be able to receive ...
                        </p>
                      </div>
                      <div className="watch-btn">
                        <button>
                          {" "}
                          <a href="site-usage-video.html">{t("balancesystem/yuklemegecmisi:watch")}</a>{" "}
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="site-usage-item">
                <div className="site-usage-content">
                  <a href="site-usage-video.html">
                    <div className="site-usage-top">
                      {/* <!-- <video width="320" height="240" controls>
                                            <source src="movie.mp4" type="video/mp4">
                                          </video> --> */}
                      <img src={png} alt="" />
                    </div>
                    <div className="site-usage-bottom">
                      <div className="site-bottom-head">
                        <h3>Choose your description!</h3>
                        <p>
                          Packages of customers who choose the delivery tariff
                          to the address will be delivered directly from the
                          external warehouse to the address specified by the
                          customer. That is, our customers who regularly use our
                          courier service will be able to receive ...
                        </p>
                      </div>
                      <div className="watch-btn">
                        <button>
                          {" "}
                          <a href="site-usage-video.html">{t("balancesystem/yuklemegecmisi:watch")}</a>{" "}
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="site-usage-item">
                <div className="site-usage-content">
                  <a href="site-usage-video.html">
                    <div className="site-usage-top">
                      {/* <!-- <video width="320" height="240" controls>
                                            <source src="movie.mp4" type="video/mp4">
                                          </video> --> */}
                      <img src={png} alt="" />
                    </div>
                    <div className="site-usage-bottom">
                      <div className="site-bottom-head">
                        <h3>Choose your description!</h3>
                        <p>
                          Packages of customers who choose the delivery tariff
                          to the address will be delivered directly from the
                          external warehouse to the address specified by the
                          customer. That is, our customers who regularly use our
                          courier service will be able to receive ...
                        </p>
                      </div>
                      <div className="watch-btn">
                        <button>
                          {" "}
                          <a href="site-usage-video.html">{t("balancesystem/yuklemegecmisi:watch")}</a>{" "}
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="site-usage-item">
                <div className="site-usage-content">
                  <a href="site-usage-video.html">
                    <div className="site-usage-top">
                      {/* <!-- <video width="320" height="240" controls>
                                            <source src="movie.mp4" type="video/mp4">
                                          </video> --> */}
                      <img src={png} alt="" />
                    </div>
                    <div className="site-usage-bottom">
                      <div className="site-bottom-head">
                        <h3>Choose your description!</h3>
                        <p>
                          Packages of customers who choose the delivery tariff
                          to the address will be delivered directly from the
                          external warehouse to the address specified by the
                          customer. That is, our customers who regularly use our
                          courier service will be able to receive ...
                        </p>
                      </div>
                      <div className="watch-btn">
                        <button>
                          {" "}
                          <a href="site-usage-video.html">{t("balancesystem/yuklemegecmisi:watch")}</a>{" "}
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="site-usage-item">
                <div className="site-usage-content">
                  <a href="site-usage-video.html">
                    <div className="site-usage-top">
                      {/* <!-- <video width="320" height="240" controls>
                                            <source src="movie.mp4" type="video/mp4">
                                          </video> --> */}
                      <img src={png} alt="" />
                    </div>
                    <div className="site-usage-bottom">
                      <div className="site-bottom-head">
                        <h3>Choose your description!</h3>
                        <p>
                          Packages of customers who choose the delivery tariff
                          to the address will be delivered directly from the
                          external warehouse to the address specified by the
                          customer. That is, our customers who regularly use our
                          courier service will be able to receive ...
                        </p>
                      </div>
                      <div className="watch-btn">
                        <button>
                          {" "}
                          <a href="site-usage-video.html">{t("balancesystem/yuklemegecmisi:watch")}</a>{" "}
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteUsage;
