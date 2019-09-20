import { createAction, handleActions } from 'redux-actions'
import { Map, List } from 'immutable'

const LOAD: string = 'rtw/about/LOAD';
const CREATE: string = 'rtw/about/CREATE';
const UPDATE: string = 'rtw/about/UPDATE';
const REMOVE: string = 'rtw/about/REMOVE';

export const load = createAction(LOAD)
export const create = createAction(CREATE)
export const update = createAction(UPDATE)
export const remove = createAction(REMOVE)

const initialState = Map({
  counters: List([
    Map({
      color: 'black',
      number: 0,
    })
  ])
})

interface IAction {
  payload?: any,
}

export default handleActions({
  [LOAD]: (state, action: IAction) => {
    const counters = state.get('counters')

    return state.set('counters', counters.push(
      Map({
        color: action.payload,
        number: 0,
      })
    ))
  },
  [CREATE]: (state, action) => state,
  [UPDATE]: (state, action) => state,
  [REMOVE]: (state, action) => state,
}, initialState)

// export default function reducer(state: object = {}, action: IAction = {}) {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

// export function loadAbout() {
//   return { type: LOAD }
// }

// export function createAbout(about) {
//   return { type: CREATE, about }
// }

// export function updateAbout(about) {
//   return { type: UPDATE, about }
// }

// export function removeAbout(about) {
//   return { type: REMOVE, about }
// }