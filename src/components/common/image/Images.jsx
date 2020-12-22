import React from 'react';

import './Images.scss';

const ImageItem = ({ image }) => {
  const { imgGiftLeft, imgGiftMiddle, imgGiftRight } = image;
  return (
    <div className="message-item">
      <div className="images-style">
        <img src={imgGiftLeft} alt="img-left" />
      </div>
      <div className="images-style">
        <img src={imgGiftMiddle} alt="img-middle" />
      </div>
      <div className="images-style">
        <img src={imgGiftRight} alt="img-right" />
      </div>
    </div>
  );
};

export default ImageItem;
