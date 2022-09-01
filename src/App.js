import {createContext, useState} from 'react';
import './App.css';
import Parent from './components/Blocks/Parent';
import { MemoBlock } from './components/Blocks/MemoBlock';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    fontSize: '20px',
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    fontSize: "40px"
  }
};

const langs = {
  en: {
    light: 'Light',
    dark: 'Dark',
    parent: 'Parent',
    child: 'Child'
  }, 
  ru: {
    light: 'Светлый',
    dark: 'Темный',
    parent: 'Родитель',
    child: 'Ребенок'
  }
}

export const ThemeContext = createContext(themes.light);
export const LangContext = createContext(langs.en);

function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('en');
  const currentLang = lang === 'en' ? 'ru' : 'en';
  const themeText = theme === 'light' ? 'dark' : 'light';

  return (
    <div>
      <button onClick={() => setTheme(themeText)}>{themeText}</button>
      <button onClick={() => setLang(currentLang)}>{currentLang}</button>

      <ThemeContext.Provider value={themes[theme]}>
        <LangContext.Provider value={langs[lang]}>
          <Parent/>
          {/* <MemoBlock /> */}
        </LangContext.Provider>
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
