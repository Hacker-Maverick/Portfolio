import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  value: "purple",
}

export const colourSlice = createSlice({
  name: 'colour',
  initialState,
  reducers: {
    setcolour: (state, action) => {
        state.value = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setcolour } = colourSlice.actions

export default colourSlice.reducer