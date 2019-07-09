/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import imgContext from '../context/imageContext';

export const getSize = ({
  sizes,
  isMobile,
  isTablet,
}) => {
  let sz;

  if (isMobile) {
    [sz] = sizes;
  } else {
    sz = sizes[2] || sizes[1] || sizes[0];
  }
  if (isMobile && isTablet) {
    sz = sizes[1] || sizes[0];
  }

  return sz;
};

const Image = (props) => {
  const {
    imageURL, sizes, alt, className, style,
  } = props;

  const { isMobile, isTablet } = useContext(imgContext);

  const size = getSize({
    sizes,
    isMobile,
    isTablet,
  });

  console.log('isMobile', isMobile, 'isTablet', isTablet);

  return <img alt={alt} src={`${imageURL}?odnWidth=${size}`} className={className} width={sizes} style={style} />;
};

export default Image;
