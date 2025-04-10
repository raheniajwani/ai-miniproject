import React, { useState } from 'react'

export const SpeechInput = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');

    const handleRecord = () => {
        setIsRecording(!isRecording);
        // Mock transcription for now
        setTranscript("Patient reports chest pain and fatigue.");
    };
  return (
    <div className="bg-white rounded-xl p-5 shadow-md">
      <h2 className="text-xl font-semibold mb-2">🎤 Speech Input</h2>
      <button
        onClick={handleRecord}
        className={`px-4 py-2 rounded-xl font-medium ${
          isRecording ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
        }`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <div className="mt-4 bg-gray-100 p-3 rounded text-gray-800">
        📝 <strong>Live Transcription:</strong> {transcript}
      </div>
    </div>
  )
}
