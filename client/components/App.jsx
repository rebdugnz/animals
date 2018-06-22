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
    <Route path='/snood/:category' component={Category}/>
    <Route path='/snood/:category/:name/answer' component={Answer} />
    <Route path='/info/:category/:name' component={Info}/>
    </React.Fragment>
    </Router>
  )
}

export default App
