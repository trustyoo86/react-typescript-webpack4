'use strict'
import * as React from 'react'
import styled from 'styled-components'

const styles = {
  container: styled.div`
    width: 100%;
    height: 100%;
    background: #bdbdbd;
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