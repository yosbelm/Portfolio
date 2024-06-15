import {createContext, useState} from "react";


export const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");
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