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
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="text-2xl font-bold">
          PatchUp
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-sm">
            {user?.fullName} ({user?.role.toUpperCase()})
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
