"use client";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import UserDashboard from "@/components/dashboards/UserDashboard";
import TechnicianDashboard from "@/components/dashboards/TechnicianDashboard";
import SupervisorDashboard from "@/components/dashboards/SupervisorDashboard";
import DCHeadDashboard from "@/components/dashboards/DCHeadDashboard";
import AdminDashboard from "@/components/dashboards/AdminDashboard";

export default function Dashboard() {
  const { user, isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (!user) {
    return null;
  }

  const renderDashboard = () => {
    switch (user.role) {
      case "user":
        return <UserDashboard />;
      case "technician":
        return <TechnicianDashboard />;
      case "supervisor":
        return <SupervisorDashboard />;
      case "dc_head":
        return <DCHeadDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <div>Unknown role</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6">
        {renderDashboard()}
      </main>
    </div>
  );
}
