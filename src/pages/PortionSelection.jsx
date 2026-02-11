import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const PortionSelection = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { dish = 'Chicken Rice', location: dishLocation = 'Fine Food Canteen (NTU)', price = 4.50 } = location.state || {}
  
  const [selectedPortion, setSelectedPortion] = useState('regular')
  
  const portions = {
    small: { label: 'Small (~70%)', desc: 'Perfect for light eaters', scale: 0.7 },
    regular: { label: 'Regular (~100%)', desc: 'Standard stall size', scale: 1.0 },
    large: { label: 'Large (~130%)', desc: 'For a big appetite', scale: 1.3 }
  }

  const handleConfirm = () => {
    // Show success animation/snackbar
    setTimeout(() => {
      navigate('/', { state: { orderSuccess: true } })
    }, 500)
  }

  const plateScale = portions[selectedPortion].scale

  return (
    <main className="w-full max-w-md mx-auto bg-white dark:bg-slate-900 min-h-screen flex flex-col relative overflow-hidden shadow-2xl">
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-primary/10">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-primary/10 transition-colors"
        >
          <span className="material-icons text-primary">arrow_back_ios_new</span>
        </button>
        <div className="text-center">
          <h1 className="text-lg font-bold">{dish}</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">{dishLocation}</p>
        </div>
        <div className="w-10"></div>
      </header>

      <div className="flex-1 overflow-y-auto pb-44">
        <section className="py-10 px-6 flex flex-col items-center justify-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75"></div>
            <div 
              className="relative transform transition-transform duration-300 flex items-center justify-center"
              style={{ transform: `scale(${plateScale})` }}
            >
              <div className="w-56 h-56 bg-white dark:bg-slate-800 rounded-full shadow-xl border-8 border-slate-50 dark:border-slate-700 overflow-hidden">
                <img 
                  alt="Top down view of a plate of hainanese chicken rice" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTiMWBhmqu_u3ZT0v0l70oHipjj-JrgQ7D89-s-hFCJTvM8TVN8J1Rog0yOouEnLH2IarVeoEy7eG92DjCW-Ov45q1XrjqX0qNlhhdevoSMvE9hMiNmvfKIi3P5jctTRsnPwI0NFi_4ekj8gy7E1sZmQa3IB2bSdTHocBaRHf9XnYGltVaEeZtMHH1U6fSC-YAMJm-YPgq7ynDhLQn9qXyALWbjoQSyetwMX1ZiC0RCHUljhid_30V3-77xMZvgb-Y50sDha6HrHEz" 
                />
              </div>
              <div className="absolute -top-1 -right-1 bg-primary text-white p-2 rounded-full shadow-lg">
                <span className="material-icons text-sm">eco</span>
              </div>
            </div>
          </div>
          <div className="text-center space-y-1">
            <p className="text-sm font-semibold text-primary">Visualizing your portion...</p>
            <p className="text-xs text-slate-400">Choosing what you can finish reduces campus waste</p>
          </div>
        </section>

        <section className="px-6 space-y-3">
          <div className="grid grid-cols-1 gap-3">
            {Object.entries(portions).map(([key, portion]) => (
              <button
                key={key}
                onClick={() => setSelectedPortion(key)}
                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                  selectedPortion === key
                    ? 'border-primary bg-primary/5 dark:bg-primary/10'
                    : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedPortion === key ? 'bg-primary' : 'bg-primary/10'
                  }`}>
                    <span className={`material-icons text-lg ${
                      selectedPortion === key ? 'text-white' : 'text-primary'
                    }`}>restaurant</span>
                  </div>
                  <div className="text-left">
                    <span className={`block font-bold ${
                      selectedPortion === key ? 'text-primary' : ''
                    }`}>{portion.label}</span>
                    <span className={`block text-xs ${
                      selectedPortion === key ? 'text-primary/70' : 'text-slate-500'
                    }`}>{portion.desc}</span>
                  </div>
                </div>
                <span className={`material-icons ${
                  selectedPortion === key ? 'text-primary' : 'text-slate-300'
                }`}>
                  {selectedPortion === key ? 'check_circle' : 'radio_button_unchecked'}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="px-6 mb-3 flex items-center justify-between">
            <h2 className="font-bold text-slate-800 dark:text-slate-100">Student Insights</h2>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">4.8 ★</span>
          </div>
          <div className="flex overflow-x-auto pb-4 px-6 space-x-4 no-scrollbar">
            <div className="flex-shrink-0 w-64 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">JD</div>
                <span className="text-[10px] font-semibold text-slate-500 uppercase">Jamie D.</span>
              </div>
              <p className="text-xs italic text-slate-600 dark:text-slate-300 leading-relaxed">
                "Small is actually enough for light eaters. I usually can't finish the regular!"
              </p>
            </div>
            <div className="flex-shrink-0 w-64 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">AL</div>
                <span className="text-[10px] font-semibold text-slate-500 uppercase">Alex L.</span>
              </div>
              <p className="text-xs italic text-slate-600 dark:text-slate-300 leading-relaxed">
                "Regular is quite filling. The chicken portions here are generous."
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="absolute bottom-0 left-0 right-0 z-30">
        <div className="px-6 pb-4 bg-gradient-to-t from-white via-white/95 to-transparent dark:from-slate-900 dark:via-slate-900/95">
          <button 
            onClick={handleConfirm}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center space-x-2 transition-transform active:scale-[0.98]"
          >
            <span>Confirm Order</span>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </footer>
    </main>
  )
}

export default PortionSelection
