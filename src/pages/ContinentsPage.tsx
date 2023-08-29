import React from 'react'
import CountryCard from '../components/CountryCard/CountryCard'
import './ContinentsPage.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCountry,
  removeCountry,
} from '../components/GlobalState/checkedCountriesSlice'
import { RootState } from '../components/GlobalState/store'
import { AccordionItem } from '../models/AccordionItem'

interface ContinentPageProps {
  continent: AccordionItem
}

const ContinentPage: React.FC<ContinentPageProps> = ({ continent }) => {
  const checkedCountries = useSelector(
    (state: RootState) => state.checkedCountries.countries
  )
  const dispatch = useDispatch()

  const handleCountryCheck = (country: string) => {
    if (checkedCountries.includes(country)) {
      dispatch(removeCountry(country))
    } else {
      dispatch(addCountry(country))
    }
  }

  const checkedCount = checkedCountries.filter((country) =>
    continent.countries.includes(country)
  ).length

  const totalCount = continent.countries.length

  const titleColor = checkedCount === totalCount ? '#00b6795d' : '#d5d5d5'

  return (
    <div className="subcontainer">
      <h2 style={{ backgroundColor: titleColor }}>
        {continent.name}{' '}
        <div className="count">
          ({checkedCount}/{totalCount})
        </div>
      </h2>
      <div className="card-container">
        {continent.countries.map((country, index) => (
          <CountryCard
            key={index}
            name={country}
            checked={checkedCountries.includes(country)}
            onCheck={handleCountryCheck}
          />
        ))}
      </div>
    </div>
  )
}

export default ContinentPage
