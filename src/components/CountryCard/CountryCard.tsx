import { useState } from 'react'
import './CountryCard.css'

interface CountryCardProps {
  name: string
}

const CountryCard: React.FC<CountryCardProps> = ({ name }) => {
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <div className={`country-card ${checked ? 'checked' : ''}`}>
      <h2>{name}</h2>
      <button onClick={handleCheck}>{checked ? 'Uncheck' : 'Check'}</button>
    </div>
  )
}

export default CountryCard
