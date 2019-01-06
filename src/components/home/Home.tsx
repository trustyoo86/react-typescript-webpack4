'use strict'

import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import styled from 'styled-components'

// components
import Header from 'components/common/header/Header'
import Layout from 'components/common/Layout'
import Contents from 'components/home/Contents'

const styles = {
  container: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
  `,
}

interface IProps {
  history?: any,
}

class Home extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    const { history } = this.props
    history.push('about')
  }

  render() {
    return (
      <Layout>
        <Grid item xs={12}>
          <Header />
          <styles.container>
            <Contents />
            {/* <Button variant='contained' color='primary'>
              move to About!
            </Button> */}
          </styles.container>
        </Grid>
      </Layout>
    )
  }
}

const HomePage = (props: any) => <Home {...props} />

export default withRouter(HomePage)