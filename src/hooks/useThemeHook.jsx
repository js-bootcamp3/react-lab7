import React, {useState} from 'react'

const useThemeHook = (props) => {
  const [theme, setTheme] = useState('light');
  const themeText = theme === 'light' ? 'dark' : 'light';

  return { theme, setTheme, themeText }
}

export default useThemeHook
