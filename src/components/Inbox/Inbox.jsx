import React, { useState } from 'react';

import Box from '../common/box/box';
import Button from '../common/button/Button';
import CardList from '../common/card/CardList';
import INBOX_DATA from '../../data/InboxList';

import NOTIFICATION from '../../assets/notification.png';
import PROFILE from '../../assets/user.png';
import ARROW from '../../assets/down-arrow.png';
import SEARCH_ICON from '../../assets/search-interface-symbol.png';
import ATTACH from '../../assets/paperclip.png';
import MAIL from '../../assets/mail.png';

import './Inbox.scss';
import '../Inbox/Inbox.scss';

export default function InboxMenu({ color }) {
  const [state] = useState(INBOX_DATA);

  return (
    <div className={`${color ? 'themeColor' : ''} Inbox`}>
      <div className="padding-inbox">
        <span className="text-inbox">Inbox</span>
        <div className="right-menu">
          <img className="" src={NOTIFICATION} alt="mail" />
          <img className="" src={PROFILE} alt="mail" />
          <img className="arrow-style" src={ARROW} alt="mail" />
        </div>
      </div>
      <div className="row-two">
        <Box className="box-bgColor">
          <img className="search-style" src={SEARCH_ICON} alt="search" />
        </Box>
        <Box className="box-bgColor">
          <img className="search-style" src={ATTACH} alt="attach" />
        </Box>
        <Button className="btn-style">
          <img className="mail-style" src={MAIL} alt="mail" />
          <span>Compose</span>
        </Button>
      </div>
      <div className="list-container">
        {state.map(({ id, ...otherCollectionProps }) => (
          <CardList key={id} {...otherCollectionProps} />
        ))}
      </div>
    </div>
  );
}
