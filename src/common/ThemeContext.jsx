import {createContext, useState, useContext} from "react";


export const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light'? 'dark': 'light'));
    };

    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            <div className='App' id={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};  