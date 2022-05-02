import "./App.scss";
import "./girisSayfasiGlobal.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//components

// itop comps
import Questions from "./pages/top/Questions/Questions";
import Header from "./components/MainComponents/Header/Header";
import Notification from "./pages/top/Notifications/Notification";
import Details from "./pages/top/Notifications/DetailsNotification/Details";
import Support from "./pages/top/Support/Support";
import Profile from "./pages/top/Profile/Profile";

//left comps

import SideBar from "./components/MainComponents/SideBar/SideBar";
import MainMenu from "./pages/side/MainMenu/MainMenu";
import BalanceSystem from "./pages/side/BalanceSystem/BalanceSystem";
import Orders from "./pages/side/Orders/Orders";
import CourierRequest from "./pages/side/CourierRequest/CourierRequest";
import BuyForMe from "./pages/side/BuyForMe/BuyForMe";
import Stock from "./pages/side/Stock/Stock";
import ShareAndEarn from "./pages/side/ShareAndEarn/ShareAndEarn";
import Calculator from "./pages/top/Calculator/Calculator";
import Inventory from "./pages/side/Inventory/Inventory";
import MarketPlace from "./pages/side/MarketPlace/MarketPlace";
import CargoCompanies from "./pages/side/CargoCompanies/CargoCompanies";
import SiteUsage from "./pages/side/SiteUsage/SiteUsage";
import Invoices from "./pages/side/Invoices/Invoices";
import ParachuteIntegrations from "./pages/side/ParachuteIntegrations/ParachuteIntegrations";
import GetOffer from "./pages/side/GetSspecialOffer/GetOffer";
import Home from "./GirisSayfasi/HomePageGiris/Home";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
function App() {
  const { isLoggedIn } = useSelector((state) => state.isLoggedInReducer);
  const { t } = useTranslation(["sidebar", "sidebar/linkSideBar"]);
  // console.log(t("sidebar/linkSideBar:orders"));//+
  return (
    <Router>
      {isLoggedIn && (
        <>
          <Header  />
          <SideBar />
          <Routes>
            {/* home page  Burasi isLoggend olannan sonra gorsenmez Bunu ise GirisSayfasiReducerde ayarladim  */}
            {/* topbar components */}
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
      {!isLoggedIn && (
        <>
          <Header />
          <SideBar />
          <Routes>
            {/* home page  Burasi isLoggend olannan sonra gorsenmez Bunu ise GirisSayfasiReducerde ayarladim  */}
            {/* //!topbar components */}
            <Route path="/notifications" element={<Notification />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/settings" element={<Support />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/profile" element={<Profile />} />
            {/* //! sidebar komponents */}
            <Route path="/" element={<MainMenu />} />

            <Route
              path={"/" + t("sidebar/linkSideBar:orders")}
              //{t(`sidebar/linkSideBar:${link.linkUrl}`)}
              element={<Orders />}
            />
            <Route path={"/sifarisler"} element={<Orders />} />
            <Route
              // path="/balance-system"
              path={"/" + t("sidebar/linkSideBar:balance-system")}
              element={<BalanceSystem />}
            />
            <Route
              //  path="/courier-request"
              path={"/" + t("sidebar/linkSideBar:courier-request")}
              element={<CourierRequest />}
            />
            <Route
              // path="/inventory"
              path={"/" + t("sidebar/linkSideBar:inventory")}
              element={<Inventory />}
            />
            <Route
              // path="/stock"
              path={"/" + t("sidebar/linkSideBar:stock")}
              element={<Stock />}
            />
            <Route
              // path="/share-and-earn"
              path={"/" + t("sidebar/linkSideBar:share-and-earn")}
              element={<ShareAndEarn />}
            />
            <Route
              // path="/buy-for-me"
              path={"/" + t("sidebar/linkSideBar:buy-for-me")}
              element={<BuyForMe />}
            />
            <Route
              //  path="/cargo-companies"
              path={"/" + t("sidebar/linkSideBar:cargo-companies")}
              element={<CargoCompanies />}
            />

            <Route
              // path="/site-usage"
              path={"/" + t("sidebar/linkSideBar:site-usage")}
              element={<SiteUsage />}
            />

            <Route
              // path="/invoices"
              path={"/" + t("sidebar/linkSideBar:invocies")}
              element={<Invoices />}
            />
            <Route
              // path="/get-special-offer"
              path={"/" + t("sidebar/linkSideBar:get-special-offer")}
              element={<GetOffer />}
            />
            <Route
              // path="/parachute-integrations"
              path={"/" + t("sidebar/linkSideBar:parachute-integrations")}
              element={<ParachuteIntegrations />}
            />

            <Route
              // path="/marketplace-integration"
              path={"/" + t("sidebar/linkSideBar:marketplace-integration")}
              element={<MarketPlace />}
            />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
