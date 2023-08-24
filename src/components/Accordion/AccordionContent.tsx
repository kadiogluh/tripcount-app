import React from 'react'
import { AccordionItem } from '../../models/AccordionItem'
import './AccordionContent.css'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { useContinentContext } from '../ContinentContext'

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
  const { checkedCountries } = useContinentContext()
  return (
    <li className="accordion-item">
      <h2 className="accordion-item-title">
        <button className="accordion-item-btn" onClick={btnOnClick}>
          {data.name}
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </h2>
      {isOpen && (
        <div>
          {data.countries.map((country) => {
            const isChecked = checkedCountries.includes(country)
            return (
              <div
                key={country}
                className={`accordion-item-container ${
                  isChecked ? 'checked' : ''
                }`}
              >
                {country}
              </div>
            )
          })}
        </div>
      )}
    </li>
  )
}
export default AccordionContent
