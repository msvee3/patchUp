"use client";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <nav className="w-full bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold shadow-md">P</div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">PatchUp</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <DarkModeToggle />
            {user ? (
              <>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.fullName ?? user.username}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user.role.replace('_', ' ')}</div>
                </div>
                <button onClick={handleLogout} className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white text-sm font-medium transition-colors shadow-sm">
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-medium transition-colors shadow-sm">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

