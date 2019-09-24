/**
 * profile component
 *
 * @author kern86
 * @since 2019.09.21 - draft
 */
// plugins
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { thunkExampleProfile } from '../thunks';
const { useEffect, useState } = React;

// redux modules
import { AppState } from '../store';
import { updateExampleProfile } from '../store/ducks/profile';

/**
 * Profile component
 * @param {IProps} props props
 */
const Profile = (props) => {
  /**
   * Hooks using react-redux
   */
  const dispatch = useDispatch();
  const profile = useSelector((state: AppState) => state.example.profile);

  let [counter, setCounter] = useState(0);

  // If you want to profile using thunk, use dispatch thunkProfile
  useEffect(() => {
    dispatch(thunkExampleProfile());
    // thunkGetProfile();
  }, []);

  useEffect(() => {
    console.log('counter state is changed.');
  }, [counter]);

  // update id
  const updateId = () => {
    dispatch(updateExampleProfile({ id: 'test' }));
    setCounter(counter += 1);
  };

  // update id twice
  const updateId2 = () => {
    dispatch(updateExampleProfile({ id: 'test2' }));
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

export default Profile;