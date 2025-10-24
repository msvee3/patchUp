"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

const DEMO_CREDENTIALS = [
  { username: "user1", password: "password123", role: "User" },
  { username: "tech1", password: "password123", role: "Technician" },
  { username: "supervisor1", password: "password123", role: "Supervisor" },
  { username: "dc_head", password: "password123", role: "DC Head" },
  { username: "admin", password: "password123", role: "Admin" },
];

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuthStore();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (login(username, password)) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300">
      <div className="w-full max-w-md p-4 sm:p-8">
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-xl p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">PatchUp</h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">DC Issue Tracking System</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder="Enter password"
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>

          <div className="mt-8 border-t border-gray-200 dark:border-zinc-700 pt-6">
            <p className="text-center text-gray-700 dark:text-gray-200 font-semibold mb-4">Demo Credentials</p>
            <div className="space-y-3">
              {DEMO_CREDENTIALS.map((cred) => (
                <div key={cred.username} className="bg-gray-50 dark:bg-zinc-800 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-gray-800 dark:text-gray-100">{cred.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">User: {cred.username}</p>
                  <p className="text-gray-600 dark:text-gray-300">Pass: {cred.password}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
