import React from 'react'
import SideMenu from '../components/SideMenu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Europe from '../pages/Europe'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <SideMenu />
        <Routes>
          <Route path="/europe" element={<Europe />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
