"use client";
import { useState } from "react";

export default function DCHeadDashboard() {
  const [selectedZone, setSelectedZone] = useState("zone1");

  const zones = [
    { id: "zone1", name: "Zone A - Server Room 1", issues: 5 },
    { id: "zone2", name: "Zone B - Server Room 2", issues: 3 },
    { id: "zone3", name: "Zone C - Electrical", issues: 2 },
  ];

  const issueStats = {
    open: 8,
    inprogress: 5,
    resolved: 3,
    closed: 12,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">DC Head Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-l-4 border-red-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-sm font-medium text-red-700 dark:text-red-400">Open Issues</h3>
            <p className="text-4xl font-bold text-red-600 dark:text-red-400 mt-2">{issueStats.open}</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-l-4 border-yellow-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-sm font-medium text-yellow-700 dark:text-yellow-400">In Progress</h3>
            <p className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">{issueStats.inprogress}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-l-4 border-blue-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-sm font-medium text-blue-700 dark:text-blue-400">Resolved</h3>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mt-2">{issueStats.resolved}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-l-4 border-green-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-sm font-medium text-green-700 dark:text-green-400">Closed</h3>
            <p className="text-4xl font-bold text-green-600 dark:text-green-400 mt-2">{issueStats.closed}</p>
          </div>
        </div>

        {/* Zone Map and Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">DC Zone Map</h3>
            <div className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-lg border-2 border-dashed border-gray-300 dark:border-zinc-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {zones.map((zone) => (
                  <div
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.id)}
                    className={`p-6 rounded-lg cursor-pointer transition-all ${
                      selectedZone === zone.id
                        ? "bg-blue-600 dark:bg-blue-500 text-white shadow-lg scale-105"
                        : "bg-white dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-900 dark:text-gray-100 shadow-md"
                    }`}
                  >
                    <div className="font-semibold text-sm">{zone.name}</div>
                    <div className="text-sm mt-2">Issues: {zone.issues}</div>
                    <div
                      className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        zone.issues > 0
                          ? selectedZone === zone.id
                            ? "bg-red-300 text-red-900"
                            : "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300"
                          : selectedZone === zone.id
                          ? "bg-green-300 text-green-900"
                          : "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300"
                      }`}
                    >
                      {zone.issues > 0 ? "Active" : "Clear"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Performance Metrics</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Resolution Rate</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-100">88%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-3">
                  <div className="bg-green-600 dark:bg-green-500 h-3 rounded-full transition-all" style={{ width: "88%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Avg Response Time</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-100">2.1h</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-3">
                  <div className="bg-blue-600 dark:bg-blue-500 h-3 rounded-full transition-all" style={{ width: "75%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Technician Utilization</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-100">92%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-3">
                  <div className="bg-purple-600 dark:bg-purple-500 h-3 rounded-full transition-all" style={{ width: "92%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Recent Activity</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <p className="text-gray-700 dark:text-gray-300">AC unit issue assigned to Mike Smith (Zone A)</p>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-gray-700 dark:text-gray-300">Floor cleaning resolved in Zone B</p>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <p className="text-gray-700 dark:text-gray-300">Electrical panel issue opened in Zone C</p>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <p className="text-gray-700 dark:text-gray-300">3 issues closed today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
