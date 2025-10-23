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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">DC Head Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h3 className="text-gray-600 text-sm font-semibold">Open Issues</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">{issueStats.open}</p>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="text-gray-600 text-sm font-semibold">In Progress</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">{issueStats.inprogress}</p>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="text-gray-600 text-sm font-semibold">Resolved</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{issueStats.resolved}</p>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
          <h3 className="text-gray-600 text-sm font-semibold">Closed</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">{issueStats.closed}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">DC Zone Map</h3>
          <div className="bg-gray-100 p-6 rounded border-2 border-dashed border-gray-300">
            <div className="grid grid-cols-3 gap-4">
              {zones.map((zone) => (
                <div
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className={`p-6 rounded-lg cursor-pointer transition ${
                    selectedZone === zone.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-50 hover:bg-gray-200"
                  }`}
                >
                  <div className="font-semibold">{zone.name}</div>
                  <div className="text-sm mt-2">Issues: {zone.issues}</div>
                  <div
                    className={`mt-2 inline-block px-3 py-1 rounded text-xs font-bold ${
                      zone.issues > 0
                        ? "bg-red-200 text-red-800"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {zone.issues > 0 ? "Active" : "Clear"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Resolution Rate</span>
                <span className="text-sm font-bold">88%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "88%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Avg Response Time</span>
                <span className="text-sm font-bold">2.1h</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Technician Utilization</span>
                <span className="text-sm font-bold">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "92%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-2 text-sm">
          <p className="text-gray-600">• AC unit issue assigned to Mike Smith (Zone A)</p>
          <p className="text-gray-600">• Floor cleaning resolved in Zone B</p>
          <p className="text-gray-600">• Electrical panel issue opened in Zone C</p>
          <p className="text-gray-600">• 3 issues closed today</p>
        </div>
      </div>
    </div>
  );
}
