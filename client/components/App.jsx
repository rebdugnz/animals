import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ZooHome from './Zoohome'
import Category from './Category'


const App = () => {
  return (
    <Router>
    <React.Fragment>

    <h1>Welcome to our Zoo</h1>
    <Route path='/' component={ZooHome}/>
    <Route path='/:category' component={Category}/>
    </React.Fragment>
    </Router>
  )
}

export default App