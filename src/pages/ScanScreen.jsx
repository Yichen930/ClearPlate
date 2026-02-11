import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const ScanScreen = () => {
  const navigate = useNavigate()
  const { recordScan } = useApp()
  const [step1Complete, setStep1Complete] = useState(false)
  const [step2Complete, setStep2Complete] = useState(false)

  useEffect(() => {
    // Simulate automatic scanning process
    const timer1 = setTimeout(() => {
      setStep1Complete(true)
    }, 2000)

    const timer2 = setTimeout(() => {
      setStep2Complete(true)
      // Once both steps are complete, automatically trigger scan success
      setTimeout(() => {
        recordScan(8) // 8g waste detected
        navigate('/', { state: { showScanSuccess: true } })
      }, 500)
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [recordScan, navigate])

  return (
    <div className="relative h-screen w-full max-w-md mx-auto bg-black overflow-hidden shadow-2xl flex flex-col">
      <div className="absolute inset-0 z-0">
        <img 
          alt="A cafeteria tray on a conveyor belt" 
          className="w-full h-full object-cover grayscale-[20%] contrast-125" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMHkf4IsaZmr3SzSiUe8AQxSLci-R3BCQPW4HTXD_RRXriAwjzUGZQy0ey7ekIOlZTG_XALfFHVUGDMEscpFRshm6wCO2F5aWIj_fvVuqeeN91lM3qAbKuOauT3cYOgrSAPkMtWA2IXw15bzouaxll3t_bFO9rCFMQ3iBTBygNjBEBuC332zEzekxI5KtInshRdoFuyG6Ybn2zjf4RwRdq41TdAqdsly9c-EXk1Of3NQNsJsK8EekGTg8WkWMyanBm1oOdctwgcjuJ" 
        />
        <div className="absolute inset-x-0 top-1/3 bottom-1/3 scanning-gradient border-y border-scanning/30"></div>
        <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-scanning/50 scan-line"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 z-40 p-6 pt-14 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-scanning animate-pulse shadow-[0_0_8px_#00ff41]"></div>
          <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">System Active</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center glass-panel rounded-full text-white/80 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-[20px]">help_center</span>
        </button>
      </div>

      <div className="relative flex-1 z-20 flex flex-col justify-center px-6 pointer-events-none mt-[-60px]">
        <div className="relative w-full aspect-square border border-white/10 rounded-3xl mb-12">
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-scanning"></div>
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-scanning"></div>
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-scanning"></div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-scanning"></div>
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className="glass-panel px-3 py-1.5 rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-scanning text-sm">scale</span>
              <span className="text-white text-[10px] font-bold uppercase">12g detected</span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-24 left-0 right-0 space-y-3">
          <div className={`glass-panel p-3 rounded-2xl border-l-4 flex items-center gap-4 ${
            step1Complete ? 'border-l-scanning' : 'border-l-white/20'
          }`}>
            <div className={`w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold ${
              step1Complete ? 'bg-scanning/20 text-scanning' : 'bg-white/10 text-white/40'
            }`}>1</div>
            <div className="flex-1">
              <p className={`text-[11px] font-bold uppercase tracking-tight ${
                step1Complete ? 'text-white' : 'text-white/60'
              }`}>Step 1: Automatic Scan</p>
              <p className={`text-[10px] ${
                step1Complete ? 'text-scanning' : 'text-white/40'
              }`}>
                {step1Complete ? 'Complete!' : 'Processing vision metrics...'}
              </p>
            </div>
            <span className={`material-symbols-outlined text-sm ${
              step1Complete ? 'text-scanning' : 'text-white/20'
            }`}>
              {step1Complete ? 'check_circle' : 'hourglass_empty'}
            </span>
          </div>

          <div className={`glass-panel p-3 rounded-2xl border-l-4 flex items-center gap-4 ${
            step2Complete ? 'border-l-scanning' : 'border-l-white/20'
          }`}>
            <div className={`w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold ${
              step2Complete ? 'bg-scanning/20 text-scanning' : 'bg-white/10 text-white/40'
            }`}>2</div>
            <div className="flex-1">
              <p className={`text-[11px] font-bold uppercase tracking-tight ${
                step2Complete ? 'text-white' : 'text-white/60'
              }`}>Step 2: Identifying User</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className={`w-1 h-1 rounded-full ${
                  step2Complete ? 'bg-scanning' : 'bg-white/40'
                }`}></span>
                <p className={`text-[10px] ${
                  step2Complete ? 'text-scanning' : 'text-white/40'
                }`}>
                  {step2Complete ? 'User identified!' : 'Facial Recognition Active'}
                </p>
              </div>
            </div>
            <span className={`material-symbols-outlined text-sm ${
              step2Complete ? 'text-scanning' : 'text-white/20'
            }`}>
              {step2Complete ? 'check_circle' : 'face'}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-1/4 z-30 flex flex-col gap-3 w-32">
        <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest pl-1">Previous Plates</p>
        <div className="glass-panel p-2 rounded-xl flex flex-col gap-1 border-white/5">
          <div className="flex justify-between items-center">
            <span className="text-scanning text-[9px] font-bold">Assigned</span>
            <span className="text-white/40 text-[8px]">14:22</span>
          </div>
          <p className="text-white text-[10px] font-medium truncate">Alex Wong</p>
        </div>
        <div className="glass-panel p-2 rounded-xl flex flex-col gap-1 border-white/5 opacity-80">
          <div className="flex justify-between items-center">
            <span className="text-white/40 text-[9px] font-bold">Anonymous</span>
            <span className="text-white/40 text-[8px]">14:18</span>
          </div>
          <p className="text-white/40 text-[10px] font-medium truncate">Guest_092</p>
        </div>
      </div>

      <div className="relative z-40 mt-auto">
        <div className="flex flex-col items-center gap-2 mb-6 bg-gradient-to-t from-black/60 to-transparent pt-10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-white/40 text-sm">bolt</span>
            <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em]">Instant Analysis &lt;3s</p>
          </div>
          <div className="h-0.5 w-16 bg-white/10 rounded-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-2/3 bg-scanning shadow-[0_0_5px_#00ff41]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScanScreen
