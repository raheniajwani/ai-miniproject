import React, { useState } from 'react'

export const TestInputPanel = () => {
    const [tests, setTests] = useState({
        CBC: '',
        LDL: '',
        HDL: '',
        Sugar: '',
      });
    
      const [fileName, setFileName] = useState(null);
    
      const handleChange = (e) => {
        setTests({
          ...tests,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : null);
      };
  return (
    <div className="bg-white rounded-xl p-5 shadow-md">
    <h2 className="text-xl font-semibold mb-4">🧪 Test Input Panel</h2>

    <div className="grid grid-cols-2 gap-4">
      {Object.keys(tests).map((test, i) => (
        <div key={i} className="flex flex-col">
          <label className="font-medium text-gray-700">{test}:</label>
          <input
            type="number"
            name={test}
            value={tests[test]}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none"
            placeholder={`Enter ${test} value`}
          />
        </div>
      ))}
    </div>

    <div className="mt-4">
      <label className="block font-medium text-gray-700">📎 Upload Pathology Report (PDF/Image):</label>
      <input
        type="file"
        accept="application/pdf, image/*"
        onChange={handleFileChange}
        className="mt-2"
      />
      {fileName && <p className="text-sm text-green-700 mt-1">Uploaded: {fileName}</p>}
    </div>
  </div>
  )
}
