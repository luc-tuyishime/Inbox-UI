import React from 'react';

const Box = ({ children, className, ...otherProps }) => (
  <div className={className} {...otherProps}>
    {children}
  </div>
);

export default Box;
