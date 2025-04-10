import React, { useEffect, useState } from 'react'

export const SymptomAnalysis = () => {
    const [keywords, setKeywords] = useState([]);
    const [ailments, setAilments] = useState([]);

    useEffect(() => {
        // Mock keyword extraction
        const extracted = ['chest pain', 'fatigue', 'shortness of breath'];
        setKeywords(extracted);

        // Basic rule-based matching
        const rules = {
        'chest pain': 'Angina',
        fatigue: 'Anemia',
        'shortness of breath': 'Heart Failure',
        };

        const matched = extracted.map(symptom => rules[symptom] || 'Unknown');
        setAilments(matched);
    }, []);
  return (
    <div className="bg-white rounded-xl p-5 shadow-md">
      <h2 className="text-xl font-semibold mb-2">🧠 Symptom Analysis</h2>

      <div className="mb-2">
        <h3 className="font-medium text-gray-700">🔍 Extracted Keywords:</h3>
        <ul className="list-disc pl-5 text-gray-800">
          {keywords.map((word, i) => (
            <li key={i}>{word}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-medium text-gray-700">📋 Matched Ailments:</h3>
        <ul className="list-disc pl-5 text-gray-800">
          {ailments.map((ailment, i) => (
            <li key={i}>{ailment}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
