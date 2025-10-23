"use client";
import { useState } from "react";
import { SAMPLE_USERS } from "@/lib/mockData";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"users" | "system">("users");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

      <div className="flex gap-4 border-b">
        <button
          onClick={() => setActiveTab("users")}
          className={`px-6 py-3 font-semibold ${
            activeTab === "users"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
        >
          Users Management
        </button>
        <button
          onClick={() => setActiveTab("system")}
          className={`px-6 py-3 font-semibold ${
            activeTab === "system"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
        >
          System Settings
        </button>
      </div>

      {activeTab === "users" && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">User Accounts</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Username</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  <th className="px-4 py-2 text-left">Zone</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {SAMPLE_USERS.map((user) => (
                  <tr key={user.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{user.fullName}</td>
                    <td className="px-4 py-2">{user.username}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold capitalize">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 py-2">{user.zone || "-"}</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:underline text-xs mr-2">
                        Edit
                      </button>
                      <button className="text-red-600 hover:underline text-xs">
                        Deactivate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "system" && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">System Configuration</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  System Name
                </label>
                <input
                  type="text"
                  defaultValue="PatchUp DC Management"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Issue Resolution SLA (hours)
                </label>
                <input
                  type="number"
                  defaultValue="24"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Notifications Enabled
                </label>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Save Settings
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Database Maintenance</h3>
              <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 mb-2">
                Backup Database
              </button>
              <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                Clear Old Logs
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Audit Log</h3>
              <p className="text-sm text-gray-600 mb-4">
                Last system check: Today at 10:30 AM
              </p>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                View Audit Logs
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
