// styles
import 'assets/styles/main.scss';
// plugins
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// components
import Layout from 'components/common/Layout';
import Profile from 'containers/Profile';
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
          <Example />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));