import * as React from 'react';
import { 
  Grid,
  Card,
  Button,
  CardContent,
  CardActions,
  Typography,
  TextField,
} from '@material-ui/core';

const styles = {
  container: {
    width: '100%',
  },
  row: {
    padding: 20,
  },
  card: {
    padding: 30,
  },
  mt20: {
    marginTop: 20,
  },
};

const Login = () => {
  return (
    <div style={ styles.container }>
      <Grid container>
        <Grid item xs={12} style={styles.row}>
          <Card style={styles.card}>
            <CardContent>
              <Typography component='h2'>
                Github Signin
              </Typography>
              <form style={styles.mt20}>
                <TextField label='ID' style={{ width: '100%' }} />
              </form>
              <form style={styles.mt20}>
                <TextField label='PASSWORD' style={{ width: '100%' }} />
              </form>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>
                SignIn
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;