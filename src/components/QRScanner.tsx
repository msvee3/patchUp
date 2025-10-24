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
    <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-lg shadow border border-gray-100 dark:border-zinc-800">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-white">QR Code Scanner</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        This feature requires a device with a camera. For demo, enter a zone ID.
      </p>
  <div className="flex flex-col sm:flex-row gap-4">
        <select
          value={manualInput}
          onChange={(e) => setManualInput(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
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
          className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Simulate Scan
        </button>
      </div>
    </div>
  );
}
