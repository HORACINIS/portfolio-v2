import React from 'react'
import Switch from '@material-ui/core/Switch';;

const ThemeSwitch = ({ darkMode, setDarkMode }) => {
  return (
    <Switch
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
      color="primary"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  )
}

export default ThemeSwitch
