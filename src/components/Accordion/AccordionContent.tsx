import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../GlobalState/store'
import './AccordionContent.css'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { AccordionItem } from '../../models/AccordionItem'
import { CheckedCountryItem } from './checkedCountryItem'

type AccordionProps = {
  data: AccordionItem
  isOpen: boolean
  btnOnClick: () => void
}

const AccordionContent: React.FC<AccordionProps> = ({
  data,
  isOpen,
  btnOnClick,
}) => {
  const checkedCountries = useSelector(
    (state: RootState) => state.checkedCountries.countries
  )

  const isAllCountriesChecked = data.countries.every((country) =>
    checkedCountries.includes(country)
  )
  return (
    <li className="accordion-item">
      <h2 className="accordion-item-title">
        <button
          className={`accordion-item-btn ${
            isAllCountriesChecked ? 'all-checked' : ''
          }`}
          onClick={btnOnClick}
        >
          {data.name}
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </h2>
      {isOpen && (
        <div>
          {data.countries.map((country) => {
            return <CheckedCountryItem key={country} country={country} />
          })}
        </div>
      )}
    </li>
  )
}

export default AccordionContent
