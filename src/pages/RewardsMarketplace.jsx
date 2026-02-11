import React, { useState } from 'react'
import { useApp } from '../context/AppContext'

const RewardsMarketplace = () => {
  const { credits, redeemReward, user } = useApp()
  const [showConfirmModal, setShowConfirmModal] = useState(null)

  const rewards = [
    {
      id: 1,
      name: '$1 Off Next Meal',
      description: 'Valid at North Spine Plaza & Canteen 2',
      cost: 100,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDASSYdVt6O8IV8hK96TiKamd6u3YmJpQ_eQX1hdZkS2AVrGsaOQSQVoExWyt2Qy-qpYF641qxm38R9Me8kM_UaytiaLAGQ3EcJVP5priXfChA9yVFb8EUfRklm8kzgEUGthc6eHuYAFhtdx7bIP45Dd5kaOAo3NcWpaPXVK78ZmlxE_8_hHa4FV_asFyj9Lppu2E0jMQ3BsUWTBq1GPdXh9gXJ5Rc_ze9byuvrt3pamBBw_mJPQ6QbPRNf1VLuQvinavTfa1bAs_ib',
      type: 'Food Voucher',
      icon: 'confirmation_number',
      canAfford: credits >= 100
    },
    {
      id: 2,
      name: 'Free Drink at Koufu',
      description: 'Choice of Coffee, Tea or Milo',
      cost: 150,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuwCMdqA2G7M90UlVaOzYdwlVWZauLcTK5uxhQaktw--FhFxk0ui_Zxu4UgcWOKOHBpDJyXWjDVSVmwK1B534ILJIrD33BX3i1bdtcb-D6bXkxowArFDJy6LiKbbzn94hBlmKeaN6UWyAPhJ9N7M44mhKwUizyeve_VOaSCJJroKtDSAoil8Bq6Sp1FgBMreXRyKkdHgv7_HltKISfvREcq8M7St08G9PT7Ba9RLb8aNEODoSwLszVGqZWWP7F8JszjGDH2dM1CQvC',
      type: 'Beverage',
      icon: 'local_cafe',
      canAfford: credits >= 150
    },
    {
      id: 3,
      name: 'Reusable Cutlery Set',
      description: 'Limited Edition ClearPlate Bamboo Kit',
      cost: 500,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxXtxyfBaiMIyWxSOoEMsFoRsYdElEsZt8Rhl_Iq80Zss4TRkJtjHKevsC-1Cax9wi5C8-w7swfW_6ExY2KvnIYIbjkCst2c9sqtrRiMhp7lbufG7s9AjtSqgvbniGYfoTjqmHOQalfRPMTT9Yxv_DnhzzcBEFQErB5sTps_Etc00iQuNzJjDj8SMZTW6o8izNnY36w6_824HtJAKty_6wWpW8zPc2GKYTffeMydQ5er3zYwV9SIllSXBW5IiuUAgIJVCyLFAL3050',
      type: 'Merchandise',
      icon: 'shopping_bag',
      canAfford: credits >= 500
    }
  ]

  const handleRedeem = (reward) => {
    if (reward.canAfford) {
      setShowConfirmModal(reward)
    }
  }

  const confirmRedeem = () => {
    if (showConfirmModal && redeemReward(showConfirmModal)) {
      setShowConfirmModal(null)
      // Show success message
    }
  }

  const progress = (credits / 500) * 100

  return (
    <>
      <div className="max-w-[430px] mx-auto min-h-screen bg-background-light dark:bg-background-dark relative flex flex-col pb-24">
        <div className="h-12 flex items-center justify-between px-8 pt-4">
          <span className="text-sm font-semibold">9:41</span>
          <div className="flex gap-1.5 items-center">
            <span className="material-icons text-base">signal_cellular_alt</span>
            <span className="material-icons text-base">wifi</span>
            <span className="material-icons text-base">battery_full</span>
          </div>
        </div>

        <header className="px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Your Rewards</h1>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
            <img className="w-full h-full object-cover" alt="User profile avatar" src={user.avatar} />
          </div>
        </header>

        <div className="px-6 py-2">
          <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-6 border border-primary/20 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <p className="text-sm font-medium text-neutral-green dark:text-primary/80 uppercase tracking-wider">Current Balance</p>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-4xl font-bold text-neutral-900 dark:text-white">{credits}</span>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">Credits</span>
                <div className="flex items-center gap-1">
                  <span className="material-icons text-xs text-primary">eco</span>
                  <span className="text-[10px] text-neutral-green dark:text-primary/60 font-medium">Sustainability Hero</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between bg-white/50 dark:bg-black/20 p-3 rounded-lg backdrop-blur-sm">
              <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Keep clearing your plate to earn more!</p>
              <span className="material-icons text-primary text-sm">trending_up</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-6 flex gap-3 overflow-x-auto hide-scrollbar">
          <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold whitespace-nowrap">All Items</button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm font-medium whitespace-nowrap">Vouchers</button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm font-medium whitespace-nowrap">Merchandise</button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm font-medium whitespace-nowrap">Eco-Gear</button>
        </div>

        <main className="px-6 space-y-6 flex-1">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className={`bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-sm border border-neutral-100 dark:border-neutral-800 flex flex-col ${
                !reward.canAfford ? 'opacity-90' : ''
              }`}
            >
              <div className="relative h-40">
                <img className="w-full h-full object-cover" alt={reward.name} src={reward.image} />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span className={`material-icons text-primary text-sm`}>{reward.icon}</span>
                  <span className="text-xs font-bold">{reward.type}</span>
                </div>
                {!reward.canAfford && (
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <div className="bg-black/60 backdrop-blur-md rounded-full px-4 py-1 flex items-center gap-2">
                      <span className="material-icons text-white text-xs">lock</span>
                      <span className="text-white text-xs font-semibold">Almost there!</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{reward.name}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{reward.description}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`font-bold ${reward.canAfford ? 'text-primary' : 'text-neutral-400'}`}>
                      {reward.cost}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase">Credits</span>
                  </div>
                </div>
                {reward.id === 3 && !reward.canAfford && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-bold text-neutral-500 uppercase tracking-tighter">
                      <span>Your Progress</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full shadow-[0_0_8px_rgba(19,231,26,0.5)]"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => handleRedeem(reward)}
                  disabled={!reward.canAfford}
                  className={`w-full py-3 rounded-lg font-bold transition-all active:scale-[0.98] ${
                    reward.canAfford
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed'
                  }`}
                >
                  {reward.canAfford ? 'Redeem Now' : 'Insufficient Credits'}
                </button>
              </div>
            </div>
          ))}
          <div className="h-8"></div>
        </main>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-xl font-bold mb-2">Confirm Redemption?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Redeem <strong>{showConfirmModal.name}</strong> for {showConfirmModal.cost} credits?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmModal(null)}
                className="flex-1 py-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-bold"
              >
                Cancel
              </button>
              <button
                onClick={confirmRedeem}
                className="flex-1 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default RewardsMarketplace
