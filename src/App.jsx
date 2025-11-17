import React from 'react'
import FeatureList from './components/FeatureList'
import RegisterForm from './components/RegisterForm'
import DecorativeOrbs from './components/DecorativeOrbs'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <div className="relative flex min-h-screen items-stretch">
        <DecorativeOrbs />

        {/* Left Section: Details */}
        <section className="w-1/2 hidden md:flex flex-col justify-center px-12 lg:px-20 gap-6 bg-[#FFFFFF]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF8F1] px-3 py-1 text-xs font-medium text-[#1F6041] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#2EB872] animate-pulse" />
              Live better with balanced macros
            </div>

            <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
              Welcome to <span className="text-[#2EB872]">MacroZen</span>
            </h1>
            <p className="mt-2 text-lg text-[#1A1A1A]/80">
              Track your nutrition effortlessly
            </p>

            <div className="mt-6">
              <FeatureList />
            </div>

            {/* Circular visual placeholders for future progress bars */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
              {[60, 75, 90].map((v, i) => (
                <div key={i} className="relative aspect-square rounded-full bg-[#EAF8F1] flex items-center justify-center shadow-sm">
                  <div className="absolute inset-2 rounded-full border-4 border-[#2EB872]/20" />
                  <span className="text-sm font-semibold text-[#1F6041]">{v}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Section: Registration */}
        <section className="relative z-10 md:w-1/2 w-full flex items-center justify-center bg-gradient-to-b from-[#FFFFFF] to-[#EAF8F1] p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-md">
            <div className="mb-6 text-center md:hidden">
              <h1 className="text-3xl font-extrabold">
                Welcome to <span className="text-[#2EB872]">MacroZen</span>
              </h1>
              <p className="text-sm text-[#1A1A1A]/80">Track your nutrition effortlessly</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h2 className="mb-4 text-xl font-bold text-[#1A1A1A]">Create your account</h2>
              <RegisterForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
