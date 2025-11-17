import React, { useState } from 'react'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setLoading(true)

    // Placeholder submit to demo UI responsiveness
    await new Promise((res) => setTimeout(res, 800))
    setLoading(false)
    setMessage('Registration submitted (demo).')
  }

  return (
    <div className="rounded-2xl bg-[#EAF8F1] p-6 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A]">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@macrozen.app"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#2EB872] focus:border-transparent"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium text-[#1A1A1A]">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Create a strong password"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#2EB872] focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#2EB872] px-4 py-2 text-white font-semibold transition-colors hover:bg-[#1F6041] disabled:opacity-70"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        {message && (
          <p className="text-center text-sm text-[#1F6041]">{message}</p>
        )}
      </form>

      <div className="mt-4 text-center text-sm">
        <span className="text-[#1A1A1A]">Already have an account? </span>
        <a href="#" className="font-semibold text-[#2EB872] hover:text-[#1F6041] underline-offset-2 hover:underline">Login</a>
      </div>
    </div>
  )
}

export default RegisterForm
