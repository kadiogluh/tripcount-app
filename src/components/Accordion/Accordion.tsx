import React, { useState } from 'react'
import AccordionContent from './AccordionContent'
import { Data } from '../Data'
import './Accordion.css'

const Accordion: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const btnOnClick = (index: number) => {
    setCurrentIndex((CurrentValue) => (CurrentValue !== index ? index : -1))
  }

  return (
    <ul className="accordion">
      {Data.map((item, index) => (
        <AccordionContent
          data={item}
          key={index}
          isOpen={index === currentIndex}
          btnOnClick={() => btnOnClick(index)}
        />
      ))}
    </ul>
  )
}

export default Accordion
