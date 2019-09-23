/**
 * Header component
 */
// plugins
import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

interface IProps {
  classes: any;
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Header = (props: IProps) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.grow}>
            My Profile
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header)