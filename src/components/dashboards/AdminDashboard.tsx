"use client";
import { useState } from "react";
import { SAMPLE_USERS } from "@/lib/mockData";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"users" | "system">("users");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>

        {/* Tab Navigation */}
        <div className="flex gap-2 sm:gap-4 border-b border-gray-200 dark:border-zinc-800 overflow-x-auto">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-4 sm:px-6 py-3 font-semibold whitespace-nowrap transition-all ${
              activeTab === "users"
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            Users Management
          </button>
          <button
            onClick={() => setActiveTab("system")}
            className={`px-4 sm:px-6 py-3 font-semibold whitespace-nowrap transition-all ${
              activeTab === "system"
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            System Settings
          </button>
        </div>

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">User Accounts</h3>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-100 dark:bg-zinc-800">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Name</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Username</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 hidden sm:table-cell">Email</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Role</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 hidden md:table-cell">Zone</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
                    {SAMPLE_USERS.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                        <td className="px-4 py-3 text-gray-900 dark:text-gray-100">{user.fullName}</td>
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{user.username}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400 hidden sm:table-cell">{user.email}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 capitalize">
                            {user.role.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400 hidden md:table-cell">{user.zone || "-"}</td>
                        <td className="px-4 py-3">
                          <button className="text-blue-600 dark:text-blue-400 hover:underline text-xs mr-2">
                            Edit
                          </button>
                          <button className="text-red-600 dark:text-red-400 hover:underline text-xs">
                            Deactivate
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* System Tab */}
        {activeTab === "system" && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">System Configuration</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    System Name
                  </label>
                  <input
                    type="text"
                    defaultValue="PatchUp DC Management"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Issue Resolution SLA (hours)
                  </label>
                  <input
                    type="number"
                    defaultValue="24"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-blue-600 border-gray-300 dark:border-zinc-700 rounded focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Email Notifications Enabled
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Save Settings
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Database Maintenance</h3>
                <div className="space-y-3">
                  <button className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-medium transition-all shadow-md">
                    Backup Database
                  </button>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-medium transition-all shadow-md">
                    Clear Old Logs
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Audit Log</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  Last system check: <span className="font-semibold text-gray-900 dark:text-gray-100">Today at 10:30 AM</span>
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-all shadow-md">
                  View Audit Logs
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
