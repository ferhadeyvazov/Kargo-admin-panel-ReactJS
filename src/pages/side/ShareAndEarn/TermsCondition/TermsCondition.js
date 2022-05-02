import React from "react";
import "./terms.scss";
import { useTranslation } from "react-i18next";
const TermsCondition = () => {
  const {t} = useTranslation(["balancesystem","orders","orders/manorder","balancesystem/yuklemegecmisi","earnandshare"])

  return (
    <div className="terms_condition">
      <div className="terms_condition_title">
        <div className="blue_box"></div>
        <p>{t("earnandshare:earning")}</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam
        illo et ullam sed voluptatem nobis minus? Dolorem, impedit expedita
        atque autem at ad, amet obcaecati ullam quas adipisci, laborum
        accusamus? Nulla repellat ut minima id quas perferendis maiores
        obcaecati quisquam ex quam eos nemo sunt, ullam ipsa dolore eveniet
        voluptatibus rem inventore dolor animi fugiat? Neque nesciunt sapiente
        adipisci culpa? Excepturi voluptatum ipsa facere neque amet enim
        voluptas iusto iure non, accusamus illo perferendis quia eligendi
        consequatur quidem tempore omnis est nulla similique. Earum modi,
        tempore sunt, iure praesentium tenetur rem id quas ipsum molestiae cum
        possimus iusto laboriosam ea dolores alias iste asperiores non
        accusantium tempora explicabo! Perspiciatis accusantium voluptatibus
        quas eos corrupti dolor error ut quae? Laborum id asperiores temporibus,
        minima aut doloremque quam beatae voluptas sit quibusdam iste mollitia
        voluptate exercitationem assumenda, dolorum amet sed dolores, sunt rerum
        veritatis. Accusamus veniam ab expedita corporis modi aperiam deleniti
        est molestiae consectetur voluptates saepe sint consequuntur officia
        cupiditate suscipit, dolore quae perspiciatis beatae? A perferendis
        harum sit non numquam iusto impedit earum repellendus voluptate
        dignissimos distinctio laboriosam natus amet repellat praesentium
        temporibus minima vero expedita, nulla accusantium cum quia dicta!
        Assumenda amet sed sunt culpa! Architecto, eaque dolorum!
      </p>
    </div>
  );
};

export default TermsCondition;
