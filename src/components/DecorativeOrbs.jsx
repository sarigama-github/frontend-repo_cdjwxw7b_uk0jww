import React from 'react'

const DecorativeOrbs = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large background mint wash */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#EAF8F1] blur-2xl opacity-80 float-slow" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#EAF8F1] blur-2xl opacity-70 float-slower" />
      {/* Accent green rings to hint future progress bars */}
      <div className="absolute top-10 right-1/3 h-40 w-40 rounded-full border-4 border-[#2EB872]/20 animate-pulse" />
      <div className="absolute bottom-10 left-16 h-24 w-24 rounded-full border-4 border-[#1F6041]/10" />
    </div>
  )
}

export default DecorativeOrbs
