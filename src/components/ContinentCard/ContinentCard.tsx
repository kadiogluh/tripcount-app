// ContinentCards.tsx
import React from 'react'
import { Data } from '../Data'
import { AccordionItem } from '../../models/AccordionItem'

const ContinentCards: React.FC = () => {
  return (
    <div>
      {Data.map((continent: AccordionItem) => (
        <div key={continent.name}>
          <h2>{continent.name}</h2>
          <ul>
            {continent.countries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            href={`/continents/${continent.name
              .toLowerCase()
              .replace(' ', '')}`}
          ></a>
        </div>
      ))}
    </div>
  )
}

export default ContinentCards
