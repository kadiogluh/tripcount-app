import React from 'react'
import './checkedCountryItem.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../GlobalState/store'
import {
  incrementCount,
  decrementCount,
} from '../GlobalState/checkedCountriesSlice'

interface CheckedCountryItemProps {
  country: string
}

export const CheckedCountryItem: React.FC<CheckedCountryItemProps> = ({
  country,
}) => {
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(incrementCount(country))
  }

  const handleDecrement = () => {
    dispatch(decrementCount(country))
  }

  const checkedCountry = useSelector((state: RootState) =>
    state.checkedCountries.countries.find(
      (checkedCountry) => checkedCountry.country === country
    )
  )

  const isChecked = checkedCountry !== undefined

  return (
    <div className={`accordion-item-container ${isChecked ? 'checked' : ''}`}>
      {country}
      {isChecked && (
        <div className="count-box">
          <button
            className="count-button"
            onClick={handleDecrement}
            disabled={checkedCountry!.count === 1}
          >
            -
          </button>
          <span>{checkedCountry!.count}</span>
          <button className="count-button" onClick={handleIncrement}>
            +
          </button>
        </div>
      )}
    </div>
  )
}
