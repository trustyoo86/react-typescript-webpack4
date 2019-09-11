'use strict'

require('assets/styles/main.scss')
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { ThemeProvider } from 'styled-components'

// components
import Layout from 'components/common/Layout'

// router
import { Home, About } from './Routes'

ReactDOM.render(
  // <Provider>
  //   <Router>
  //     <Layout>
  //       <Switch>
  //         <Route exact path='/' component={ Home } />
  //         <Route exact path='/about' component={ About } />
  //       </Switch>
  //     </Layout>
  //   </Router>
  // </Provider>,
  <React.Fragment>
  </React.Fragment>
  document.getElementById('root')
)