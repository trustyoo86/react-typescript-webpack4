/**
 * profile component
 *
 * @author kern86
 * @since 2019.09.21 - draft
 */
// plugins
import * as React from 'react';
import { connect } from 'react-redux';
import { thunkGetProfile } from '../thunks';
const { useEffect, useState } = React;

// redux modules
import { AppState } from '../store';
import { getProfile, updateProfile } from '../store/github/actions';

/**
 * Profile component
 * @param {IProps} props props
 */
const Profile = (props) => {
  const { profile, updateProfile, thunkGetProfile } = props;

  let [counter, setCounter] = useState(0);

  useEffect(() => {
    thunkGetProfile();
  }, []);

  useEffect(() => {
    console.log('counter state is changed.');
  }, [counter]);

  // update id
  const updateId = () => {
    updateProfile({
      id: 'test',
    });
    setCounter(counter += 1);
  };

  // update id twice
  const updateId2 = () => {
    updateProfile({
      id: 'test2',
    });
    setCounter(counter += 1);
  };

  return (
    <div>
      Profile! <br />
      ID: {profile.id} <br/>
      ButtonClick Count is: {counter} <br />
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