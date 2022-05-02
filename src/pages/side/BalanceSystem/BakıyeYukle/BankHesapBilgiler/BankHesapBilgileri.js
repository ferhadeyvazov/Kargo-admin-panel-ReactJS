import React from "react";
import "./BankHesapBilgileri.scss";
import { useTranslation } from "react-i18next";
const BankHesapBilgileri = () => {
  const {t} = useTranslation(["balancesystem", "balancesystem/bakiyeyukle"])
  return (
    <div className="bank_hesab_bilgileri_container inner_content_80">
      <p className="bank_hesab_bilgileri_title">{t("balancesystem/bakiyeyukle:bhbilgileri")}</p>
      <p className="bank_kur_farklari">
        {t("balancesystem/bakiyeyukle:bank_kur_farklari")}
      </p>

      <div className="banka_bilgileri">
        <p className="banka_adi">
          ENTEGRA LOJİSTİK VE YAZILIM SİSTEMLERİ TİC. A.Ş - İş Bankası
        </p>

        <p className="turk_hesab_numrasi">
          Türk Lirası Hesabı: TR880006400000114420078614
        </p>

        <p className="amerika_hesab_numrasi">
          Amerikan Doları Hesabı: TR230006400000214420034771
        </p>
      </div>
    </div>
  );
};

export default BankHesapBilgileri;
