import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Layout from 'components/common/Layout'

// router
import { Home, About } from './Routes'

ReactDOM.render(
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/about' component={ About } />
      </Switch>
    </Layout>
  </Router>,
  document.getElementById('root')
)