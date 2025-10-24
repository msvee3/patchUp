"use client";
import { useState } from "react";
import IssuesList from "@/components/IssuesList";

export default function TechnicianDashboard() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [status, setStatus] = useState("inprogress");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Assigned Issues</h3>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">3</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">In Progress</h3>
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">2</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Resolved Today</h3>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">1</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Completion Rate</h3>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">85%</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Assigned Issues List */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">My Assigned Issues</h3>
          <IssuesList status={status} />
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setStatus("inprogress")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                status === "inprogress"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700"
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setStatus("resolved")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                status === "resolved"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700"
              }`}
            >
              Resolved
            </button>
          </div>
        </div>

        {/* Update Issue Status Form */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Update Issue Status</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Select Issue
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all">
                <option>Select an issue</option>
                <option value="issue1">Issue 1 - AC unit not working</option>
                <option value="issue2">Issue 2 - Floor cleaning</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all">
                <option>Started</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Notes
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none"
                rows={4}
                placeholder="Add work notes..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Update Status
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
