require('assets/styles/main.scss');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { ThemeProvider } from 'styled-components';

// components
import Layout from 'components/common/Layout';
import Profile from 'containers/Profile';

// router
import { Home, About } from './Routes';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Profile />
    </Provider> 
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));