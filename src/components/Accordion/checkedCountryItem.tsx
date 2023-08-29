import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../GlobalState/store'
import './checkedCountryItem.css'

interface CheckedCountryItemProps {
  country: string
}

export const CheckedCountryItem: React.FC<CheckedCountryItemProps> = ({
  country,
}) => {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const isChecked = useSelector((state: RootState) =>
    state.checkedCountries.countries.includes(country)
  )

  return (
    <div className={`accordion-item-container ${isChecked ? 'checked' : ''}`}>
      {country}
      {isChecked && (
        <div className="count-box">
          <button
            className="count-button"
            onClick={handleDecrement}
            disabled={count === 1}
          >
            -
          </button>
          <span>{count}</span>
          <button className="count-button" onClick={handleIncrement}>
            +
          </button>
        </div>
      )}
    </div>
  )
}
