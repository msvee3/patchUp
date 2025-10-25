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
      {filteredIssues.map((issue, index) => (
        <div 
          key={issue.id} 
          className="group glass rounded-xl shadow-md border border-white/30 dark:border-gray-600/30 hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg ${getStatusColor(issue.status)} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {issue.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {new Date(issue.created_at).toLocaleDateString()}
                      </span>
                      <span className="capitalize">{issue.issue_type}</span>
                      <span className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${
                          issue.severity === 'high' ? 'bg-red-500' : 
                          issue.severity === 'medium' ? 'bg-yellow-500' : 
                          'bg-green-500'
                        }`}></span>
                        {issue.severity}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pl-13">
                  {issue.description}
                </p>
              </div>

              <div className="flex flex-col items-end gap-3">
                <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${getStatusColor(issue.status)} shadow-sm`}>
                  {issue.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
