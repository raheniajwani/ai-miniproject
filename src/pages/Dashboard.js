import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          🏥 Doctor Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/dashboard/room1"
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]"
          >
            <div className="text-2xl mb-2 font-semibold text-blue-600">👨‍⚕ Room 1</div>
            <p className="text-gray-700">
              Junior Doctor Interface (AI-Assisted) – collect data, analyze symptoms, suggest tests & diagnosis.
            </p>
          </Link>

          <Link
            to="/dashboard/room2"
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]"
          >
            <div className="text-2xl mb-2 font-semibold text-purple-600">👨‍⚕ Room 2</div>
            <p className="text-gray-700">
              Senior Doctor Dashboard – review patient info, imaging, finalize treatment & diagnosis.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
