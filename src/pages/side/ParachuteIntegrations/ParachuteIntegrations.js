import React, { useState } from "react";
import ETax from "./ETax";
import "./ParachuteIntegrations.scss";
import ParachuteInvoices from "./ParachuteInvoices";
import Parachute from "../../../assets/parachuteImages/Parachute.svg";
import BalanceSsytemTitleandOthers from "../../../components/BalanceSsytemTitleandOthers";
import { parachuteButtons } from "../../../constants/parachuteButtons";
const ParachuteIntegrations = () => {
  const [activeParachute, setActiveParachute] = useState("E-Tax Entagrasyanu");
  return (
    <div className="system_main">
      <div className="system_container">
        {activeParachute === "E-Tax Entagrasyanu" && (
          <BalanceSsytemTitleandOthers
            SistemySvg={Parachute}
            title={"parachute-integrations"}
          />
        )}
        {activeParachute === "Invoices" && (
          <BalanceSsytemTitleandOthers
            SistemySvg={Parachute}
            title={"invoices"}
          />
        )}
        <article>
          <div className="order_buttons">
            {parachuteButtons.map((btn, i) => {
              return (
                <button
                  key={i}
                  className={`${btn.name === activeParachute ? "active" : ""}`}
                  onClick={() => setActiveParachute(btn.name)}
                >
                  {btn.name}
                </button>
              );
            })}
          </div>
        </article>
        {activeParachute === "Invoices" && <ParachuteInvoices />}
        {activeParachute === "E-Tax Entagrasyanu" && <ETax />}
      </div>
    </div>
  );
};

export default ParachuteIntegrations;
