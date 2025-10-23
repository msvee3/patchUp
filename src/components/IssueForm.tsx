"use client";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";

interface Props {
  zoneId: string;
  onClose: () => void;
}

export default function IssueForm({ zoneId, onClose }: Props) {
  const { user } = useAuthStore();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    issue_type: "other" as const,
    severity: "medium" as const,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Issue submitted successfully!");
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Report Issue</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Zone
          </label>
          <input
            type="text"
            value={zoneId}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Issue title"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            rows={4}
            placeholder="Describe the issue"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Issue Type
            </label>
            <select
              value={formData.issue_type}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  issue_type: e.target.value as any,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="plumbing">Plumbing</option>
              <option value="housekeeping">Housekeeping</option>
              <option value="electrical">Electrical</option>
              <option value="hvac">HVAC</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Severity
            </label>
            <select
              value={formData.severity}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  severity: e.target.value as any,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
