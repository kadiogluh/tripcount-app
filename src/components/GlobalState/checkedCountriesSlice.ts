import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CheckedCountry {
  country: string
  count: number
}

interface CheckedCountriesState {
  countries: CheckedCountry[]
}

const initialState: CheckedCountriesState = {
  countries: [],
}

const checkedCountriesSlice = createSlice({
  name: 'checkedCountries',
  initialState,
  reducers: {
    addCountry: (state, action: PayloadAction<string>) => {
      state.countries.push({ country: action.payload, count: 1 })
    },
    removeCountry: (state, action: PayloadAction<string>) => {
      state.countries = state.countries.filter(
        (country) => country.country !== action.payload
      )
    },
    incrementCount: (state, action: PayloadAction<string>) => {
      const country = state.countries.find(
        (country) => country.country === action.payload
      )
      if (country) {
        country.count += 1
      }
    },
    decrementCount: (state, action: PayloadAction<string>) => {
      const country = state.countries.find(
        (country) => country.country === action.payload
      )
      if (country && country.count > 1) {
        country.count -= 1
      }
    },
  },
})

export const { addCountry, removeCountry, incrementCount, decrementCount } =
  checkedCountriesSlice.actions
export default checkedCountriesSlice.reducer
