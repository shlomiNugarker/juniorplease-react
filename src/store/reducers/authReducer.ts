import { createSlice } from '@reduxjs/toolkit'

interface authState {
  user: any | null
}

const initialState: authState = {
  user: { fullname: 'Shlomi' },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action): void => {
      state.user = action.payload
    },
  },
})

export const { setCurrentUser } = authSlice.actions
export default authSlice.reducer
