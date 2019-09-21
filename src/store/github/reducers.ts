import {
  ProfileState,
  GET_PROFILE,
  ProfileActionTypes,
} from './types'

const initialState: ProfileState = {
  profile: {},
}

export function profileReducer (
  state = initialState,
  action: ProfileActionTypes
): ProfileState {
  switch (action.type) {
    case GET_PROFILE:
      return {
        profile: action.payload
      }
      break
    default:
      return state
  }
}