import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ReactComponent as Remove } from '../assets/images/close.svg';

const ImageThumbnail = props => {
  let imageBox = null; // ref 변수
  const { idx, file, length, handleFileRemove } = props;
  const [imageSrc, setImageSrc] = useState(null);
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  });

  const handleOverlay = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    )
      return;
    setOverlay(!overlay);
  };

  return imageSrc ? (
    <ThumbnailWrapper
      id={idx}
      length={length}
      onMouseEnter={() => handleOverlay()}
      onMouseLeave={() => handleOverlay()}
      onClick={() => {
        // 뷰에서 먼저 없애고 나서 상태에 반영한다.
        imageBox.style.display = 'none';
        handleFileRemove(idx);
      }}
      ref={box => {
        imageBox = box;
      }}
    >
      {overlay ? (
        <Overlay>
          <RemoveIcon />
        </Overlay>
      ) : null}
      <Thumbnail src={imageSrc} alt="thumbnail" />
    </ThumbnailWrapper>
  ) : null;
};

export default ImageThumbnail;

const ThumbnailWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: calc(25% - 10px);
  height: ${props => (props.length < 4 ? '100%' : 'calc(50% - 5px)')};
  margin: 0 10px 10px 0;
  cursor: pointer;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
const RemoveIcon = styled(Remove)`
  fill: #fff;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;
