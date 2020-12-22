import React, { useState } from 'react';

import CardMessage from '../common/card/CardMessage';
import INBOX_DATA from '../../data/InboxList';

export default function Message() {
  const [state] = useState(INBOX_DATA);

  return (
    <div className="Inbox">
      <div>
        {state
          .filter((_, idx) => idx < 1)
          .map(({ id, ...otherCollectionProps }) => (
            <CardMessage key={id} {...otherCollectionProps} />
          ))}
      </div>
    </div>
  );
}
