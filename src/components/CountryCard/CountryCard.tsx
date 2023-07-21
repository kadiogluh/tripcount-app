import './CountryCard.css'

interface CountryCardProps {
  name: string
  checked: boolean
  onCheck: (country: string) => void
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  checked,
  onCheck,
}) => {
  const handleCheck = () => {
    onCheck(name)
  }

  return (
    <div className={`country-card ${checked ? 'checked' : ''}`}>
      <h2>{name}</h2>
      <button
        className={`check-button ${checked ? 'checked' : ''}`}
        onClick={handleCheck}
      >
        {checked ? 'Uncheck' : 'Check'}
      </button>
    </div>
  )
}

export default CountryCard
