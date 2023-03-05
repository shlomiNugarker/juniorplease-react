import { configureStore } from '@reduxjs/toolkit'
import utilityReducer from './reducers/utilityReducer'
import authReducer from './reducers/authReducer'

export const store = configureStore({
  reducer: {
    utility: utilityReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
