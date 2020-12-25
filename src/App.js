import React,{useState} from 'react'
import {Header} from './components/Header'
import {Container}  from './components/Container'
import {CardInfo} from './components/CardInfo'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {ThemeProvider} from "styled-components"
import {GlobalStyles} from './components/GlobalStyles'
import {lightTheme, darkTheme} from './components/Theme'
function App() {
  const [theme, setTheme] = useState([])
  const themeLogger = ()=>{
    theme === 'light' ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeProvider theme={theme === 'light'? darkTheme : lightTheme}>
      <>
      <GlobalStyles/>
      <div className="" >
        <Header themelogger ={themeLogger}/>
        <Router>
          <Route exact path="/" component={Container}/>
          <Route path="/:name" component={CardInfo}/>
        </Router>
      </div>
    </>
    </ThemeProvider>
  );
}

export default App;
