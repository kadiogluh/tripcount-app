import React from 'react'
import './App.css'
import SideMenu from '../components/SideMenu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainTable from '../pages/MainTable'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <SideMenu />
        <Routes>
          <Route path="/maintable" element={<MainTable />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
