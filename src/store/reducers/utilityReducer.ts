import { createSlice } from '@reduxjs/toolkit'

export const utilitySlice = createSlice({
  name: 'utility',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setLoading } = utilitySlice.actions
export default utilitySlice.reducer
