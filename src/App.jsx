import { ThemeProvider } from '@mui/material'
import { LightTheme } from './themes/Light'
import Home from './page/Home'

function App() {
  return (
    <div>
      <ThemeProvider theme={LightTheme}>
        <Home></Home>
      </ThemeProvider>
    </div>
  )
}

export default App
