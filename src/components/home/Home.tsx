'use strict'

import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'

// components
import Layout from 'components/common/Layout'

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
          <Button variant='contained' color='primary'>
            move to About!
          </Button>
        </Grid>
      </Layout>
    )
  }
}

const HomePage = (props: any) => <Home {...props} />

export default withRouter(HomePage)