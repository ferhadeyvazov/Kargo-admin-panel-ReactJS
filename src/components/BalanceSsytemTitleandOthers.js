import { useTranslation } from "react-i18next";

const BalanceSystemTitle = ({ SistemySvg, title }) => {
  const { t } = useTranslation(["sidebar"]);

  return (
    <div className="top_balance_system top_system">
      <div className="top_balance_system_icon top_system_icon">
        <img src={SistemySvg} alt="" />
      </div>
      <p className="top_balance_system_title top_system_title">{t(title)}</p>
    </div>
  );
};

export default BalanceSystemTitle;
