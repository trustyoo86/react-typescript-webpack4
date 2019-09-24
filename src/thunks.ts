import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getProfile } from './store/github/actions';
import { getExampleProfile } from './store/ducks/profile';
import { AppState } from './store';

export const thunkGetProfile = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const initialId = await profileAPI();
  dispatch(
    getProfile({
      id: initialId,
    })
  );
};

export const thunkExampleProfile = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const initialId = await profileAPI();
  dispatch(
    getExampleProfile({
      id: initialId,
    })
  );
};

function profileAPI() {
  return Promise.resolve('thunks');
}