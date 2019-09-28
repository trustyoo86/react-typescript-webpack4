import * as React from 'react';
import TextField from '@material-ui/core/TextField';

const Login = () => {
  return (
    <div>
      <h1>Github Login</h1>
      <form>
        <TextField label='ID' />
      </form>
    </div>
  );
}

export default Login;