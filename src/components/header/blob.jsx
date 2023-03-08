import React from 'react';
import BlobAnimation from '../../assets/images/blobanimation.svg';

const blob = ({ style }) => {
  return (
    <div>
      <img
        src={BlobAnimation}
        className={style}
        alt='blob animation'
      />
    </div>
  );
};

export default blob;
