import {
  ProfileState,
  GET_PROFILE,
  UPDATE_PROFILE,
  ProfileActionTypes,
} from './types';

const initialState: ProfileState = {
  profile: {},
};

export function profileReducer (
  state = initialState,
  action: ProfileActionTypes
): ProfileState {
  switch (action.type) {
    case GET_PROFILE:
      return {
        profile: action.payload
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}