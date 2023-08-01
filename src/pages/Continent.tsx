import ContinentCards from '../components/ContinentCard/ContinentCard'
import { Data } from '../components/Data'
import './Continent.css'

const Continent: React.FC = () => {
  return (
    <div className="s-container">
      <div className="c-container">
        {Data.map((item, index) => (
          <ContinentCards
            key={index}
            name={item.name}
            link={`/continents/${item.name.toLowerCase().replace(' ', '')}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Continent
