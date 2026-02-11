import React, { useState } from 'react'
import { useApp } from '../context/AppContext'

const AnalyticsHub = () => {
  const [viewMode, setViewMode] = useState('personal')
  const { personalImpact, credits, scanHistory } = useApp()

  return (
    <>
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="px-6 py-4 flex flex-col max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight">Analytics</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">Monitor your sustainability impact.</p>
            </div>
          </div>
          <div className="flex bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('personal')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                viewMode === 'personal'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-primary'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setViewMode('community')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                viewMode === 'community'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-primary'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Community
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-4 space-y-6 pb-24">
        {viewMode === 'personal' ? (
          <>
            {/* Weekly Waste Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">WEEKLY WASTE</p>
                <div className="bg-primary/10 px-2 py-1 rounded flex items-center gap-1">
                  <span className="material-icons-round text-primary text-xs">trending_up</span>
                  <span className="text-xs font-bold text-primary">15%</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold">{personalImpact.weeklyWaste}</span>
                <span className="text-sm text-slate-500">g</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Better than 82% of students in Hall 4</p>
            </div>

            {/* Daily Breakdown */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">Daily Breakdown</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Grams (g)</p>
              </div>
              <div className="flex justify-between items-end h-32 gap-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-primary rounded-t-lg mb-2"
                      style={{ height: `${Math.random() * 60 + 20}%` }}
                    ></div>
                    <span className={`text-xs font-medium ${day === 'T' ? 'font-bold text-primary' : 'text-slate-500'}`}>
                      {day}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eco Score Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">ECO SCORE</p>
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-slate-200 dark:text-slate-700"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${personalImpact.ecoScore * 3.52} 352`}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">{personalImpact.ecoScore}</span>
                  </div>
                </div>
                <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  Pro Cleaner
                </span>
              </div>
            </div>

            {/* CO2 Saved Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">CO2 SAVED</p>
              <div className="flex items-center gap-3 mb-2">
                <span className="material-icons-round text-primary text-2xl">cloud_done</span>
                <div>
                  <span className="text-3xl font-bold">{personalImpact.co2Saved}</span>
                  <span className="text-sm text-slate-500 ml-1">kg</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Total Impact</p>
              <div className="flex items-center gap-2">
                <span className="material-icons-round text-primary text-sm">park</span>
                <span className="text-sm font-semibold text-primary">Planet Hero</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Equivalent to 1 tree</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-3">Recent Activity</h3>
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-icons-round text-primary">check_circle</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Low Waste Maintenance</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Awarded for consistent 0g waste</p>
                  </div>
                  <span className="text-sm font-bold text-primary">+50 pts</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Community Impact Insights</h2>
            </div>

            {/* Total Waste Saved */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-primary/5 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Weekly Waste Saved</p>
                  <h2 className="text-4xl font-bold mt-1 text-primary">450kg</h2>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="material-icons-round text-primary">eco</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">+12% from last week</span>
              </div>
            </div>

            {/* Top Performer */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-primary/5 p-6">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Top Performer</p>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                  <img alt="Mala Cuisine Stall" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9zgWWNdE7Xu1rQemM4lkqxun9WC5H8-9dSu707zXT7djbCvLVNhUbobFidAf4CRzQ2xVjYf9BawK_3w-pkT1VX5B2Q2g1fw5UWoP27O1bluUrj7yK639p-e2IIxRFnojQYCaRnS65xe2vqyFnGrJ2ZuUxBeeYC3-3hpuD9zcOuNDj-sJwPkoQbaqEYqYAQHRqM71flEh7Q8CEQSTiJ4Ik-A6sNM7fdEt0UQPKbnb63qdfiLA-lNORzLdHQIP96fKYrPj89q4uVYto" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">Mala Cuisine</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">North Hill Canteen</p>
                </div>
                <div className="text-right">
                  <span className="text-primary font-bold block text-lg">98%</span>
                  <span className="text-[10px] text-slate-400 uppercase">Efficiency</span>
                </div>
              </div>
            </div>

            {/* Waste per Portion Size */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-primary/5 p-6">
              <h3 className="text-base font-bold mb-6 flex items-center gap-2">
                <span className="material-icons-round text-primary text-xl">bar_chart</span>
                Waste per Portion Size (Avg)
              </h3>
              <div className="flex items-end justify-between h-40 gap-4 mb-2">
                <div className="flex flex-col items-center flex-1">
                  <div className="w-full bg-primary/20 rounded-t-lg relative h-[30%]">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">15g</span>
                  </div>
                  <p className="text-[10px] font-bold mt-2 text-slate-500 dark:text-slate-400 uppercase">Small</p>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-full bg-primary/50 rounded-t-lg relative h-[60%]">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">42g</span>
                  </div>
                  <p className="text-[10px] font-bold mt-2 text-slate-500 dark:text-slate-400 uppercase">Regular</p>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-full bg-primary rounded-t-lg relative h-[90%]">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">85g</span>
                  </div>
                  <p className="text-[10px] font-bold mt-2 text-slate-500 dark:text-slate-400 uppercase">Large</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-4 leading-relaxed italic">
                * Based on average post-meal weighing data across all NTU halls.
              </p>
            </div>
          </>
        )}
      </main>
    </>
  )
}

export default AnalyticsHub
