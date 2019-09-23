// plugins
import * as React from 'react';
import styled from 'styled-components';

// components
import Header from './header/Header';

const styles = {
  container: styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: ${props => props.theme.background};
  `,
  content: styled.div`
    width: 100%;
    padding: 50px;
  `
};

interface IProps {
  children?: any;
}

interface IState {}

const Layout = (props: IProps) => {
  return (
    <styles.container>
      {/* Header */}
      <Header />
      {/* // Header */}
      {/* Content */}
      <styles.content>
        { props.children }
      </styles.content>
      {/* // Content */}
    </styles.container>
  );
};

export default Layout;