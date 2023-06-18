import { configureStore } from '@reduxjs/toolkit'
import step1slice from './screens/Step1/step1slice'

export const store = configureStore({
  reducer: {
    step1slice: step1slice,
  },
})