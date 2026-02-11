import React, { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  // Credit balance - synced across all screens
  const [credits, setCredits] = useState(450)
  
  // User data
  const [user] = useState({
    name: 'NTU Student',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz3c_EknA6iXi6hyiliLzpAMrny_JAwanbc1EUXZ4Tbd__mnk11TNnGrd7B_I220KsGcQ8whmgd0V9CFk-YXklH9kNGRgYAYAJ-_jo-0A2vUdSeT9LFUAYmkq4JAxPJ4kiW7TsmlvymK8Sxao4aNA8NLtyakmIMXgdEX6o8IrJGUXRWkJ1io2iLhKkW6OdqRwT7HLpy3fnPDCYxrFIl0L4PEcbqXhlIcPgxT1MkCSvRlrT6FoiFj73QBlAwICWiOFbDxN-ScEaOlyW'
  })

  // Scan history for analytics
  const [scanHistory, setScanHistory] = useState([
    { date: '2024-01-15', waste: 8, credits: 10 },
    { date: '2024-01-14', waste: 12, credits: 10 },
    { date: '2024-01-13', waste: 5, credits: 10 },
  ])

  // Personal impact metrics (aggregated from scan history)
  const personalImpact = {
    co2Saved: 2.4, // kg
    mealsRescued: 15,
    weeklyWaste: 120, // grams
    ecoScore: 85
  }

  // Show scan success popup
  const [showScanSuccess, setShowScanSuccess] = useState(false)
  const [lastScanData, setLastScanData] = useState(null)

  // Facial recognition setting
  const [facialRecognitionEnabled, setFacialRecognitionEnabled] = useState(true)

  // Redeemed vouchers
  const [redeemedVouchers, setRedeemedVouchers] = useState([])

  // Add credits
  const addCredits = useCallback((amount) => {
    setCredits(prev => prev + amount)
  }, [])

  // Deduct credits
  const deductCredits = useCallback((amount) => {
    setCredits(prev => Math.max(0, prev - amount))
  }, [])

  // Record a scan
  const recordScan = useCallback((wasteAmount) => {
    const creditsEarned = 10
    const newScan = {
      date: new Date().toISOString().split('T')[0],
      waste: wasteAmount,
      credits: creditsEarned
    }
    setScanHistory(prev => [newScan, ...prev])
    addCredits(creditsEarned)
    setLastScanData({ waste: wasteAmount, credits: creditsEarned })
    setShowScanSuccess(true)
    return newScan
  }, [addCredits])

  // Redeem reward
  const redeemReward = useCallback((reward) => {
    if (credits >= reward.cost) {
      deductCredits(reward.cost)
      setRedeemedVouchers(prev => [...prev, { ...reward, redeemedAt: new Date().toISOString() }])
      return true
    }
    return false
  }, [credits, deductCredits])

  const value = {
    credits,
    user,
    scanHistory,
    personalImpact,
    showScanSuccess,
    setShowScanSuccess,
    lastScanData,
    facialRecognitionEnabled,
    setFacialRecognitionEnabled,
    redeemedVouchers,
    addCredits,
    deductCredits,
    recordScan,
    redeemReward,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
