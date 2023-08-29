import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CheckedCountriesState {
  countries: string[]
}

const initialState: CheckedCountriesState = {
  countries: [],
}

const checkedCountriesSlice = createSlice({
  name: 'checkedCountries',
  initialState,
  reducers: {
    addCountry: (state, action: PayloadAction<string>) => {
      state.countries.push(action.payload)
    },
    removeCountry: (state, action: PayloadAction<string>) => {
      state.countries = state.countries.filter(
        (country) => country !== action.payload
      )
    },
  },
})

export const { addCountry, removeCountry } = checkedCountriesSlice.actions
export default checkedCountriesSlice.reducer
