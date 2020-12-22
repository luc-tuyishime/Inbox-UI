import React from 'react';

import Mail_LOGO from '../../assets/email.png';
import './Sidebar.scss';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title text-side">
        <img className="img-mail" src={Mail_LOGO} alt="mail" />
        <span className="text-mail"> Mail Me</span>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-title bottom-space">
          <img className="img-mail" src={Mail_LOGO} alt="mail" />
          <span className="text-mail-menu"> Dashboard</span>
        </div>

        <div className="sidebar-title bottom-space">
          <img className="img-mail" src={Mail_LOGO} alt="mail" />
          <span className="text-mail-menu"> Campaigns</span>
        </div>
        <div className="sidebar-title bottom-space bg-menu">
          <img className="img-mail" src={Mail_LOGO} alt="mail" />
          <span className="text-mail-menu"> Inbox</span>
          <span className="text-mail-menu-number"> 24</span>
        </div>
        <div className="sidebar-title bottom-space">
          <img className="img-mail" src={Mail_LOGO} alt="mail" />
          <span className="text-mail-menu"> Reports</span>
        </div>
        <div className="sidebar-title bottom-space">
          <img className="img-mail" src={Mail_LOGO} alt="mail" />
          <span className="text-mail-menu"> Settings</span>
        </div>
      </div>
    </div>
  );
}
