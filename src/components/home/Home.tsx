'use strict'

import * as React from 'react'
import { withRouter } from 'react-router-dom'

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
      <div>
        Home
        <button onClick={this.clickHandler}>
          move to About!!
        </button>
      </div>
    )
  }
}

const HomePage = (props: any) => <Home {...props} />

export default withRouter(HomePage)