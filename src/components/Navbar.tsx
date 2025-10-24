"use client";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="bg-blue-600 dark:bg-zinc-900 text-white dark:text-gray-100 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <Link href="/dashboard" className="text-2xl font-bold tracking-tight hover:opacity-80">
          PatchUp
        </Link>
        <div className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-0">
          <span className="text-xs sm:text-sm font-medium">
            {user?.fullName} <span className="hidden sm:inline">({user?.role.toUpperCase()})</span>
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 px-4 py-2 rounded transition text-xs sm:text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
