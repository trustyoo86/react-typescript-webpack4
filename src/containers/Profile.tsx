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
const { useEffect, useState, useReducer, useRef, Profiler } = React;

// redux modules
import { AppState } from '../store';
import { getProfile, updateProfile } from '../store/github/actions';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

/**
 * Profile component
 * @param {IProps} props props
 */
const Profile = (props) => {
  const renderCallback = (component, action, time) => {
    console.log(`
      =========================
      React Profiler
      -------------------------
      component: ${component}
      action: ${action}
      time: ${time}
      =========================
    `);
  };

  const { profile, updateProfile, thunkGetProfile } = props;

  const [counter, setCounter] = useState(0);

  // componentDidMount
  useEffect(() => {
    thunkGetProfile();
    // componentWillUnmount
    return () => {
      console.log('component unmount!');
    };
  }, []);

  // componentDidUpdate
  useEffect((): void => {
    console.log('counter state is changed.');
  }, [counter]);

  // update id
  const updateId = (): void => {
    updateProfile({
      id: 'test',
    });
    setCounter(counter => counter + 1);
  };

  // update id twice
  const updateId2 = (): void => {
    updateProfile({
      id: 'test2',
    });
    setCounter(counter => counter + 1);
  };

  // useReducer
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  // useRef
  const [number, setNumber] = useState('0');
  const inputRef = useRef(null);

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  const onClickHandler = () => {
    setNumber('0');
    inputRef.current.focus();
  };

  return (
    <Profiler id='profile' onRender={renderCallback}>
      <div>
        <h1>useState, useEffect Example</h1>
        Profile! <br />
        ID: {profile.id} <br/>
        ButtonClick Count is: {counter} <br />
        <button onClick={updateId}>Update profile</button>
        <button onClick={updateId2}>Update profile</button>
        <br />
        <br />
        <h1>useReducer Example</h1>
        Dispatch Counter is: { state.value } <br/>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <br />
        <br />
        <h1>useRef Example</h1>
        Input number is: {number}
        <input value={number} onChange={onChangeHandler} ref={inputRef} />
        <button onClick={onClickHandler}>Initialize</button>
      </div>
    </Profiler>
  );
};

const mapStateToProps = (state: AppState) => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { getProfile, updateProfile, thunkGetProfile }
)(Profile);