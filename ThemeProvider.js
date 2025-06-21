import { createContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import LightTheme from './Theme/LightTheme';
import DarkTheme from './Theme/DarkTheme';
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    // const colorScheme=Appearance.getColorScheme();
    // const [theme, setTheme] = useState(colorScheme);
    // console.log(theme);
    // useEffect(() => {
    //     const listener = Appearance.addChangeListener(({ colorScheme }) => {
    //         setTheme(colorScheme);
    //     })
    //     return () => listener.remove();
    // }, [])
    // const selectedTheme = theme === 'dark' ? DarkTheme : LightTheme;
    const [mode, setMode]=useState('light');
    const toggleTheme=()=>{
        setMode((prev)=>prev==='light'? 'dark': 'light');
    }
    const theme=mode==='dark'? DarkTheme:LightTheme
    return (
        <ThemeContext.Provider value={{...theme, mode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;

