import React from 'react';
import Switch from '@material-ui/core/Switch';

const ThemeSwitch = ({ darkMode, onThemeSwitch }) => {
  return (
    <Switch
      checked={darkMode}
      onChange={onThemeSwitch}
      color='secondary'
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  )
}

export default ThemeSwitch;
