// styles
import 'assets/styles/main.scss';
// plugins
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// Routes
import { Login, Profile } from './Routes';

// components
import Layout from 'components/common/Layout';
// import Profile from 'containers/Profile';
import Example from 'containers/Example';

// stores
import configureStore from './store';

// document declaration
declare const document: any;

//  configure store
const store = configureStore();

// styled-components theme
const theme = {
  background: '#c5c5c5',
};

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/profile' component={Profile} />
            </Switch>
          </Router>
          {/* <Example /> */}
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));