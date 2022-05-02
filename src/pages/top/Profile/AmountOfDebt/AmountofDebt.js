import React from 'react';
import amountDebt from '../../../../assets/ProfileIconImages/amountDebt.svg';
import Range from '../../../../assets/ProfileIconImages/Range.png';
import './AmountofDebt.scss';
const AmountofDebt = () => {
  return (
    <div className="profile_container amountofdebt">
      <div className="profile_title">
        <div className="left">
          <img src={amountDebt} alt="" />
          <span>Amount of debt</span>
        </div>
      </div>
      <div className="range">
        <div className="foto">
          <img src={Range} alt="" />
        </div>
        <span>Limit  -500 €</span>
      </div>
    
    </div>
  );
};

export default AmountofDebt;
