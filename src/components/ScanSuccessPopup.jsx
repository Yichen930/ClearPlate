import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const ScanSuccessPopup = () => {
  const navigate = useNavigate()
  const { showScanSuccess, setShowScanSuccess, lastScanData, credits } = useApp()

  if (!showScanSuccess || !lastScanData) return null

  const handleViewImpact = () => {
    setShowScanSuccess(false)
    navigate('/analytics')
  }

  const handleClose = () => {
    setShowScanSuccess(false)
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-6 z-50">
      <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-2xl p-8 shadow-2xl text-center transform scale-100">
        <div className="mb-6 relative">
          <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <span className="material-icons text-3xl">check</span>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">Scan Successful!</h3>
        <div className="mb-4 inline-block px-4 py-1.5 bg-background-light dark:bg-primary/10 rounded-full">
          <span className="text-sm font-medium">
            Waste Detected: <span className="text-primary font-bold">{lastScanData.waste}g</span>
          </span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          Great job! You finished almost everything.
        </p>
        <div className="flex items-center justify-center gap-2 mb-8 bg-amber-50 dark:bg-amber-900/20 py-3 rounded-xl border border-amber-100 dark:border-amber-900/30">
          <span className="material-icons text-amber-500">monetization_on</span>
          <span className="font-bold text-amber-700 dark:text-amber-500">
            +{lastScanData.credits} Green Credits earned
          </span>
        </div>
        <div className="space-y-4">
          <button
            onClick={handleViewImpact}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
          >
            View Impact
          </button>
          <button
            onClick={handleClose}
            className="block w-full text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScanSuccessPopup
