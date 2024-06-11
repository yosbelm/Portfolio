import React, {createContext, useContext, useEffect, useState} from "react";

const Themecontext = createContext();

export const useTheme =() => useContext(Themecontext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme')  || 'light'
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    toggleTheme = () => {
        console.log('switched')
        setTheme((prevTheme) => (prevTheme === 'light'? 'dark': 'light'));
    };

    return (
        <Themecontext.Provider value = {{theme, toggleTheme}}>
            {children}
        </Themecontext.Provider>
    );
};  