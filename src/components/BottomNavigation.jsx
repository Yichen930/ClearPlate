import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const BottomNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const navItems = [
    { path: '/', icon: 'home', label: 'Home' },
    { path: '/analytics', icon: 'analytics', label: 'Analytics' },
    { path: '/rewards', icon: 'card_giftcard', label: 'Rewards' },
    { path: '/profile', icon: 'person', label: 'Profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md ios-blur bg-white/90 dark:bg-slate-900/90 border-t border-slate-200/60 dark:border-slate-800 pb-8 pt-3 px-8 z-50">
      <div className="flex justify-between items-center relative">
        {navItems.map((item, index) => (
          <React.Fragment key={item.path}>
            <button
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive(item.path)
                  ? 'text-primary'
                  : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[28px] ${
                  isActive(item.path) ? 'font-variation-fill' : ''
                }`}
              >
                {item.icon}
              </span>
              <span className={`text-[10px] ${isActive(item.path) ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
            {/* FAB in the middle between Analytics and Rewards */}
            {index === 1 && (
              <button
                onClick={() => navigate('/scan')}
                className="flex flex-col items-center gap-1 -mt-8 relative z-10"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-white dark:border-slate-900">
                  <span className="material-symbols-outlined text-white text-[28px] font-variation-fill">
                    qr_code_scanner
                  </span>
                </div>
                <span className="text-[10px] text-primary font-bold mt-1">Scan</span>
              </button>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <div className="h-1.5 w-32 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
      </div>
    </nav>
  )
}

export default BottomNavigation
