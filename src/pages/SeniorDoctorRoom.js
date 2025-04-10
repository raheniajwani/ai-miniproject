import React from 'react'
import { PatientOverview } from '../components/PatientOverview'
import { TestResults } from '../components/TestResults'
import { SuggestedByJunior } from '../components/SuggestedByJunior'
import { FinalDecision } from '../components/FinalDecision'
import { MedicationHistory } from '../components/MedicationHistory'
import { ImagingViewer } from '../components/ImagingViewer'
import { MissingTests } from '../components/MissingTests'

export const SeniorDoctorRoom = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center flex items-center justify-center">
        🧑‍⚕️ Senior Doctor Interface
      </h1>

      {/* Complaint Summary */}
      <div className="bg-white rounded-2xl shadow-md border-l-8 border-yellow-400 p-6">
        <h2 className="text-xl font-semibold text-yellow-600 flex items-center gap-2 mb-2">
          📰 Complaint Summary
        </h2>
        <p className="text-gray-700">
          Patient reports chest pain, fatigue, and shortness of breath over the past week.
        </p>
      </div>

      {/* Test Results */}
      <div className="bg-white rounded-2xl shadow-md border-l-8 border-blue-500 p-6">
        <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
          📊 Test Results
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-gray-700">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="px-4 py-2">Test</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Normal Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">CBC</td>
                <td className="px-4 py-2">10.2</td>
                <td className="px-4 py-2">12 - 16</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Troponin</td>
                <td className="px-4 py-2 text-red-600 font-semibold">0.8</td>
                <td className="px-4 py-2">0 - 0.04</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Medication History */}
      <div className="bg-white rounded-2xl shadow-md border-l-8 border-pink-400 p-6">
        <h2 className="text-xl font-semibold text-pink-600 flex items-center gap-2 mb-2">
          💊 Medication History
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Aspirin</li>
          <li>Beta-blocker</li>
        </ul>
      </div>

      {/* Final Diagnosis + Plan */}
      <div className="bg-white rounded-2xl shadow-md border-l-8 border-green-500 p-6">
        <h2 className="text-xl font-semibold text-green-600 flex items-center gap-2 mb-2">
          🧠 Final Diagnosis & Treatment Plan
        </h2>
        <p className="text-gray-700 mb-2">
          The patient is likely experiencing Angina based on symptoms and elevated Troponin levels.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Continue Aspirin</li>
          <li>Schedule ECG and Echocardiogram</li>
          <li>Refer to cardiologist for further evaluation</li>
        </ul>
        
      </div>
      <div className="flex gap-4">
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-200">
      Recommend Further Tests
    </button>
    <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-200">
      Confirm & Save Diagnosis
    </button>
  </div>
    </div>
    
  </div>
  )
}
