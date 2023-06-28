import React from 'react'
import { AccordionItem } from '../models/AccordionItem'
import './AccordionContent.css'
import { AiOutlineDown } from 'react-icons/ai'

export type AccordionProps = {
  data: AccordionItem
  isOpen: boolean
  btnOnClick: () => void
}

const AccordionContent: React.FC<AccordionProps> = ({
  data,
  isOpen,
  btnOnClick,
}) => {
  return (
    <li className="accordion-item">
      <h2 className="accordion-item-title">
        <button className="accordion-item-btn" onClick={btnOnClick}>
          {data.name}
          <AiOutlineDown />
        </button>
      </h2>
      {isOpen && (
        <div>
          {data.countries.map((country) => {
            return (
              <div className="accordion-item-container">
                <div className="accordion-item-content">{country}</div>
              </div>
            )
          })}
        </div>
      )}
    </li>
  )
}
export default AccordionContent
