"use client";
import { useRef, useEffect, useState } from "react";

interface Props {
  onScan: (zoneId: string) => void;
}

export default function QRScanner({ onScan }: Props) {
  const [manualInput, setManualInput] = useState("");
  const zones = ["zone1", "zone2", "zone3"];

  const handleManualScan = () => {
    if (zones.includes(manualInput)) {
      onScan(manualInput);
      setManualInput("");
    } else {
      alert("Invalid zone ID");
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
          </svg>
        </div>
        QR Code Scanner
      </h3>
      <div className="bg-blue-50/50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Demo Mode:</strong> Camera scanning requires device permissions. Use the dropdown to simulate a scan.
        </p>
      </div>
  <div className="flex flex-col sm:flex-row gap-4">
        <select
          value={manualInput}
          onChange={(e) => setManualInput(e.target.value)}
          className="flex-1 px-4 py-3 bg-white/50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          <option value="">Select a zone</option>
          {zones.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
        <button
          onClick={handleManualScan}
          className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Simulate Scan
        </button>
      </div>
    </div>
  );
}
