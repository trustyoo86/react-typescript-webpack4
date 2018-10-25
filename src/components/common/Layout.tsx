'use strict'
import * as React from 'react'
import styled from 'styled-components'

const styles = {
  container: styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #efefef;
  `,
}

interface IProps {
  children?: any,
}

interface IState {}

class Layout extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <styles.container>
        { this.props.children }
      </styles.container>
    )
  }
}

export default Layout