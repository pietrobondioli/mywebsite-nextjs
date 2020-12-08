// React/Next Components
import React from 'react';

// Contexts
import { ThemeContext } from '../../contexts/ThemeContext';

const WithTheme = (props) => {
  const { children } = props;
  const { theme } = React.useContext(ThemeContext);

  return <div className={`pageTheme ${theme}`}>{children}</div>;
};

export default WithTheme;
