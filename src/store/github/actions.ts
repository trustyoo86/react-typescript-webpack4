import { Profile, GET_PROFILE } from './types'

export function getProfile(profile: Profile) {
  return {
    type: GET_PROFILE,
    payload: profile,
  }
}