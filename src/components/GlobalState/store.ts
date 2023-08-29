// store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import checkedCountriesReducer from './checkedCountriesSlice'

const store = configureStore({
  reducer: {
    checkedCountries: checkedCountriesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
