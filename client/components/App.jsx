import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ZooHome from './Zoohome'
import Category from './Category'
import Info from './Info'
import Animal from './Animal'
import Answer from './Answer'

const App = () => {
  return (
    <Router>
    <React.Fragment>

    <h1 style={{textAlign: 'center', fontSize: 50, color: '#1ca02e'}}>Welcome to our Zoo</h1>
    <Route exact path='/' component={ZooHome}/>
    <Route path='/:category' component={Category}/>
    <Route path='/:category/:name/info' component={Info}/>
    <Route path='/:category/:name/answer' component={Answer} />
    </React.Fragment>
    </Router>
  )
}

export default App
