import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  value: null,
}

export const userSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    setuser: (state, action) => {
        state.value = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setuser } = userSlice.actions

export default userSlice.reducer