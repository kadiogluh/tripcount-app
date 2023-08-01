import './HomePage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Link className="tripcount-link" to="/continents">
      <div className="gradient-background">
        <div className="center-container">
          <div className="tripcount-text">TRIPCOUNT</div>
        </div>
      </div>
    </Link>
  )
}

export default HomePage
