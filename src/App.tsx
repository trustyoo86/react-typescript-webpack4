import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Layout from 'components/common/Layout';

// router
import Routes from './Routes';

ReactDOM.render(
  <Router>
    <Layout>
      <Switch>
        <Route path='/' component={ Routes.Home } />
        <Route path='about' component={ Routes.About } />
      </Switch>
    </Layout>
  </Router>,
  document.getElementById('root')
);