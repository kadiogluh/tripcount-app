import React from 'react'
import './App.css'

import SideMenu from '../components/SideMenu/SideMenu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainTable from '../pages/MainTable'
import { Data } from '../components/Data'
import CountryCard from '../components/CountryCard/CountryCard'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <SideMenu />
        <Routes>
          <Route path="/maintable" element={<MainTable />} />

          {Data.map((continent) => (
            <Route
              path={`/continents/${continent.name
                .toLowerCase()
                .replace(' ', '')}`}
              element={<ContinentPage continent={continent} />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  )
}

export default App

interface ContinentPageProps {
  continent: {
    name: string
    countries: string[]
  }
}
const ContinentPage: React.FC<ContinentPageProps> = ({ continent }) => {
  return (
    <div>
      <h2>{continent.name}</h2>
      {continent.countries.map((country, index) => (
        <CountryCard key={index} name={country} />
      ))}
    </div>
  )
}
