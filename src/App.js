
import {Header} from './components/Header'
import {Container}  from './components/Container'
import {CardInfo} from './components/CardInfo'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {ThemeProvider} from "styled-components"
import {GlobalStyles} from './styles/GlobalStyles'
import {lightTheme, darkTheme} from './styles/Theme'
import {useDarkMode} from './utils/useDarkMode'
function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
      <div className="" >
        <Header themelogger ={themeToggler}/>
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
