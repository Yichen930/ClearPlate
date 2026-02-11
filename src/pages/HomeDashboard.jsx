import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const HomeDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, setShowScanSuccess } = useApp()

  useEffect(() => {
    if (location.state?.showScanSuccess) {
      setShowScanSuccess(true)
    }
  }, [location.state, setShowScanSuccess])

  const handleOrderNow = () => {
    navigate('/portion-selection', { state: { dish: 'Chicken Rice', location: 'Koufu @ North Spine', price: 4.50 } })
  }

  const handleStallClick = (stallName) => {
    navigate('/portion-selection', { state: { dish: stallName, location: 'Various Locations', price: 4.50 } })
  }

  return (
    <>
      <div className="h-12 w-full"></div>
      <main className="max-w-md mx-auto px-5 pb-32">
      <header className="flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <span className="material-icons-round text-white text-xl">eco</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">ClearPlate</h1>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center border border-primary/10">
            <span className="material-icons-round text-slate-600 dark:text-slate-300">notifications_none</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-primary/20 overflow-hidden border-2 border-primary">
            <img alt="Profile" className="w-full h-full object-cover" src={user.avatar} />
          </div>
        </div>
      </header>
      
      <section className="mt-4 mb-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm">Welcome back, {user.name}</p>
        <h2 className="text-2xl font-bold">Eat Green Today 🌿</h2>
      </section>

      <section className="relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg">AI Recommendation</h3>
          <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-wider">Live Logic</span>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-primary/5 overflow-hidden border border-primary/20 ring-1 ring-primary/5">
          <div className="relative h-48 w-full">
            <img 
              className="w-full h-full object-cover" 
              alt="Delicious plate of Hainanese Chicken Rice" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsBlmMni92siZ8ccVAUCIcNnk1tHu5fODd_31BADgtYE3FWlir9v7noQR_gIrbzig0UT7GFj8H62e8g3vVsqxw5sH4ViEP-c5GMrKEZ4q83nw1mjeyzchez0Mu_LP8_1WcC5Vajg7sXSHOekgruh8WWwImB2YVkp0DTTiZ4XjXOgYSuwy-WPS7Ne6wIELseQ9EbXZPd2vyjPQskG0BRWDFTzJD9rm3mYELQgTwOJzDv_LJaBIo-ynaH5Dd14vtjDbcsshFWfhEPgC2" 
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase flex items-center gap-1">
                <span className="material-icons-round text-xs">trending_down</span> Low Waste
              </span>
              <span className="bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase flex items-center gap-1">
                <span className="material-icons-round text-xs text-primary">verified</span> 92% Confidence
              </span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-bold">Chicken Rice</h4>
                <p className="text-slate-500 text-sm flex items-center gap-1">
                  <span className="material-icons-round text-sm">location_on</span> Koufu @ North Spine
                </p>
              </div>
              <div className="text-right">
                <p className="text-primary font-bold text-lg">$4.50</p>
                <p className="text-[10px] text-slate-400 uppercase font-medium">Standard Price</p>
              </div>
            </div>
            <button 
              onClick={handleOrderNow}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 mb-3 shadow-lg shadow-primary/20"
            >
              <span className="material-icons-round">shopping_cart</span>
              Order Now
            </button>
            <div className="text-center">
              <a className="text-xs font-medium text-slate-400 hover:text-primary flex items-center justify-center gap-1 transition-colors" href="#">
                Why this recommendation? <span className="material-icons-round text-xs">info</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Other Stalls</h3>
          <button className="text-primary text-sm font-semibold">See All</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Western Food', waste: 'MED WASTE', wasteColor: 'bg-yellow-500', wait: '12 mins', rating: 4.8, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeD6TeI-vpy8vkoE1fyUkLqj524eglqX7Jbgv9W-iMnFskk8ob8nM1S7rFT6eOJur8zzfL810VdZ9HroApiGMxpvSJLbTnFq2qToNnVcLTOaOV9ADc0Zu0MRXostkp6bNZksYa6ca5Lea-SbXLvrJaZ6IvdMty-YtFhOJCLHIhS-KN73NWPPWU12Ew5slV5_ksHe9Rga5JAAjYy04CjAI0M6RzCXi0HeBreti2VE0abFvTcK19UbMfJXMHm97kjw08GyS6dIRo_CxA' },
            { name: 'Mala Xiang Guo', waste: 'HIGH WASTE', wasteColor: 'bg-red-500', wait: '20 mins', rating: 4.9, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDQxQTj100YlFtzdPzH6hy3or_ybB_tqrfgJXeqwHsbg9uz7Yp4dqSAeNlSuHqzQ7RajgKPCfhseTjOGy2ZMnMBs9uiU8GxTvbJDVQWFEnPiqPazZdt0bueJoMW5ezM5ymh3TTpAACwZMzz8Yftum1eVOgxjpRsQhkRUbjhEt79QBqWIUbRWv1LxFd0zeKBHlyxqRJQ1fMR--K4sfX9Nw4LVB5jwFwbBDkntUgJesvDegeLvlKYkJxHbjjTk25HUXGgujnlrzCtYpu' },
            { name: 'Korean Fusion', waste: 'LOW WASTE', wasteColor: 'bg-primary', wait: '8 mins', rating: 4.6, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgFAiA_dcO4eg0rBswoHLA0V9hUTZv8uVtNVyCEywKAAArytUbxo2Ee1aRh4kBen4dxtJWHDYlLpqL0I1Ij7PL6FqU_9jBARVKCWkXRjRcA0X_dhRTwQDdy9XSe-gg9uUSnYfYwBjce0MZ2vfQ2p1oH-5MHnuYJ9f3UspixJDFoQUA1VnlYzX2eMkBNmg50ErW4NahwqqlahRThJVJVHrwjTmfgT2-Wtr_vVHjTh3PaheJ1fnXwqRVvMYjlWFaGe4dGBxyqWYx6maD' },
            { name: 'Nippon Bites', waste: 'LOW WASTE', wasteColor: 'bg-primary', wait: '15 mins', rating: 4.7, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0vNnSL0JNSlgme8lKxoaLHnURHpYQn0brGyWVsNLSb_jDXHBfTEz8_GBppsKT6b4whbN01phRM5ad0I41teeA5CD1DZ_O-xVei4VmfJIo2hjMGPs03Bs4shqID_wqtyv8RNqF_BUokeuIgbE0bJ-hBDPXK-1OeqirY4l6Ssj6PYrvnrcKis8eCM0OyqpngBgB5ivEIxlcmR_H47Y--PbW6h1SPumirirLSV1z0kmJ1_oM9joEMmzrhamJk5oGdbgzLqYditdc4Psm' },
          ].map((stall) => (
            <div 
              key={stall.name}
              onClick={() => handleStallClick(stall.name)}
              className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="relative rounded-lg overflow-hidden h-28 mb-3">
                <img className="w-full h-full object-cover" alt={stall.name} src={stall.img} />
                <div className={`absolute bottom-2 left-2 ${stall.wasteColor} text-white text-[9px] font-bold px-2 py-0.5 rounded-full`}>
                  {stall.waste}
                </div>
              </div>
              <h5 className="font-bold text-sm">{stall.name}</h5>
              <p className="text-slate-400 text-[10px] mb-2">{stall.wait} wait</p>
              <div className="flex items-center gap-1 text-xs font-medium text-primary">
                <span className="material-icons-round text-sm">star</span> {stall.rating}
              </div>
            </div>
          ))}
        </div>
      </section>
      </main>
    </>
  )
}

export default HomeDashboard
