import React, { Component } from 'react';
import './Inbox.scss';
import '../index.css';

import Sidebar from '../components/sidebar/Sidebar';
import InboxMenu from '../components/Inbox/Inbox';
import Message from '../components/message/Message';

const docBody = document.querySelector('body');

class Inbox extends Component {
  state = { bgColored: false };

  colorBackground() {
    this.setState({ bgColored: true });
  }

  clearBackground() {
    this.setState({ bgColored: false });
  }

  componentDidUpdate(_, prevState) {
    const { bgColored } = this.state;
    const className = 'themeColor';

    if (prevState.bgColored !== bgColored) {
      bgColored ? docBody.classList.add(className) : docBody.classList.remove(className);
    }
  }

  render() {
    return (
      <div className={`Inbox`}>
        <div className="grid">
          <div>
            <Sidebar />
            <div className="theme-switcher">
              <a href="#" onClick={() => this.colorBackground()}>
                Change Theme
              </a>
              {' | '}
              <a href="#" onClick={() => this.clearBackground()}>
                Reset
              </a>
            </div>
          </div>
          <div>
            <InboxMenu color={this.state.bgColored} />
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
