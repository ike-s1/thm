import React from 'react';
import './StyledComponent.scss';

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
    <div  className="styled-component" style={componentStyle}>
      <div className="styled-children-component" style={childrenStyle}>
        {children}
      </div>
    </div>
  );
};

export default StyledComponent;
