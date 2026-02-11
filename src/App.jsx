import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import BottomNavigation from './components/BottomNavigation'
import HomeDashboard from './pages/HomeDashboard'
import PortionSelection from './pages/PortionSelection'
import AnalyticsHub from './pages/AnalyticsHub'
import RewardsMarketplace from './pages/RewardsMarketplace'
import ScanScreen from './pages/ScanScreen'
import ProfileScreen from './pages/ProfileScreen'
import ScanSuccessPopup from './components/ScanSuccessPopup'

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/portion-selection" element={<PortionSelection />} />
            <Route path="/analytics" element={<AnalyticsHub />} />
            <Route path="/rewards" element={<RewardsMarketplace />} />
            <Route path="/scan" element={<ScanScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
          <BottomNavigation />
          <ScanSuccessPopup />
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
