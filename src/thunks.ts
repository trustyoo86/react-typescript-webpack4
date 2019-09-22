import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getProfile } from './store/github/actions';
import { AppState } from './store';

export const thunkGetProfile = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const initialId = await profileAPI();
  dispatch(
    getProfile({
      id: initialId,
    })
  );
};

function profileAPI() {
  return Promise.resolve('initial');
}