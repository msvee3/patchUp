"use client";
import { useState } from "react";
import IssuesList from "@/components/IssuesList";

export default function TechnicianDashboard() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [status, setStatus] = useState("inprogress");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-semibold">Assigned Issues</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-semibold">In Progress</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-semibold">Resolved Today</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">1</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-semibold">Completion Rate</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">85%</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">My Assigned Issues</h3>
        <IssuesList status={status} />
        <div className="mt-4 flex gap-4">
          <button
            onClick={() => setStatus("inprogress")}
            className={`px-4 py-2 rounded ${status === "inprogress" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            In Progress
          </button>
          <button
            onClick={() => setStatus("resolved")}
            className={`px-4 py-2 rounded ${status === "resolved" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Resolved
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Update Issue Status</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Select Issue</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>Select an issue</option>
              <option value="issue1">Issue 1 - AC unit not working</option>
              <option value="issue2">Issue 2 - Floor cleaning</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Status</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>Started</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Notes</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows={3}
              placeholder="Add work notes..."
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Update Status
          </button>
        </form>
      </div>
    </div>
  );
}
