export interface Profile {
  id?: string
}

export interface ProfileState {
  profile: Profile
}

export const GET_PROFILE = 'GET_PROFILE'

interface GetProfileAction {
  type: typeof GET_PROFILE
  payload: Profile
}

export type ProfileActionTypes = GetProfileAction