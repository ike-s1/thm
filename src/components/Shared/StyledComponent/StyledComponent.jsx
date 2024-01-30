import React from 'react';

const StyledComponent = ({ backgroundColor="#FAFAF5", children }) => {
  const componentStyle = {
    backgroundColor: backgroundColor || 'transparent',
    width: '100%',
  };

  const childrenStyle = {
    width: '1228px',
    margin: '0 auto',
  };

  return (
    <div style={componentStyle}>
      <div style={childrenStyle}>
        {children}
      </div>
    </div>
  );
};

export default StyledComponent;
