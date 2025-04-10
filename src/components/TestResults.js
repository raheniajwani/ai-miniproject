import React from 'react'

export const TestResults = () => {
  return (
    <section>
    <h2 className="text-xl font-semibold mb-2">📊 Test Results</h2>
    <table className="min-w-full table-auto border border-gray-300 rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border">Test</th>
          <th className="px-4 py-2 border">Value</th>
          <th className="px-4 py-2 border">Normal Range</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">CBC</td>
          <td className="border px-4 py-2">10.2</td>
          <td className="border px-4 py-2">12-16</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Troponin</td>
          <td className="border px-4 py-2">0.8</td>
          <td className="border px-4 py-2">0-0.04</td>
        </tr>
      </tbody>
    </table>
  </section>
  )
}
