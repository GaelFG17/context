import React, { createContext, useState } from 'react'


const ThemeContext = createContext()


const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    const changeTheme = () => setDarkMode(!darkMode)

    const valoresGlobales = {
        darkMode,
        changeTheme
    }
  return (
    <ThemeContext.Provider value={valoresGlobales}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider