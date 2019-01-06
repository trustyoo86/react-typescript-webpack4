'use strict'

import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'

interface IProps {
  classes?: any,
}

const styles = {
  container: {
    minWidth: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

const Contents = (props: IProps) => {
  const { classes } = props
  return (
    <Card className={classes.container}>
      <CardContent>
        Github test
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(Contents)