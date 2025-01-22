import { configureStore } from '@reduxjs/toolkit'
import colourReducer from './colour/colourSlice.js'
import userReducer from './colour/userSlice.js'

export const store = configureStore({
  reducer: {
    colour: colourReducer,
    userdata:userReducer
  },
})