
import React, { useState } from 'react';

interface PaymentProps {
  onComplete: () => void;
}

const Payment: React.FC<PaymentProps> = ({ onComplete }) => {
  const [selectedPlan, setSelectedPlan] = useState('daily');
  const [transactionCode, setTransactionCode] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-background-dark overflow-x-hidden">
      <header className="h-16 border-b border-white/5 px-10 flex items-center justify-between bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">animation</span>
          <span className="text-lg font-bold">Animify Studio</span>
        </div>
        <button className="h-9 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-bold transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">help</span>
          Support
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 bg-[#251b30] border border-white/5 rounded-3xl shadow-2xl overflow-hidden">
          {/* Instructions Column */}
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col gap-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <span className="material-symbols-outlined text-[300px] leading-none">lock_open</span>
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                Premium Access
              </div>
              <h1 className="text-4xl font-black leading-tight mb-4">Start Creating Animations</h1>
              <p className="text-gray-400 text-lg leading-relaxed">Gain instant access to AI-powered video conversion tools. Choose a limited free trial or unlock full access with a subscription.</p>
            </div>

            <div className="flex flex-col gap-8 mt-4">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-3">
                How to Pay via M-PESA
                <span className="h-px flex-1 bg-white/10"></span>
              </h3>
              
              <div className="space-y-8 relative">
                <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-white/5"></div>
                
                <div className="flex gap-6 relative z-10">
                  <div className="size-10 rounded-full bg-[#3a2d4a] border-2 border-[#251b30] text-primary flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-lg">smartphone</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Open M-PESA & Select Paybill</h4>
                    <p className="text-sm text-gray-500">Go to your Sim Toolkit or App and select "Lipa na M-PESA"</p>
                  </div>
                </div>

                <div className="flex gap-6 relative z-10">
                  <div className="size-10 rounded-full bg-[#3a2d4a] border-2 border-[#251b30] text-primary flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-lg">payments</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Enter Business Details</h4>
                    <p className="text-sm text-gray-500">Use Paybill number <span className="text-primary font-mono font-bold">714777</span> and account <span className="text-white font-mono font-bold">0117652390</span></p>
                  </div>
                </div>

                <div className="flex gap-6 relative z-10">
                  <div className="size-10 rounded-full bg-[#3a2d4a] border-2 border-[#251b30] text-primary flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-lg">sms</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Enter Transaction Code</h4>
                    <p className="text-sm text-gray-500">Enter the M-PESA code in the form to activate your access.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Column */}
          <div className="lg:col-span-5 bg-black/20 p-8 lg:p-10 flex flex-col justify-center gap-8 border-t lg:border-t-0 lg:border-l border-white/5">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary filled-icon">diamond</span>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Choose Plan</span>
              </div>
              
              <div className="space-y-3">
                {[
                  { id: 'daily', name: 'Daily Access', price: 'KES 499' },
                  { id: 'weekly', name: 'Weekly Access', price: 'KES 2,999', tag: 'SAVE 14%' },
                  { id: 'monthly', name: 'Monthly Access', price: 'KES 10,199', tag: 'BEST VALUE' }
                ].map(plan => (
                  <label key={plan.id} className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer group ${selectedPlan === plan.id ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' : 'border-white/5 bg-black/20 hover:border-white/20'}`}>
                    <input type="radio" name="plan" className="sr-only" checked={selectedPlan === plan.id} onChange={() => setSelectedPlan(plan.id)} />
                    <div className="flex items-center gap-4">
                      <div className={`size-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPlan === plan.id ? 'border-primary' : 'border-gray-600'}`}>
                        {selectedPlan === plan.id && <div className="size-2.5 rounded-full bg-primary animate-scale-in"></div>}
                      </div>
                      <span className={`font-bold transition-colors ${selectedPlan === plan.id ? 'text-primary' : 'text-gray-400'}`}>{plan.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-sm">{plan.price}</p>
                      {plan.tag && <span className="text-[8px] font-black text-green-400 tracking-widest bg-green-500/10 px-1.5 py-0.5 rounded uppercase mt-1 inline-block">{plan.tag}</span>}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
               <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Enter Transaction Code</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">receipt_long</span>
                    <input 
                      type="text" 
                      value={transactionCode}
                      onChange={(e) => setTransactionCode(e.target.value.toUpperCase())}
                      placeholder="e.g. QKH1234567" 
                      className="w-full bg-black/40 border border-white/10 rounded-2xl h-14 pl-12 pr-4 text-white font-mono text-lg uppercase focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-gray-700" 
                    />
                  </div>
               </div>
               <button onClick={onComplete} disabled={transactionCode.length < 5} className="w-full h-14 rounded-2xl bg-primary hover:bg-[#7a25d0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-black shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2">
                 Verify Payment
                 <span className="material-symbols-outlined">arrow_forward</span>
               </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-medium">
              <span className="material-symbols-outlined text-green-500 text-sm">lock</span>
              Secure Payment Processing • PABLO ACTOR 254 FILM APPS
            </div>
          </div>
        </div>
        
        <p className="mt-8 text-center text-sm text-gray-500">Need help? <a href="#" className="text-primary hover:underline">Contact Support</a></p>
      </main>
    </div>
  );
};

export default Payment;
