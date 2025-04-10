import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-2xl text-center border border-purple-200 animate-fade-in">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4 drop-shadow-lg tracking-tight">
          🤖 AI Health Assistant
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Welcome to your smart clinical companion. Designed to assist junior and senior doctors in fast, AI-powered case analysis, diagnosis, and decision-making.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/dashboard"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            🚀 Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
