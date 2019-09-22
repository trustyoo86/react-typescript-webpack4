export interface Profile {
  id?: string;
}

export interface ProfileState {
  profile: Profile;
}

export const GET_PROFILE = 'GET_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

interface GetProfileAction {
  type: typeof GET_PROFILE;
  payload: Profile;
}

interface UpdateProfileAction {
  type: typeof UPDATE_PROFILE;
  payload: Profile;
}

export type ProfileActionTypes = GetProfileAction | UpdateProfileAction;