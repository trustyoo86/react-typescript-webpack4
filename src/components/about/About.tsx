'use strict'
import * as React from 'react'

interface IProps {

}

interface IState {

}

class About extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  render(): React.ReactChild {
    return (
      <div>
        About
      </div>
    )
  }
}

export default About