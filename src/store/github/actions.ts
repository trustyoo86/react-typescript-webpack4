import { IProfile, GET_PROFILE, UPDATE_PROFILE } from './types';

// profile 조회
export function getProfile(profile: IProfile) {
  return {
    type: GET_PROFILE,
    payload: profile,
  };
}

// profile update
export function updateProfile(profile: IProfile) {
  return {
    type: UPDATE_PROFILE,
    payload: profile,
  };
}