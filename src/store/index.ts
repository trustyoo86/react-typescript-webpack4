import { createStore, combineReducers, applyMiddleware } from 'redux'

import { profileReducer } from './github/reducers'

const rootReducer = combineReducers({
  profile: profileReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(
    rootReducer,
  )

  return store
}