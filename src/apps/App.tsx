import React from 'react'
import './App.css'
import SideMenu from '../components/SideMenu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainTable from '../pages/MainTable'
import {
  Africa,
  Antartica,
  Asia,
  Australia,
  Europe,
  NorthAmerica,
  SouthAmerica,
} from '../pages/Continents'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <SideMenu />
        <Routes>
          <Route path="/maintable" element={<MainTable />} />
          <Route path="/continents/africa" element={<Africa />} />
          <Route path="/continents/antartica" element={<Antartica />} />
          <Route path="/continents/asia" element={<Asia />} />
          <Route path="/continents/australia" element={<Australia />} />
          <Route path="/continents/europe" element={<Europe />} />
          <Route path="/continents/north-america" element={<NorthAmerica />} />
          <Route path="/continents/south-america" element={<SouthAmerica />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
