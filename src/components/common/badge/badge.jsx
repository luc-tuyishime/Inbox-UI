import React from 'react';

import './badge.scss';

const BadgeItem = ({ tag }) => {
  const { status, journal, campaign } = tag;
  return (
    <div className="badge-item">
      <div
        className={`${
          status === 'Interested'
            ? 'green-bg'
            : status === 'Uncategorized'
            ? 'gray-bg'
            : status === 'Not Now'
            ? 'yellow-bg'
            : ''
        } tag-style`}>
        <span className="price">{status}</span>
      </div>
      <div className="tag-style bg-tag">
        <span className="price">{journal}</span>
      </div>
      <div className="tag-style bg-tag">
        <span className="price">{campaign}</span>
      </div>
    </div>
  );
};

export default BadgeItem;
