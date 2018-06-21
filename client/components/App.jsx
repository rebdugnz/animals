import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ZooHome from './Zoohome'
import Category from './Category'
import Info from './Info'

const App = () => {
  return (
    <Router>
    <React.Fragment>

    <h1>Welcome to our Zoo</h1>
    <Route exact path='/' component={ZooHome}/>
    <Route exact path='/:category' component={Category}/>
    <Route path='/:category/:name/info' component={Info}/>
    </React.Fragment>
    </Router>
  )
}

export default App
