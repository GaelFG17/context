import React from 'react'
import ThemeProvider from './hooks/ThemeProvider'
import Titulo from './Components/Titulo'
import ButtonTheme from './Components/ButtonTheme'

const App = () => {
  return (
    <ThemeProvider>
      <div className='container'>
        <Titulo />
        <ButtonTheme />
      </div>
    </ThemeProvider>
  )
}

export default App