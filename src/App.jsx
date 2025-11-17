import React from 'react'
import FeatureList from './components/FeatureList'
import RegisterForm from './components/RegisterForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <div className="relative flex min-h-screen items-stretch">
        {/* Left Section: Details */}
        <section className="w-1/2 hidden md:flex flex-col justify-center px-12 lg:px-20 gap-8 bg-[#EAF8F1]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#1F6041] shadow-sm ring-1 ring-black/5">
              <span className="h-2 w-2 rounded-full bg-[#2EB872] animate-pulse" />
              Live better with balanced macros
            </div>

            <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1F6041]">
              Welcome to MacroZen
            </h1>
            <p className="mt-2 text-lg text-[#1A1A1A]">
              Track your nutrition effortlessly
            </p>

            <div className="mt-6">
              <FeatureList />
            </div>

            {/* Hero graphic placeholder: Big circular progress bar */}
            <div className="mt-8 flex items-center justify-start">
              <div className="relative h-40 w-40 lg:h-56 lg:w-56 rounded-full border-4 border-dashed border-[#2EB872]/50 bg-white shadow-sm ring-1 ring-black/5">
                <div className="absolute inset-4 rounded-full bg-[#EAF8F1]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-[#1F6041]">Progress</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section: Registration */}
        <section className="relative z-10 md:w-1/2 w-full flex items-center justify-center bg-[#FFFFFF] p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-md">
            <div className="mb-6 text-center md:hidden">
              <h1 className="text-3xl font-extrabold text-[#1F6041]">Welcome to MacroZen</h1>
              <p className="text-sm text-[#1A1A1A]">Track your nutrition effortlessly</p>
            </div>

            <RegisterForm />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
