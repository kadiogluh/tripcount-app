import React, { useState } from 'react'
import CountryCard from '../components/CountryCard/CountryCard'
import { AccordionItem } from '../models/AccordionItem'
import './Continents.css'

interface ContinentPageProps {
  continent: AccordionItem
}

export const ContinentPage: React.FC<ContinentPageProps> = ({ continent }) => {
  const [checkedCountries, setCheckedCountries] = useState<string[]>([])

  const handleCountryCheck = (country: string) => {
    if (checkedCountries.includes(country)) {
      setCheckedCountries((prevChecked) =>
        prevChecked.filter((c) => c !== country)
      )
    } else {
      setCheckedCountries((prevChecked) => [...prevChecked, country])
    }
  }
  return (
    <div className="subcontainer">
      <h2 className="header">{continent.name}</h2>
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
