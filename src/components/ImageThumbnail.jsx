import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageThumbnail = props => {
  const { file } = props;
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  });
  return imageSrc ? <Thumbnail src={imageSrc} alt="thumbnail" /> : null;
};

export default ImageThumbnail;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;
