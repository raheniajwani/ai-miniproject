import React from 'react'

export const PreliminaryDiagnosis = ({symptoms,tests}) => {
    const missingTests = Object.entries(tests)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  const likelyConditions = symptoms?.includes('chest pain')
    ? ['Angina', 'Myocardial Infarction']
    : ['Hypertension', 'Arrhythmia'];

  const suggestedMeds = likelyConditions.includes('Angina')
    ? ['Nitroglycerin', 'Beta Blockers']
    : ['Aspirin', 'ACE Inhibitors'];

  const handleForwardCase = () => {
    alert('📤 Case sent to Senior Doctor!');
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-md mt-6">
    <h2 className="text-xl font-semibold mb-4">🧠 Preliminary Diagnosis</h2>

    <div className="mb-3">
      <h3 className="font-medium text-gray-700">❤ Likely Conditions:</h3>
      <ul className="list-disc list-inside text-gray-800">
        {likelyConditions.map((condition, idx) => (
          <li key={idx}>{condition}</li>
        ))}
      </ul>
    </div>

    <div className="mb-3">
      <h3 className="font-medium text-yellow-600">⚠ Missing Tests:</h3>
      {missingTests.length === 0 ? (
        <p className="text-green-700">All test data provided.</p>
      ) : (
        <ul className="list-disc list-inside text-yellow-800">
          {missingTests.map((test, idx) => (
            <li key={idx}>{test}</li>
          ))}
        </ul>
      )}
    </div>

    <div className="mb-3">
      <h3 className="font-medium text-gray-700">💊 Suggested Medications:</h3>
      <ul className="list-disc list-inside text-gray-800">
        {suggestedMeds.map((med, idx) => (
          <li key={idx}>{med}</li>
        ))}
      </ul>
    </div>

    <button
      onClick={handleForwardCase}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
    >
      📤 Send to Senior Doctor
    </button>
  </div>
  )
}
