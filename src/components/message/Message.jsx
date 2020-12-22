import React, { useState } from 'react';

import CardMessage from '../common/card/CardMessage';
import INBOX_DATA from '../../data/InboxList';
import '../Inbox/Inbox.scss';

export default function Message({ color }) {
  const [state] = useState(INBOX_DATA);

  return (
    <div className={`${color && 'themeColor'} Inbox`}>
      <div>
        {state
          .filter((_, idx) => idx < 1)
          .map(({ id, ...otherCollectionProps }) => (
            <CardMessage color={color} key={id} {...otherCollectionProps} />
          ))}
      </div>
    </div>
  );
}
