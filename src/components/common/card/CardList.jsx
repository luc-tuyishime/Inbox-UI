import React from 'react';

import BadgeItem from '../badge/badge';
import './Card.scss';

const CardList = ({ name, time, tags, title, content }) => (
  <div className="card">
    <div className={`${title === 'Promotion gift Template' ? 'border-selected' : ''}`}>
      <div className="text-padding-titles title-padding">
        {name === 'Esaie, Nick...Me' ? (
          <span className="circle"></span>
        ) : name === 'Katie, Essai, Nick...Me' ? (
          <span className="circle"></span>
        ) : null}
        <span className="text-name">{name}</span>
        <span className="text-date">{time}</span>
      </div>
      <div className="text-padding-titles">
        {tags.map((tag) => (
          <BadgeItem key={tag.id} tag={tag} />
        ))}
      </div>
      <div className="text-padding-titles-bottom">
        <p className="title-card">{title}</p>
        <p className="content-card">{content}</p>
      </div>
    </div>
  </div>
);

export default CardList;
