/**
 * types
 */
export interface IProfile {
  id?: string;
}

export interface IProfileState {
  profile: IProfile;
}

export const GET_PROFILE = 'example/profile/GET_PROFILE';
export const UPDATE_PROFILE = 'example/profile/UPDATE_PROFILE';

interface GetProfileAction {
  type: typeof GET_PROFILE;
  payload: IProfile;
}

interface UpdateProfileAction {
  type: typeof UPDATE_PROFILE;
  payload: IProfile;
}

type ProfileActionTypes = GetProfileAction | UpdateProfileAction;

/**
 * actions
 */
export function getExampleProfile(profile: IProfile) {
  return {
    type: GET_PROFILE,
    payload: profile,
  };
}

export function updateExampleProfile(profile: IProfile) {
  return {
    type: UPDATE_PROFILE,
    payload: profile,
  };
}

/**
 * reducers
 */
const initialState: IProfileState = {
  profile: {
    id: 'initial',
  },
};

export function exampleReducer (
  state = initialState, action: ProfileActionTypes
): IProfileState {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}

