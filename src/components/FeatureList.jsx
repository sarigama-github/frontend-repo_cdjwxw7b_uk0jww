import React from 'react'
import { CheckCircle2, Flame, Apple, LineChart } from 'lucide-react'

const features = [
  { icon: CheckCircle2, text: 'Daily Calorie Tracking' },
  { icon: Apple, text: 'Macro Nutrient Breakdown' },
  { icon: Flame, text: 'Meal Logging' },
  { icon: LineChart, text: 'Progress Charts' },
]

const FeatureList = () => {
  return (
    <ul className="space-y-3">
      {features.map(({ icon: Icon, text }) => (
        <li key={text} className="flex items-start gap-3">
          <div className="mt-0.5">
            <Icon className="h-5 w-5 text-[#2EB872]" />
          </div>
          <span className="text-[15px] leading-relaxed text-[#1A1A1A]">{text}</span>
        </li>
      ))}
    </ul>
  )
}

export default FeatureList
