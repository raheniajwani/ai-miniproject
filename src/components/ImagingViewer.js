import React from 'react'

export const ImagingViewer = () => {
  return (
    <section>
    <h2 className="text-xl font-semibold mb-2">🖼 Imaging Viewer</h2>
    <div className="bg-gray-100 border rounded-lg p-4 text-center">
      <p>[CT Scan Image Frame Slider Here]</p>
      <p className="text-sm text-gray-500">Zoom & Pan enabled. ROI highlights based on high-intensity pixels.</p>
    </div>
  </section>
  )
}
