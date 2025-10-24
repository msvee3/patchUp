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
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 fade-in">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl shadow-md border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">Welcome</h3>
                <p className="text-lg font-bold text-blue-900 dark:text-blue-100">{user?.fullName}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl shadow-md border border-green-200 dark:border-green-800 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-green-700 dark:text-green-300">Your Role</h3>
                <p className="text-lg font-bold text-green-900 dark:text-green-100 capitalize">{user?.role.replace('_', ' ')}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl shadow-md border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-purple-700 dark:text-purple-300">Zone</h3>
                <p className="text-lg font-bold text-purple-900 dark:text-purple-100">{user?.zone || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setShowScanner(!showScanner)}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
            {showScanner ? "Close Scanner" : "Scan QR Code"}
          </button>
        </div>

        {/* QR Scanner */}
        {showScanner && (
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
            <QRScanner onScan={handleQRScanned} />
          </div>
        )}

        {/* Issue Form */}
        {showForm && scannedZone && (
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
            <IssueForm
              zoneId={scannedZone}
              onClose={() => { setShowForm(false); setScannedZone(null); }}
            />
          </div>
        )}

        {/* Issues List */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Your Issues
          </h3>
          <IssuesList userId={user?.id} />
        </div>
      </div>
    </div>
  );
}
