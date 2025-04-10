import React from 'react'

export const FinalDecision = () => {
  return (
    <section>
    <h2 className="text-xl font-semibold mb-2">📋 Final Decision</h2>
    <div className="space-y-4">
      <div>
        <label className="block font-medium">Final Diagnosis:</label>
        <select className="w-full border px-3 py-2 rounded-lg">
          <option>Angina</option>
          <option>Anemia</option>
          <option>Heart Failure</option>
        </select>
      </div>
      <div>
        <label className="block font-medium">Treatment Plan:</label>
        <select className="w-full border px-3 py-2 rounded-lg">
          <option>Medication</option>
          <option>Angiogram</option>
          <option>Surgery</option>
        </select>
      </div>
    </div>

    <div className="flex justify-end space-x-4 mt-6">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all">
        ✅ Confirm & Save
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all">
        🔁 Request More Tests
      </button>
    </div>
  </section>
  )
}
