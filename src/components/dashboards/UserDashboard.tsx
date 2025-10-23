"use client";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import QRScanner from "@/components/QRScanner";
import IssueForm from "@/components/IssueForm";
import IssuesList from "@/components/IssuesList";

export default function UserDashboard() {
  const { user } = useAuthStore();
  const [showScanner, setShowScanner] = useState(false);
  const [scannedZone, setScannedZone] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleQRScanned = (zoneId: string) => {
    setScannedZone(zoneId);
    setShowScanner(false);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Welcome</h3>
          <p className="text-gray-600">{user?.fullName}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Your Role</h3>
          <p className="text-blue-600 font-bold">{user?.role}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Zone</h3>
          <p className="text-gray-600">{user?.zone || "N/A"}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setShowScanner(!showScanner)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          {showScanner ? "Close" : "Scan QR Code"}
        </button>
      </div>

      {showScanner && <QRScanner onScan={handleQRScanned} />}
      
      {showForm && scannedZone && (
        <IssueForm 
          zoneId={scannedZone}
          onClose={() => { setShowForm(false); setScannedZone(null); }}
        />
      )}

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Your Issues</h3>
        <IssuesList userId={user?.id} />
      </div>
    </div>
  );
}
