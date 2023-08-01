import React from 'react'
import { Link } from 'react-router-dom'
import './ContinentCard.css'

interface ContinentCardProps {
  name: string
  link: string
}

const ContinentCards: React.FC<ContinentCardProps> = ({ name, link }) => {
  return (
    <Link className="continent" to={link}>
      <div className="continent-card">
        <h2 className="continent-header">{name}</h2>
      </div>
    </Link>
  )
}

export default ContinentCards
