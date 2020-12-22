import React from 'react';

import BadgeItem from '../badge/badge';
import ImageItem from '../image/Images';
import Button from '../../common/button/Button';

import REPLY_ARROW from '../../../assets/reply-arrow.png';
import NEXT_ARROW from '../../../assets/next-arrow.png';
import FOLDER from '../../../assets/folder.png';

import './Card.scss';

const CardMessage = ({ name, title, date, tags, email, images, bannerImg }) => (
  <div className="card">
    <div>
      <div className="">
        <p className="title">{title}</p>
      </div>
      <div className="badge-messages">
        {tags.map((tag) => (
          <BadgeItem key={tag.id} tag={tag} />
        ))}
      </div>

      <div className="text-padding-titles tags-messages">
        <span className="text-name">{name}</span>
        <span className="text-name">{email}</span>

        <div className="text-date">
          {date}
          <img className="arrow-style" src={REPLY_ARROW} alt="mail" />
          <img className="arrow-style" src={NEXT_ARROW} alt="mail" />
        </div>
      </div>
      <div className="bg-message">
        <div className="img-banner-center">
          <img className="img-banner" src={bannerImg} alt="banner" />
        </div>
        <div className="text-paragraph">
          <p>
            Hi <span>"Customer Name"</span>
          </p>
          <p className="text-row-two">
            Thanks for collaborating with for <span>"Period of Time"</span>
          </p>
          <p className="text-row-three">we prepared an Easter git for you </p>
          <div className="image-rounded">
            {images.map((image) => (
              <ImageItem key={image.id} image={image} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-attachment">
        <p className="title-attachment">3 Attachment</p>
      </div>
      <div className="img-folder">
        <div className="folder-style">
          <img src={FOLDER} alt="search" />
          <p>Auguest</p>
          <span className="campaign-message">Campaign.zip</span>
        </div>
        <div className="folder-style">
          <img className="img-center" src={FOLDER} alt="attach" />
          <p>September</p>
          <span className="campaign-message">Campaign.zip</span>
        </div>
        <div className="folder-style">
          <img src={FOLDER} alt="attach" />
          <p>October</p>
          <span className="campaign-message">Campaign.zip</span>
        </div>
      </div>
    </div>
    <div className="message-buttons">
      <Button className="btn-style-message">
        <img className="arrow-footer-style" src={REPLY_ARROW} alt="mail" />
        <span>Reply</span>
      </Button>

      <Button className="btn-style-message">
        <img className="arrow-footer-style" src={REPLY_ARROW} alt="mail" />
        <span>Reply All</span>
      </Button>

      <Button className="btn-style-message">
        <img className="arrow-footer-style" src={NEXT_ARROW} alt="mail" />
        <span>Forward</span>
      </Button>
    </div>
  </div>
);

export default CardMessage;
