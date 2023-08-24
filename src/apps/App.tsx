import React from 'react'
import './App.css'
import SideMenu from '../components/SideMenu/SideMenu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainTable from '../pages/MainTable'
import { Data } from '../components/Data'
import { ContinentPage } from '../pages/ContinentsPage'
import { ContinentProvider } from '../components/ContinentContext'
import HomePage from '../pages/HomePage'
import Continent from '../pages/Continent'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <ContinentProvider>
          <SideMenu />

          <Routes>
            <Route path="/tripcount-app" element={<HomePage />} />
            <Route path="/maintable" element={<MainTable />} />
            <Route path="/continents" element={<Continent />} />

            {Data.map((continent) => (
              <Route
                key={continent.name}
                path={`/continents/${continent.name
                  .toLowerCase()
                  .replace(' ', '')}`}
                element={<ContinentPage continent={continent} />}
              />
            ))}
          </Routes>
        </ContinentProvider>
      </Router>
    </div>
  )
}

export default App
