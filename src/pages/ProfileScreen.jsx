import React from 'react'
import { useApp } from '../context/AppContext'

const ProfileScreen = () => {
  const { user, personalImpact, facialRecognitionEnabled, setFacialRecognitionEnabled } = useApp()

  const handleToggleFacialRecognition = () => {
    setFacialRecognitionEnabled(!facialRecognitionEnabled)
    // Haptic feedback simulation (would use actual haptic API in real app)
    if (navigator.vibrate) {
      navigator.vibrate(10)
    }
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profile & Settings</h1>
        <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-icons-round text-primary">settings</span>
        </button>
      </header>

      <div className="px-6 py-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/20 overflow-hidden border-4 border-primary">
            <img alt="Profile" className="w-full h-full object-cover" src={user.avatar} />
          </div>
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">NTU Student</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="material-icons-round text-primary text-sm">eco</span>
              <span className="text-xs font-semibold text-primary">Eco Hero</span>
            </div>
          </div>
        </div>

        {/* Personal Impact Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-icons-round text-primary">cloud_done</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">CO2 Saved</p>
            </div>
            <p className="text-2xl font-bold">{personalImpact.co2Saved} kg</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-icons-round text-primary">restaurant</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">Meals Rescued</p>
            </div>
            <p className="text-2xl font-bold">{personalImpact.mealsRescued}</p>
          </div>
        </div>

        {/* Settings Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Settings</h3>
          
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-icons-round text-primary">face</span>
                </div>
                <div>
                  <p className="font-semibold">Facial Recognition</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Enable automatic user identification</p>
                </div>
              </div>
              <button
                onClick={handleToggleFacialRecognition}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  facialRecognitionEnabled ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    facialRecognitionEnabled ? 'translate-x-7' : 'translate-x-0'
                  }`}
                ></span>
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-icons-round text-primary">notifications</span>
                </div>
                <div>
                  <p className="font-semibold">Notifications</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Push notifications for rewards</p>
                </div>
              </div>
              <span className="material-icons-round text-slate-400">chevron_right</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-icons-round text-primary">privacy_tip</span>
                </div>
                <div>
                  <p className="font-semibold">Privacy & Data</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Manage your data preferences</p>
                </div>
              </div>
              <span className="material-icons-round text-slate-400">chevron_right</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-icons-round text-primary">help</span>
                </div>
                <div>
                  <p className="font-semibold">Help & Support</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">FAQs and contact information</p>
                </div>
              </div>
              <span className="material-icons-round text-slate-400">chevron_right</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
