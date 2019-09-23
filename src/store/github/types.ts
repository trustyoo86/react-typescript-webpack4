export interface IProfile {
  id?: string;
}

export interface ProfileState {
  profile: IProfile;
}

export const GET_PROFILE = 'GET_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

interface GetProfileAction {
  type: typeof GET_PROFILE;
  payload: IProfile;
}

interface UpdateProfileAction {
  type: typeof UPDATE_PROFILE;
  payload: IProfile;
}

export type ProfileActionTypes = GetProfileAction | UpdateProfileAction;