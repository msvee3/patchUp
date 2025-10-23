"use client";
import { useState } from "react";
import IssuesList from "@/components/IssuesList";

export default function SupervisorDashboard() {
  const [showAssignForm, setShowAssignForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-semibold">Open Issues</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-semibold">In Progress</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-semibold">Resolved</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-semibold">Avg Resolution</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">2.5h</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Pending Validation</h3>
        <IssuesList status="resolved" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Assign Issue to Technician</h3>
        {!showAssignForm ? (
          <button
            onClick={() => setShowAssignForm(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Assign New Issue
          </button>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Select Issue</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Select issue</option>
                <option>Issue1 - AC unit problem</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Assign to Technician</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Select technician</option>
                <option value="tech1">Mike Smith (Plumbing)</option>
                <option value="tech2">John Tech (Electrical)</option>
              </select>
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Assign
              </button>
              <button
                type="button"
                onClick={() => setShowAssignForm(false)}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
