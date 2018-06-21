import React from 'react'
import Generic from './Generic'
import {HashRouter as Router, Route} from 'react-router-dom'

import Frontpage from './Frontpage'
import Category from './Category'

const App = () => {
  return (
    <Router>
    <React.Fragment>
    <h1>React development has begun!</h1>
    <Route path='/' component={Frontpage}/>
    <Route path='/:category' component={Category}/>
    <Generic />
    </React.Fragment>
    </Router>
  )
}

export default App
