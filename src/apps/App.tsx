import React from 'react'
import './App.css'

import SideMenu from '../components/SideMenu/SideMenu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainTable from '../pages/MainTable'
import { Data } from '../components/Data'
import { ContinentPage } from '../pages/Continents'

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
