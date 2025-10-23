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
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">QR Code Scanner</h3>
      <p className="text-gray-600 mb-4">
        This feature requires a device with a camera. For demo, enter a zone ID.
      </p>
      <div className="flex gap-4">
        <select
          value={manualInput}
          onChange={(e) => setManualInput(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
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
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Simulate Scan
        </button>
      </div>
    </div>
  );
}
