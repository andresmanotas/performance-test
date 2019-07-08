/* eslint-disable react/prop-types */
import React from 'react';

const Image = (props) => {
  const {
    imageURL, sizes, alt, className, style,
  } = props;
  return <img alt={alt} src={imageURL} className={className} width={sizes} style={style} />;
};

export default Image;
