import React from 'react'
import '../Popup/Popup.css'
import axios from 'axios';
import AdressIcon from "../../../../../assets/Popupicons/adressbook.svg"
function Popup({ setTrigger, trigger,subbuton, Submit}) {
   
        let userinfo = localStorage.getItem('adress_information');
        let send = JSON.parse(userinfo);
  return (trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <div className="header">
                  <div><img src={AdressIcon} alt="" /></div>
                <h2>Adress Book</h2>
            </div>
            <div className="search">
                <input placeholder='Search' type="search" name="" id="" />
            </div>
            <div className="cedvel">
                <table>
                    <thead>
                        <tr>
                            <td>Company</td>
                            <td>Location</td>
                            <td>Adress</td>
                            <td>Customer Name</td>
                        </tr>
                    </thead>
                    <tbody>
                          {subbuton?<tr>
                                  <td>{send.country}</td>
                                  <td>{send.city}</td>
                                  <td>{send.address}</td>
                                  <td>{send.name}</td>
                                    
                                    </tr>:""}
                    </tbody>
                </table>
            </div>
            <div className='button-close'>
                  <button onClick={()=>setTrigger(!trigger)} className="closeup-btn">Close</button>
            </div>
        </div>
    </div>
  ): "";
}

export default Popup