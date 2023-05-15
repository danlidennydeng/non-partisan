import React from 'react';

const ImageViewer = () => {
  const imageStyle = {
    width: '50px',
    height: '50px',
  };

  return (
    <div>
      <img src={require('../public/snake1.png')} alt="Your Image" style={imageStyle} />
    </div>
  );
};

export default ImageViewer;