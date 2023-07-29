import React, { useEffect } from 'react'
import CountryCard from '../components/CountryCard/CountryCard'
import { AccordionItem } from '../models/AccordionItem'
import './Continents.css'
import { useContinentContext } from './ContinentContext'

interface ContinentPageProps {
  continent: AccordionItem
}

export const ContinentPage: React.FC<ContinentPageProps> = ({ continent }) => {
  const { checkedCountries, setCheckedCountries } = useContinentContext()

  const handleCountryCheck = (country: string) => {
    if (checkedCountries.includes(country)) {
      setCheckedCountries((prevChecked) =>
        prevChecked.filter((c) => c !== country)
      )
    } else {
      setCheckedCountries((prevChecked) => [...prevChecked, country])
    }
  }

  // Number of countries checked
  const checkedCount = checkedCountries.filter((country) =>
    continent.countries.includes(country)
  ).length
  // Total number of countries
  const totalCount = continent.countries.length

  // Set the title color
  const [titleColor, setTitleColor] = React.useState('#5acbff')

  useEffect(() => {
    if (checkedCount === totalCount) {
      setTitleColor('#5acbff')
    } else {
      setTitleColor('#039a685d')
    }
  }, [checkedCount, totalCount])

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
