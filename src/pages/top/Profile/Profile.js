import React, { useState } from 'react';
import './Profile.scss';
import { profileItems } from '../../../constants/profileLogin';
import ChangePassword from './ChangePassword/ChangePassword';
import MyProfile from './MyProfile/MyProfile';
import MyAdress from './MyAdress/MyAdress';
import CustomerAdress from './CustomerAdress/CustomerAdress';
import AmountofDebt from './AmountOfDebt/AmountofDebt';

// import CustomerAdress from "./CustomerAdress/CustomerAdress";
// import MyProfile from "./MyProfile/MyProfile";
const Profile = () => {
  const [activeLink, setActiveLink] = useState('My Profile');
  return (
    <div className="system_main main_for_profile">
      <div className="system_container">
        <div className="profile_content">
          <div className="profile_content_left">
            {profileItems.mainPageCarts.map((item) => {
              return (
                <li
                  key={item.id}
                  className={item.name === activeLink && 'active'}
                  onClick={() => setActiveLink(item.name)}
                >
                  <img src={item.svg} alt="" />
                  <span>{item.name}</span>
                </li>
              );
            })}
          </div>
          <div className="profile_content_right">
            {(activeLink === 'My Profile' ||
              activeLink === 'Benim Profilim') && <MyProfile />}
            {(activeLink === 'Change Password' ||
              activeLink === 'Şifreyi Değiştir') && <ChangePassword />}

            {(activeLink === 'My Adress' || activeLink === 'Benim Adresim') && (
              <MyAdress />
            )}

            {(activeLink === 'Customer Adress' ||
              activeLink === 'Müşteri Adresim') && <CustomerAdress />}

            {(activeLink === 'Amount of Debt' ||
              activeLink === 'Borc Miktarı') && <AmountofDebt />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
/*

*/
