"use client";
import { SAMPLE_ISSUES } from "@/lib/mockData";

interface Props {
  userId?: string;
  status?: string;
  filter?: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "open":
      return "bg-red-100 text-red-800";
    case "inprogress":
      return "bg-yellow-100 text-yellow-800";
    case "resolved":
      return "bg-blue-100 text-blue-800";
    case "closed":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function IssuesList({ userId, status, filter }: Props) {
  let filteredIssues = SAMPLE_ISSUES;

  if (userId) {
    filteredIssues = filteredIssues.filter((issue) => issue.user_id === userId);
  }
  if (status) {
    filteredIssues = filteredIssues.filter((issue) => issue.status === status);
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Severity</th>
            <th className="px-4 py-2 text-left">Created</th>
          </tr>
        </thead>
        <tbody>
          {filteredIssues.map((issue) => (
            <tr key={issue.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{issue.id}</td>
              <td className="px-4 py-2">{issue.title}</td>
              <td className="px-4 py-2 capitalize">{issue.issue_type}</td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(issue.status)}`}>
                  {issue.status}
                </span>
              </td>
              <td className="px-4 py-2 capitalize">{issue.severity}</td>
              <td className="px-4 py-2 text-xs">
                {new Date(issue.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredIssues.length === 0 && (
        <p className="text-center py-4 text-gray-500">No issues found</p>
      )}
    </div>
  );
}
