import React, { Component } from 'react';
import './Inbox.scss';
import '../index.css';

import Sidebar from '../components/sidebar/Sidebar';
import InboxMenu from '../components/Inbox/Inbox';
import Message from '../components/message/Message';

class Inbox extends Component {
  render() {
    return (
      <div className={`Inbox`}>
        <div className="grid">
          <div>
            <Sidebar />
          </div>
          <div>
            <InboxMenu />
          </div>
          <div>
            <Message />
          </div>
        </div>
      </div>
    );
  }
}

export default Inbox;
