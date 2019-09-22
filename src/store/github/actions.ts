import { Profile, GET_PROFILE, UPDATE_PROFILE } from './types';

// profile 조회
export function getProfile(profile: Profile) {
  return {
    type: GET_PROFILE,
    payload: profile,
  };
}

// profile update
export function updateProfile(profile: Profile) {
  return {
    type: UPDATE_PROFILE,
    payload: profile,
  };
}