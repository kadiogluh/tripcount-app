import React, { useState, useRef, useEffect } from 'react'
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
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement

      setHeight(contentEl.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])
  return (
    <li className="accordion-item">
      <h2 className="accordion-item-title">
        <button className="accordion-item-btn" onClick={btnOnClick}>
          {data.name}
          <AiOutlineDown />
        </button>
      </h2>

      <div className="accordion-item-container" style={{ height }}>
        <div ref={contentRef} className="accordion-item-content">
          {data.countries}
        </div>
      </div>
    </li>
  )
}
export default AccordionContent
