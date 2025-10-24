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
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
    case "inprogress":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
    case "resolved":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
    case "closed":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
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

  if (filteredIssues.length === 0) {
    return <p className="text-center py-8 text-gray-500 dark:text-gray-400">No issues found</p>;
  }

  return (
    <div className="space-y-4">
      {filteredIssues.map((issue) => (
        <div key={issue.id} className="bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-800 hover:shadow-md transition-all">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className={`inline-flex items-center justify-center h-9 w-9 rounded-md ${getStatusColor(issue.status).replace('text-','text-').split(' ')[0]} bg-opacity-20`}></div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{issue.title}</h4>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{issue.issue_type} • {issue.severity}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{issue.description}</p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(issue.status)}`}>{issue.status}</span>
              <div className="text-xs text-gray-500 dark:text-gray-400">{new Date(issue.created_at).toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
