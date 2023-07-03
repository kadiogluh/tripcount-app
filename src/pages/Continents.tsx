import React from 'react'
import { World } from '../models/AccordionItem'

export const Continents: React.FC<World> = ({ continents }) => {
  return (
    <div className="cont">
      {continents.map((item) => {
        return <div>{item.name}</div>
      })}
    </div>
  )
}
