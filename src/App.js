import React from 'react'
import {Header} from './Header'
import {Container}  from './Container'
import {CardInfo} from './CardInfo'
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <div className="" >
       <Header/>
       <Router>
        <Route exact path="/" component={Container}/>
        <Route path="/:name" component={CardInfo}/>
       </Router>
    </div>
  );
}

export default App;
