import * as React from 'react';
import { AppState } from '../store';
import { connect } from 'react-redux';

import { getProfile, updateProfile } from '../store/github/actions';

import { thunkGetProfile } from '../thunks';

const { useEffect } = React;

const Profile = (props) => {
  const { profile, updateProfile, thunkGetProfile } = props;

  useEffect(() => {
    thunkGetProfile();
  });

  const updateId = () => {
    updateProfile({
      id: 'test',
    });
  };

  const updateId2 = () => {
    updateProfile({
      id: 'test2',
    });
  };

  return (
    <div>
      Profile! <br />
      ID: {profile.id}
      <button onClick={updateId}>Update profile</button>
      <button onClick={updateId2}>Update profile</button>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { getProfile, updateProfile, thunkGetProfile }
)(Profile);