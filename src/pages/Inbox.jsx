import React, { Component } from 'react';
import './Inbox.scss';
import '../index.css';

import Sidebar from '../components/sidebar/Sidebar';
import InboxMenu from '../components/Inbox/Inbox';
import Message from '../components/message/Message';
import Button from '../components/common/button/Button';

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
    const { bgColored } = this.state;
    return (
      <div className={`Inbox`}>
        <div className="grid">
          <div>
            <Sidebar />
            <div className="theme-switcher">
              <Button className="btn-change-them" onClick={() => this.colorBackground()}>
                Change Theme
              </Button>
              <Button className="btn-reset" onClick={() => this.clearBackground()}>
                Reset
              </Button>
            </div>
          </div>
          <div>
            <InboxMenu color={bgColored} />
          </div>
          <div>
            <Message color={bgColored} />
          </div>
        </div>
      </div>
    );
  }
}

export default Inbox;
