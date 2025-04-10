import React, { useState } from 'react'
import { SpeechInput } from '../components/SpeechInput'
import { SymptomAnalysis } from '../components/SymptomAnalysis'
import { TestInputPanel } from '../components/TestInputPanel'
import { PreliminaryDiagnosis } from '../components/PreliminaryDiagnosis'
import { CaseForwarding } from '../components/CaseForwarding'
import { Link } from 'react-router-dom'

export const JuniorDoctorRoom = () => {
    const [transcript, setTranscript] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [ailments, setAilments] = useState([]);
    const [testData, setTestData] = useState({
        CBC: '',
        LDL: '',
        HDL: '',
        Sugar: '',
    });
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
  <h1 className="text-3xl font-bold text-center mb-4">🧑‍⚕️ Junior Doctor Interface</h1>

  {/* Speech Input */}
  <div className="bg-white shadow-xl rounded-2xl p-5 border-l-4 border-green-500">
    <h2 className="text-xl font-semibold text-green-700 mb-3">🎙 Speech Input</h2>
    <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition-all shadow">
      Start Recording
    </button>
    <div className="mt-3 text-gray-600">
      <span className="font-medium text-red-500">🔴 Live Transcription:</span>
      <p className="italic mt-1">[Transcribed text appears here]</p>
    </div>
  </div>

  {/* Symptom Analysis */}
  <div className="bg-white shadow-xl rounded-2xl p-5 border-l-4 border-pink-500">
    <h2 className="text-xl font-semibold text-pink-700 mb-3">🧠 Symptom Analysis</h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="text-lg font-medium text-blue-700">🔍 Extracted Keywords:</h3>
        <ul className="list-disc list-inside text-gray-800">
          <li>chest pain</li>
          <li>fatigue</li>
          <li>shortness of breath</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-medium text-orange-700">📋 Matched Ailments:</h3>
        <ul className="list-disc list-inside text-gray-800">
          <li>Angina</li>
          <li>Anemia</li>
          <li>Heart Failure</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Test Input Panel */}
  <div className="bg-white shadow-xl rounded-2xl p-5 border-l-4 border-blue-500">
    <h2 className="text-xl font-semibold text-blue-700 mb-3">🧪 Test Input Panel</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {['CBC', 'HDL', 'LDL', 'Sugar', 'Troponin', 'CRP'].map((test) => (
        <div key={test}>
          <label className="block text-sm font-medium text-gray-600 mb-1">{test}:</label>
          <input
            type="text"
            placeholder={`Enter ${test} value`}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      ))}
    </div>
  </div>
  <div className="bg-white shadow-xl rounded-2xl p-5 border-l-4 border-purple-500">
  <h2 className="text-xl font-semibold text-purple-700 mb-3">🩺 Preliminary Diagnosis</h2>
  <div className="text-gray-800 space-y-2">
    <p><strong>Likely Conditions:</strong> Angina, Anemia</p>
    <p><strong>Missing Tests:</strong> Troponin, CRP</p>
    <p><strong>Suggested Medications:</strong> Nitroglycerin, Iron Supplement</p>
  </div>
</div>
<div className="flex justify-end">
<Link to="/dashboard/room2">
  <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 mt-4 rounded-lg shadow-lg transition-all">
    📤 Forward Case to Senior Doctor
  </button>
</Link>
</div>
</div>

  )
}
