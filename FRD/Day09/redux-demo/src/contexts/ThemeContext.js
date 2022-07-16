import { createContext, useState } from 'react'

const themeContext = createContext()


export const ThemeContext = themeContext;
export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false)
    const tougleDarkTheme = () => {
        setDarkTheme(val => !val)
    }
    return <ThemeContext.Provider value={{ darkTheme, tougleDarkTheme }}>
        {children}
    </ThemeContext.Provider>
}